<template>
  <div id="app">
    <h1>Samaia IT - Cadastro Pessoa Física</h1>
    <h2>{{ mensagem }}</h2>
    <table>
      <thead>
        <td>ID</td>
        <td>Nome</td>
        <td>CPF</td>
        <td>Email</td>
        <td>Data Nascimento</td>
        <td>Ações</td>
      </thead>
      <tr v-for="pessoa of pessoas">
        <td>{{ pessoa.id }}</td>
        <td>{{ pessoa.nome }}</td>
        <td>{{ pessoa.cpf }}</td>
        <td>{{ pessoa.email }}</td>
        <td>{{ pessoa.dataNascimento }}</td>
        <td>
          <router-link :to="{ name: 'cadastro', params: {id: pessoa.id}}">Editar</router-link>
          <button type="button" @click="remove(pessoa.id)">Remover</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      pessoas: [],
      mensagem: ''
    }
  }, 
  created() {
    this.$http.get('http://localhost:8081/samaia/ws/pessoa')
      .then(res => res.json())
      .then(pessoas => this.pessoas = pessoas, err => console.log('erro ' + err));
  },
  methods: {
    remove(idPessoa) {
      if(confirm("Deseja remover a pessoa?"))
        this.$http.delete('http://localhost:8081/samaia/ws/pessoa/' + idPessoa)
          .then(
              () => {
                this.mensagem = "Pessoa removida com sucesso";
                this.consultarTodos();
              }, err => this.mensagem = err);
    }, 
    consultarTodos() {
      this.$http.get('http://localhost:8081/samaia/ws/pessoa')
        .then(res => res.json())
        .then(pessoas => this.pessoas = pessoas, err => console.log('erro ' + err));
    }
  }
}
</script>

<style>

</style>