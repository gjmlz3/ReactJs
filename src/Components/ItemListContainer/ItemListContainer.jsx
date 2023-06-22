import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../Service/config";
import { collection, getDocs, query, where } from "firebase/firestore";
import ItemList from "../ItemList/ItemList";


const ItemListContainer = () => {

  const [productos, setProductos] = useState([]);

  const [titulo, setTitulo] = useState("Productos");

  const cuidados= useParams().cuidados;

  useEffect(() => {
    
    const productosRef = collection(db, "productos");
    const q = cuidados ? query(productosRef, where("cuidados", "==", cuidados)) : productosRef;
    
    getDocs(q)
      .then((resp) => {
        setProductos( resp.docs.map((doc) => {
          return { ...doc.data(), id: doc.id}
        }))
      })

    
  }, [cuidados])
  
  
return (
  <div>
      <ItemList productos={productos} titulo={titulo} cuidados={cuidados}/>
  </div>
)
}

export default ItemListContainer