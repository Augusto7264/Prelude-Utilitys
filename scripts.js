const dinos = {

"Rex": {peso:5800, vida:6500, dano:1200},
"Rex elder": {peso:6000, vida:6500, dano:1250},

"Giga": {peso:6450, vida:6000, dano:700},
"Giga elder": {peso:6600, vida:6300, dano:750},

"Spino": {peso:9071, vida:9071, dano:250},
"Spino elder": {peso:9200, vida:9200, dano:270},

"Tyrannus": {peso:5700, vida:5800, dano:650},

"Acro": {peso:5500, vida:5500, dano:300},

"Mapu": {peso:6800, vida:6000, dano:750},

"Mirabillis": {peso:4500, vida:4500, dano:250},

"Allo": {peso:2800, vida:2800, dano:300},
"Allo elder": {peso:3200, vida:3200, dano:300},

"Sucho": {peso:3600, vida:3600, dano:350},
"Sucho elder": {peso:3800, vida:3800, dano:350},

"Alberto": {peso:3000, vida:3000, dano:424},

"Cerato": {peso:2250, vida:2250, dano:350},
"Cerato elder": {peso:2400, vida:2400, dano:370},

"Puerta": {peso:49895, vida:49895, dano:5000},

"Camara": {peso:20000, vida:20000, dano:100},

"Shant": {peso:11793, vida:11793, dano:250},
"Shant elder": {peso:12500, vida:12500, dano:250},

"Trike": {peso:8300, vida:8200, dano:360},
"Trike elder": {peso:8500, vida:9000, dano:400},

"Toro": {peso:8800, vida:9000, dano:310},

"Tarchia": {peso:5500, vida:5000, dano:900},

"Anky": {peso:9000, vida:5443, dano:700},
"Anky elder": {peso:9000, vida:6000, dano:725},

"Theri": {peso:4536, vida:4536, dano:350, especial:1050},
"Theri elder": {peso:5000, vida:5000, dano:350, especial:1050},

"Deino": {peso:7000, vida:7000, dano:210, especial:700},

"Stego": {peso:6000, vida:6000, dano:1000},
"Stego elder": {peso:6500, vida:6500, dano:1000},

"Para": {peso:4000, vida:3600, dano:330, especial:750},
"Para elder": {peso:4250, vida:4250, dano:330, especial:750},

"Ouranosaurus": {peso:3800, vida:3800, dano:300}

};

let selectAtacante = document.getElementById("atacante");
let selectAlvo = document.getElementById("alvo");

for (let nome in dinos) {

let option1 = document.createElement("option");
option1.value = nome;
option1.text = nome;

let option2 = document.createElement("option");
option2.value = nome;
option2.text = nome;

selectAtacante.appendChild(option1);
selectAlvo.appendChild(option2);

}

function calcular(){

let atacante = document.getElementById("atacante").value;
let alvo = document.getElementById("alvo").value;
let tipo = document.getElementById("tipoAtaque").value;

let peso = dinos[atacante].peso;

let dano = dinos[atacante].dano;

if(tipo === "especial" && dinos[atacante].especial){
dano = dinos[atacante].especial;
}

let pesoAlvo = dinos[alvo].peso;
let vidaAlvo = dinos[alvo].vida;

let danoFinal = (peso * dano) / pesoAlvo;

let hits = vidaAlvo / danoFinal;

document.getElementById("resultado").innerHTML =
atacante + " dá <span class='danoFinal'>" + danoFinal.toFixed(2) + "</span> de dano em " + alvo +
"<br><br>Hits para matar: " + hits.toFixed(2);
}

/* Botão "mostrar mais" da Pagina do Patch Notes*/

function mostrarMais(){

            let conteudo = document.getElementById("maisPatches");
            let botao = document.getElementById("botaoPatch");

            if(conteudo.style.display === "block"){
                conteudo.style.display = "none";
                botao.innerText = "Mostrar mais";
            }
            else{
                conteudo.style.display = "block";
                botao.innerText = "Mostrar menos";
            }

        }