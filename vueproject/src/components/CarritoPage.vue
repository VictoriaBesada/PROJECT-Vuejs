<template>
  <div>
    <section class="vh-100" style="background-color: #fdccbc">
      <div class="container h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col">
            <p>
              <span class="h2">Carrito de compras </span
              ><span class="h4">(Hay 1 producto en tu carrito)</span>
            </p>

            <div class="card mb-4">
              <div class="card-body p-4">
                <div class="row align-items-center" v-for="item in carro" :key="item.id">
                  <!-- <div class="col-md-2">
                    <img
                      src="{{item.img}}"
                      class="img-fluid"
                      alt="Generic placeholder image"
                    />
                  </div> -->
                  <div class="col-md-2 d-flex justify-content-center">
                    <div>
                      <p class="small text-muted mb-4 pb-2">Nombre</p>
                      <p class="lead fw-normal mb-0">{{item.nombre}}</p>
                    </div>
                  </div>
                  <div class="col-md-2 d-flex justify-content-center">
                    <div>
                      <p class="small text-muted mb-4 pb-2">Color</p>
                      <p class="lead fw-normal mb-0">
                        <i
                          class="fas fa-circle me-2"
                          style="color: #fdd8d2"
                        ></i>
                        {{item.color}}
                      </p>
                    </div>
                  </div>
                  <div class="col-md-2 d-flex justify-content-center">
                    <div>
                      <p class="small text-muted mb-4 pb-2">Cantidad</p>
                      <p class="lead fw-normal mb-0">{{item.cantidad}}</p>
                    </div>
                  </div>
                  <div class="col-md-2 d-flex justify-content-center">
                    <div>
                      <p class="small text-muted mb-4 pb-2">Precio</p>
                      <p class="lead fw-normal mb-0">{{item.precio}}</p>
                    </div>
                  </div>
                  <div class="col-md-2 d-flex justify-content-center">
                    <div>
                      <p class="small text-muted mb-4 pb-2">Subtotal</p>
                      <p class="lead fw-normal mb-0">$799</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="card mb-5">
              <div class="card-body p-4">
                <div class="float-end">
                  <p class="mb-0 me-5 d-flex align-items-center">
                    <span class="small text-muted me-2">Total:</span>
                    <span class="lead fw-normal">$799</span>
                  </p>
                </div>
              </div>
            </div>

            <div class="d-flex justify-content-end">
              <button type="button" class="btn btn-light btn-lg me-2">
                Continuar comprando
              </button>
              <button type="button" class="btn btn-primary btn-lg">
                Finalizar compra
              </button>
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
  data (){
    return {

    }
  },
  methods: {
    remover(id){
      this.$emit('remover', id)
    }
  }
};
</script>

<style scoped>
</style>
