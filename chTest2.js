(function(global) {
    function chat(prompt) {
        window._chat_result = null
        
        fetch('https://test--justaextraa.replit.app/openrouter', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({prompt: prompt})
        })
        .then(r => r.json())
        .then(data => {
            const model = data.model || "unknown model";
            const answer = data.answer || "No response";
            global._chat_result = model + " : " + answer;
        })
        .catch(e => {
            console.error(e);
            global._chat_result = "[!] Error fetching response";
        });

        return null;
    }

    global.chatLite = { chat: chat };
})(window);
