import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const url = "https://jsonplaceholder.typicode.com/todos/";
const headers = { Accept: "application/json" };

export default new Vuex.Store({
  state: {
    allRestaurants: ["dd"],
  },
  mutations: {
    setRestaurants(state, payload) {
      debugger;
      state.allRestaurants = payload;
    },
  },
  actions: {
    async setRestaurants(state) {
      const restaurant = await fetch(url, { headers });
      const j = await restaurant.json();
      const name = await j.map((restaurant) => restaurant.title);
      this.state.allRestaurants = name;

      state.commit("allRestaurants", name);
      // name of method, data
    },
  },
  modules: {},
  getters: {
    getAllRestaurants: (state) => state.allRestaurants,
    // console.log(getAllRestaurants)
  },
});
