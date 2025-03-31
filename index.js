const handleButtonClick = (event) => {
    event.preventDefault(); 
    const cep = document.getElementById('cep').value.trim();
    const longitude = document.getElementById('longitude').value.trim();
    const latitude = document.getElementById('latitude').value.trim();

    if(!cep) {
        alert('Preencha o campo CEP!')
        return
    }

    if(!longitude || !latitude) {
        alert('Preencha os campos de Longitude e Latitude!')
        return
    }

    getAdressbyCep(); 
    getWeather(); 
};

const getAdressbyCep = () => {
    const cep = document.getElementById('cep').value
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(response => {
            if(!response.cep) {
                throw new Error('CEP não encontrado')
            }
            console.log(response)  
            document.getElementById('logradouro').innerText = response.logradouro
            document.getElementById('bairro').innerText = response.bairro
            document.getElementById('uf').innerText = response.uf
        })
        .catch((error) => {
            alert('CEP não encontrado')
            console.error('Estamos com algum problema na busca pelo CEP', error);
        });
}

const getWeather = () => {
    let longitude = document.getElementById('longitude').value
    let latitude = document.getElementById('latitude').value
    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=apparent_temperature,relative_humidity_2m`)
    .then(response => response.json())
    .then(response => {
        console.log(response)
        document.getElementById('apparent_temperature').innerText = `${response.hourly.apparent_temperature[0]} ºC`
        document.getElementById('relative_humidity_2m').innerText = `${response.hourly.relative_humidity_2m[0]} %`
    })
    .catch((error) => {
        alert('Estamos com algum problema na busca pelo clima')
        console.error('Estamos com algum problema na busca pelo clima', error);
    });
}