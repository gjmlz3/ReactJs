import  ListPlants  from "../Components/Data/ListPlants.json";

export const pedirDatos = () => {
    return new Promise ((resolve, reject) => {
        setTimeout ( () => {
            resolve(ListPlants);        
    }, 500)
   
})
}

export const pedirItemPorId = (id) => {
    return new Promise((resolve, reject) => {

      const item = ListPlants.find((el) => el.id === id);
      
      if (item) {
        resolve(item);
      } else {
        reject({
          error: "No se encontró el producto",
        });
      }
    });
  };
  