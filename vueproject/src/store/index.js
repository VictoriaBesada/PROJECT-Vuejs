import Vuex from "vuex"
import Vue from "vue"

Vue.use(Vuex);

export default new Vuex.Store({
  /* eslint-disable */
  state: {
    carrito: [],
    productos: [],
    usuario: {
      nombre: "",
    },
    usuarios: [],
  },
  mutations: {
    agregarAlCarrito: (state, payload) => {
      let o = state.carrito.find((x) => x.id === payload.id);
      if (o) {
        payload = { ...payload, cantidadCarrito: o.id + 1 };
      }
      state.carrito.unshift(payload);
    },
    editarUsuario(state, payload) {
      state.usuario.nombre = payload;
    },
    obtenerProductos(state, payload) {
      state.productos = payload;
    },
    setearUsuarios(state, payload) {
      state.usuarios = payload;
    },
  },
  actions: {
    obtenerTodosLosProductos: async ({ commit }) => {
      let data = await fetch(
        `https://62f2b930a84d8c9681190576.mockapi.io/productos`
      );
      let datados = await data.jason();
      commit("obtener productos", productos);
    },
    obtenerTodosLosUsuarios: async ({ commit }) => {
      let data = await fetch(
        `https://62f2b930a84d8c9681190576.mockapi.io/usuarios`
      );
      let datados = await data.jason();
      commit("obtener usuarios", usuarios);
    },
  },
});