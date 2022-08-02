<template>
  <div>
    <section class="h-100 h-custom" style="background-color: #eee">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col">
            <div class="card">
              <div class="card-body p-4">
                <vue-form
                  :state="formstate"
                  @submit.prevent="onSubmit"
                  autocomplete="off"
                  class="mx-1 mx-md-4"
                >
                  <validate auto-label>
                    <div class="mb-3 row">
                      <label for="nombre" class="col-sm-2 col-form-label"
                        >Usuario</label
                      >
                      <div class="col-sm-10">
                        <input
                          required
                          name="nombre"
                          minlength="5"
                          maxlength="12"
                          class="form-control"
                          type="text"
                          v-model.lazy="nombre"
                        />
                        <field-messages
                          name="nombre"
                          show="$touched || $submitted"
                          class="form-control-feedback"
                        >
                          <div slot="required">
                            Usuario es un campo requerido
                          </div>
                          <div slot="minlength">
                            Usuario debe tener entre 5 y 12 caracteres
                          </div>
                        </field-messages>
                      </div>
                    </div>
                  </validate>
                  <validate auto-label>
                    <div class="mb-3 row">
                      <label for="password" class="col-sm-2 col-form-label"
                        >Contrasena</label
                      >
                      <div class="col-sm-10">
                        <input
                          required
                          minlength="5"
                          maxlength="12"
                          name="password"
                          type="password"
                          class="form-control required-field"
                          v-model.lazy="password"
                        />
                        <field-messages
                          name="password"
                          show="$touched || $submitted"
                          class="form-control-feedback"
                        >
                          <div slot="required">
                            Password es un campo requerido
                          </div>
                          <div slot="minlength">
                            Password debe tener entre 5 y 12 caracteres
                          </div>
                        </field-messages>
                      </div>
                    </div>
                  </validate>
                  <button
                    type="button"
                    class="btn btn-primary btn-lg"
                    @click="cambiarValor"
                  >
                    Entrar
                  </button>
                </vue-form>
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
  name: "LoginPage",
  props: {
    usuarios: Array,
  },
  data() {
    return {
      formstate: {
        // $error: {},
        $submittedState: {},
      },
      nombre: "",
      password: "",
    };
  },
  methods: {
    // cambiarValor() {
    //   let usuarioExistente = this.usuarios.filter(o=> o.usuario) == this.nombre && o.password == this.password
    //   if (usuarioExistente) {
    //     this.$emit("changeFlag");
    //   }
    // },
    onSubmit: function () {
      if (this.formstate.$invalid) {
        alert("Hay errores en el ingreso");
        return;
      }
      console.log("Usuario logueado!", this.formstate);
    },
    cambiarValor() {
      if (this.nombre == "admin" && this.password == "123") {
        this.$emit("changeFlag");
      }
    },
  },
};
</script>

<style scoped>
button {
  margin-top: 1rem;
}
.card {
  border-radius: 25px;
}
</style>
