export async function chat(prompt) {
    try {
        const res = await fetch("https://test--justaextraa.replit.app/openrouter", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ prompt: prompt })
        });

        if (!res.ok) {
            throw new Error(`HTTP error ${res.status}`);
        }

        const data = await res.json();
        const answer = data.answer || "No response";
        const model = data.model || "Unknown model";

        return model + " : " + answer;
    } catch (err) {
        console.error("Chat error:", err);
        return "Error fetching chat";
    }
}
