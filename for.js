(function(global) {
    function chat(amnt, prompt) {
        global._vector = null
        
        fetch('https://server-lite--LightInIn1.replit.app/openrouter', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({prompt: prompt, tokens: amnt})
        })
        .then(r => r.json())
        .then(data => {
            const model = data.model || "unknown model";
            const answer = data.answer || "No response";
            const tokens = data.tokens || null;
            global._vector = "["+tokens+"] " + answer;
        })
        .catch(e => {
            console.error(e);
            global._vector = "[!] Error fetching response";
        });

        return null;
    }

    global.math = { abs: chat };
})(window);
