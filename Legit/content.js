(() => {
    let data = {
        textContent: document.body.innerText,
        fullHTML: document.documentElement.outerHTML,
        links: [...document.querySelectorAll("a")].map(a => a.href),
        images: [...document.querySelectorAll("img")].map(img => img.src),
        formInputs: [...document.querySelectorAll("input, textarea, select")].map(input => ({
            type: input.tagName.toLowerCase(),
            name: input.name || "N/A",
            value: input.value || "N/A",
            placeholder: input.placeholder || "N/A"
        }))
    };

    window.onload = function () {
        chrome.runtime.sendMessage({ action: "extract_data", data: data });
    };    
})();