import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [cartItems, setCartItems] = useState(0);

  const addToCart = () => {
    setCartItems(cartItems + 1);
  };

  const products = [
    {
      id: 1,
      name: "Минималистичная футболка",
      price: "2,990 ₽",
      image: "/img/41c70f60-894c-4496-8aa8-394362024b66.jpg",
      category: "Одежда",
    },
    {
      id: 2,
      name: "Классические джинсы",
      price: "4,990 ₽",
      image: "/img/119036ae-2345-46cf-b3e9-b9798eb48e13.jpg",
      category: "Одежда",
    },
    {
      id: 3,
      name: "Кожаная сумка",
      price: "8,990 ₽",
      image: "/img/29a596de-1072-4d2a-b321-01188a2080ff.jpg",
      category: "Аксессуары",
    },
    {
      id: 4,
      name: "Шерстяной свитер",
      price: "6,990 ₽",
      image: "/img/d11a30db-a08c-40e1-aa94-fe17e9373cb1.jpg",
      category: "Одежда",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-black">MINIMAL</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#home"
                className="text-gray-900 hover:text-gray-600 transition-colors"
              >
                Главная
              </a>
              <a
                href="#about"
                className="text-gray-900 hover:text-gray-600 transition-colors"
              >
                О нас
              </a>
              <a
                href="#products"
                className="text-gray-900 hover:text-gray-600 transition-colors"
              >
                Товары
              </a>
              <a
                href="#delivery"
                className="text-gray-900 hover:text-gray-600 transition-colors"
              >
                Доставка
              </a>
              <a
                href="#payment"
                className="text-gray-900 hover:text-gray-600 transition-colors"
              >
                Оплата
              </a>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="relative">
                <Icon name="ShoppingCart" size={20} />
                {cartItems > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center text-xs">
                    {cartItems}
                  </Badge>
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-5xl font-bold text-black mb-6">
              Минималистичная одежда
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Откройте для себя коллекцию качественной одежды и аксессуаров,
              созданных с вниманием к деталям и комфорту
            </p>
            <Button size="lg" className="bg-black text-white hover:bg-gray-800">
              Смотреть коллекцию
            </Button>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">
              Популярные товары
            </h2>
            <p className="text-gray-600 text-lg">
              Наша тщательно отобранная коллекция
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <Card
                key={product.id}
                className="border-none shadow-sm hover:shadow-md transition-shadow bg-white"
              >
                <CardContent className="p-0">
                  <div className="aspect-square bg-gray-100 mb-4 rounded-t-lg overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <Badge variant="secondary" className="mb-2 text-xs">
                      {product.category}
                    </Badge>
                    <h3 className="font-semibold text-black mb-2">
                      {product.name}
                    </h3>
                    <p className="text-lg font-bold text-black mb-4">
                      {product.price}
                    </p>
                    <Button
                      className="w-full bg-black text-white hover:bg-gray-800"
                      onClick={addToCart}
                    >
                      Добавить в корзину
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-black mb-6">О нас</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Мы создаем минималистичную одежду и аксессуары для людей,
                которые ценят качество, комфорт и стиль. Каждый предмет нашей
                коллекции разработан с особым вниманием к деталям.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Наша философия — меньше значит больше. Мы верим в создание
                вещей, которые прослужат долго и никогда не выйдут из моды.
              </p>
              <div className="flex space-x-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-black">100%</div>
                  <div className="text-gray-600 text-sm">Качество</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-black">5+</div>
                  <div className="text-gray-600 text-sm">Лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-black">1000+</div>
                  <div className="text-gray-600 text-sm">
                    Довольных клиентов
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 aspect-square rounded-lg"></div>
          </div>
        </div>
      </section>

      {/* Delivery & Payment Section */}
      <section id="delivery" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">
              Доставка и оплата
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="border-none shadow-sm bg-white">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Truck" size={24} className="mr-2" />
                  Доставка
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Курьерская доставка</span>
                    <span className="font-semibold">от 300 ₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Самовывоз</span>
                    <span className="font-semibold">Бесплатно</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Экспресс-доставка</span>
                    <span className="font-semibold">от 800 ₽</span>
                  </div>
                  <Separator />
                  <p className="text-sm text-gray-600">
                    Бесплатная доставка при заказе от 5000 ₽
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm bg-white">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="CreditCard" size={24} className="mr-2" />
                  Оплата
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="mr-2 text-green-600"
                    />
                    <span className="text-gray-600">Банковская карта</span>
                  </div>
                  <div className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="mr-2 text-green-600"
                    />
                    <span className="text-gray-600">Наличными курьеру</span>
                  </div>
                  <div className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="mr-2 text-green-600"
                    />
                    <span className="text-gray-600">Банковский перевод</span>
                  </div>
                  <div className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="mr-2 text-green-600"
                    />
                    <span className="text-gray-600">Электронные кошельки</span>
                  </div>
                  <Separator />
                  <p className="text-sm text-gray-600">
                    Безопасная оплата через защищенное соединение
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">MINIMAL</h3>
              <p className="text-gray-400">
                Минималистичная одежда и аксессуары для современных людей
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Магазин</h4>
              <div className="space-y-2 text-gray-400">
                <div>Одежда</div>
                <div>Аксессуары</div>
                <div>Новинки</div>
                <div>Скидки</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Помощь</h4>
              <div className="space-y-2 text-gray-400">
                <div>Размерная сетка</div>
                <div>Возврат товара</div>
                <div>Контакты</div>
                <div>FAQ</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <div>+7 (495) 123-45-67</div>
                <div>info@minimal.ru</div>
                <div>Москва, ул. Примерная, д. 1</div>
              </div>
            </div>
          </div>
          <Separator className="my-8 bg-gray-800" />
          <div className="text-center text-gray-400">
            <p>&copy; 2024 MINIMAL. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
