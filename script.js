async function searchThumbnails() {
    let query = document.getElementById("searchQuery").value;
    let apiKey = "YOUR_YOUTUBE_API_KEY"; // এখানে তোমার YouTube API Key বসাও
    let url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&maxResults=20&type=video&key=${apiKey}`;

    let response = await fetch(url);
    let data = await response.json();

    let resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";

    data.items.forEach(item => {
        let videoId = item.id.videoId;
        let thumbnailUrl = item.snippet.thumbnails.high.url;
        let title = item.snippet.title;

        let videoDiv = document.createElement("div");
        videoDiv.innerHTML = `<img src="${thumbnailUrl}" alt="${title}" style="width:100%;border-radius:10px;"><p>${title}</p>`;
        resultsDiv.appendChild(videoDiv);
    });
}
