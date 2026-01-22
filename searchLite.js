(function (global) {
    async function search(query, limit = 3) {
        const url =
            "https://api.duckduckgo.com/?q=" +
            encodeURIComponent(query) +
            "&format=json&no_html=1&skip_disambig=1";

        const res = await fetch(url);
        const data = await res.json();

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

        return results.slice(0, limit);
    }

    global.searchLite = { search };
})(window);
