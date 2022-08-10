<template>
  <div>
    <a @click="desloguear"><strong>Salir</strong></a>
    <section style="background-color: #eee">
      <div class="container">
        <div class="container" style="display: flex">
          <div class="row">
            <div>
              <div>
                <div
                  class="card col-xl-3 col-lg-4"
                  style="display: inline-block"
                  v-for="(item, index) in productos"
                  :key="index"
                >
                  <img :src="item.imagen" class="card-img-top" alt="producto" />
                  <div
                    class="card-body"
                  >
                    <div class="text-center">
                      <h5 class="card-title">{{ item.nombre }}</h5>
                      <p class="text-muted mb-4">{{ item.descripcion }}</p>
                    </div>
                    <div>
                      <div
                        class="d-flex justify-content-between total font-weight-bold mt-4"
                      >
                        <span>Precio unitario</span
                        ><span>{{ item.precio }}</span>
                      </div>
                    </div>
                    <div style="text-align: center">
                      <button
                        style="margin: 10px"
                        class="btn btn-primary btn-sm"
                        type="button"
                        @click="verDetalle(item.descripcion)"
                      >
                        Detalles
                      </button>
                      <button
                        style="margin: 10px"
                        class="btn btn-outline-primary btn-sm mt-2"
                        type="button"
                        @click="editarProducto(item.id)"
                      >
                        Editar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "AdminPage",
  data() {
    return {
      productos: [],
      selected: 0,
    };
  },
  methods: {
    desloguear() {
      localStorage.clear();
      this.$router.push("/login");
    },
    editarProducto(payload) {
      /*eslint-disable*/
      debugger
      this.$router.push({ name: 'editar', params: { id: payload} });
    },
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
    let respuesta = await axios.get(
      "https://62f2b930a84d8c9681190576.mockapi.io/productos"
    );
    this.productos = respuesta.data;
  },
};
</script>

<style scoped>
.card {
  border-radius: 25px;
  margin: 5px;
}
</style>
