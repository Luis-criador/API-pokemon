// let currentPokemonId = pokemon; // ID inicial do Pokémon

// function loadPokemon(pokemon) {
//     let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
//     fetch(url)
//         .then((response) => {
//             return response.json();
//         })
//         .then((data) => {
//             // Atualizar informações do Pokémon
//             document.getElementById("nome").innerHTML = data.name;
//             document.getElementById("id").innerHTML = data.id;
//             document.getElementById("type").innerHTML = data['types'][0]['type']['name'];
//             document.getElementById("HP").innerHTML = data['stats'][0]['base_stat'];
//             document.getElementById("Atack").innerHTML = data['stats'][1]['base_stat'];
//             document.getElementById("Defense").innerHTML = data['stats'][2]['base_stat'];
//             document.getElementById("SpecialAtack").innerHTML = data['stats'][3]['base_stat'];
//             document.getElementById("Speed").innerHTML = data['stats'][5]['base_stat'];
//             document.getElementById("SpecialDefense").innerHTML = data['stats'][4]['base_stat'];

//             // Exibir a imagem do Pokémon
//             let img = data.sprites.front_default;
//             document.getElementById("poke_img").setAttribute("src", img);
//         })
//         .catch((erro) => {
//             console.log("Erro: " + erro);
//         });
// }

// Função para carregar o Pokémon atual


// // Inicializa com o primeiro Pokémon
// loadCurrentPokemon();

function loadPokemon() {
    let codigo = document.getElementById("codigoPokemon").value;
    let url = `https://pokeapi.co/api/v2/pokemon/${codigo}`;
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            // Limpar o console para facilitar a leitura
            console.clear();
            console.log(data);

            // Atualizar informações do Pokémon
            document.getElementById("nome").innerHTML = data.name;
            document.getElementById("id").innerHTML = data.id;
            document.getElementById("type").innerHTML = data['types'][0]['type']['name'];
            document.getElementById("HP").innerHTML = data['stats'][0]['base_stat'];
            document.getElementById("Atack").innerHTML = data['stats'][1]['base_stat'];
            document.getElementById("Defense").innerHTML = data['stats'][2]['base_stat'];
            document.getElementById("Speed").innerHTML = data['stats'][5]['base_stat'];
            document.getElementById("SpecialAtack").innerHTML = data['stats'][3]['base_stat'];
            document.getElementById("SpecialDefense").innerHTML = data['stats'][4]['base_stat'];

            // Condição para usar o sprite normal ou transparente
            let img;
            if (data.id <= 151) {
                img = data.sprites.versions["generation-i"]["red-blue"].front_transparent;
            } else {
                img = data.sprites.front_default; // Sprite padrão (normal)
            }
            console.log(img);
            document.getElementById("poke_img").setAttribute("src", img);
            document.getElementById("erroResposta").innerHTML = "";
        })
        .catch((erro) => {
            document.getElementById("erroResposta").innerHTML = "Pokémon não encontrado";
            console.log("erro " + erro);
        });
}
const currentPokemonId = document.getElementById("id").innerHTML = data.id;

function loadCurrentPokemon() {
    document.getElementById("codigoPokemon").value = currentPokemonId;
    loadPokemon(currentPokemonId);
}

// Função para navegar para o próximo Pokémon
function nextPokemon() {
    currentPokemonId++;
    loadCurrentPokemon();
}

// Função para navegar para o Pokémon anterior
function previousPokemon() {
    if (currentPokemonId > 1) {
        currentPokemonId--;
        loadCurrentPokemon();
    }
}

document.getElementById("btn1").onclick = loadPokemon;