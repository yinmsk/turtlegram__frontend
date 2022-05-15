// 비동기 함수라는걸 알려주기 위해 async를 사용
async function handleSignin() {

    const signupData = {
        email: document.getElementById("floatingInput").value,
        password: document.getElementById("floatingPassword").value
    }


    // await를 사용하므로 여기부터 비동기라는걸 알려준다
    const response = await fetch('http:127.0.0.1:5500/signup', {
        method: 'POST',
        body: JSON.stringify(signupData)
    }
    )


    console.log(response)
}