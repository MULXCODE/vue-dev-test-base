<template>
<div class="hello">
  <h1>{{ msg }}</h1>
        <p>Show 10 images from the selected breed, if two breeds are selected show 10 images in total 5 from each breed.</p>
        <p>Ability to remove images, once all images of a breed are removed that breed should be unselected in the list.</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BreedImages',
    props: {
      msg: String
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
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
  </style>
  