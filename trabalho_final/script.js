// Inicialização do mapa
function initMap() {
    const map = L.map('map').setView([latitude, longitude], 13); // Substitua latitude e longitude pelos valores da sua cidade

    // Adicione a camada do mapa (usando o OpenStreetMap neste exemplo)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Adicione marcadores das lixeiras
    const lixeiras = [
        { lat: 0, lng: 0 }, // Substitua por coordenadas reais
        { lat: 0, lng: 0 }
    ];

    lixeiras.forEach(lixeira => {
        L.marker([lixeira.lat, lixeira.lng]).addTo(map)
            .bindPopup('Lixeira')
            .openPopup();
    });
}

document.addEventListener('DOMContentLoaded', (event) => {
    initMap();
});

function fetchLixeiras() {
    return fetch('lixeiras.json')
        .then(response => response.json());
}

function initMap() {
    const map = L.map('map').setView([latitude, longitude], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    fetchLixeiras().then(lixeiras => {
        lixeiras.forEach(lixeira => {
            L.marker([lixeira.lat, lixeira.lng]).addTo(map)
                .bindPopup('Lixeira')
                .openPopup();
        });
    });
}

document.addEventListener('DOMContentLoaded', (event) => {
    initMap();
});

function initMap() {
    // Cria um novo mapa, centralizado em uma coordenada específica
    const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -28.5082042, lng: -49.4567791 }, // Cordenadas de Treviso
        zoom: 15
    });

    // Adiciona marcadores das lixeiras
    const lixeiras = [
        { lat: -28.51504895052418, lng: -49.45742687441896 },
        { lat: -28.5142063786646, lng: -49.45728136458016 },
        { lat: -28.513981865209406, lng: -49.45892009850256 },
        { lat: -28.511962038842615, lng: -49.457227384734175 },
        { lat: -28.51616648012357, lng: -49.45896652439047 },
        { lat: -28.515172769015287, lng: -49.4583947913975 },
        { lat: -28.503953923511304, lng: -49.456532983365626 },
        { lat: -28.515145724404032, lng: -49.454747847862 },
        { lat: -28.516350421031067, lng: -49.45735401181999 },
        { lat: -28.50951063286503, lng: -49.45085415981254 },
        { lat: -28.51105179542262, lng: -49.4541918945254 },
        { lat: -28.512771314365423, lng: -49.46215807401799 },
        { lat: -28.512074218868307, lng: -49.45982630469872 },
        { lat: -28.508001627226037, lng: -49.461192721816296 },
        { lat: -28.506174191664837, lng: -49.45709091978214 },
        { lat:  -28.507452022572814, lng: -49.4571337278739 },
        { lat:  -28.509846567240128, lng: -49.45745668115587 },
        { lat:   -28.518389299825216, lng: -49.457798958302384 },
    ];

    lixeiras.forEach(lixeira => {
        new google.maps.Marker({
            position: lixeira,
            map: map,
            title: 'Lixeira'
        });
    });
}

// Inicializa o mapa quando o carregamento da página é concluído
window.onload = initMap;