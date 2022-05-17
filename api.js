// 비동기 함수라는걸 알려주기 위해 async를 사용
async function handleSignin() {
    console.log('here')

    const signupData = {
        // html의 floatingInput와 floatingPassword를 가져와 준다
        email: document.getElementById("floatingInput").value,
        password: document.getElementById("floatingPassword").value
    }
    console.log(signupData)



    // await를 사용하므로 여기부터 비동기라는걸 알려준다
    const response = await fetch('http://127.0.0.1:5000/signup', {
        method: 'POST',
        // 위의 const signupData를 가져온다
        body: JSON.stringify(signupData)
    }
    )


    console.log(response)
}