const API_KEY = "c548e0d98972472385eea826c2bcf5a0";
const NEWS_URL = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=c548e0d98972472385eea826c2bcf5a0`;

const container = document.getElementById("news-container");

async function loadNews() {
    try {
        const res = await fetch(NEWS_URL);
        const data = await res.json();
        const articles = data.articles;

        container.innerHTML = "";

        articles.forEach(article => {
            const card = document.createElement("div");
            card.className = "news-card";

            card.innerHTML = `
                <div class="news-image">
                    <img src="${article.urlToImage || 'https://via.placeholder.com/300'}" alt="">
                </div>
                <div class="news-content">
                    <div class="news-title">${article.title}</div>
                    <div class="news-desc">${article.content || ""}</div>
                    <div class="read-more">
                        read more at <a href="${article.url}" target="_blank">${article.source.name}</a>
                    </div>
                </div>
            `;

            container.appendChild(card);
        });

    } catch (error) {
        console.error("Error fetching news:", error);
    }
}

loadNews();
