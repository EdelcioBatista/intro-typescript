const pessoa = {
    nome: 'Maria',
    idade: 50,
    profissao: 'Contabilista',
}

interface Estudante extends Pessoa {
    materias: string[]
}

const andre: {nome: string, idade: number, profissao:string} = {
    nome: 'André',
    idade: 25,
    profissao: 'desenvolvedor',
}

const edelcio: {nome: string, idade: number, profissao:string} = {
    nome: 'Edelcio',
    idade: 25,
    profissao: 'Desenvolvedor',
}

enum Profissao {
    Contabilista,
    Professora,
    Atriz,
    Desenvolvedor,
    Pintor,
}

interface Pessoa {
    nome: string,
    idade: number,
    profissao?: Profissao,
}

const veronice: Pessoa = {
    nome: 'Maria Veronice',
    idade: 51,
    profissao: Profissao.Contabilista,
}

const ed: Estudante = {
    nome: 'Ed',
    idade: 51,
    profissao: Profissao.Desenvolvedor,
    materias: ['Lógica', 'Python'],
}

function listar(lista: string[]) {
    for(const item of lista) {
        console.log('- ', item);
    }
}

listar(ed.materias);