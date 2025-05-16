from pydantic_settings import BaseSettings
from functools import lru_cache

class Settings(BaseSettings):
    # OpenAI settings
    openai_api_key: str
    
    # Pinecone settings
    pinecone_api_key: str
    pinecone_environment: str
    pinecone_index_name: str = "portfolio-chat"
    
    # Application settings
    model_name: str = "gpt-3.5-turbo"
    embedding_model: str = "text-embedding-ada-002"
    
    class Config:
        env_file = ".env"

@lru_cache()
def get_settings():
    return Settings() 