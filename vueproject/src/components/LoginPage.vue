<template>
  <div>
    <div class="mb-3 row">
      <label for="name" class="col-sm-2 col-form-label">Usuario</label>
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
        <input type="password" name="password" class="form-control" id="inputPassword" v-model="password"/>
      </div>
    </div>
        <button @click="cambiarValor">Entrar</button>

  </div>
</template>

<script>
export default {
  name: "LoginPage",
  props: [],
  data(){
    return{
    usuario: '',
    password: ''      
    }
  },
  methods: {
    cambiarValor() {
      if(this.usuario == "admin" && this.password == "123"){
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
</style>
