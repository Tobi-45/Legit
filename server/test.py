import requests

url = "http://127.0.0.1:8000/predict"
data = {"text": "Your account is compromised! Click here to secure it: http://malicious.com"}

response = requests.post(url, json=data)  # Use `json=` instead of `data=`
print(response.json())  # Check response
