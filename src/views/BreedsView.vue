<template>
  <div class="breeds">
    <h1>Breeds</h1>
    <!-- <img alt="Logo" src="../assets/logo.png" /> -->
    <BreedsList msg="hello from View layer" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import BreedsList from "@/components/BreedsList.vue"; // @ is an alias to /src

@Options({
  components: {
    BreedsList,
  },
})
export default class BreedsView extends Vue {}
</script>
