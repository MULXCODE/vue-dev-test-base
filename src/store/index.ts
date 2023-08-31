import { createStore } from "vuex";
import { mutations, STORAGE_KEY } from './mutations'


export default createStore({
  state: {
    breedsLoaded: false,
    breeds: [],
    breedImages: [],
    selectedBreeds: [],
    maxImages: 10,
    },
  getters: {},
  mutations: {

// breadsLoaded(state: { breedsLoaded: boolean; }, loaded: boolean) {
//   state.breedsLoaded = loaded;

// }
  },
  actions: {},
  modules: {},
});
