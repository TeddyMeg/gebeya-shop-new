import React from 'react';
import { Minus, Plus, X } from 'lucide-react';
import { CartItem as CartItemType } from '../types';

interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
}

const CartItem: React.FC<CartItemProps> = ({
  item,
  onUpdateQuantity,
  onRemove,
}) => {
  return (
    <div className="flex items-center py-6 border-b">
      <img
        src={item.image}
        alt={item.name}
        className="h-24 w-24 flex-shrink-0 rounded-md object-cover"
      />
      <div className="ml-4 flex flex-1 flex-col">
        <div className="flex justify-between">
          <div>
            <h3 className="text-sm font-medium text-gray-900">{item.name}</h3>
            <p className="mt-1 text-sm text-gray-500">{item.brand}</p>
          </div>
          <button
            onClick={() => onRemove(item.id)}
            className="text-gray-400 hover:text-gray-500"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="flex flex-1 items-end justify-between">
          <div className="flex items-center space-x-3">
            <button
              onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
              className="rounded-full p-1 text-gray-600 hover:bg-gray-100"
            >
              <Minus className="h-4 w-4" />
            </button>
            <span className="text-gray-900">{item.quantity}</span>
            <button
              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
              className="rounded-full p-1 text-gray-600 hover:bg-gray-100"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
          <p className="text-sm font-medium text-gray-900">
            ${item.price * item.quantity}
          </p>
        </div>
        {(item.selectedSize || item.selectedColor) && (
          <div className="mt-2 flex space-x-4 text-sm text-gray-500">
            {item.selectedSize && <p>Size: {item.selectedSize}</p>}
            {item.selectedColor && (
              <div className="flex items-center">
                <span>Color:</span>
                <div
                  className="ml-2 h-4 w-4 rounded-full border"
                  style={{ backgroundColor: item.selectedColor }}
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CartItem;