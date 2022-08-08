<template>
  <div>
    <a @click="desloguear"><strong>Salir</strong></a>
    <section style="background-color: #eee">
      <div class="container">
        <div class="container">
          <div class="form-group" style="margin: 10px">
            <label>Ver lista cursos</label>
            <br />
            <button class="btn btn-primary btn-sm" @click="traerDatos">
              Ver
            </button>
          </div>
        </div>
        <hr />
        <div class="row">
          <div>
            <div>
              <div
                class="card col-xl-3 col-lg-4"
                style="display: inline-block"
                v-for="curso in cursos"
                :key="curso.id"
              >
                <img :src="curso.imagen" class="card-img-top" alt="producto" />
                <div
                  class="card-body"
                  @click="
                    () => {
                      selected = curso.id;
                      alert(selected);
                      return actualizarDatos();
                    }
                  "
                >
                  <div class="text-center">
                    <h5 class="card-title">{{ curso.nombre }}</h5>
                    <p class="text-muted mb-4">{{ curso.descripcion }}</p>
                  </div>
                  <div>
                    <div
                      class="d-flex justify-content-between total font-weight-bold mt-4"
                    >
                      <span>Precio unitario</span
                      ><span>{{ curso.precio }}</span>
                    </div>
                  </div>
                  <div style="text-align: center">
                    <button
                      style="margin: 10px"
                      class="btn btn-primary btn-sm"
                      type="button"
                      @click="verDetalle(curso.descripcion)"
                    >
                      Detalles
                    </button>
                    <button
                      style="margin: 10px"
                      class="btn btn-outline-primary btn-sm mt-2"
                      type="button"
                      @click="agregarAlCarrito(curso.id)"
                    >
                      Agregar al carrito
                    </button>
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
  name: "ListadoPage",
  props: {
    msg: String,
  },
  data() {
    return {
      rutaBase: "https://626765be78638336421ee4dd.mockapi.io",
      cursos: [],
      nuevo: "",
      precio: "",
      nombre: "",
      descripcion: "",
      selected: 0,
    };
  },
  methods: {
    alert(payload) {
      alert(payload);
    },
    desloguear() {
      this.$router.push('/login')
    },
    async traerDatos() {
      try {
        let rawData = await axios.get(`${this.rutaBase}/cursos`);
        let data = await rawData.data;
        this.cursos = data.sort((a, b) => b.id - a.id);
      } catch (error) {
        console.error(error);
      }
    },
    agregarAlCarrito(payload) {
      let objetoCarrito = { ...payload, cantidadCarrito: 1 };
      this.$emit("changeFlagFromListado", objetoCarrito);
    },
    verDetalleProducto(payload) {
      this.$emit("verDetalleProducto", payload);
    },
  },
};
</script>

<style scoped>
.card {
  border-radius: 25px;
  margin: 5px;
}
</style>
