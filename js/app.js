fetch('https://openapi.programming-hero.com/api/news/categories')
    .then(res => res.json())
    .then(data => loadNewsCategories(data.data.news_category))
    .catch(error => console.log(error));

const loadNewsCategories = newsCategories => {
    const newsCategoriesContainer = document.getElementById('news-categories-container');
    newsCategories.forEach(newsCategory => {
        // console.log(newsCategory.category_name);
        const newsCategoryLi = document.createElement('li');
        newsCategoryLi.classList.add('nav-item');
        newsCategoryLi.innerHTML = `
          <a onclick="displayNewsInCategory(${newsCategory.category_id})" class="nav-link active mx-4 fs-5" id="category" aria-current="page"
           href="#">${newsCategory.category_name}</a>
        `;
        newsCategoriesContainer.appendChild(newsCategoryLi);
    });
};

const displayNewsInCategory = async newsId => {
    const url = `https://openapi.programming-hero.com/api/news/category/${newsId}`;
    const res = await fetch(url);
    const data = await res.json();
    loadNewsCategories(data.data);
}

// const displayNewsInCategory = category => {
//     const url = ` https://openapi.programming-hero.com/api/news/category/${category_id}`;
//     const res = await fetch(url);
//     const data = await res.json();
//     console.log(data.data);
// }