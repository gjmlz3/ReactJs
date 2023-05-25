import { useEffect, useState } from 'react';
import Item from '../Item/Item';


const ItemDetailContainer= () => {
  const [plantData, setPlantData] = useState([]);

  useEffect(() => {
    fetch('/ListPlants.json')
      .then((response) => response.json())
      .then((data) => setPlantData(data))
      .catch((error) => console.error('Error fetching plant data:', error));
  }, []);

return (
  <div className=''>
    <Item {...plantData}></Item>
  </div>
)
 
};

export default ItemDetailContainer;
