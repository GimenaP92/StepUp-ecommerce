import { AppDataSource } from "../config/dataSource";
import { Product } from "../entities/Product";
import { CategoryRepository } from "../repositories/category.respository";
import { ProductRepository } from "../repositories/product.repository";

interface IProduct {
  name: string;
  price: number;
  description: string;
  image: string;
  categoryId: number;
  stock: number;
  categoryName?: string; 
}

const productsToPreLoad: IProduct[] = [
  {
    name: "Ekiden",
    price: 85999,
    description:
      "Una remera de alto rendimiento es esencial en el guardarropa de todo corredor, y la remera de Running Ekiden (Unisex) no es la excepción.",
    image:
      "https://res.cloudinary.com/dbtfna8ev/image/upload/v1729475068/Remera_Ekiden_smnqgp.webp",
    categoryId: 1,
    stock: 10,
  },
  {
    name: "Essentials",
    price: 40999,
    description:
      "Confeccionada en un tejido ultraligero con un ajuste estilizado, esta prenda para uso diario luce un logo reflectivo que se encarga de hacerte visible en todo momento. La tecnología de absorción adidas AEROREADY mantiene tu piel fresca y seca en todo momento.",
    image:
      "https://res.cloudinary.com/dbtfna8ev/image/upload/v1729475250/Remera_Essentials_hcuhim.avif",
    categoryId: 1,
    stock: 10,
  },
  {
    name: "Power",
    price: 64999,
    description:
      "Enfrentate a cada repetición con esta camiseta adidas. Diseñada para entrenamientos de fuerza de alta intensidad, la tecnología AEROREADY mantiene tu cuerpo seco y cómodo. Las 3 Tiras verticales en la espalda dejan en claro que llegaste para dominar tu entrenamiento",
    image:
      "https://res.cloudinary.com/dbtfna8ev/image/upload/v1729475673/Remera_Power_vj1xsn.avif",
    categoryId: 1,
    stock: 10,
  },
  {
    name: "Aerorady",
    price: 51999,
    description:
      "Sin importar si estás corriendo por el asfalto o corriendo en la pista, esta remera de running mantiene tu cuerpo cómodo mientras superás tus límites. La tecnología AEROREADY absorbe la humedad para mantener tu cuerpo seco y cómodo durante tus entrenamientos más intensos. Los detalles reflectivos te hacen visible en condiciones de poca luz. ",
    image:
      "https://res.cloudinary.com/dbtfna8ev/image/upload/v1729475980/Remera_AEROREADY_cqpmiv.avif",
    categoryId: 1,
    stock: 10,
  },
  {
    name: "Airchill",
    price: 70999,
    description:
      "Esta remera de running adidas está diseñada para inspirarte a salir a correr y experimentar las vistas y los sonidos de la naturaleza. El tejido absorbente AEROREADY y la ventilación integrada mantienen tu piel seca y fresca kilómetro tras kilómetro.",
    image:
      "https://res.cloudinary.com/dbtfna8ev/image/upload/v1729476205/Remera_Airchill_zkm0os.avif",
    categoryId: 1,
    stock: 10,
  },
  {
    name: "Adizero Running",
    price: 79999,
    description:
      "Mantene la concentración y superá tus límites con esta remera de running. La tecnología AEROREADY absorbe la humedad de tu cuerpo para mantener tu cuerpo seco y cómodo mientras corrés cualquier distancia. Su diseño liviano con malla te brinda transpirabilidad incluso cuando aumentás el ritmo.",
    image:
      "https://res.cloudinary.com/dbtfna8ev/image/upload/v1729476444/Remera_Run_It_cc2sgj.avif",
    categoryId: 1,
    stock: 10,
  },
  {
    name: "Otr E 3S",
    price: 59999,
    description:
      "Otr E 3S Tee es un nuevo producto para Mujer. Te invitamos a ver las imágenes para apreciar más detalles desde diferentes ángulos. Si ya conocés Otr E 3S Tee podés dejar una reseña abajo; siempre nos encanta conocer tu opinión.",
    image:
      "https://res.cloudinary.com/dbtfna8ev/image/upload/v1729476329/OTR_E_3S_xf6j5k.avif",
    categoryId: 1,
    stock: 10,
  },
  {
    name: "Ultimate",
    price: 70999,
    description:
      "Diseñada para seguirle el ritmo a tu carrera, esta remera de running está hecha con tecnología HEAT.RDY para garantizar que tu cuerpo se mantenga fresco y cómodo kilómetro tras kilómetro. Las uniones en el dobladillo y las mangas aseguran movimientos libres de rozaduras, y los detalles reflectivos brillan en condiciones de poca luz. Este producto está hecho con materiales 100% reciclados. Utilizando materiales reciclados disminuimos los residuos, nuestra dependencia de los recursos finitos y la huella que generan los productos que fabricamos.",
    image:
      "https://res.cloudinary.com/dbtfna8ev/image/upload/v1729476573/Remera_Ultimate_ruobwd.avif",
    categoryId: 1,
    stock: 10,
  },
  {
    name: "Run It",
    price: 40999,
    description:
      "Dejá ver tu originalidad mientras ponés tu cuerpo en movimiento. La colección Run It celebra la expresión individual a la vez que te ayuda a progresar, empoderándote para sacarle el máximo provecho a tus carreras.",
    image:
      "https://res.cloudinary.com/dbtfna8ev/image/upload/v1729476444/Remera_Run_It_cc2sgj.avif",
    categoryId: 2,
    stock: 10,
  },
  {
    name: "Boston",
    price: 23599,
    description:
      "La Maratón de Boston® es una carrera. Pero también es un objetivo, un plan de entrenamiento y está en tu mente todos los días antes del gran reto. Las zapatillas Adizero Boston 12 están diseñadas para correr distancias medias y largas. Inyectan una sensación de propulsión a cada entrenamiento con la infusión de fibra de vidrio con las varillas ENERGYRODS 2.0, que limitan la pérdida de energía bajo el pie. Son rápidas, pero esto no se consigue a expensas de la durabilidad. La mediasuela combina la amortiguación Lightstrike Pro ultraliviana con una nueva versión de la mediasuela Lightstrike 2.0 EVA resistente.",
    image:
      "https://res.cloudinary.com/dbtfna8ev/image/upload/v1724764137/Boston_szqemc.webp",
    categoryId: 2,
    stock: 10,
  },
  {
    name: "Supernova-rise",
    price: 259799,
    description:
      "Galardonadas con el premio Women's Health al mejor calzado de running en todos los niveles, hemos diseñado las Supernova Rise para mantenerte cómoda kilómetro tras kilómetro. Con tecnología Dreamstrike+, la mediasuela está amortiguada con una espuma rediseñada. Nuestro sistema de varillas de soporte de espuma más densa proporciona una transición sin preocupaciones del talón a la punta. Por último, el ajuste cómodo en el talón combina espuma acolchada y tejido suave para un ajuste más seguro que se siente como si el calzado estuviera abrazando tu talón. Supercómodas. Supernova. Conseguí las tuyas ahora",
    image:
      "https://res.cloudinary.com/dbtfna8ev/image/upload/v1724764137/Supernova_Rise_ardt2z.webp",
    categoryId: 2,
    stock: 10,
  },
  {
    name: "Adi-SL-Rojo",
    price: 235399,
    description:
      "Las zapatillas de running Adizero SL seleccionan lo mejor de nuestra franquicia Adizero que rompe récords mundiales. La mediasuela de EVA LIGHTSTRIKE liviana ofrece resiliencia a la mediasuela para que puedas concentrarte en el próximo paso, mientras que el exterior está hecho de una malla técnica suave que está zonificada en áreas clave. El talón acolchado y la lengüeta brindan una comodidad óptima junto con el antepié Adizero. La suela premium está diseñada para proporcionar tracción",
    image:
      "https://res.cloudinary.com/dbtfna8ev/image/upload/v1724764136/ADIZERO_SL_Rojo_npxnqt.webp",
    categoryId: 2,
    stock: 10,
  },
  {
    name: "Supernova",
    price: 169999,
    description:
      "Hemos diseñado las Supernova Rise para ofrecer máxima comodidad en cada paso. Nuestra tecnología Dreamstrike+ amortigua la mediasuela con ​una espuma rediseñada. ¿Sabes qué la hace tan increíble? Ofrece el equilibrio perfecto entre comodidad y soporte para mantenerte cómodo kilómetro tras kilómetro. Además, tiene un sistema de varillas de soporte de espuma más densa, lo que significa que tendrás una transición libre de preocupaciones del talón hasta la punta. Por último, nuestro Comfort Heel Fit combina espuma acolchada y tejido suave para un ajuste más seguro que se siente como si el calzado estuviera abrazando tu talón",
    image:
      "https://res.cloudinary.com/dbtfna8ev/image/upload/v1724764138/Supernova_iztuht.webp",
    categoryId: 2,
    stock: 10,
  },
  {
    name: "Adios-Pro",
    price: 321999,
    description:
      "Las Adizero Adios Pro 3 son la máxima expresión de los productos Adizero Racing. Fueron diseñadas con y para atletas para lograr hazañas increíbles. Estas zapatillas de running adidas están diseñadas para optimizar la eficiencia del running. Nuestras varillas ENERGYRODS de carbono ofrecen ligereza y firmeza para pasos ágiles y eficientes. La tecnología LIGHTSTRIKE PRO ultraliviana amortigua cada paso con las tres capas de espuma resistente que te ayudan a mantener la energía a largo plazo. Todo sobre una delgada suela de caucho textil para un agarre extraordinario en condiciones mojadas y secas",
    image:
      "https://res.cloudinary.com/dbtfna8ev/image/upload/v1724764137/Adios_Pro_qle0iu.webp",
    categoryId: 2,
    stock: 10,
  },
  {
    name: "AdiStar-Repetitor",
    price: 351999,
    description:
      "Estas zapatillas de running adidas están diseñadas para acompañarte en tus carreras más largas hasta el momento. La mediasuela de doble densidad incluye tecnología REPETITOR suave y ligera y tecnología REPETITOR+ más firme que abraza el talón para brindar soporte y estabilidad. La silueta curvada con curvatura genera pasos suaves e impulso hacia adelante, impulsándote hacia tu próximo paso.",
    image:
      "https://res.cloudinary.com/dbtfna8ev/image/upload/v1724764137/Adistar_Repetitor_ienswh.webp",
    categoryId: 2,
    stock: 10,
  },
  {
    name: "Straide-move",
    price: 321999,
    description:
      "No importa a donde corras, tomate un momento para apreciar la belleza que te rodea. Ese es el mensaje de estas zapatillas de running adidas. Ya sea que estés entrenando para tu primera carrera de 5K o corriendo de manera casual los fines de semana, cumplen con todo lo necesario para brindarte comodidad y soporte. La mediasuela Dreamstrike+ ofrece amortiguación suave que te mantiene en movimiento.",
    image:
      "https://res.cloudinary.com/dbtfna8ev/image/upload/v1724764137/Stride_Move_kivzfv.webp",
    categoryId: 2,
    stock: 10,
  },
  {
    name: "Monogram",
    price: 91999,
    description:
      "Estos shorts te permiten brillar con un estilo impecable. Están confeccionados en tejido jacquard texturizado y presentan una cintura con cordón para que los ajustés a tu medida. Su discreto estampado de monograma y las emblemáticas 3 Tiras a los lados mantienen la esencia del legado deportivo de la marca.",
    image:
      "https://res.cloudinary.com/dbtfna8ev/image/upload/v1729477002/Shorts_Monogram_Negro_IZ2534_21_model_peqrqb.avif",
    categoryId: 3,
    stock: 10,
  },
  {
    name: "Classic Sprinter",
    price: 91999,
    description:
      "El mundo sabe a quién representas cuando luces las 3 Tiras. Refrescá tus looks casuales con estos clásicos shorts sprinter. Son una versión contemporánea de un clásico de nuestros archivos. Su diseño liviano y cómodo incorpora tres bolsillos para que puedas guardar tus objetos personales.",
    image:
      "https://res.cloudinary.com/dbtfna8ev/image/upload/v1729477089/Shorts_Adicolor_Classics_Sprinter_Turquesa_IZ2414_21_model_vlovo0.avif",
    categoryId: 3,
    stock: 10,
  },
  {
    name: "Firebird",
    price: 63999,
    description:
      "Estos shorts son una versión moderna de un modelo original. Reinventados para el mundo de hoy e inspirados en los archivos icónicos, son una mezcla moderna y un ícono de estilo clásico. Con un corte holgado cómodo y confección en tejido de tricot liviano, te permiten moverte con libertad mientras rinden homenaje a la marca que comenzó todo. Los bolsillos laterales añaden practicidad mientras que el cordón de ajuste en la cintura elástica te brinda un ajuste personalizado.",
    image:
      "https://res.cloudinary.com/dbtfna8ev/image/upload/v1729477177/Shorts_Adicolor_Firebird_Negro_IU2368_21_model_e880dd.avif",
    categoryId: 3,
    stock: 10,
  },
  {
    name: "Authentic",
    price: 74999,
    description:
      "Ponete estos shorts de futbol de Argentina con el resto del uniforme alternativo para conseguir el look perfecto para la cancha. Su tejido ligero con tecnología de absorción AEROREADY se encarga de brindar comodidad dentro y fuera de la cancha.",
    image:
      "https://res.cloudinary.com/dbtfna8ev/image/upload/v1729477309/Shorts_Titular_Authentic_Argentina_24_Blanco_Blanco_IN6928_21_model_q30nuj.avif",
    categoryId: 3,
    stock: 10,
  },
  {
    name: "Aeroready",
    price: 52999,
    description:
      " El tejido con tecnología de absorción AEROREADY mantiene tu cuerpo seco de principio a fin sin importar la distancia o el ritmo. El bolsillo con cierre en la parte posterior te permite guardar geles para que puedas recargarte de energía durante la carrera. Los detalles reflectantes te hacen visible en condiciones de poca luz. ",
    image:
      "https://res.cloudinary.com/dbtfna8ev/image/upload/v1729477517/Shorts_Own_the_Run_Base_AEROREADY_Azul_IV5505_21_model_evbrqh.avif",
    categoryId: 3,
    stock: 10,
  },
  {
    name: "Own the Run",
    price: 52999,
    description:
      "Conquistá cada kilómetro con estos shorts de running. La tecnología de absorción AEROREADY mantiene tu cuerpo seco de principio a fin en cada entrenamiento. Los detalles reflectantes te mantienen visible cuando cae el sol. El bolsillo oculto para llaves te permite tener tus pertenencias esenciales siempre a la mano.",
    image:
      "https://res.cloudinary.com/dbtfna8ev/image/upload/v1729477601/Shorts_Con_Bloques_de_Color_Own_the_Run_Verde_IQ3869_21_model_ulrv0x.avif",
    categoryId: 3,
    stock: 10,
  },
  {
    name: "Own",
    price: 62999,
    description:
      "Aprovechá al máximo cada kilómetro. Estos shorts de running incorporan tecnología de absorción AEROREADY que mantiene tu piel seca y tu cuerpo cómodo sin importar la distancia recorrida. Los detalles reflectantes te hacen visible en condiciones de poca luz.",
    image:
      "https://res.cloudinary.com/dbtfna8ev/image/upload/v1729477750/Shorts_Own_the_Run_3_Tiras_Negro_IW0002_21_model_cjidso.avif",
    categoryId: 3,
    stock: 10,
  },
  {
    name: "Running",
    price: 67999,
    description:
      "Aumentá tu ritmo con estos shorts que pueden seguirte el paso. Estos shorts tejidos impulsan tu rendimiento con paneles de malla ubicados de manera estratégica para brindar ventilación donde más la necesitas. La cintura elástica te garantiza comodidad durante cualquier entrenamiento, mientras que los dobladillos sellados eliminan la irritación. Guardá tus llaves o una tarjeta en el bolsillo con cierre y conquistá tu circuito de entrenamiento sin distracciones.",
    image:
      "https://res.cloudinary.com/dbtfna8ev/image/upload/v1729477829/Shorts_Lux_Pacer_Tejidos_Elasticos_con_Bolsillo_de_Cierre_Gris_IS1668_21_model_ffql8u.avif",
    categoryId: 3,
    stock: 10,
  },
  {
    name: "Ekiden",
    price: 194999,
    description:
      "Elevá tu rendimiento con comodidad y estilo con la campera de running Ekiden. Presenta un ajuste ceñido y está confeccionada en tejido antidesgarre de poliamida reciclada. La campera cuenta con una capucha ajustable y un dobladillo para personalizar fácilmente. Incorpora detalles reflectivos para mayor visibilidad en tus carreras matutinas y nocturnas.",
    image:
      "https://res.cloudinary.com/dbtfna8ev/image/upload/v1729478005/Campera_de_Running_Ekiden_Violeta_IS0702_HM1_kpyezb.avif",
    categoryId: 4,
    stock: 10,
  },
  {
    name: "Running",
    price: 191999,
    description:
      "Empacá ligero. Movete rápido. La campera rompevientos Terrex Agravic Windweave Pro te mantiene motivado en los senderos durante los días de viento.",
    image:
      "https://res.cloudinary.com/dbtfna8ev/image/upload/v1729478088/Campera_Rompevientos_Terrex_Agravic_Windweave_Pro_Turquesa_IB1212_HM1_xn9qv5.avif",
    categoryId: 4,
    stock: 10,
  },
  {
    name: "Aeroready",
    price: 109999,
    description:
      "Alcanzá tus metas de fondo con esta campera de running. Confeccionada en tejido antidesgarre que resiste a condiciones climáticas variadas, su ajuste ceñido se adapta a tu cuerpo mientras corres. La tecnología AEROREADY absorbe la humedad para mantener tu cuerpo seco kilómetro tras kilómetro. Ajustá la capucha y el dobladillo para aislarte del frío cuando aumentás el ritmo. Este producto está hecho con materiales 100 % reciclados. Utilizando materiales reciclados disminuimos los residuos, nuestra dependencia de los recursos finitos y la huella que generan los productos que fabricamos.",
    image:
      "https://res.cloudinary.com/dbtfna8ev/image/upload/v1729478170/Campera_Own_the_Run_AEROREADY_Azul_IV7672_21_model_gucver.avif",
    categoryId: 4,
    stock: 10,
  },
  {
    name: "RP3",
    price: 397999,
    description:
      "Sin importar si es un día de lluvia o un día frío, este rompevientos ofrece estilo y comodidad. Enfrentate a los elementos sin sacrificar el estilo casual gracias al corte holgado que crea una vibra relajada. Su diseño práctico incorpora muchos bolsillos y detalles ajustables. Los detalles deportivos como las emblemáticas 3 Tiras en las mangas evocan el legado de adidas. Sal a la calle y luce increíble al hacerlo.",
    image:
      "https://res.cloudinary.com/dbtfna8ev/image/upload/v1729478255/Rompevientos_adidas_Premium_Blanco_IU0216_21_model_dcbcmw.avif",
    categoryId: 4,
    stock: 10,
  },
];



export const preLoadProducts = async () => {
  const products = await ProductRepository.find();
  if (!products.length) {
    for (const productData of productsToPreLoad) {
      const category = await CategoryRepository.findOne({
        where: { id: productData.categoryId },
      });

      if (!category) {
        console.error(`Category with ID ${productData.categoryId} not found.`);
        continue; // Si no existe la categoría, omitimos el producto.
      }

      const product = ProductRepository.create({
        ...productData,
        category,
      });

      await ProductRepository.save(product);
    }
    console.log("Products preloaded");
  }
};