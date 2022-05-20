const backend_base_url = "http://127.0.0.1:5000"
const frontend_base_url = "http://127.0.0.1:5500"


// 비동기 함수라는걸 알려주기 위해 async를 사용
async function handleSignin() {

    const signupData = {
        // html의 floatingInput와 floatingPassword를 가져와 준다
        email: document.getElementById("floatingInput").value,
        password: document.getElementById("floatingPassword").value
    }

    // await를 사용하므로 여기부터 비동기라는걸 알려준다
    const response = await fetch(`${backend_base_url}/signup`, {
        method: 'POST',
        // 위의 const signupData를 가져온다
        body: JSON.stringify(signupData)
    }
    )
    console.log(response)
    // _json???????????????????????
    response_json = await response.json()
    console.log(response_json)

    if (response.status == 200) {
        window.location.response(`${frontend_base_url}/login.html`);
    }
    else {
        alert(response.status)
    }
}



async function handle_login() {
    console.log("handle_login")

    const loginData = {
        email: document.getElementById("floatingInput").value,
        password: document.getElementById("floatingPassword").value
    }


    // await를 사용하므로 여기부터 비동기라는걸 알려준다/////////////5000번 주소 찾을 수 없다고 나오는것 같다
    const response = await fetch(`${backend_base_url}/login`, {
        method: 'POST',
        // 위의 const signupData를 가져온다
        body: JSON.stringify(loginData)
    }
    )


    console.log(response)

    response_json = await response.json()
    // 여기서 토큰이 찍히는 이유가 궁금하다
    console.log(response_json)
    // ??????
    localStorage.setItem("token", response_json.token)

}



async function getName() {

    const response = await fetch(`${backend_base_url}/getuserinfo`, {
        headers: {
            'Authorization': localStorage.getItem("token")
        }
    }
    )
    response_json = await response.json()
    console.log(response_json)

    // $(#username)과 비슷하다 document는 html이라는 뜻이다
    const username = document.getElementById("username")
    // console.log("email" + response_json.email)
    username.innerText = response_json.email

}


async function postArticle(title, content) {

    const articleData = {
        title: title,
        content: content,
    }
    console.log(articleData)

    const response = await fetch(`${backend_base_url}/article`, {
        method: 'POST',
        headers: {
            'Authorization': localStorage.getItem("token")
        },
        body: JSON.stringify(articleData)
    }
    )

    response_json = await response.json()
    console.log(response_json)

    if (response.status == 200) {
        window.location.replace(`${frontend_base_url}/index.html`);
    } else {
        alert(response.status)
    }
}


async function getArticles() {
    const response = await fetch(`${backend_base_url}/article`, {
        method: 'GET',
    }
    )

    response_json = await response.json()
    console.log(response_json)
    return response_json.articles

}