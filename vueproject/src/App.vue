<template>
  <div id="app">
    <LoginPage v-if="!canAccess" @changeFlag="recibiElMensaje" />
    <ListadoPage v-if="canAccess" @changeFlagFromListado="recibiElMensaje" />
    <CarritoPage />
    <InfoPage />
    <RegistroPage />
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
  methods: {
    recibiElMensaje() {
      this.canAccess = !this.canAccess;
    },
  },
  data() {
    return {
      canAccess: false,
      listado_1: [
        {
          id: 1,
          nombre: "Amelia",
        },
        {
          id: 2,
          nombre: "Marcela",
        },
        {
          id: 3,
          nombre: "Naomi",
        },
        {
          id: 4,
          nombre: "Catalina",
        },
        {
          id: 5,
          nombre: "Esmeralda",
        },
      ],
      listado_2: [
        {
          id: 1,
          nombre: "Mateo",
        },
        {
          id: 2,
          nombre: "Lucas",
        },
        {
          id: 3,
          nombre: "Franco",
        },
        {
          id: 4,
          nombre: "Alejo",
        },
        {
          id: 5,
          nombre: "Marcelo",
        },
      ],
      listado_3: [
        {
          id: 1,
          nombre: "Celeste",
        },
        {
          id: 2,
          nombre: "Bruna",
        },
        {
          id: 3,
          nombre: "Clara",
        },
        {
          id: 4,
          nombre: "Micaela",
        },
        {
          id: 5,
          nombre: "Lorenzo",
        },
      ],
    };
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
  margin-top: 60px;
}
</style>
