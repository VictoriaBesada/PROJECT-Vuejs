<template>
  <div id="app">
    <LoginPage
      v-if="!canAccess"
      @changeFlag="recibiElMensaje"
      :usuarios="listadoDeUsuarios"
    />
    <RegistroPage
      v-if="!canAccess"
      @enviarUsuarios="recibirUsuarios"
      @agregarAlCarrito="recibirProductosCarrito"
    />
    <ListadoPage
      v-if="canAccess"
      @changeFlagFromListado="recibiElMensaje"
      :productos="listadoDeProductos"
      @verDetalleProducto="recibirDetalleProducto"
    />
    <CarritoPage
      :carro="carrito"
      @actualizarCarrito="recibirCarritoActualizado"
    />
    <InfoPage 
    v-if="productoSeleccionado" 
    :producto="productoSeleccionado" 
    />
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
      canAccess: true,
      listadoDeUsuarios: [],
      listadoDeProductos: [
        {
          id: 1,
          imagen:
            "https://robohash.org/dolorvoluptateofficiis.png?size=50x50&set=set1",
          titulo: "Spice - Greek 1 Step",
          descripcion: "Clothing",
          precio: "$0.00",
          cantidad: 85,
        },
        {
          id: 2,
          imagen: "https://robohash.org/modietminus.png?size=50x50&set=set1",
          titulo: "Ham Black Forest",
          descripcion: "Games",
          precio: "$0.00",
          cantidad: 3,
        },
        {
          id: 3,
          imagen:
            "https://robohash.org/vitaenihilrepudiandae.png?size=50x50&set=set1",
          titulo: "Pepper - Green, Chili",
          descripcion: "Shoes",
          precio: "$0.00",
          cantidad: 84,
        },
        {
          id: 4,
          imagen: "https://robohash.org/etatamet.png?size=50x50&set=set1",
          titulo: "Juice - Clam, 46 Oz",
          descripcion: "Health",
          precio: "$0.00",
          cantidad: 22,
        },
        {
          id: 5,
          imagen:
            "https://robohash.org/voluptatemconsequaturaut.png?size=50x50&set=set1",
          titulo: "Bread - Wheat Baguette",
          descripcion: "Baby",
          precio: "$0.00",
          cantidad: 15,
        },
        {
          id: 6,
          imagen:
            "https://robohash.org/autdolorumconsequatur.png?size=50x50&set=set1",
          titulo: "Crush - Orange, 355ml",
          descripcion: "Kids",
          precio: "$0.00",
          cantidad: 28,
        },
        {
          id: 7,
          imagen:
            "https://robohash.org/estbeataelibero.png?size=50x50&set=set1",
          titulo: "Wine - Red, Mouton Cadet",
          descripcion: "Garden",
          precio: "$0.00",
          cantidad: 81,
        },
        {
          id: 8,
          imagen:
            "https://robohash.org/evenietcumquereprehenderit.png?size=50x50&set=set1",
          titulo: "Otomegusa Dashi Konbu",
          descripcion: "Movies",
          precio: "$0.00",
          cantidad: 54,
        },
        {
          id: 9,
          imagen: "https://robohash.org/omnisquasoptio.png?size=50x50&set=set1",
          titulo: "Apples - Sliced / Wedge",
          descripcion: "Books",
          precio: "$0.00",
          cantidad: 37,
        },
        {
          id: 10,
          imagen: "https://robohash.org/situtminus.png?size=50x50&set=set1",
          titulo: "Tomatoes - Grape",
          descripcion: "Games",
          precio: "$0.00",
          cantidad: 29,
        },
      ],
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
