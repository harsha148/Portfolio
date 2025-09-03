import asyncio
import os
from dotenv import load_dotenv
import pinecone
from app.utils.document_processor import DocumentProcessor

async def main():
    # Load environment variables
    load_dotenv()
    
    # Initialize Pinecone
    pinecone.init(
        api_key=os.getenv("PINECONE_API_KEY"),
        environment=os.getenv("PINECONE_ENVIRONMENT")
    )
    
    # Create index if it doesn't exist
    index_name = os.getenv("PINECONE_INDEX_NAME", "portfolio-chat")
    if index_name not in pinecone.list_indexes():
        pinecone.create_index(
            name=index_name,
            dimension=1536,  # OpenAI ada-002 embedding dimension
            metric="cosine"
        )
    
    # Initialize document processor
    processor = DocumentProcessor()
    
    # Process resume
    resume_path = "../../resume.pdf"  # Adjust path as needed
    await processor.process_document(
        resume_path,
        metadata={"type": "resume"}
    )
    
    print("Database initialized successfully!")

if __name__ == "__main__":
    asyncio.run(main()) 