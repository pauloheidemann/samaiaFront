export default class PessoaFisica {
    constructor(nome='', cpf='', dataNascimento='', email='') {
        this.nome = nome;
        this.cpf = cpf;
        this.dataNascimento = dataNascimento;
        this.email = email;
        this.enderecos = [];
        this.telefones = [];
    }
}