import './Asesoramiento.css';
import PlantaInterior1 from './Assets/PlantaInterior1.jpg'
import PlantaInterior2 from './Assets/PlantaInterior2.jpg'
import PlantaInterior3 from './Assets/PlantaInterior3.jpg'
import PlantaInterior4 from './Assets/PlantaInterior4.jpg'
import PlantaInterior5 from './Assets/PlantaInterior5.jpg'

const Asesoramiento = () => {
  return (
    <div className="container">
      <h1>Descubre la belleza natural para tu hogar</h1>
      <p>
        Con nuestras plantas de interior exquisitamente seleccionadas en Verdecita, puedes transformar tu hogar con el poder de la naturaleza.
      </p>
      <h2>Consejos para elegir y cuidar tus plantas de interior:</h2>
      <ul className="image-list">
        <li className="image-list-item">
          <div className="square-image-container">
            <img src={PlantaInterior1} alt="Imagen 1" className="square-image" />
          </div>
          Conoce tus necesidades: Asegúrate de seleccionar plantas que se adapten a las condiciones específicas de tu hogar.
        </li>
        <li className="image-list-item">
          Estilo y personalidad: Agrega estilo y personalidad a tu espacio con una variedad de plantas.
          <div className="square-image-container">
            <img src= {PlantaInterior2} alt="Imagen 2" className="square-image" />
          </div>
        </li>
        <li className="image-list-item">
          <div className="square-image-container">
            <img src= {PlantaInterior3}alt="Imagen 3" className="square-image" />
          </div>
          Considera el mantenimiento: Comienza con plantas de bajo mantenimiento si eres nuevo en el cuidado de plantas.
        </li>
        <li className="image-list-item">
          Juega con la variedad: Combina diferentes tipos de plantas para agregar dimensión y textura.
          <div className="square-image-container">
            <img src= {PlantaInterior4} alt="Imagen 4" className="square-image" />
          </div>
        </li>
        <li className="image-list-item">
          <div className="square-image-container">
            <img src= {PlantaInterior5} alt="Imagen 5" className="square-image" />
          </div>
          No olvides los accesorios: Complementa tus plantas con macetas elegantes y otros accesorios decorativos.
        </li>
      </ul>
      <p>
        Para obtener más información y asesoramiento personalizado, contáctanos en <a href="mailto:asesoramiento@verdecita.com">asesoramiento@verdecita.com</a>.
      </p>
    </div>
  );
}

export default Asesoramiento;
