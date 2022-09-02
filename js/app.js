fetch('https://openapi.programming-hero.com/api/news/categories')
    .then(res => res.json())
    .then(data => loadNewsdata(data.data.news_category))
    .catch(error => console.log(error));

const loadNewsdata = newsCategories => {
    const newsCategoriesContainer = document.getElementById('news-categories-container');
    newsCategories.forEach(newsCategory => {
        // console.log(newsCategory.category_name);
        const newsCategoryLi = document.createElement('li');
        newsCategoryLi.classList.add('nav-item');
        newsCategoryLi.innerHTML = `
          <a class="nav-link active mx-4 fs-5" aria-current="page"
           href="#">${newsCategory.category_name}</a>
        `;
        newsCategoriesContainer.appendChild(newsCategoryLi);
    });
}