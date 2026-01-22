(function (global) {
    function chat(prompt, callback) {
        fetch("https://test--justaextraa.replit.app/openrouter", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ prompt: prompt })
        })
        .then(r => r.json())
        .then(data => {
            const result = (data.model || "unknown model") + " : " + (data.answer || "No response");
            callback(result);
        })
        .catch(err => {
            console.error(err);
            callback("Error fetching response");
        });
    }

    global.chatLite = { chat: chat };
})(window);
