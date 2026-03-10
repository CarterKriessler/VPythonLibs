(function(global) {
    function chat(prompt) {
        global._vector = null
        
        fetch('https://a5ea77b6-2487-4660-9acb-e276bcf089fc-00-2vt95qf3sf78n.janeway.replit.dev/openrouter', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({prompt: prompt})
        })
        .then(async r => {
            console.log("Status:", r.status);
            console.log("Status text:", r.statusText);

            const headers = {};
            r.headers.forEach((v, k) => headers[k] = v);
            console.log("Response headers:", headers);

            const text = await r.text();
            console.log("Raw response body:", text);

            try {
                return JSON.parse(text);
            } catch (e) {
                console.error("JSON parse failed");
                throw e;
            }
        })
        .then(r => r.json())
        .then(data => {
            const model = data.model || "unknown model";
            const answer = data.answer || "No response";
            global._vector = answer;
        })
        .catch(e => {
            console.error(e);
            global._vector = "[!] Error fetching response";
        });

        return null;
    }

    global.math = { abs: chat };
})(window);
