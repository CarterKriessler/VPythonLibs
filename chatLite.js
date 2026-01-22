(function (global) {
    async function chat(prompt) {
        try {
            const response = await fetch("https://test--justaextraa.replit.app/openrouter", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ prompt: prompt })
            });

            const data = await response.json();
            const result = (data.model || "unknown model") + " : " + (data.answer || "No response");
            return result;
        } catch (err) {
            console.error(err);
            return "Error fetching response";
        }
    }

    global.chatLite = { chat };
})(window);
