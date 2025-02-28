document.addEventListener("DOMContentLoaded", () => {
    chrome.runtime.sendMessage({ action: "get_last_result" }, (response) => {
        let statusText = document.getElementById("status-text");
        let statusBox = document.getElementById("status-box");

        if (response && response.label) {
            statusText.textContent = "Scan Complete:";
            statusBox.textContent = `${response.label} (${(response.confidence * 100).toFixed(2)}%)`;

            if (response.label === "Benign") {
                statusBox.classList.add("safe");
            } else {
                statusBox.classList.add("danger");
            }
        } else {
            statusText.textContent = "No email scanned.";
            statusBox.textContent = "";
        }
    });
});
