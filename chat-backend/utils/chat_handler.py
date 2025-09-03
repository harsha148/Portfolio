from typing import List, Dict
import openai
from .document_processor import DocumentProcessor
from ..config import get_settings

settings = get_settings()
openai.api_key = settings.openai_api_key

class ChatHandler:
    def __init__(self):
        self.document_processor = DocumentProcessor()
        self.system_prompt = """You are an AI assistant for a portfolio website. You have access to the owner's resume and other documents.
        Your role is to help visitors learn more about the owner's experience, skills, and projects.
        Always be professional, concise, and accurate. If you're not sure about something, say so.
        Base your responses on the provided context and avoid making assumptions."""

    async def get_response(self, message: str, conversation_history: List[Dict] = None) -> str:
        # Get relevant context from vector store
        similar_docs = await self.document_processor.query_similar(message)
        context = "\n".join([doc["text"] for doc in similar_docs])
        
        # Prepare conversation messages
        messages = [
            {"role": "system", "content": f"{self.system_prompt}\n\nRelevant context:\n{context}"}
        ]
        
        # Add conversation history if provided
        if conversation_history:
            messages.extend(conversation_history)
        
        # Add user's message
        messages.append({"role": "user", "content": message})
        
        # Get response from OpenAI
        response = openai.ChatCompletion.create(
            model=settings.model_name,
            messages=messages,
            temperature=0.7,
            max_tokens=500,
        )
        
        return response.choices[0].message.content 