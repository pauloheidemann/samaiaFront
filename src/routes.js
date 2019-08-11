import Cadastro from './components/cadastro/Cadastro.vue';
import Home from './components/home/Home.vue';
export const routes = [
    {path:'', component: Home, titulo: 'Home'},
    {path:'/cadastro/:id', name: "cadastro", component: Cadastro, titulo: 'Cadastro'}
];