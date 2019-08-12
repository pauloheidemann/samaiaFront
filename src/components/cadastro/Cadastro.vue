<template>
    <div>
    <h1 class="centralizado">Cadastro de Pessoa Física</h1>
    <h2 class="centralizado">{{ mensagem }}</h2>

    <form @submit.prevent="salvar()">
      <div class="controle">
        <label for="nome">NOME</label>
        <input id="nome" v-model="pessoa.nome">
      </div>
      <div class="controle">
        <label for="cpf">CPF</label>
        <input id="cpf" v-model="pessoa.cpf">
      </div>
      <div class="controle">
        <label for="dataNascimento">DATA DE NASCIMENTO</label>
        <input id="dataNascimento" type="date" v-model="pessoa.dataNascimento">
      </div>
      <div class="controle">
        <label for="email">EMAIL</label>
        <input id="email" v-model="pessoa.email">
      </div>
      <div class="centralizado">
        <button type="submit" >Salvar</button>
        <router-link to="/"><button type="button">Voltar</button></router-link>
      </div>

    </form>
  </div>
</template>

<script>

import PessoaFisica from '../domain/PessoaFisica/PessoaFisica';

export default {
    data() {
        return {
            pessoa: new PessoaFisica(),
            mensagem: ''
        }
    }, 

    created() {
        if(this.$route.params.id) {
        this.$http.get('http://localhost:8081/samaia/ws/pessoa/' + this.$route.params.id)
            .then(res => res.json())
            .then(pessoa => this.pessoa = pessoa);
        }
    },

    methods: {
        salvar() {
            if(this.$route.params.id) {
                this.$http.put('http://localhost:8081/samaia/ws/pessoa', this.pessoa)
                .then(
                    () => {
                        this.mensagem = "Cadastro atualizado com sucesso";
                    },  
                    err => this.mensagem = err
                );
            } else {
            this.$http.post('http://localhost:8081/samaia/ws/pessoa', this.pessoa)
                .then(
                    () => {
                        this.pessoa = new PessoaFisica();
                        this.mensagem = "Cadastro efetuado com sucesso";
                    },  
                    err => this.mensagem = err
                );
            }
        }
    }
}
</script>

<style scoped>
.centralizado {
    text-align: center;
  }
  .controle {
    font-size: 1.2em;
    margin-bottom: 20px;

  }
  .controle label {
    display: block;
    font-weight: bold;
  }

 .controle label + input, .controle textarea {
    width: 100%;
    font-size: inherit;
    border-radius: 5px
  }

  .centralizado {
    text-align: center;
  }
</style>