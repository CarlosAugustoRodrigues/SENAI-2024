const uri_destino = "http://localhost:3000/destinos";
const uri_hotel = "http://localhost:3000/hoteis";
const uri_pontos_turisticos = "http://localhost:3000/pontos_turisticos";


// CADASTRAR DESTINO
const form_destino = document.querySelector('#form-destino');
form_destino.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data_destino = {
        nome: form_destino.destino.value,
        valor: Number(form_destino.valor.value),
        data: form_destino.data.value
    };
    await fetch(uri_destino, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data_destino)
    });
    window.location.reload();
});


// CADASTRAR HOTEL
const form_hotel = document.querySelector('#form-hotel');
form_hotel.addEventListener('submit', async (e) => {
    e.preventDefault()
    const data_hotel = {
        nome: form_hotel.nome.value,
        valor: Number(form_hotel.valor.value),
        endereco: form_hotel.endereco.value,
        avaliacao: Number(form_hotel.avaliacao.value),
        email: form_hotel.email.value,
        site: form_hotel.site.value,
        telefone: form_hotel.telefone.value,
        id_destino: Number(form_hotel.destino.value)
    }
    await fetch(uri_hotel, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data_hotel)
    });
    window.location.reload();
});


// CADASTRAR PONTO TURISTICO
const form_ponto = document.querySelector('#form-ponto');
form_ponto.addEventListener('submit', async (e) => {
    e.preventDefault()
    const data_ponto = {
        nome: form_ponto.nome.value,
        endereco: form_ponto.endereco.value,
        telefone: form_ponto.telefone.value,
        valor: Number(form_ponto.valor.value),
        id_destino: Number(form_ponto.destino.value)
    }

    await fetch(uri_pontos_turisticos, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data_ponto)
    });

    window.location.reload();
});
