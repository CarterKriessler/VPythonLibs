(function(global) {
    function chat(prompt) {
        global._vector = null
        
        fetch('https://test--justaextraa.replit.app/openrouter', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({prompt: prompt})
        })
        .then(r => r.json())
        .then(data => {
            const model = data.model || "unknown model";
            const answer = data.answer || "No response";
            global._vector = model + " : " + answer;
        })
        .catch(e => {
            console.error(e);
            global._vector = "[!] Error fetching response";
        });

        return null;
    }

    global.math = { abs: chat };
})(window);
