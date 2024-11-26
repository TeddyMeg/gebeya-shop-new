import React from 'react';

interface ColorPickerProps {
  colors: string[];
  selectedColor?: string;
  onColorSelect: (color: string) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({
  colors,
  selectedColor,
  onColorSelect,
}) => {
  return (
    <div className="flex gap-2">
      {colors.map((color) => (
        <button
          key={color}
          onClick={() => onColorSelect(color)}
          className={`h-8 w-8 rounded-full border ${
            selectedColor === color ? 'ring-2 ring-purple-600 ring-offset-2' : ''
          }`}
          style={{ backgroundColor: color }}
          aria-label={`Select ${color} color`}
        />
      ))}
    </div>
  );
};

export default ColorPicker;