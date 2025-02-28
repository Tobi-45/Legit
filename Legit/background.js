chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "extract_data") {
        let requestData = { text: message.data.textContent }; // Ensure correct JSON format

        fetch("http://127.0.0.1:8000/predict", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(requestData)
        })
        .then(async response => {
            if (!response.ok) {
                let errorText = await response.text(); // Read error details
                throw new Error(`Server error: ${response.status} ${response.statusText} - ${errorText}`);
            }
            return response.json();
        })
        .then(result => {
            console.log("Prediction:", result);
            lastResult = result; // Store last result

            // Send result back to content script
            chrome.tabs.sendMessage(sender.tab.id, { action: "display_result", result });
        })
        .catch(error => console.error("Fetch error:", error));
    } 
    
    else if (message.action === "get_last_result") {
        sendResponse(lastResult);
    }
});
