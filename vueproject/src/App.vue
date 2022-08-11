<template>
  <div id="app">
    <b-nav tabs fill>
      <b-nav-item><router-link to="/login">Login</router-link></b-nav-item>
      <b-nav-item
        ><router-link to="/registro">Registro</router-link></b-nav-item
      >
      <b-nav-item><router-link to="/main">Main</router-link></b-nav-item>
      <b-nav-item><router-link to="/carrito">Carrito</router-link></b-nav-item>
      <b-nav-item><router-link to="/admin">Admin</router-link></b-nav-item>
    </b-nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
