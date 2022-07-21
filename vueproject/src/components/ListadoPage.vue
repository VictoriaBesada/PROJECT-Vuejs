<template>
  <div>
    <a @click="desloguear"><strong>Salir</strong></a>
    <section style="background-color: #eee">
      <div class="container">
        <div class="row">
          <div class="">
            <div
              class="card"
              style="display: inline-block"
              v-for="item in productos"
              :key="item.id"
            >
              <img
                v-bind:src="item.imagen"
                class="card-img-top"
                alt="Apple Computer"
              />
              <div class="card-body">
                <div class="text-center">
                  <h5 class="card-title">{{ item.titulo }}</h5>
                  <p class="text-muted mb-4">{{ item.descripcion }}</p>
                </div>
                <div>
                  <div
                    class="d-flex justify-content-between total font-weight-bold mt-4"
                  >
                    <span>Precio unitario</span><span>{{ item.precio }}</span>
                  </div>
                </div>
                <div style="text-align: center">
                  <button
                  style="margin: 10px"
                    class="btn btn-primary btn-sm"
                    type="button"
                    @click="verDetalle(item)"
                  >
                    Detalles
                  </button>
                  <button
                  style="margin: 10px"
                    class="btn btn-outline-primary btn-sm mt-2"
                    type="button"
                    @click="agregarAlCarrito(item)"
                  >
                    Agregar al carrito
                  </button>
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
export default {
  name: "ListadoPage",
  props: ["productos"],
  data() {
    return {};
  },
  methods: {
    desloguear() {
      this.$emit("changeFlagFromListado");
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
