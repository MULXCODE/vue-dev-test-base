import { createStore } from "vuex";
import { mutations, STORAGE_KEY } from './mutations'

export default createStore({
  state: {
    breedsLoaded: false,
    breedList: [],
    selectedBreeds: [],
    maxImages: 10,
    },
  getters: {},
  mutations: {},
          
  
  actions: {},
  modules: {},
});
