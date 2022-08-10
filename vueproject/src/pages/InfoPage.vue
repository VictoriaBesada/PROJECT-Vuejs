<template>
  <div>
    <a @click="desloguear"><strong>Salir</strong></a>
    <div class="card">
      <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
        <img
          src="https://mdbootstrap.com/img/new/standard/nature/111.webp"
          class="img-fluid"
        />
        <a href="#!">
          <div
            class="mask"
            style="background-color: rgba(251, 251, 251, 0.15)"
          ></div>
        </a>
      </div>

      <div class="card-body">
        <h5 class="card-title">{{ producto.titulo }}</h5>
        <p class="card-text">
          {{ producto.descripcion }}
        </p>
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
</template>

<script>
export default {
  name: "InfoPage",
  props: ["producto"],
  data() {
    return {};
  },
  mounted() {
    let isLogged = localStorage.getItem('isLogged');

    if (isLogged != 'true') {
      this.$router.push('/login');
    }
  },
  methods: {
    desloguear() {
      localStorage.clear();
      this.$router.push('/login');
    },
  },
};
</script>

<style scoped>
.card {
  border-radius: 25px;
}
</style>
