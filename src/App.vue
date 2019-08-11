<template>
  <div id="app">
    <meu-menu :rotas="routes"/>
    <router-view></router-view>
  </div>
</template>

<script>
import {routes} from './routes';
import Menu from './components/shared/menu/Menu';
export default {
  components: {
    'meu-menu': Menu
  },

  data() {
    return {
      routes
    }
  }
}
</script>

<style>

</style>