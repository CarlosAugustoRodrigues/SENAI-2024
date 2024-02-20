const cidade = document.getElementById('cidade');
const temperatura = document.getElementById('temp');
const clima = document.getElementById('clima');
const umidade = document.getElementById('umidade');
const icon = document.getElementById('icon');

const link = 'https://openweathermap.org/img/wn/' 

const key = 'eb1fcd935ede98a7c4bcc9f082499981'

document.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        buscar()
    }
})

async function buscar() {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${key}&lang=pt_br&units=metric`);
    const resultado = await dados.json();

    if (resultado.cod === '404') {
        alert('Cidade não encontrada')
        city.value = ''
        return
    }

    icon.style.display = 'flex'

    cidade.innerText = resultado.name
    temperatura.innerText = `${Math.floor(resultado.main.temp)}ºC`
    icon.src = link + resultado.weather[0].icon + '.png'
    clima.innerText = resultado.weather[0].description
    umidade.innerText = 'Umidade: ' + resultado.main.humidity + '%'
}