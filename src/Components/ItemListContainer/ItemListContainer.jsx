import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';


const ItemListContainer = ({ greeting }) => {
  const [plantData, setPlantData] = useState([]);

  useEffect(() => {
    fetch('/ListPlants.json')
      .then((response) => response.json())
      .then((data) => setPlantData(data))
      .catch((error) => console.error('Error fetching plant data:', error));
  }, []);

  return (
    <div>
      <h1>{greeting}</h1>
      <ItemList plantData={plantData} />
    </div>
  );
};

export default ItemListContainer;
