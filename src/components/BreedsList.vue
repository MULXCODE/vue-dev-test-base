<template>
  <div class="breeds-list">
    <h1>Breeds List</h1>
    <!-- <button class="button" @click="setup()">List All Breeds from API</button> -->
    <mwc-button raised @click="setup()" label="List All Breeds from API"></mwc-button>
    <div class="image-grid">
      <div v-for="(image, index) in store.state.breedImages" :key="index" class="image-grid-item">
        <img :src="image" alt="Dog" />
      </div>
    </div>
    <!-- {{ msg }} -->
    <!-- {{ store.state.breedsLoaded }} -->
    <!-- {{ store.state.breeds }} -->
    <!-- {{ store.state.selectedBreeds }} -->
    <!-- {{ store.state.breedImages }} -->
    <!-- <img src="{{ store.state.breedImages[0] }}" alt="Dog image" /> -->
    <!-- <mwc-drawer> -->
    <div class="surface-list">
      <h2>List of Dog Breeds</h2>
      <ul>
        <li v-for="(breed, key) in store.state.breeds" :key="key">{{ key }}<mwc-checkbox
            @change="toggleParent(key)"></mwc-checkbox>
          <ul v-if="breed">
            <li v-for="(subbreed, bkey) in breed" :key="bkey">
              <!-- <h3>{{ bkey }}</h3> -->
              <h4>{{ subbreed }}</h4>
              <mwc-checkbox @change="toggleChild(key, bkey)"></mwc-checkbox>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <!-- </mwc-drawer> -->
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

  // notes:
  //   data?(): object;
  //   beforeCreate?(): void;
  //   created?(): void;
  //   beforeMount?(): void;
  //   mounted?(): void;
  //   beforeUnmount?(): void;
  //   unmounted?(): void;
  //   beforeUpdate?(): void;
  //   updated?(): void;
  //   activated?(): void;
  //   deactivated?(): void;
  //   render?(): VNode | void;
  //   errorCaptured?(err: Error, vm: Vue, info: string): boolean | undefined;
  //   serverPrefetch?(): Promise<unknown>;



  setup() {
    // console.log(this);

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
      console.log(this.data);
      store.state.breedsLoaded = true;
      store.state.breeds = data;
      // store.mutations.setBreedsList(data);

    });

    return {
      data: this.data
    };
  }

  toggleParent(key: string | number) {
    console.log("Toggle parent", key);
    this.toggleChild(key, 0);
  }

  toggleChild = async (parentKey: string | number, subbreedKey: string | number) => {
    console.log("Toggle child", parentKey, subbreedKey);
    const breed = parentKey;
    if (breed) {
      this.selectionChanged(breed);

      try {
        const response = await axios.get(`https://dog.ceo/api/breed/${parentKey}/images/random/10`);
        const images = response.data.message;
        console.log("Images", images);
        // Domore with the images, like display them or store, edit order, delete
        store.state.breedImages = images;
      } catch (error) {
        console.error('Error fetching dog images:', error);
      }
    }
  };



  selectionChanged(breed: any) {
    console.log("Selection changed", breed);
    // do logic for selection change
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

.image-grid {
  max-width: 90vw;
  margin: 0 auto;
  display: grid;
  flex-wrap: wrap;
  flex: 1 1 auto;
  grid-template-columns: repeat(5, 1fr);
  /* 5 columns */
  grid-template-rows: repeat(5, 1fr);
  /* 5 columns */

  grid-gap: 10px;
  /* Gap between images */
}

.image-grid-item
{
  display: flex;
  padding:4px;
  background-color: #222222;
  align-items: center;
  justify-content: center;
  border: #15603e 0.5px solid;
  // border-radius: 50%;
  overflow: hidden;

img {
  max-width: 220px;
  width:100%;
  min-width: 64px;
  height: auto;
}
}

</style>
