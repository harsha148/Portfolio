from typing import List
import PyPDF2
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.embeddings import OpenAIEmbeddings
import pinecone
from ..config import get_settings

settings = get_settings()

def extract_text_from_pdf(pdf_path: str) -> str:
    """Extract text from a PDF file."""
    with open(pdf_path, 'rb') as file:
        reader = PyPDF2.PdfReader(file)
        text = ''
        for page in reader.pages:
            text += page.extract_text()
    return text

def split_text(text: str) -> List[str]:
    """Split text into chunks."""
    text_splitter = RecursiveCharacterTextSplitter(
        chunk_size=1000,
        chunk_overlap=200,
        length_function=len,
    )
    return text_splitter.split_text(text)

class DocumentProcessor:
    def __init__(self):
        self.embeddings = OpenAIEmbeddings(
            openai_api_key=settings.openai_api_key
        )
        pinecone.init(
            api_key=settings.pinecone_api_key,
            environment=settings.pinecone_environment
        )
        self.index = pinecone.Index(settings.pinecone_index_name)

    async def process_document(self, file_path: str, metadata: dict = None):
        """Process a document and store its embeddings in Pinecone."""
        # Extract text from PDF
        text = extract_text_from_pdf(file_path)
        
        # Split text into chunks
        chunks = split_text(text)
        
        # Create embeddings and store in Pinecone
        for i, chunk in enumerate(chunks):
            embedding = self.embeddings.embed_query(chunk)
            
            # Prepare metadata
            chunk_metadata = {
                "text": chunk,
                "source": file_path,
                "chunk_index": i,
            }
            if metadata:
                chunk_metadata.update(metadata)
            
            # Store in Pinecone
            self.index.upsert(
                vectors=[(f"{file_path}-{i}", embedding, chunk_metadata)]
            )

    async def query_similar(self, query: str, top_k: int = 3) -> List[dict]:
        """Query similar documents from Pinecone."""
        query_embedding = self.embeddings.embed_query(query)
        
        results = self.index.query(
            vector=query_embedding,
            top_k=top_k,
            include_metadata=True
        )
        
        return [
            {
                "text": match.metadata["text"],
                "source": match.metadata["source"],
                "score": match.score
            }
            for match in results.matches
        ] 