import '../Inicio/Inicio.css'
import ImagenRectangular from './Assets/ImagenRectangular.jpg'
import ImagenCuadradaUno from './Assets/ImagenCuadradaUno.jpg'; 
import ImagenCuadradaDos from './Assets/ImagenCuadradaDos.jpg'; 


const Inicio = () => {
  return (
    <div className="container">
      <h1>Bienvenido a nuestra tienda de plantas de interior</h1>
      <div className="rectangular-image-container">
        <img src={ImagenRectangular} alt="Imagen rectangular" className="rectangular-image" />
      </div>
      <p>Embellece tu hogar con la belleza natural de las plantas de interior. En nuestra tienda, encontrarás una amplia selección de plantas exóticas y hermosas que agregarán vida y frescura a tu espacio.</p>
      
      <h2>Descubre la magia de las plantas de interior</h2>
      <p>Las plantas de interior no solo son una adición estética a tu hogar, sino que también ofrecen numerosos beneficios para la salud y el bienestar. Desde mejorar la calidad del aire hasta crear un ambiente relajante, estas plantas son más que solo decoración.</p>
      <p>En nuestra tienda, nos enorgullece ofrecer una variedad de plantas de interior, cada una seleccionada cuidadosamente por su belleza y su capacidad para prosperar en entornos interiores. Ya sea que busques plantas colgantes para añadir un toque de elegancia, suculentas para agregar un toque moderno o plantas de follaje exuberante para crear una sensación de selva tropical, tenemos la planta perfecta para cada estilo y preferencia.</p>
      <div className="square-image-container">
        <img src={ImagenCuadradaUno} alt="Imagen cuadrada 1" className="square-image" />
      </div>
      <h2>Calidad y cuidado excepcionales</h2>
      <p>Nos comprometemos a brindarte plantas de la más alta calidad. Trabajamos con productores especializados que cultivan estas plantas con cuidado y experiencia. Cada planta que ofrecemos ha sido inspeccionada y seleccionada para garantizar que esté en óptimas condiciones antes de llegar a tu hogar.</p>
      <p>Además, estamos aquí para ayudarte a cuidar y mantener tus plantas de interior. Nuestro equipo de expertos en jardinería estará encantado de brindarte consejos y recomendaciones sobre el riego adecuado, la ubicación ideal y otros aspectos importantes para garantizar que tus plantas se mantengan saludables y florezcan en tu espacio interior.</p>
      <div className="square-image-container">
        <img src={ImagenCuadradaDos} alt="Imagen cuadrada 2" className="square-image" />
      </div>
      <h2>Explora nuestra selección y crea un oasis verde en tu hogar</h2>
      <p>Te invitamos a explorar nuestro catálogo en línea, donde encontrarás una amplia variedad de plantas de interior disponibles para su compra. Cada planta viene con descripciones detalladas y fotografías para ayudarte a elegir la planta perfecta para tu espacio.</p>
      <p>Ya sea que estés buscando una planta para tu sala de estar, dormitorio, cocina u oficina, estamos aquí para ayudarte a crear un oasis verde que te inspire y te brinde alegría.</p>
      <p>¡Comienza tu viaje hacia un hogar más verde y vibrante con nosotros hoy mismo!</p>
    </div>
  );
};

export default Inicio;

