fetch('https://openapi.programming-hero.com/api/news/categories')
    .then(res => res.json())
    .then(data => displayNewsCategories(data.data.news_category))
    .catch(error => console.log(error));

const displayNewsCategories = newsCategories => {
    const newsCategoriesContainer = document.getElementById('news-categories-container');
    newsCategories.forEach(newsCategory => {
        // console.log(newsCategory.category_name);
        const newsCategoryLi = document.createElement('li');
        newsCategoryLi.classList.add('nav-item');
        newsCategoryLi.innerHTML = `
          <a onclick="loadNewsInCategory('${newsCategory.category_id}')" class="nav-link active mx-4 fs-5" id="category" aria-current="page"
           href="#">${newsCategory.category_name}</a>
        `;
        newsCategoriesContainer.appendChild(newsCategoryLi);
    });
};

const loadNewsInCategory = async newsId => {
    const url = `https://openapi.programming-hero.com/api/news/category/${newsId}`;
    const res = await fetch(url);
    const data = await res.json();
    displayNews(data.data);
}

const displayNews = newses => {
    const newsContainer = document.getElementById('news-container');
    newses.forEach(news => {
        const newsDiv = document.createElement('div');
        newsDiv.classList.add('row', 'mb-5', 'g-2', 'p-4', 'border', 'border-light', 'rounded-3', 'shadow');
        newsDiv.innerHTML = `
        <div class="col-md-3">
        <img src="${news.thumbnail_url}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-9">
        <div class="card-body">
            <h5 class="card-title">${news.title}</h5>
            <p class="card-text">${news.details}</p>
        </div>
        <div class="d-flex justify-content-between align-items-center p-4">
            <div class="d-flex">
                <img class="img-fluid rounded-circle me-3" src="${news.author.img}" width="36px" height="36px">
                <div class="d-flex flex-column">
                    <span class="fw-semibold">${news.author.name}</span>
                    <span>${news.author.published_date}</span>
                </div>
            </div>
            <div>
                <i class="fa-solid fa-eye"></i> ${news.total_view}
            </div>
            <div>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
            </div>
            <div>
                 <i class="fa-solid fa-arrow-right text-primary fs-4"></i>
            </div>
        </div>
    </div>
    `;
        newsContainer.appendChild(newsDiv);
    });
}