from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
from .utils.chat_handler import ChatHandler
from .utils.document_processor import DocumentProcessor

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Update with your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize handlers
chat_handler = ChatHandler()
document_processor = DocumentProcessor()

class Message(BaseModel):
    content: str
    role: str

class ChatRequest(BaseModel):
    message: str
    conversation_history: Optional[List[Message]] = None

class ChatResponse(BaseModel):
    message: str

@app.post("/api/chat", response_model=ChatResponse)
async def chat(request: ChatRequest):
    try:
        # Convert conversation history to the format expected by the chat handler
        history = None
        if request.conversation_history:
            history = [
                {"role": msg.role, "content": msg.content}
                for msg in request.conversation_history
            ]
        
        # Get response from chat handler
        response = await chat_handler.get_response(
            message=request.message,
            conversation_history=history
        )
        
        return ChatResponse(message=response)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/api/process-document")
async def process_document(file_path: str):
    try:
        await document_processor.process_document(file_path)
        return {"message": "Document processed successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e)) 