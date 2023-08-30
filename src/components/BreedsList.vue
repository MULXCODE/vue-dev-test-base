<template>
  <div class="breeds-list">
    <h1>Breeds List</h1>
    <!-- <button class="button" @click="setup()">List All Breeds from API</button> -->
    <mwc-button raised @click="setup()" label="List All Breeds from API"></mwc-button>

    <!-- {{ msg }} -->
    {{ store.state.breedsLoaded }}
    <mwc-drawer>
      <div class="surface-list">
        <h2>List of Dog Breeds</h2>
        <ul>
          <li v-for="(breed, key) in data" :key="key">{{ key }}<mwc-checkbox @change="toggleParent(key)"></mwc-checkbox>
            <ul>
              <li v-for="(subbreed, bkey) in breed" :key="bkey">
                <!-- <h3>{{ bkey }}</h3> -->
                <h4>{{ subbreed }}</h4>
                <mwc-checkbox></mwc-checkbox>
              </li>
            </ul>

          </li>
        </ul>
      </div>
    </mwc-drawer>


    <mwc-list>

      <mwc-list-item v-for="(breed, key) in data" :key="key">
        <div class="list-card">
          <h3>{{ key }}</h3>
          <mwc-checkbox @change="toggleParent(key)"></mwc-checkbox>

          <mwc-list-item v-for="(subbreed, bkey) in breed" :key="bkey">
            <div class="list-card">
              <h3>{{ bkey }}</h3>
              <h4>{{ subbreed }}</h4>
              <mwc-checkbox></mwc-checkbox>
            </div>
          </mwc-list-item>
        </div>
        <!-- <mwc-icon >pets</mwc-icon> -->
      </mwc-list-item>
    </mwc-list>
    <!-- <li v-for="(breed, key) in data" :key="key">
      <div class="list-card">{{ key }}</div>
    </li> -->

    <!-- {{ data }} -->
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { useStore } from 'vuex'
import axios from 'axios';
import store from '@/store';
import '@material/mwc-button';
import '@material/mwc-list';

import '@material/mwc-checkbox';
// mwc-formfield
// mwc-icon
// mwc-drawer


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

  testdata() {
    return {
      treeData: [
        {
          label: 'Parent 1',
          children: [
            { label: 'Child 1.1' },
            { label: 'Child 1.2' },
          ],
        },
        {
          label: 'Parent 2',
          children: [
            { label: 'Child 2.1' },
            { label: 'Child 2.2' },
          ],
        },
      ],
    };
  }

  toggleParent(key: string) {
    console.log("Toggle parent", key);
    // this.treeData[key].childrenVisible = !this.treeData[key].childrenVisible;

  }

}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.surface-list {
  background-color: #daebec;
  border: 0.5px solid #15603e;
  padding: 4px 4px;
  max-width: 100vw;
  width: 360px;

  li {
    background-color: #daebec;
    border: 0.5px solid #15603e;
    padding: 4px 4px;
    max-width: 100vw;
    min-width: 220px;
    font-size: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    ul {
      background-color: #daebec;
      border: 0.5px solid #15603e;
      padding: 4px 4px;
      max-width: 100vw;
      min-width: 0px;
      font-size: 0.8rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
}



h3 {
  // margin: 40px 0 0;
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
  font-size: 1rem;
  cursor: pointer;
}

.list-card {

  background-color: #ffffff;
  border: 0.5px solid #15603e;
  padding: 4px 4px;
  border-radius: 4px;
  text-align: center;
  text-decoration: none;
  font-size: 1rem;
  cursor: pointer;
}
</style>
