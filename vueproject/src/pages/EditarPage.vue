<template>
  <div>
    <div class="iconos">
      <div class="logoutIcon">
        <h2 @click="desloguear">
          <font-awesome-icon icon="fa-solid fa-arrow-right-from-bracket" />
        </h2>
      </div>
      <div class="carrito">
        <h2 class="cartIcon">
          <font-awesome-icon icon="fa-solid fa-cart-shopping" />
        </h2>
        <ul>
          <li v-for="(item, index) in $store.state.carrito" :key="index">
            {{ item.name }}
          </li>
        </ul>
      </div>
    </div>
    <section style="background-color: #eee">
      <div class="container">
        <div class="container" style="display: flex align-items">
          <div class="form-group" style="margin: 10px">
            <label>Editar producto</label>
            <input type="text" class="form-control" v-model="producto.nombre" />
            <input type="text" class="form-control" v-model="producto.precio" />
            <input
              type="text"
              class="form-control"
              v-model="producto.descripcion"
            />
            <input type="text" class="form-control" v-model="producto.amount" />
            <button class="btn btn-primary btn-sm" @click="actualizarProducto">
              Actualizar
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "EditarPage",
  data() {
    return {
      producto: {
        nombre: "",
        precio: 0,
        descripcion: "",
        amount: 0,
      },
    };
  },
  async mounted() {
    /*eslint-disable*/
    debugger;
    let paramId = this.$route.params.id;
    let respuesta = await axios.get(
      "https://62f2b930a84d8c9681190576.mockapi.io/productos/" + paramId
    );
    this.producto = respuesta.data;
  },
  methods: {
    desloguear() {
      localStorage.clear();
      this.$router.push("/login");
    },
    async actualizarProducto() {
      debugger;
      let respuesta = await axios.put(
        "https://62f2b930a84d8c9681190576.mockapi.io/productos/" +
          this.$route.params.id,
        this.producto
      );
      alert("producto actualizado con exito");
    },
  },
};
</script>

<style scoped>
.carrito {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.cartIcon {
  margin-right: 1rem;
}
.logoutIcon {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 1rem;
}
.iconos {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
