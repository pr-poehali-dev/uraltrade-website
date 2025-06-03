import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  inStock: boolean;
}

const ProductCard = ({
  name,
  price,
  originalPrice,
  image,
  category,
  rating,
  inStock,
}: ProductCardProps) => {
  const discount = originalPrice
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 group">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <img
            src={image}
            alt={name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {discount > 0 && (
            <Badge className="absolute top-2 left-2 bg-red-500 hover:bg-red-600">
              -{discount}%
            </Badge>
          )}
          {!inStock && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <Badge variant="destructive">Нет в наличии</Badge>
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="mb-2">
          <Badge variant="secondary" className="text-xs">
            {category}
          </Badge>
        </div>
        <CardTitle className="text-lg mb-2 line-clamp-2">{name}</CardTitle>
        <div className="flex items-center mb-3">
          <div className="flex items-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <Icon
                key={i}
                name="Star"
                size={16}
                className={
                  i < Math.floor(rating)
                    ? "text-yellow-400 fill-current"
                    : "text-gray-300"
                }
              />
            ))}
          </div>
          <span className="ml-2 text-sm text-gray-600">
            {rating.toFixed(1)}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-blue-600">
              {price.toLocaleString("ru-RU")} ₽
            </span>
            {originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                {originalPrice.toLocaleString("ru-RU")} ₽
              </span>
            )}
          </div>
          <Button
            className="bg-orange-500 hover:bg-orange-600"
            disabled={!inStock}
          >
            <Icon name="ShoppingCart" size={16} />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
