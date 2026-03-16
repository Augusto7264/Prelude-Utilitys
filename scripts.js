/* =========================
   DADOS DOS DINOS
========================= */

const dinos = {

"Acro": {peso:5500, vida:5500, dano:300},
"Alberto": {peso:3000, vida:3000, dano:424},

"Allo": {peso:2800, vida:2800, dano:300},
"Allo elder": {peso:3200, vida:3200, dano:300},

"Ausutro": {peso:950, vida:950, dano:170},

"Bary": {peso:1800, vida:1800, dano:150},

"Carno": {peso:2170, vida:2170, dano:200},
"Carno elder": {peso:2500, vida:2500, dano:230},

"Cerato": {peso:2250, vida:2250, dano:350},
"Cerato elder": {peso:2400, vida:2400, dano:370},

"Conca": {peso:1200, vida:1250, dano:220},

"Dillo": {peso:1400, vida:1050, dano:150},

"Giga": {peso:6450, vida:6000, dano:700},
"Giga elder": {peso:6600, vida:6300, dano:750},

"Herrera": {peso:550, vida:500, dano:50},

"Mapu": {peso:6800, vida:6000, dano:750},

"Mirabillis": {peso:4500, vida:4500, dano:250},

"Mono": {peso:1250, vida:1200, dano:180},

"Pycno": {peso:3300, vida:300, dano:350},

"Siamo": {peso:3500, vida:3100, dano:400},

"Spino": {peso:9071, vida:9071, dano:250},
"Spino elder": {peso:9200, vida:9500, dano:270},

"Sucho": {peso:3600, vida:3600, dano:350},
"Sucho elder": {peso:3800, vida:3800, dano:350},

"Rex": {peso:5800, vida:6500, dano:1200},
"Rex elder": {peso:6000, vida:6500, dano:1250},

"Trodon": {peso:445, vida:700, dano:75},

"Tyrannus": {peso:5700, vida:5800, dano:600},

"Utah": {peso:1000, vida:1200, dano:200},
"Utah elder": {peso:1200, vida:1400, dano:200},

"-/-/-/-/-/-/-/-/-/-": {peso:null, vida:null, dano:null},

"Anky": {peso:9000, vida:5443, dano:700},
"Anky elder": {peso:9000, vida:6000, dano:725},

"Bajada": {peso:9500, vida:9500, dano:130, especial:800},

"Camara": {peso:20000, vida:20000, dano:100},

"Deino": {peso:7000, vida:7000, dano:210, especial:700},

"Dryo": {peso:700, vida:500, dano:20},

"Diablo": {peso:3250, vida:3250, dano:350},
"Diablo elder": {peso:3500, vida:3500, dano:350},

"Galli": {peso:1000, vida:800, dano:150},
"Galli elder": {peso:1050, vida:950, dano:170},

"Kentro": {peso:3350, vida:3350, dano:425},

"Maia": {peso:2868, vida:2868, dano:225},

"Ouranosaurus": {peso:3800, vida:3800, dano:300},

"Pachy": {peso:1300, vida:1300, dano:350},
"Pachy elder": {peso:1600, vida:1500, dano:380},

"Para": {peso:4000, vida:3600, dano:330, especial:750},
"Para elder": {peso:4250, vida:4250, dano:330, especial:750},

"Puerta": {peso:49895, vida:49895, dano:5000},

"Shant": {peso:11793, vida:11793, dano:250},
"Shant elder": {peso:12500, vida:12500, dano:250},

"Stego": {peso:6000, vida:6000, dano:1000},
"Stego elder": {peso:6500, vida:6500, dano:1000},

"Styraco": {peso:3500, vida:3500, dano:400},

"Tarchia": {peso:5500, vida:5000, dano:900},

"Theri": {peso:4536, vida:4536, dano:350, especial:1050},
"Theri elder": {peso:5000, vida:5000, dano:350, especial:1050},

"Toro": {peso:8800, vida:9000, dano:310},

"Trike": {peso:8300, vida:8200, dano:360},
"Trike elder": {peso:8500, vida:9000, dano:400}

};

/* =========================
   PREENCHER SELECTS
========================= */

let selectAtacante = document.getElementById("atacante");
let selectAlvo = document.getElementById("alvo");

if(selectAtacante && selectAlvo){

for (let nome in dinos){

let option1 = document.createElement("option");
option1.value = nome;
option1.text = nome;

let option2 = document.createElement("option");
option2.value = nome;
option2.text = nome;

selectAtacante.appendChild(option1);
selectAlvo.appendChild(option2);

}

}

/* =========================
   CALCULADORA
========================= */

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
atacante + " dá <span class='danoFinal'>" + danoFinal.toFixed(2) +
"</span> de dano em " + alvo +
"<br><br>Hits para matar: " + hits.toFixed(2);

}

/* =========================
   BOTÃO PATCH NOTES
========================= */

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

/* =========================
   MENU HAMBURGUER
========================= */

function toggleMenu(){

let menu = document.getElementById("menu");
let btn = document.getElementById("menuBtn");

menu.classList.toggle("ativo");

// muda o ícone do botão
if(btn.innerHTML === "☰"){
    btn.innerHTML = "✕";
}else{
    btn.innerHTML = "☰";
}

}
