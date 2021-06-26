import React, { useState } from "react";

interface ToggleProps {
  onChange?: (v: boolean) => void;
  text?: string;
}

const Toggle: React.FC<ToggleProps> = ({ onChange, text, ...props }) => {
  const [checked, setChecked] = useState(false);
  return (
    <div className="flex items-center px-8 m-2" {...props}>
      <label className="flex items-center cursor-pointer">
        <div className="relative">
          <input
            type="checkbox"
            className="hidden"
            onChange={() => {
              setChecked(!checked);
              onChange && onChange(checked);
            }}
          />
          <div
            className={`w-12 h-6 bg-gray-300 rounded-full shadow-inner border ${
              checked && "bg-green-50"
            }`}
          ></div>
          <div
            className={`absolute w-6 h-6 bg-gray-50 rounded-full shadow inset-y-0 left-0 transition-transform transform border ${
              checked && "translate-x-full bg-blue-500"
            }`}
          ></div>
        </div>
        <div className="ml-3 text-gray-700 font-medium">{text}</div>
      </label>
    </div>
  );
};

export default Toggle;