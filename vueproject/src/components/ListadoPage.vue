<template>
  <div>
    <h1>Listado Page</h1>
    <a @click="desloguear">Salir</a>
  </div>
</template>

<script>
export default {
  name: "ListadoPage",
  props: [],
  data (){
    return{

    }
  },
  methods: {
    desloguear() {
      this.$emit("changeFlagFromListado");
    }
    },
};
</script>

<style scoped>
</style>
