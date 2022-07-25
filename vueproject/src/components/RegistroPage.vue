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
                      @submit.prevent="onSubmit"
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
                              <div slot="edad">
                                La edad minima es de 21 anios
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
                          type="submit"
                          value="Registrarme"
                          class="btn btn-primary btn-lg"
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
    <section style="background-color: #eee">
      <div class="container h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-lg-12 col-xl-11">
            <div class="card text-black" style="border-radius: 25px">
              <div class="card-body p-md-5">
                <div class="row justify-content-center">
                  <table class="table align-middle mb-0 bg-white">
                    <thead class="bg-light">
                      <tr>
                        <th>Nombre</th>
                        <th>Pais</th>
                        <th>Edad</th>
                        <th>Email</th>
                        <th>Contrasenia</th>
                        <th>Eliminar datos</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div class="d-flex align-items-center">
                            <div class="ms-3">
                              <p class="text-success fw-bold mb-1">
                                {{ usuario.name }}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <p class="text-success fw-bold mb-1">
                            {{ usuario.pais }}
                          </p>
                        </td>
                        <td>
                          <p class="text-success fw-bold mb-1">
                            {{ usuario.edad }}
                          </p>
                        </td>
                        <td>
                          <p class="text-success fw-bold mb-1">
                            {{ usuario.email }}
                          </p>
                        </td>
                        <td>
                          <p class="text-success fw-bold mb-1">
                            {{ usuario.password }}
                          </p>
                        </td>
                        <td>
                          <button
                            type="button"
                            class="btn btn-link btn-sm btn-rounded"
                            v-on:click="limpiar"
                          >
                            Limpiar
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
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
  name: "RegistroPage",
  props: [],
  data() {
    return {
      formstate: {
        $error: {},
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
    registrar() {
      this.$emit("enviarUsuarios", this.usuario);
    },
    onSubmit: function () {
      if (this.formstate.$invalid) {
        alert(this.formstate.$error);
        return;
      }
    },
    limpiar (){
        (this.usuario.name = '',
        this.usuario.pais = '',
        this.usuario.edad = '',
        this.usuario.email = '',
        this.usuario.password = '')
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
