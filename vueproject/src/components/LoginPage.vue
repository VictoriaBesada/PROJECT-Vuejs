 <template>
  <div>
    <section class="h-100 h-custom" style="background-color: #eee">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col">
            <div class="card">
              <div class="card-body p-4">
                <div class="mb-3 row">
                  <label for="name" class="col-sm-2 col-form-label"
                    >Usuario</label
                  >
                  <div class="col-sm-10">
                    <input
                      type="text"
                      name="name"
                      class="form-control-plaintext"
                      id="usuario"
                      v-model="usuario"
                    />
                  </div>
                </div>
                <div class="mb-3 row">
                  <label for="password" class="col-sm-2 col-form-label"
                    >Contrasena</label
                  >
                  <div class="col-sm-10">
                    <input
                      type="password"
                      name="password"
                      class="form-control"
                      id="inputPassword"
                      v-model="password"
                    />
                  </div>
                </div>
                <button type="button" class="btn btn-primary btn-lg" @click="cambiarValor">Entrar</button>
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
    usuarios: Array
  },
  data() {
    return {
      usuario: "",
      password: "",
    };
  },
  methods: {
    cambiarValor() {
      let usuarioExistente = (this.usuarios.filter(o=> o.usuario) == this.usuario && o.password == this.password)
      if (usuarioExistente) {
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
