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
        newsDiv.classList.add('row', 'mb-4', 'g-0');
        newsDiv.innerHTML = `
    <div class="col-md-4">
            <img src="${news.thumbnail_url}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
        <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
         </div>
    </div>
    `;
        newsContainer.appendChild(newsDiv);
    });
}