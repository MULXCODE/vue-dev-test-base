export const STORAGE_KEY = 'a-vue-dev-test'

// for testing
if (navigator.webdriver) {
  window.localStorage.clear()
}

export const mutations = {
  setBreedsLoaded(state: { breedsLoaded: boolean; }, loaded: boolean) {
    state.breedsLoaded = loaded;
  },
  setBreedsList(state: { breedsList: any; }, breeds: any) {
    state.breedsList = breeds;
  },

  setSelectedBreeds(state: { selectedBreeds: any; breeds: any[]; }, breeds: any) {
    state.selectedBreeds = breeds;
  },
  setMaxImages(state: { maxImages: number; }, maxImages: number) {
    state.maxImages = maxImages;
  },
    
  addBreed (state: { breeds: any[] }, breed: any) {
    state.breeds.push(breed)
  },

  removeBreed (state: { breeds: any[] }, breed: any) {
    state.breeds.splice(state.breeds.indexOf(breed), 1)
  },

  editBreedSelection (state: { breeds: any[] }, { breed, text = breed.text, done = breed.done }: any) {
    const index = state.breeds.indexOf(breed)

    state.breeds.splice(index, 1, {
      ...breed,
      text,
      done
    })
  }
}