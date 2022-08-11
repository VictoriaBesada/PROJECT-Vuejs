import Vuex from "vuex"
import Vue from "vue"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    carrito: [],
    productos: [],
    msg: "Mensaje x defecto desde store",
    usuario: {
      nombre: "",
    },
    usuarios: []
  },
  mutations: {
    cambiarElMensaje: (state, payload) => {
      if (payload) state.msg = payload;
    },
    agregarAlCarrito: (state, payload) => {
      let o = state.carrito.find((x) => x.id === payload.id);
      if (o) {
        payload = { ...payload, cantidadCarrito: o.id + 1 };
      }
      debugger;
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
    setMensaje: ({ commit }, payload) => {
      setTimeout(() => {
        commit("cambiarMensaje", payload);
      }, 5000);
    },
    getAllProducts: async ({ commit }) => {
      let data = await fetch(
        `https://62f2b930a84d8c9681190576.mockapi.io/productos`
      );
      let datados = await data.jason();
      commit("obtener productos", productos);
    },
    getAllUsers: async ({ commit }) => {
      let data = await fetch(
        `https://62f2b930a84d8c9681190576.mockapi.io/usuarios`
      );
      let datados = await data.jason();
      commit("obtener usuarios", usuarios);
    },
  },
});