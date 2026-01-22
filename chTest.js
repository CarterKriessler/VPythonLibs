(function(global) {
    async function chat(prompt) {
        const response = await fetch("https://test--justaextraa.replit.app/openrouter", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ prompt })
        });
        const data = await response.json();
        return (data.model || "unknown model") + " : " + (data.answer || "No response");
    }

    global.chatLite = { chat: chat };
})(window);
