<template>
  <div>
    <h1>Selected Breeds</h1>
    <ul>
      <li v-for="breed in selectedBreeds" :key="breed">{{ breed }}</li>
    </ul>
    <button @click="updateSelectedBreeds(['Golden Retriever', 'Labrador'])">Select Breeds</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  computed: {
    ...mapState({
      selectedBreeds: (state) => state.selectedBreeds,
    }),
  },
  methods: {
    ...mapMutations({
      updateSelectedBreeds: 'setSelectedBreeds',
    }),
  },
};
</script>
