from fastapi import FastAPI
from pydantic import BaseModel
from transformers import AutoTokenizer, AutoModelForSequenceClassification
import torch
from fastapi.middleware.cors import CORSMiddleware

# Define FastAPI app
app = FastAPI()

# Set device to GPU if available
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

# Load model and tokenizer
model_name = "r3ddkahili/final-complete-malicious-url-model"
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForSequenceClassification.from_pretrained(model_name).to(device)  # Move model to GPU

# Label mapping
label_map = {0: "Benign", 1: "Defacement", 2: "Phishing", 3: "Malware"}

# Define request model
class EmailData(BaseModel):
    text: str

# API endpoint to analyze email text
@app.post("/predict")
def predict(data: EmailData):
    try:
        # Tokenize input and move to GPU
        inputs = tokenizer(data.text, return_tensors="pt", truncation=True, padding=True, max_length=512).to(device)
        
        with torch.no_grad():
            with torch.cuda.amp.autocast():  # Enable mixed precision for faster inference
                outputs = model(**inputs)

        prediction = torch.argmax(outputs.logits).item()
        confidence = float(outputs.logits.softmax(dim=1).max().item())

        return {"label": label_map[prediction], "confidence": confidence}

    except Exception as e:
        return {"error": str(e)}

# Run the server
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
