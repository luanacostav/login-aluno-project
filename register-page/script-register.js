// __________________________ Loading Data from API __________________________

async function loadData(usuario, email, idade, cidade, senha) {

    const url = 'https://projeto-backend-five.vercel.app/register'

    try {
        const response = await fetch(url, {
            method: 'POST', 
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify({ 
                nome: usuario,
                email: email,
                idade: idade,
                cidade: cidade,
                password: senha
            })
        })
        const data = await response.json()

        if (!data.ok) {
            throw new Error(`Data status ${data.status} -> Register Error`)
        } else {
            window.location.href = '../login-page/index.html'
        }
        
    } catch (error){
        alert('Route Error')
        console.error(error.message)
    }
}


// __________________________ Signup __________________________

const buttonSignup = document.getElementById('buttonSignup')

if (buttonSignup) {
    buttonSignup.addEventListener('click', (event) => {
        event.preventDefault()

        // ::::::::::::: Get Values :::::::::::::

        let usuario = document.getElementById('userSignup').value
        let email = document.getElementById('emailSignup').value
        let idade = document.getElementById('ageSignup').value
        let cidade = document.getElementById('citySignup').value
        let senha = document.getElementById('passwordSignup').value


        // ::::::::::::: Verify Blank Inputs :::::::::::::

        function blankSpaces() {
            const valuesInput = [usuario, email, idade, cidade, senha]

            let searchBlank = valuesInput.find(values => values === '')

            if (searchBlank ==='') {
                alert('Input -> Blank Spaces')
                return true
            }
            return false
        }

        let result = blankSpaces()
        if (result === false) {
            loadData(usuario, email, idade, cidade, senha)
        }
    })
}