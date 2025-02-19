// 1️⃣ YouTube Data API - ভিডিওর টাইটেল খোঁজার জন্য
async function getYouTubeTitles(query) {
    let apiKey = "YOUR_YOUTUBE_API_KEY";  // এখানে তোমার YouTube API Key বসাও
    let url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=${apiKey}`;
    let response = await fetch(url);
    let data = await response.json();
    return data.items.map(item => item.snippet.title);
}

// 2️⃣ LibreTranslate API - ইংরেজি, বাংলা, হিন্দি ভাষায় অনুবাদ করতে
async function translateText(text, targetLang) {
    let url = "https://libretranslate.com/translate";
    let response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({ q: text, source: "auto", target: targetLang }),
        headers: { "Content-Type": "application/json" }
    });
    let data = await response.json();
    return data.translatedText;
}

// 3️⃣ Hugging Face API - AI দিয়ে টাইটেল সাজেস্ট করতে
async function getSuggestedTitles(title) {
    let apiKey = "YOUR_HUGGING_FACE_API_KEY";  // এখানে তোমার Hugging Face API Key বসাও
    let url = "https://api-inference.huggingface.co/models/facebook/bart-large-cnn";
    let response = await fetch(url, {
        method: "POST",
        headers: { "Authorization": `Bearer ${apiKey}` },
        body: JSON.stringify({ inputs: title })
    });
    let data = await response.json();
    return data[0].summary_text;
}

// 4️⃣ Canva API - AI দিয়ে থাম্বনেল ডিজাইন করতে
async function createThumbnail(title) {
    let apiKey = "YOUR_CANVA_API_KEY";  // এখানে তোমার Canva API Key বসাও
    let url = `https://api.canva.com/v1/designs?title=${encodeURIComponent(title)}&apiKey=${apiKey}`;
    let response = await fetch(url);
    let data = await response.json();
    return data.thumbnailUrl;
}

// 5️⃣ সার্চ বাটন ক্লিক করলে সব API একসাথে কাজ করবে
async function searchVideo() {
    let query = document.getElementById("searchBox").value;
    
    let youtubeTitles = await getYouTubeTitles(query);
    let translatedTitle = await translateText(query, "en");
    let suggestedTitle = await getSuggestedTitles(translatedTitle);
    let thumbnailUrl = await createThumbnail(suggestedTitle);

    document.getElementById("results").innerHTML = `
        <h2>✅ Suggested SEO Title: ${suggestedTitle}</h2>
        <h3>🔍 Other YouTube Titles:</h3>
        <ul>${youtubeTitles.map(title => `<li>${title}</li>`).join("")}</ul>
        <h3>🎨 AI-Generated Thumbnail:</h3>
        <img src="${thumbnailUrl}" alt="Generated Thumbnail">
    `;
}
