"use strict";
const pessoa = {
    nome: 'Maria',
    idade: 50,
    profissao: 'Contabilista',
};
const andre = {
    nome: 'André',
    idade: 25,
    profissao: 'desenvolvedor',
};
const edelcio = {
    nome: 'Edelcio',
    idade: 25,
    profissao: 'Desenvolvedor',
};
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Contabilista"] = 0] = "Contabilista";
    Profissao[Profissao["Professora"] = 1] = "Professora";
    Profissao[Profissao["Atriz"] = 2] = "Atriz";
    Profissao[Profissao["Desenvolvedor"] = 3] = "Desenvolvedor";
    Profissao[Profissao["Pintor"] = 4] = "Pintor";
})(Profissao || (Profissao = {}));
const veronice = {
    nome: 'Maria Veronice',
    idade: 51,
    profissao: Profissao.Contabilista,
};
const ed = {
    nome: 'Ed',
    idade: 51,
    profissao: Profissao.Desenvolvedor,
    materias: ['Lógica', 'Python'],
};
function listar(lista) {
    for (const item of lista) {
        console.log('- ', item);
    }
}
listar(ed.materias);
