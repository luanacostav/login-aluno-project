// ::::::::::::: Get Button :::::::::::::
const buttonLogin = document.getElementById('buttonLogin')

// __________________________ Loading Data from API __________________________

async function loadData(emailLogin, passwordLogin) {

    const url = 'https://projeto-backend-five.vercel.app/login'

    try {
        const response = await fetch(url, {
            method: 'POST', 
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify({ 
                email: emailLogin, password: passwordLogin
            })
        })

        const data = await response.json()

        if (!data.ok) {
            buttonLogin.disable = false
            throw new Error(`Data status ${data.status} -> Login Error`)
        } else {
            alert(data.message)
            localStorage.setItem('user', JSON.stringify(data.user))
            window.location.href = '../welcome-page/index.html'
        }
        
    } catch (error){
        alert('Route Error')
        console.error(error.message)
        buttonLogin.disable = false
    }
}


// _______________________________ Login _______________________________

if (buttonLogin) {
    buttonLogin.addEventListener('click', (event) => {
        event.preventDefault()
        buttonLogin.setAttribute('disable', true)
        
        let emailLogin = document.getElementById('emailLogin').value
        let passwordLogin = document.getElementById('passwordLogin').value
        
        loadData(emailLogin, passwordLogin)
    })
}
