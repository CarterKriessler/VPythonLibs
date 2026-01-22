(function (global) {
    function search(query, limit = 3, callback) {
        const cbName = "ddg_cb_" + Math.random().toString(36).substr(2);

        global[cbName] = function (data) {
            const results = [];

            if (data.AbstractText) {
                results.push(data.AbstractText);
            }

            if (data.RelatedTopics) {
                for (let i = 0; i < data.RelatedTopics.length && results.length < limit; i++) {
                    const item = data.RelatedTopics[i];
                    if (item.Text) results.push(item.Text);
                }
            }

            callback(results.slice(0, limit));
            delete global[cbName];
        };

        const script = document.createElement("script");
        script.src =
            "https://api.duckduckgo.com/?" +
            "q=" + encodeURIComponent(query) +
            "&format=json" +
            "&no_html=1" +
            "&skip_disambig=1" +
            "&callback=" + cbName;

        document.body.appendChild(script);
    }

    global.searchLite = { search: search };
})(window);
