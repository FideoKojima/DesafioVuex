import { createStore } from "vuex";
import jsonData from "../db/juegos.json";

export default createStore({
  state: {
    juegos: jsonData,
  },
  getters: {},
  mutations: {
    modificarStockJuego(state, { codigo, operacion }) {
      state.juegos = state.juegos.map((juego) => {
        if (juego.codigo === codigo) {
          if (operacion === "suma") {
            juego.stock++;
          } else if (operacion === "resta" && juego.stock > 0) {
            juego.stock--;
          } else if (operacion === "resta" && juego.stock === 0) {
            alert(`Ya no queda stock del juego: ${juego.nombre}`);
          }
        }
        return juego;
      });
    },
  },
  actions: {
    async modificarStock({ commit }, data) {
      commit("modificarStockJuego", data);
    },
  },
  modules: {},
});
