async function loadArticles() {
    console.log("here")
    articles = await getArticles()
    console.log(articles)
    // const article_list = document.getElementById("articles")

    // articles.forEach(article => {
    //     console.log(article)
    //     const newArticle = document.createElement("li");
    //     newArticle.setAttribute("id", article._id)
    //     newArticle.innerText = article.title
    //     article_list.appendChild(newArticle)

    // });




}

loadArticles();
getName();