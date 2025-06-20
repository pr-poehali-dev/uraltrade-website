import ProductCard from "./ProductCard";

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      name: "Смартфон Samsung Galaxy A54",
      price: 32990,
      originalPrice: 39990,
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop",
      category: "Электроника",
      rating: 4.5,
      inStock: true,
    },
    {
      id: 2,
      name: "Кофе молотый Lavazza Qualità Oro",
      price: 899,
      image:
        "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=300&fit=crop",
      category: "Продукты",
      rating: 4.8,
      inStock: true,
    },
    {
      id: 3,
      name: "Куртка зимняя мужская",
      price: 5999,
      originalPrice: 7999,
      image:
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=300&fit=crop",
      category: "Одежда",
      rating: 4.2,
      inStock: true,
    },
    {
      id: 4,
      name: "Пылесос Bosch BGS05A220",
      price: 8990,
      image:
        "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop",
      category: "Бытовая техника",
      rating: 4.6,
      inStock: false,
    },
    {
      id: 5,
      name: "Набор кастрюль Tefal Ingenio",
      price: 4299,
      originalPrice: 5599,
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
      category: "Посуда",
      rating: 4.4,
      inStock: true,
    },
    {
      id: 6,
      name: "Молоко Простоквашино 3.2%",
      price: 89,
      image:
        "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&h=300&fit=crop",
      category: "Продукты",
      rating: 4.7,
      inStock: true,
    },
    {
      id: 7,
      name: "Хлеб Бородинский",
      price: 45,
      image:
        "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=400&h=300&fit=crop",
      category: "Продукты",
      rating: 4.3,
      inStock: true,
    },
    {
      id: 8,
      name: "Куриная грудка охлажденная",
      price: 320,
      image:
        "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop",
      category: "Продукты",
      rating: 4.6,
      inStock: true,
    },
    {
      id: 9,
      name: "Творог 5% жирности",
      price: 120,
      originalPrice: 140,
      image:
        "https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=400&h=300&fit=crop",
      category: "Продукты",
      rating: 4.5,
      inStock: true,
    },
    {
      id: 10,
      name: "Бананы спелые",
      price: 99,
      image:
        "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=300&fit=crop",
      category: "Продукты",
      rating: 4.4,
      inStock: true,
    },
    {
      id: 11,
      name: "Помидоры черри",
      price: 189,
      image:
        "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400&h=300&fit=crop",
      category: "Продукты",
      rating: 4.7,
      inStock: true,
    },
    {
      id: 12,
      name: "Яйца куриные С1",
      price: 89,
      originalPrice: 105,
      image:
        "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400&h=300&fit=crop",
      category: "Продукты",
      rating: 4.8,
      inStock: true,
    },
    {
      id: 13,
      name: "Сыр Гауда молодой",
      price: 450,
      image:
        "https://images.unsplash.com/photo-1586511925558-a4c6376fe65f?w=400&h=300&fit=crop",
      category: "Продукты",
      rating: 4.6,
      inStock: false,
    },
    {
      id: 14,
      name: "Картофель молодой",
      price: 35,
      image:
        "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&h=300&fit=crop",
      category: "Продукты",
      rating: 4.2,
      inStock: true,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Популярные товары
          </h2>
          <p className="text-xl text-gray-600">
            Самые востребованные товары нашего магазина
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
