<template>
  <div>
    <a @click="desloguear"><strong>Salir</strong></a>
    <section style="background-color: #eee">
      <div class="container">
        <div class="container" style="display: flex">
          <div class="form-group" style="margin: 10px">
            <label>Ver lista cursos</label>
            <br />
            <button class="btn btn-primary btn-sm" @click="traerDatos">
              Ver
            </button>
          </div>
          <div class="form-group" style="margin: 10px">
            <label>Agregar un nuevo curso</label>
            <input
              type="text"
              class="form-control"
              aria-describedby="emailHelp"
              placeholder="Nombre del curso"
              v-model="nuevo"
            />
            <button class="btn btn-primary btn-sm" @click="agregarDatos">
              Agregar nuevo curso
            </button>
          </div>

          <div class="form-group" style="margin: 10px">
            <label>Cambiar titulo</label>
            <input
              type="text"
              class="form-control"
              aria-describedby="emailHelp"
              placeholder="Insertar nuevo titulo"
              v-model="nombre"
            />
            <button class="btn btn-primary btn-sm" @click="actualizarNombre">
              Actualizar titulo
            </button>
          </div>
          <div class="form-group" style="margin: 10px">
            <label>Cambiar descripcion</label>
            <input
              type="text"
              class="form-control"
              aria-describedby="emailHelp"
              placeholder="Insertar nueva descripcion"
              v-model="descripcion"
            />
            <button
              class="btn btn-primary btn-sm"
              @click="actualizarDescripcion"
            >
              Actualizar descripcion
            </button>
          </div>
          <div class="form-group" style="margin: 10px">
            <label>Cambiar precio</label>
            <input
              type="text"
              class="form-control"
              aria-describedby="emailHelp"
              placeholder="Insertar nuevo precio"
              v-model="precio"
            />
            <button class="btn btn-primary btn-sm" @click="actualizarPrecio">
              Actualizar precio
            </button>
          </div>

          <div class="form-group" style="margin: 10px">
            <label>Eliminar un curso</label>
            <br />
            <button class="btn btn-primary btn-sm" @click="borrarDatos">
              Eliminar curso
            </button>
          </div>
        </div>
        <div class="row">
          <div>
            <div>
              <div
                class="card col-xl-3 col-lg-4"
                style="display: inline-block"
                v-for="curso in cursos"
                :key="curso.id"
              >
                <img :src="curso.imagen" class="card-img-top" alt="producto" />
                <div
                  class="card-body"
                  @click="
                    () => {
                      selected = curso.id;
                      alert(selected);
                      return actualizarDatos();
                    }
                  "
                >
                  <div class="text-center">
                    <h5 class="card-title">{{ curso.nombre }}</h5>
                    <p class="text-muted mb-4">{{ curso.descripcion }}</p>
                  </div>
                  <div>
                    <div
                      class="d-flex justify-content-between total font-weight-bold mt-4"
                    >
                      <span>Precio unitario</span
                      ><span>{{ curso.precio }}</span>
                    </div>
                  </div>
                  <div style="text-align: center">
                    <button
                      style="margin: 10px"
                      class="btn btn-primary btn-sm"
                      type="button"
                      @click="verDetalle(curso.descripcion)"
                    >
                      Detalles
                    </button>
                    <button
                      style="margin: 10px"
                      class="btn btn-outline-primary btn-sm mt-2"
                      type="button"
                      @click="agregarAlCarrito(curso.id)"
                    >
                      Agregar al carrito
                    </button>
                  </div>
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
  name: "ListadoPage",
  props: {
    msg: String,
  },
  data() {
    return {
      rutaBase: "https://626765be78638336421ee4dd.mockapi.io",
      cursos: [],
      nuevo: "",
      precio: "",
      nombre: "",
      descripcion: "",
      selected: 0,
    };
  },
  methods: {
    alert(payload) {
      alert(payload);
    },
    desloguear() {
      this.$emit("changeFlagFromListado");
    },
    async traerDatos() {
      try {
        let rawData = await fetch(`${this.rutaBase}/cursos`);
        let jsonData = await rawData.json();
        this.cursos = jsonData.sort((a, b) => b.id - a.id);
      } catch (error) {
        console.error(error);
      }
    },
    async agregarDatos() {
      try {
        const nuevoCurso = {
          nombre: this.nuevo,
        };
        const options = {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(nuevoCurso),
        };
        await fetch(`${this.rutaBase}/cursos`, options);
        await this.traerDatos();
      } catch (error) {
        console.error(error);
      }
    },
    async actualizarPrecio() {
      try {
        const actualizarPrecio = {
          precio: this.precio,
        };
        const options = {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(actualizarPrecio),
        };
        await fetch(`${this.rutaBase}/cursos/${this.selected}`, options);
        await this.traerDatos();
      } catch (error) {
        console.error(error);
      }
    },
    async actualizarNombre() {
      try {
        const cambiarNombre = {
          nombre: this.nombre,
        };
        const options = {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(cambiarNombre),
        };
        await fetch(`${this.rutaBase}/cursos/${this.selected}`, options);
        await this.traerDatos();
      } catch (error) {
        console.error(error);
      }
    },
    async actualizarDescripcion() {
      try {
        const cambiarDescripcion = {
          descripcion: this.descripcion,
        };
        const options = {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(cambiarDescripcion),
        };
        await fetch(`${this.rutaBase}/cursos/${this.selected}`, options);
        await this.traerDatos();
      } catch (error) {
        console.error(error);
      }
    },
    async borrarDatos() {
      try {
        const options = {
          method: "DELETE",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        };
        await fetch(`${this.rutaBase}/cursos/${this.selected}`, options);
        await this.traerDatos();
      } catch (error) {
        console.error(error);
      }
    },
    agregarAlCarrito(payload) {
      let objetoCarrito = { ...payload, cantidadCarrito: 1 };
      this.$emit("changeFlagFromListado", objetoCarrito);
    },
    verDetalleProducto(payload) {
      this.$emit("verDetalleProducto", payload);
    },
  },
};
</script>

<style scoped>
.card {
  border-radius: 25px;
  margin: 5px;
}
</style>
