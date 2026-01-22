(function(global) {
    function chat(prompt) {
        global._chat_result = null;

        fetch("https://test--justaextraa.replit.app/openrouter", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ prompt: prompt })
        })
        .then(r => r.json())
        .then(data => {
            global._chat_result = (data.model || "unknown model") + " : " + (data.answer || "No response");
        })
        .catch(err => {
            console.error(err);
            global._chat_result = "[!] null : Error fetching response";
        });

        // wait until result is ready (polling)
        const start = Date.now();
        while (global._chat_result === null) {
            // block loop, not ideal, but works in VPython
            const now = Date.now();
            if (now - start > 10000) {  // timeout 10s
                global._chat_result = "[!] Timeout";
                break;
            }
        }

        return global._chat_result;
    }

    global.chatLite = { chat: chat };
})(window);
