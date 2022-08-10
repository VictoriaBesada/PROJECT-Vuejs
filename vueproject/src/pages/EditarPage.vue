<template>
  <div>
    <a @click="desloguear"><strong>Salir</strong></a>
    <section style="background-color: #eee">
      <div class="container">
        <div class="container" style="display: flex">
          <div class="form-group" style="margin: 10px">
            <label>Editar producto</label>
            <input type="text" class="form-control" v-model="producto.nombre" />
            <input type="text" class="form-control" v-model="producto.precio" />
            <input type="text" class="form-control" v-model="producto.descripcion" />
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
        nombre: '',
        precio: 0,
        descripcion: '',
        amount: 0
      }
    };
  },
  async mounted() {
    /*eslint-disable*/
    debugger;
    let isLogged = localStorage.getItem("isLogged");
    let isAdmin = localStorage.getItem("isAdmin");

    if (isLogged != "true") {
      this.$router.push("/login");
    }
    if (isAdmin != "true") {
      this.$router.push("/admin");
      // PONER EN 'main'
    }
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
      let respuesta = await axios.put(
        "https://62f2b930a84d8c9681190576.mockapi.io/productos/" + this.$route.params.id,
        this.producto
      );
      alert('producto actualizado con exito')
    },
  },
};
</script>
