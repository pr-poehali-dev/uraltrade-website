import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const AboutSection = () => {
  const features = [
    {
      icon: "ShieldCheck",
      title: "Гарантия качества",
      description:
        "Все товары сертифицированы и соответствуют высоким стандартам качества",
    },
    {
      icon: "Truck",
      title: "Быстрая доставка",
      description: "Доставляем по всему Уралу в течение 1-3 рабочих дней",
    },
    {
      icon: "CreditCard",
      title: "Удобная оплата",
      description: "Принимаем наличные, карты и безналичный расчет",
    },
    {
      icon: "Headphones",
      title: "Поддержка 24/7",
      description: "Наши специалисты готовы помочь в любое время",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Почему выбирают УралТорг?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы работаем для вас уже более 15 лет, предлагая качественные товары
            и профессиональное обслуживание по всему Уральскому региону
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="text-center hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full">
                    <Icon
                      name={feature.icon as any}
                      size={32}
                      className="text-blue-600"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              О компании УралТорг
            </h3>
            <p className="text-gray-600 mb-4">
              УралТорг — это динамично развивающаяся торговая сеть, которая
              успешно работает на рынке розничной торговли Уральского региона с
              2008 года.
            </p>
            <p className="text-gray-600 mb-6">
              Наша миссия — обеспечить жителей региона качественными товарами по
              доступным ценам, создавая комфортные условия для покупок и высокий
              уровень сервиса.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <Icon name="MapPin" size={20} className="text-blue-600 mr-3" />
                <span>г. Екатеринбург, ул. Ленина, 50</span>
              </div>
              <div className="flex items-center">
                <Icon name="Phone" size={20} className="text-blue-600 mr-3" />
                <span>+7 (343) 123-45-67</span>
              </div>
              <div className="flex items-center">
                <Icon name="Mail" size={20} className="text-blue-600 mr-3" />
                <span>info@uraltorg.ru</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop"
              alt="Магазин УралТорг"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
