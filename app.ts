let buttonTeste = document.getElementById('button');


buttonTeste?.addEventListener('click', () => { //com o "?", só roda se o buttonTeste existir, mas isso só funciona com o ES2020 pra frente
    console.log('funcionou');
})