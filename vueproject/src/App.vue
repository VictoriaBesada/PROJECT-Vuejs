<template>
  <div id="app">
    <LoginPage v-if="!canAccess" @changeFlag="recibiElMensaje" :usuarios="listadoDeUsuarios"/>
    <RegistroPage v-if="!canAccess" @enviarUsuarios="recibirUsuarios" />
    <ListadoPage v-if="canAccess" @changeFlagFromListado="recibiElMensaje" />
    <CarritoPage />
    <InfoPage />
  </div>
</template>

<script>
import LoginPage from "./components/LoginPage";
import ListadoPage from "./components/ListadoPage";
import CarritoPage from "./components/CarritoPage";
import InfoPage from "./components/InfoPage";
import RegistroPage from "./components/RegistroPage";

export default {
  name: "App",
  components: {
    LoginPage,
    ListadoPage,
    CarritoPage,
    InfoPage,
    RegistroPage,
  },
  data() {
    return {
      canAccess: false,
      listadoDeUsuarios: [],
    };
  },
  methods: {
    recibiElMensaje() {
      this.canAccess = !this.canAccess;
    },
    recibirUsuarios(payload) {
      this.listadoDeUsuarios.push(payload);
    },
  },  
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
