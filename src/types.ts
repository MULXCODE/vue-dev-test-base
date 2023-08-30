// types.ts
export interface Breed {
    name: string;
    subBreeds: string[];
  }
  
  export interface BreedImage {
    breed: string;
    image: string;
  }
  
  export interface AppState {
    selectedBreeds: string[];
    maxImages: number;
    breedList: Breed[];
    breedImages: Record<string, string[]>;
    setBreedImages : any;
    clearBreedImages : any;

  }
  