import Carousel from "@/components/helpers/Carousel";
import Link from "next/link";
import { FaTag, FaTruck, FaShieldAlt } from 'react-icons/fa';

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 p-6">
      <Carousel />

      {/* Primera sección */}
      <section className="flex flex-col items-center mb-20 mt-20 justify-center bg-white">
        <h1 className="text-4xl text-center bg-black rounded-lg p-3 font-thin text-customBgCard mb-12 mx-auto max-w-4xl">
          Cada paso que das en el entrenamiento es un avance hacia tu mejor versión
        </h1>
        <p className="text-lg text-center mb-8 max-w-3xl">
          Bienvenidos a StepUp, la tienda online donde la pasión por el deporte se encuentra con la moda. Aquí ofrecemos una amplia gama de zapatillas deportivas diseñadas para maximizar tu rendimiento en cada actividad. Desde running hasta entrenamiento, y desde fútbol hasta deportes urbanos, nuestras zapatillas combinan tecnología avanzada, confort y estilo para acompañarte en cada paso.
        </p>
        <Link href="/home" className="px-6 py-3 bg-customBg text-white text-lg font-thin rounded-lg hover:bg-customHoverButton transition duration-300 mb-8">
          Te invitamos a conocer nuestros productos
        </Link>
      </section>

      {/* Segunda sección */}
      <section className="flex flex-col items-center justify-center min-h-screen bg-customBgPromos text-customTextPromos py-16 px-6 md:px-12">
        <h2 className="text-2xl font-bold text-center mb-8">¿Por qué elegirnos?</h2>
        <div className="flex flex-col md:flex-row justify-around items-start gap-8">
          {/* Tarjeta 1 */}
          <div className="flex items-start border border-gray-300 rounded-lg p-4 hover:cursor-pointer hover:text-zinc-800 hover:bg-slate-300 shadow-lg">
            <FaTag className="text-5xl text-yellow-300 mr-4" />
            <div>
              <p className="text-lg font-medium">Descuentos exclusivos en cada compra</p>
              <p className="text-sm mt-1">Aprovecha nuestras ofertas especiales y ahorra en cada pedido. Recibe descuentos en productos seleccionados y promociones personalizadas solo para ti.</p>
            </div>
          </div>

          {/* Tarjeta 2 */}
          <div className="flex items-start border border-gray-300 rounded-lg p-4 hover:cursor-pointer hover:text-zinc-800 hover:bg-slate-300 shadow-lg">
            <FaTruck className="text-5xl text-green-300 mr-4" />
            <div>
              <p className="text-lg font-medium">Envíos sin cargos en pedidos mayores a $100000</p>
              <p className="text-sm mt-1">Realiza tus compras con tranquilidad y recibe tu pedido sin costos adicionales si superas el monto mínimo de compra. ¡No te preocupes por el costo del envío!</p>
            </div>
          </div>

          {/* Tarjeta 3 */}
          <div className="flex items-start border border-gray-300 rounded-lg p-4 hover:cursor-pointer hover:text-zinc-800 hover:bg-slate-300 shadow-lg">
            <FaShieldAlt className="text-5xl text-blue-300 mr-4" />
            <div>
              <p className="text-lg font-medium">Compra segura con nuestra garantía de devolución</p>
              <p className="text-sm mt-1">Compra con confianza gracias a nuestra política de devolución. Si no estás satisfecho con tu compra, te ofrecemos una fácil y rápida devolución sin complicaciones.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
