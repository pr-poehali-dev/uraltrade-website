import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const CategoriesSection = () => {
  const categories = [
    {
      name: "Продукты питания",
      icon: "ShoppingBasket",
      count: "5000+",
      image:
        "https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=300&fit=crop",
    },
    {
      name: "Бытовая техника",
      icon: "Zap",
      count: "800+",
      image:
        "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400&h=300&fit=crop",
    },
    {
      name: "Одежда и обувь",
      icon: "Shirt",
      count: "2000+",
      image:
        "https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=300&fit=crop",
    },
    {
      name: "Дом и сад",
      icon: "Home",
      count: "1200+",
      image:
        "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=400&h=300&fit=crop",
    },
    {
      name: "Спорт и отдых",
      icon: "Dumbbell",
      count: "600+",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
    },
    {
      name: "Красота и здоровье",
      icon: "Heart",
      count: "900+",
      image:
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=300&fit=crop",
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Категории товаров
          </h2>
          <p className="text-xl text-gray-600">
            Широкий выбор товаров для всей семьи
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Card
              key={category.name}
              className="hover:shadow-lg transition-shadow duration-300 cursor-pointer group"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <Icon
                      name={category.icon as any}
                      size={48}
                      className="text-white"
                    />
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {category.name}
                  </h3>
                  <p className="text-blue-600 font-medium">
                    {category.count} товаров
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
