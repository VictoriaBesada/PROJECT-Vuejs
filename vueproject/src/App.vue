<template>
  <div id="app">
    <router-link to="/login">Login</router-link>
    <router-link to="/registro">Registro</router-link>
    <ListadoPage
      msg="Fetch"
      v-if="canAccess"
      @changeFlagFromListado="recibiElMensaje"
      @verDetalleProducto="recibirDetalleProducto"
    />
    <CarritoPage
      v-if="canAccess"
      :carro="carrito"
      @actualizarCarrito="recibirCarritoActualizado"
    />
    <InfoPage v-if="productoSeleccionado" :producto="productoSeleccionado" />
    <router-view></router-view>
  </div>
</template>

<script>
import ListadoPage from "./pages/ListadoPage";
import CarritoPage from "./pages/CarritoPage";
import InfoPage from "./pages/InfoPage";


export default {
  name: "App",
  components: {
    ListadoPage,
    CarritoPage,
    InfoPage,
  },
  data() {
    return {
      usuarios: [],
      canAccess: true,
      listadoDeUsuarios: [],
      carrito: [],
      productoSeleccionado: null,
    };
  },
  methods: {
    recibiElMensaje() {
      this.canAccess = !this.canAccess;
    },
    recibirUsuarios(payload) {
      this.listadoDeUsuarios.push(payload);
    },
    recibirProductosCarrito(payload) {
      this.carrito.push(payload);
    },
    recibirCarritoActualizado(payload) {
      this.carrito = [...payload];
    },
    recibirDetalleProducto(payload) {
      this.productoSeleccionado = payload;
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
