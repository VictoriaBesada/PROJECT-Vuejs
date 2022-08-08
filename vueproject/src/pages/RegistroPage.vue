<template>
  <div>
    <section class="vh-100" style="background-color: #eee">
      <div class="container h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-lg-12 col-xl-11">
            <div class="card text-black" style="border-radius: 25px">
              <div class="card-body p-md-5">
                <div class="row justify-content-center">
                  <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Registrate!
                    </p>

                    <vue-form
                      :state="formstate"
                      autocomplete="off"
                      class="mx-1 mx-md-4"
                    >
                      <validate auto-label>
                        <div class="d-flex flex-row align-items-center mb-4">
                          <div class="form-outline flex-fill mb-0">
                            <span class="form-label" for="form3Example1c"
                              >Nombre</span
                            >
                            <input
                              required
                              name="name"
                              minlength="5"
                              maxlength="12"
                              class="form-control"
                              v-model.lazy="usuario.name"
                            />
                            <field-messages
                              name="name"
                              show="$touched || $submitted"
                              class="form-control-feedback"
                            >
                              <div slot="required">
                                Nombre es un campo requerido
                              </div>
                              <div slot="minlength">
                                Nombre debe tener entre 5 y 12 caracteres
                              </div>
                            </field-messages>
                          </div>
                        </div>
                      </validate>

                      <br />

                      <validate auto-label>
                        <div class="d-flex flex-row align-items-center mb-4">
                          <div class="form-outline flex-fill mb-0">
                            <div class="input-group mb-3">
                              <span
                                class="input-group-text"
                                for="inputGroupSelect01"
                                style="text-align: center"
                                >Pais</span
                              >
                              <select
                                required
                                v-model.lazy="usuario.pais"
                                class="form-select"
                                name="pais"
                                id="inputGroupSelect01"
                              >
                                <option selected>Elegir...</option>
                                <option value="Argentina">Argentina</option>
                                <option value="Brasil">Brasil</option>
                                <option value="Chile">Chile</option>
                                <option value="Paraguay">Paraguay</option>
                                <option value="Uruguay">Uruguay</option>
                              </select>
                              <field-messages
                                name="pais"
                                show="$touched || $submitted"
                                class="form-control-feedback"
                              >
                                <div slot="required">
                                  Pais es un campo requerido
                                </div>
                              </field-messages>
                            </div>
                          </div>
                        </div>
                      </validate>

                      <validate auto-label>
                        <div class="d-flex flex-row align-items-center mb-4">
                          <div class="form-outline flex-fill mb-0">
                            <span class="form-label" for="form3Example4c"
                              >Edad</span
                            >
                            <input
                              required
                              name="edad"
                              type="number"
                              class="form-control"
                              min="21"
                              max="100"
                              v-model.number="usuario.edad"
                            />
                            <field-messages
                              name="edad"
                              show="$touched || $submitted"
                              class="form-control-feedback"
                            >
                              <div slot="required">
                                Edad es un campo requerido
                              </div>
                              <div slot="min">
                                La edad minima es de 21 anios
                              </div>
                              <div slot="max">
                                La edad maxima es de 100 anios
                              </div>
                            </field-messages>
                          </div>
                        </div>
                      </validate>

                      <validate auto-label>
                        <div class="d-flex flex-row align-items-center mb-4">
                          <div class="form-outline flex-fill mb-0">
                            <span class="form-label" for="form3Example4c"
                              >Email</span
                            >
                            <input
                              required
                              name="email"
                              type="email"
                              class="form-control"
                              v-model.lazy="usuario.email"
                            />
                            <field-messages
                              name="email"
                              show="$touched || $submitted"
                              class="form-control-feedback"
                            >
                              <div slot="required">
                                Email es un campo requerido
                              </div>
                              <div slot="email">Email no es válido</div>
                            </field-messages>
                          </div>
                        </div>
                      </validate>

                      <validate auto-label>
                        <div class="d-flex flex-row align-items-center mb-4">
                          <div class="form-outline flex-fill mb-0">
                            <span class="form-label" for="form3Example4cd"
                              >Contrasenia</span
                            >
                            <input
                              required
                              name="password"
                              type="password"
                              class="form-control required-field"
                              v-model.lazy="usuario.password"
                            />
                            <field-messages
                              name="password"
                              show="$touched || $submitted"
                              class="form-control-feedback"
                            >
                              <div slot="required">
                                Password es un campo requerido
                              </div>
                              <div slot="password">Password no es válida</div>
                            </field-messages>
                          </div>
                        </div>
                      </validate>

                      <div
                        class="form-check d-flex justify-content-center mb-5"
                      >
                        <input
                          class="form-check-input me-2"
                          type="checkbox"
                          value=""
                          id="form2Example3c"
                        />
                        <label class="form-check-label" for="form2Example3">
                          I agree all statements in
                          <a href="#!">Terms of service</a>
                        </label>
                      </div>

                      <div
                        class="d-flex justify-content-center mx-4 mb-3 mb-lg-4"
                      >
                        <input
                          value="Registrarme"
                          class="btn btn-primary btn-lg"
                          @click="createUser"
                        />
                      </div>
                    </vue-form>
                  </div>
                  <div
                    class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2"
                  >
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      class="img-fluid"
                      alt="Sample image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div style="background-color: #eee"><br /><br /></div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "RegistroPage",
  props: [],
  data() {
    return {
      formstate: {
        $submittedState: {},
      },
      usuario: {
        name: "",
        pais: "",
        edad: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async createUser() {
      const newUser = {
        nombre: this.nombre,
        apellido: this.pais,
        correo: this.email,
        contrasena: this.password,
        rol: "usuario",
      };
      let respuesta = await axios.post(
        "https://626765be78638336421ee4dd.mockapi.io/usuarios",
        newUser
      );
      this.usuarios = respuesta.data;
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
.form-check-input {
  position: relative;
}
.input-group {
  flex-direction: column;
}
</style>
