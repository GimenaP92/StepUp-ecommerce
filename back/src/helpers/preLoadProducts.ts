import { AppDataSource } from "../config/dataSource";
import { Product } from "../entities/Product";
import { ProductRepository } from "../repositories/product.repository";

interface IProduct {
  name: string;
  price: number;
  description: string;
  image: string;
  categoryId: number;
  stock: number;
}

const productsToPreLoad: IProduct[] = [
  
  {
    name: "Adizero",
    price: 25999,
    description:
      "El deporte del tenis a máxima velocidad tiene un nuevo look. Ponete estas zapatillas adidas adizero Cybersonic para mantenerte un paso adelante en las canchas de superficie dura. Las varillas ENERGYRODS livianas permiten cambios rápidos de dirección, mientras que la mediasuela Lightstrike de doble densidad y bajo perfil está diseñada para mantenerte siempre en el lugar y en el momento adecuados. El exterior de malla incorpora una zona de abrasión Adituff hecha con un 60% de Boost reciclada que te permite exigirte al máximo en la cancha sin preocuparte por el desgaste.",
    image:
      "https://res.cloudinary.com/dbtfna8ev/image/upload/v1724693412/adizero_fctbiw.webp",
    categoryId: 1,
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
    categoryId: 3,
    stock: 10,
  },
  {
    name: "Adi-SL-Rojo",
    price: 235399,
    description:
      "Las zapatillas de running Adizero SL seleccionan lo mejor de nuestra franquicia Adizero que rompe récords mundiales. La mediasuela de EVA LIGHTSTRIKE liviana ofrece resiliencia a la mediasuela para que puedas concentrarte en el próximo paso, mientras que el exterior está hecho de una malla técnica suave que está zonificada en áreas clave. El talón acolchado y la lengüeta brindan una comodidad óptima junto con el antepié Adizero. La suela premium está diseñada para proporcionar tracción",
    image:
      "https://res.cloudinary.com/dbtfna8ev/image/upload/v1724764136/ADIZERO_SL_Rojo_npxnqt.webp",
    categoryId: 4,
    stock: 10,
  },
  {
    name: "Supernova",
    price: 169999,
    description:
      "Hemos diseñado las Supernova Rise para ofrecer máxima comodidad en cada paso. Nuestra tecnología Dreamstrike+ amortigua la mediasuela con ​una espuma rediseñada. ¿Sabes qué la hace tan increíble? Ofrece el equilibrio perfecto entre comodidad y soporte para mantenerte cómodo kilómetro tras kilómetro. Además, tiene un sistema de varillas de soporte de espuma más densa, lo que significa que tendrás una transición libre de preocupaciones del talón hasta la punta. Por último, nuestro Comfort Heel Fit combina espuma acolchada y tejido suave para un ajuste más seguro que se siente como si el calzado estuviera abrazando tu talón",
    image:
      "https://res.cloudinary.com/dbtfna8ev/image/upload/v1724764138/Supernova_iztuht.webp",
    categoryId: 5,
    stock: 10,
  },
  {
    name: "Adios-Pro",
    price: 321999,
    description:
      "Las Adizero Adios Pro 3 son la máxima expresión de los productos Adizero Racing. Fueron diseñadas con y para atletas para lograr hazañas increíbles. Estas zapatillas de running adidas están diseñadas para optimizar la eficiencia del running. Nuestras varillas ENERGYRODS de carbono ofrecen ligereza y firmeza para pasos ágiles y eficientes. La tecnología LIGHTSTRIKE PRO ultraliviana amortigua cada paso con las tres capas de espuma resistente que te ayudan a mantener la energía a largo plazo. Todo sobre una delgada suela de caucho textil para un agarre extraordinario en condiciones mojadas y secas",
    image:
      "https://res.cloudinary.com/dbtfna8ev/image/upload/v1724764137/Adios_Pro_qle0iu.webp",
    categoryId: 6,
    stock: 10,
  },
  {
    name: "AdiStar-Repetitor",
    price: 351999,
    description:
      "Estas zapatillas de running adidas están diseñadas para acompañarte en tus carreras más largas hasta el momento. La mediasuela de doble densidad incluye tecnología REPETITOR suave y ligera y tecnología REPETITOR+ más firme que abraza el talón para brindar soporte y estabilidad. La silueta curvada con curvatura genera pasos suaves e impulso hacia adelante, impulsándote hacia tu próximo paso.",
    image:
      "https://res.cloudinary.com/dbtfna8ev/image/upload/v1724764137/Adistar_Repetitor_ienswh.webp",
    categoryId: 6,
    stock: 10,
  },
  {
    name: "Straide-move",
    price: 321999,
    description:
      "No importa a donde corras, tomate un momento para apreciar la belleza que te rodea. Ese es el mensaje de estas zapatillas de running adidas. Ya sea que estés entrenando para tu primera carrera de 5K o corriendo de manera casual los fines de semana, cumplen con todo lo necesario para brindarte comodidad y soporte. La mediasuela Dreamstrike+ ofrece amortiguación suave que te mantiene en movimiento.",
    image:
      "https://res.cloudinary.com/dbtfna8ev/image/upload/v1724764137/Stride_Move_kivzfv.webp",
    categoryId: 6,
    stock: 10,
  },
];

export const preLoadProducts = async () => {
  const products = await ProductRepository.find();
  if (!products.length)
    await AppDataSource.createQueryBuilder()
      .insert()
      .into(Product)
      .values(productsToPreLoad)
      .execute();
  console.log("Products preloaded");
};
