import React from 'react';

interface SizePickerProps {
  sizes: string[];
  selectedSize?: string;
  onSizeSelect: (size: string) => void;
}

const SizePicker: React.FC<SizePickerProps> = ({
  sizes,
  selectedSize,
  onSizeSelect,
}) => {
  return (
    <div className="flex flex-wrap gap-2">
      {sizes.map((size) => (
        <button
          key={size}
          onClick={() => onSizeSelect(size)}
          className={`min-w-[3rem] rounded-md border px-3 py-2 text-sm font-medium
            ${
              selectedSize === size
                ? 'border-purple-600 bg-purple-50 text-purple-600'
                : 'border-gray-200 text-gray-900 hover:bg-gray-50'
            }`}
        >
          {size}
        </button>
      ))}
    </div>
  );
};

export default SizePicker;