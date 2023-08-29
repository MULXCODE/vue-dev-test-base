<template>
  <div class="home">
    <!-- <img alt="Logo" src="../assets/logo.png" /> -->
    <Home msg="Welcome Dog Breeds + Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Home from "@/components/Home.vue"; // @ is an alias to /src

@Options({
  components: {
    Home,
  },
})
export default class HomeView extends Vue {}
</script>
