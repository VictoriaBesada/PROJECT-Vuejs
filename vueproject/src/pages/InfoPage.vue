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
    let isLogged = localStorage.getItem("isLogged");

    if (isLogged != "true") {
      this.$router.push("/login");
    }
  },
  methods: {
    desloguear() {
      localStorage.clear();
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
.card {
  border-radius: 25px;
}
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
