import Carousel from "@/components/helpers/Carousel";
import Link from "next/link";
import { FaTag, FaTruck, FaShieldAlt } from 'react-icons/fa';

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 p-6">
      <Carousel />

      {/* First Section */}
      <section className="flex flex-col items-center mb-20 mt-20 justify-center bg-white">
        <h1 className="text-4xl text-center bg-black rounded-lg p-3 font-thin text-customBgCard mb-12 mx-auto max-w-4xl">
          Every step you take in training is progress toward your best version
        </h1>
        <p className="text-lg text-center mb-8 max-w-3xl">
          Welcome to StepUp, the online store where passion for sports meets fashion. 
          Here, we offer a wide range of sports shoes designed to maximize your performance in every activity. 
          From running to training, and from soccer to urban sports, our shoes combine advanced technology, comfort, 
          and style to accompany you every step of the way.
        </p>
        <Link href="/home" className="px-6 py-3 bg-customBg text-white text-lg font-thin rounded-lg hover:bg-customHoverButton transition duration-300 mb-8">
          We invite you to explore our products
        </Link>
      </section>

      {/* Second Section */}
      <section className="flex flex-col items-center justify-center min-h-screen bg-customBgPromos text-customTextPromos py-16 px-6 md:px-12">
        <h2 className="text-2xl font-bold text-center mb-8">Why choose us?</h2>
        <div className="flex flex-col md:flex-row justify-around items-start gap-8">

          {/* Card 1 */}
          <div className="flex items-start border border-gray-300 rounded-lg p-4 hover:cursor-pointer hover:text-zinc-800 hover:bg-slate-300 shadow-lg">
            <FaTag className="text-5xl text-yellow-300 mr-4" />
            <div>
              <p className="text-lg font-medium">Exclusive discounts on every purchase</p>
              <p className="text-sm mt-1">
                Take advantage of our special offers and save on every order. 
                Enjoy discounts on selected products and personalized promotions just for you.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex items-start border border-gray-300 rounded-lg p-4 hover:cursor-pointer hover:text-zinc-800 hover:bg-slate-300 shadow-lg">
            <FaTruck className="text-5xl text-green-300 mr-4" />
            <div>
              <p className="text-lg font-medium">Free shipping on orders over $100,000</p>
              <p className="text-sm mt-1">
                Shop with peace of mind and receive your order without additional charges 
                when your purchase exceeds the minimum amount. No need to worry about shipping costs!
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex items-start border border-gray-300 rounded-lg p-4 hover:cursor-pointer hover:text-zinc-800 hover:bg-slate-300 shadow-lg">
            <FaShieldAlt className="text-5xl text-blue-300 mr-4" />
            <div>
              <p className="text-lg font-medium">Secure shopping with our return guarantee</p>
              <p className="text-sm mt-1">
                Shop with confidence thanks to our return policy. If you're not satisfied with your purchase, 
                we offer an easy and quick return process without hassle.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
