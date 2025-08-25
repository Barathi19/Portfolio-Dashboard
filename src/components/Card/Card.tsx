import React from "react";

interface CardProps {
  title: string;
  value: string | number;
  description?: string;
  icon?: React.ReactNode;
  iconColor?: string;
  color?: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  value,
  description,
  icon,
  className,
  iconColor,
  color,
}) => {
  return (
    <div
      className={`bg-white w-full shadow-md rounded-xl p-4 sm:p-5 flex flex-col justify-between ${className} transition-transform duration-200 hover:shadow-lg`}
    >
      <div className="flex items-center space-x-3">
        {icon && (
          <div className={`text-2xl sm:text-3xl ${iconColor || "text-blue-600"}`}>
            {icon}
          </div>
        )}
        <h3 className="text-gray-700 font-semibold text-base sm:text-lg">
          {title}
        </h3>
      </div>
      <div className="mt-3 sm:mt-4">
        <p className={`text-2xl sm:text-3xl font-bold ${color || "text-gray-900"}`}>
          {value}
        </p>
        {description && (
          <p className="text-xs sm:text-sm text-gray-500 mt-1">{description}</p>
        )}
      </div>
    </div>
  );
};

export default Card;
