<template>
  <div>
    <section class="vh-100" style="background-color: #eee">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col">
            <div class="card">
              <div class="card-body p-4">
                <vue-form
                  :state="formstate"
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
                          maxlength="30"
                          class="form-control"
                          type="text"
                          v-model="nombre"
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
                            Usuario debe tener entre 5 y 30 caracteres
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
                          maxlength="30"
                          name="password"
                          type="password"
                          class="form-control required-field"
                          v-model="password"
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
                            Password debe tener entre 5 y 30 caracteres
                          </div>
                        </field-messages>
                      </div>
                    </div>
                  </validate>
                  <button class="btn btn-primary btn-lg" @click="validarLogin">
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
import axios from "axios";
export default {
  name: "LoginPage",
  async mounted() {
    let respuesta = await axios.get(
      "https://62f2b930a84d8c9681190576.mockapi.io/usuarios"
    );
    this.usuarios = respuesta.data;
  },  
  data() {
    return {
      formstate: {
        $submittedState: {},
      },
      nombre: '',
      password: '',
      usuarios: [],
    };
  },
  methods: {
    validarLogin() {
      let data = this.usuarios.find(
        (o) => o.nombre === o.nombre && o.password === o.password
      );
      localStorage.clear();
      if (data) {
        localStorage.setItem('isLogged', 'true');

        if (data?.isAdmin) {
          localStorage.setItem('isAdmin', 'true');
          this.$router.push('admin');
        } else {
          localStorage.setItem('isAdmin', 'false');
          this.$router.push('main');
        }
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
