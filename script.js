function getSuggestions() {
    let title = document.getElementById("videoTitle").value;
    if (title.trim() === "") {
        alert("Please enter a video title.");
        return;
    }
    
    // এখানে API কল করতে হবে (যদি থার্ড-পার্টি API ব্যবহার করো)
    
    // ডেমো SEO-Friendly Titles দেখানো
    let seoTitles = [
        `Best ${title} Tips for 2024`,
        `Top 10 ${title} Secrets`,
        `Ultimate Guide to ${title}`,
        `How to Master ${title} Like a Pro`,
        `Why ${title} is Trending Right Now`
    ];
    
    let titleList = document.getElementById("titleSuggestions");
    titleList.innerHTML = "";
    seoTitles.forEach(title => {
        let li = document.createElement("li");
        li.textContent = title;
        titleList.appendChild(li);
    });

    // ডেমো Thumbnail Suggestions দেখানো
    let thumbnailResults = document.getElementById("thumbnailResults");
    thumbnailResults.innerHTML = "<p>🔍 Searching for best thumbnails...</p>";
}
