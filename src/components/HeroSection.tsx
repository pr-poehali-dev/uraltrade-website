import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">УралТорг</h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Ваш надежный партнер в розничной торговле
          </p>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-blue-50">
            Широкий ассортимент качественных товаров по доступным ценам. От
            продуктов питания до бытовой техники — всё в одном месте!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white"
            >
              <Icon name="ShoppingCart" size={20} />
              Перейти к покупкам
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-800"
            >
              <Icon name="Info" size={20} />О компании
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
