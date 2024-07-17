// __________________________ Loading Data from API __________________________

async function loadData() {
    const url = 'https://projeto-backend-five.vercel.app/users'

    try {
        const response = await fetch(url, {
            method: 'GET'
        })

        const data = await response.json()
        return data

    } catch (error){
        alert('Route Error')
        console.error(error.message)
    }
}


// ______________________________ Welcome Page ______________________________

const divWelcome = document.getElementById('divWelcome')
const titleWelcome = document.getElementById('titleWelcome')

window.onload = async () => {
    if (divWelcome && titleWelcome) {
        let user = JSON.parse(localStorage.getItem('logado'))
        let username = user.nome
        let userEmail = user.email
        let userAge = user.idade
        let userCity = user.cidade
        let userImg = user.foto
        
        let title = document.createElement('h1')
        title.textContent = `Welcome, ${username}`
    
        let email = document.createElement('h3')
        email.textContent = userEmail
        let age = document.createElement('h3')
        age.textContent = userAge
        let city = document.createElement('h3')
        city.textContent = userCity
        let photo = document.createElement('img')
        photo.src = userImg
    
        titleWelcome.appendChild(title)
        divWelcome.appendChild(email)
        divWelcome.appendChild(age)
        divWelcome.appendChild(city)
        divWelcome.appendChild(photo)
    
        const buttonExit = document.createElement('button')
        buttonExit.textContent = 'Exit'
        
        buttonExit.addEventListener('click', () => {
            window.location.href = '../login-page/index.html'
        })
        
        divWelcome.appendChild(buttonExit).classList.add('button-page')
    }
}
