<template>
  <div>
    <a @click="desloguear"><strong>Salir</strong></a>
    <section class="vh-100" style="background-color: #eee">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col">
            <div class="card">
              <div class="card-body p-4">
                <div class="row">
                  <div class="col-lg-7">
                    <h5 class="mb-3">
                      <a href="#!" class="text-body"
                        ><i class="fas fa-long-arrow-alt-left me-2"></i>Continue
                        shopping</a
                      >
                    </h5>
                    <hr />

                    <div
                      class="d-flex justify-content-between align-items-center mb-4"
                    >
                      <div>
                        <p class="mb-1">Tu carrito</p>
                      </div>
                    </div>

                    <div class="card mb-3 mb-lg-0">
                      <div class="card-body">
                        <div
                          class="d-flex justify-content-between"
                          v-for="item in carroLocal"
                          :key="item.id"
                        >
                          <div class="d-flex flex-row align-items-center">
                            <div>
                              <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img4.webp"
                                class="img-fluid rounded-3"
                                alt="Shopping item"
                                style="width: 65px"
                              />
                            </div>
                            <div class="ms-3">
                              <h5>{{ item.titulo }}</h5>
                              <p class="small mb-0">{{ item.descripcion }}</p>
                            </div>
                          </div>
                          <div class="d-flex flex-row align-items-center">
                            <div style="width: 50px">
                              <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                                <button
                                  class="btn btn-link px-2"
                                  @click="restar(item)"
                                >
                                  <i class="fas fa-minus"></i>
                                </button>

                                <input
                                  id="form1"
                                  min="0"
                                  name="quantity"
                                  value="1"
                                  type="number"
                                  class="form-control form-control-sm"
                                />

                                <button
                                  class="btn btn-link px-2"
                                  @click="sumar(item)"
                                >
                                  <i class="fas fa-plus"></i>
                                </button>
                              </div>
                            </div>
                            <div style="width: 80px">
                              <h5 class="mb-0">{{ item.precio }}</h5>
                            </div>
                            <a href="#!" style="color: #cecece"
                              ><i class="fas fa-trash-alt"></i
                            ></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-5">
                    <div class="card bg-primary text-white rounded-3">
                      <div class="card-body">
                        <div
                          class="d-flex justify-content-between align-items-center mb-4"
                        >
                          <h5 class="mb-0">Metodo de pago</h5>
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                            class="img-fluid rounded-3"
                            style="width: 45px"
                            alt="Avatar"
                          />
                        </div>

                        <form class="mt-4">
                          <div class="form-outline form-white mb-4">
                            <input
                              type="text"
                              id="typeName"
                              class="form-control form-control-lg"
                              siez="17"
                              placeholder="Nombre del titular de la tarjeta"
                            />
                            <label class="form-label" for="typeName"
                              >Nombre del titular de la tarjeta</label
                            >
                          </div>

                          <div class="form-outline form-white mb-4">
                            <input
                              type="text"
                              class="form-control form-control-lg"
                              siez="17"
                              placeholder="1234 5678 9012 3457"
                              minlength="19"
                              maxlength="19"
                            />
                            <label class="form-label">Numero de tarjeta</label>
                          </div>

                          <div class="row mb-4">
                            <div class="col-md-6">
                              <div class="form-outline form-white">
                                <input
                                  type="text"
                                  id="typeExp"
                                  class="form-control form-control-lg"
                                  placeholder="MM/YYYY"
                                  size="7"
                                  minlength="7"
                                  maxlength="7"
                                />
                                <label class="form-label" for="typeExp"
                                  >Vencimiento</label
                                >
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="form-outline form-white">
                                <input
                                  type="password"
                                  id="typeText"
                                  class="form-control form-control-lg"
                                  placeholder="&#9679;&#9679;&#9679;"
                                  size="1"
                                  minlength="3"
                                  maxlength="3"
                                />
                                <label class="form-label" for="typeText"
                                  >CVV</label
                                >
                              </div>
                            </div>
                          </div>
                        </form>

                        <hr class="my-4" />

                        <div class="d-flex justify-content-between">
                          <p class="mb-2">Subtotal</p>
                          <p class="mb-2">$4798.00</p>
                        </div>

                        <div class="d-flex justify-content-between">
                          <p class="mb-2">Envio</p>
                          <p class="mb-2">$20.00</p>
                        </div>

                        <div class="d-flex justify-content-between mb-4">
                          <p class="mb-2">Total</p>
                          <p class="mb-2">$4818.00</p>
                        </div>

                        <button
                          type="button"
                          class="btn btn-info btn-block btn-lg"
                        >
                          <div class="d-flex justify-content-between">
                            <span>$4818.00</span>
                            <span
                              >Checkout
                              <i class="fas fa-long-arrow-alt-right ms-2"></i
                            ></span>
                          </div>
                        </button>
                      </div>
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
export default {
  name: "CarritoPage",
  props: ["carro"],
  data() {
    return {
      carroLocal: [],
    };
  },
  mounted() {
    let isLogged = localStorage.getItem('isLogged');

    if (isLogged != 'true') {
      this.$router.push('/login');
    }
    this.carroLocal = this.carro;
  },
  methods: {
    desloguear() {
      localStorage.clear();
      this.$router.push("/login");
    },
    remover(id) {
      this.$emit("remover", id);
    },
    sumar(payload) {
      payload.cantidadCarrito++;
    },
    restar(payload) {
      payload.cantidadCarrito--;
    },
  },
  watch: {
    carroLocal(newObject) {
      this.$emit("actualizarCarrito", newObject);
    },
  },
};
</script>

<style scoped>
.card {
  border-radius: 25px;
}
</style>
