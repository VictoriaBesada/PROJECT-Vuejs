<template>
  <div>
    <a @click="desloguear">Salir</a>
    <section style="background-color: #eee">
      <div class="container py-5">
        <div class="row justify-content-center">
          <div class="col-md-8 col-lg-6 col-xl-4">
            <div
              class="card text-black"
              v-for="item in productos"
              :key="item.id"
            >
              <i class="fab fa-apple fa-lg pt-3 pb-1 px-3"></i>
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/3.webp"
                class="card-img-top"
                alt="Apple Computer"
              />
              <div class="card-body">
                <div class="text-center">
                  <h5 class="card-title">{{ item.titulo }}</h5>
                  <p class="text-muted mb-4">{{ item.descripcion }}</p>
                </div>
                <div>
                  <div class="d-flex justify-content-between">
                    <span>Precio unitario</span><span>{{ item.precio }}</span>
                  </div>
                </div>
                <div
                  class="d-flex justify-content-between total font-weight-bold mt-4"
                >
                  <span>Total</span
                  ><span>{{ item.precio * item.cantidad }}</span>
                </div>
                <button
                  class="btn btn-primary btn-sm"
                  type="button"
                  @click="verDetalle(item)"
                >
                  Detalles
                </button>
                <button
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
}
</style>
