<template>
    <div>
      <h2>List of Dog Breeds</h2>
      <ul>
        <li v-for="breed in dogBreeds" :key="breed">{{ breed }}</li>
      </ul>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { useStore } from 'vuex';
  
  export default defineComponent({
    name: 'BreedsList',
    computed: {
      dogBreeds() {
        return this.$store.state.dogBreeds;
      },
    },
    mounted() {
      // No need to dispatch the action here; dataService.ts will handle it
    },
  });
  </script>
  