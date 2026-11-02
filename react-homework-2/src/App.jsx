import Greeting from "./components/Greeting";
import OrderStatus from "./components/OrderStatus";
import ShoppingList from "./components/ShoppingList";

function App() {
  // const [count, setCount] = useState(0);
  const items = ["Apples", "Bananas", "Oranges"];
  const orders = [
    { orderId: 123, status: "в пути" },
    { orderId: 124, status: "обработан" },
    { orderId: 125, status: "доставлен" },
  ];

  return (
    <>
      <Greeting name="John" />
      <ShoppingList items={items} />
      <main>
        <h1>Статусы заказов</h1>

        {orders.map((order) => (
          <OrderStatus
            key={order.orderId}
            orderId={order.orderId}
            status={order.status}
          />
        ))}
      </main>
    </>
  );
}

export default App;
