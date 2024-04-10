const form = document.getElementById('form');
const city = document.getElementById('city');
const country = document.getElementById('country');
const submitBtn = document.querySelector('#form input[type="submit"]');
const error = document.getElementById('error');
const output = document.getElementById('resultOutput');
const paragraph = document.getElementById('dont-show')

submitBtn.addEventListener('click', validateForm);

function validateForm(e) {
    e.preventDefault();
    if(city.value.trim() === '' || country.value.trim() === '') {
        showMessage('The Fields are required')
    } else {
        requestAPI()
    }
}
function showMessage(message) {
    clearHTML()
    const msg  = document.createElement('p');
    msg.textContent = message;
    msg.classList.add('error')
    error.appendChild(msg)
    setTimeout(() => {
        msg.remove()
    }, 2000);
}

function clearHTML() {
    while(error.firstChild) {
        error.removeChild(error.firstChild)
    }
}

async function requestAPI() {
    const apiID = '3f6ea94bbd4cb05c78558633c17294b2';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value},${country.value}&appid=${apiID}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        if(data.cod === "404") {
            throw new Error('no se encuentran resultados')
        } else {
            showHTML(data)
        }
    } catch (error) {
        showMessage(error)
    }
}

function showHTML(data) {
    clearResult()
    const {main: {temp, temp_max, temp_min}} = data;
    const turnIntoDegres = (degres => parseInt(degres - 273));
    const degres = turnIntoDegres(temp)
    const max = turnIntoDegres(temp_max)
    const min = turnIntoDegres(temp_min)
    const divResult = document.createElement('div');
    paragraph.classList.add('hide')
    divResult.innerHTML = `
        <h3 class="color-white center">Clima en ${city.value}</h3>
        <h2 class="color-white center">${degres}ºC</h2>
        <p>Min: ${min}ºC</p>
        <p>Max: ${max}ºC</p>
    `
    output.appendChild(divResult)
    form.reset()
}

function clearResult() {
    while(output.firstChild) {
        output.removeChild(output.firstChild)
    }
}