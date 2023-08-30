<template>
  <div class="breeds-list">
    <h1>Breeds List</h1>
    <button class="button" @click="setup()">List All Breeds from API</button>
    <!-- {{ msg }} -->
    {{ store.state.breedsLoaded }}
    
    <li v-for="(breed, key) in data" :key="key">{{ key}}</li>

    <!-- {{ data }} -->
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { useStore } from 'vuex'
import axios from 'axios';
import store from '@/store';


@Options({
  props: {
    msg: String,

  },
})
export default class BreedsList extends Vue {
  store = useStore()
  msg?: string;


  setup() {
    
    console.log("Setup breeds list");
    const fetchDogBreeds = async () => {
      // try {

      const response = await axios.get('https://dog.ceo/api/breeds/list/all');
      console.log("Loading data...");
      
      return response.data.message; // Returns an object with breed names
      // } catch (error) {
      // throw error;
      // }
    };

    fetchDogBreeds().then((data) => {

      console.log(data);
      this.data = data;
      // store.dispatch('setBreeds', data);
      store.state.breedsLoaded = true;
      store.state.breedList = data;
      // store.mutations.setBreedsList(data);

    });


    return {
      data: [],
    };
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.button {
  background-color: #15603e;
  border: none;
  color: white;
  padding: 8px 32px;
  border-radius: 4px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
}
</style>
