import { Package2 } from 'lucide-react';

const Orders = () => {
  // Mock orders data
  const orders = [
    {
      id: '1',
      date: '2024-03-15',
      status: 'Delivered',
      total: 165,
      items: [
        {
          id: '1',
          name: 'Burberry shine',
          image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
          quantity: 1,
          price: 150
        }
      ]
    }
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">My Orders</h1>

      {orders.length === 0 ? (
        <div className="text-center py-12">
          <Package2 className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-sm font-medium text-gray-900">No orders</h3>
          <p className="mt-1 text-sm text-gray-500">
            You haven't placed any orders yet.
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <div
              key={order.id}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <div className="border-b border-gray-200 p-4 sm:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">
                      Order placed on{' '}
                      {new Date(order.date).toLocaleDateString()}
                    </p>
                    <p className="text-sm font-medium text-gray-900 mt-1">
                      Order #{order.id}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">Total</p>
                    <p className="text-sm font-medium text-gray-900 mt-1">
                      ${order.total.toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 sm:p-6">
                <div className="flow-root">
                  <ul className="-my-6 divide-y divide-gray-200">
                    {order.items.map((item) => (
                      <li key={item.id} className="py-6 flex">
                        <div className="flex-shrink-0 w-24 h-24">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full rounded-md object-center object-cover"
                          />
                        </div>
                        <div className="ml-4 flex-1 flex flex-col">
                          <div>
                            <div className="flex justify-between text-base font-medium text-gray-900">
                              <h3>{item.name}</h3>
                              <p className="ml-4">
                                ${(item.price * item.quantity).toFixed(2)}
                              </p>
                            </div>
                          </div>
                          <div className="flex-1 flex items-end justify-between text-sm">
                            <p className="text-gray-500">
                              Qty {item.quantity}
                            </p>
                            <div className="flex">
                              <button
                                type="button"
                                className="font-medium text-purple-600 hover:text-purple-500"
                              >
                                Buy Again
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="border-t border-gray-200 p-4 sm:p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div
                      className={`w-2.5 h-2.5 rounded-full mr-2 ${
                        order.status === 'Delivered'
                          ? 'bg-green-500'
                          : 'bg-yellow-500'
                      }`}
                    />
                    <p className="text-sm font-medium text-gray-900">
                      {order.status}
                    </p>
                  </div>
                  <button className="text-sm font-medium text-purple-600 hover:text-purple-500">
                    Track Order
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;