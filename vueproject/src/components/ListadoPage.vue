<template>
  <div>
    <h1>Listado Page</h1>
    <a @click="$emit('changeFlagFromListado')">Salir</a>
  </div>
</template>

<script>
export default {
  name: "ListadoPage",
  props: [],
  data (){
    return{
      carro: [],
      listado: []
    }
  }
};
</script>

<style scoped>
</style>
