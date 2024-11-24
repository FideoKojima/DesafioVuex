<!-- Script JS -->
<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Juegos",
  computed: {
    ...mapState(["juegos"]),
  },
  methods: {
    ...mapActions(["modificarStock"]),
  },
};
</script>

<!-- Template HTML -->
<template>
  <header class="text-center container">
    <h1 class="my-4">Tienda de juegos 32 Bits</h1>
    <h2 class="mt-3 mb-4">Lista de juegos</h2>
  </header>

  <main class="container text-center">
    <table class="table table-hover table-bordered">
      <thead class="f-bold table-light">
        <tr>
          <th>Código</th>
          <th>Nombre</th>
          <th>Stock</th>
          <th>Precio</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="juego in juegos">
          <td>{{ juego.codigo }}</td>
          <td>{{ juego.nombre }}</td>
          <td>{{ juego.stock }}</td>
          <td>{{ juego.precio }}</td>
          <td>
            <div class="btn-group" role="group">
              <button
                class="btn btn-light border"
                @click="
                  modificarStock({ codigo: juego.codigo, operacion: 'suma' })
                "
              >
                +
              </button>
              <button
                class="btn btn-light border"
                @click="
                  modificarStock({ codigo: juego.codigo, operacion: 'resta' })
                "
              >
                -
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </main>
</template>

<!-- Style CSS -->
<style scoped></style>
