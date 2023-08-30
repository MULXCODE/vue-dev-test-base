// DataService.ts
import axios from 'axios';


const BASE_URL = 'https://dog.ceo/api';



const dataService  = ({
  async getBreeds(): Promise<Record<string, string[]>> {
    const response = await axios.get(`${BASE_URL}/breeds/list/all`);
    return response.data.message;
  },

  async getImages(breed: string, maxImages: number): Promise<string[]> {
    const response = await axios.get(`${BASE_URL}/breed/${breed}/images/random/${maxImages}`);
    return response.data.message;
  },

  async getBreedList(): Promise<string[]> {
    const response = await axios.get(`${BASE_URL}/breeds/list/all`);
    
    return Object.keys(response.data.message);
  },


  async getBreedListDev(): Promise<string[]> {
    const response = {data:    {
      "message": {
          "affenpinscher": [],
          "african": [],
          "airedale": [],
          "akita": [],
          "appenzeller": [],
          "australian": [
              "shepherd"
          ],
          "basenji": [],
          "beagle": [],
          "bluetick": [],
          "borzoi": [],
          "bouvier": [],
          "boxer": [],
          "brabancon": [],
          "briard": [],
          "buhund": [
              "norwegian"
          ],
          "bulldog": [
              "boston",
              "english",
              "french"
          ],
          "weimaraner": [],
          "whippet": [],
          "wolfhound": [
              "irish"
          ]
      },
      "status": "success"
  }};

    return Object.keys(response.data.message);
 
  }



});
export default dataService;