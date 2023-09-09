interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  variant?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "danger"
    | "success"
    | "warning";
}

function Button({
  children,
  onClick,
  variant = "primary",
  ...props
}: ButtonProps) {
  let buttonClassName = `font-medium px-5 py-2 mr-2 mb-2 rounded-md ${
    variant === "primary" ? "text-white" : "text-gray-200"
  }`;

  switch (variant) {
    case "primary":
      buttonClassName += ` bg-gradient-to-br from-blue-700 to-blue-800 hover:from-blue-800 hover:to-blue-900 hover:shadow-sm`;
      break;
    case "secondary":
      buttonClassName += ` bg-gradient-to-br from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 hover:shadow-sm`;
      break;
    case "tertiary":
      buttonClassName += ` bg-transparent text-gray-500  hover:text-gray-600 border border-1 border-gray-500 hover:border-gray-600 hover:bg-gray-100 hover:shadow-sm`;
      break;
    case "danger":
      buttonClassName += ` bg-gradient-to-br from-red-700 to-red-800 hover:from-red-800 hover:to-red-900 hover:shadow-sm`;
      break;
    case "success":
      buttonClassName += ` bg-gradient-to-br from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 hover:shadow-sm`;
      break;
    case "warning":
      buttonClassName += ` bg-gradient-to-br from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 hover:shadow-sm`;
      break;
    default:
      break;
  }

  return (
    <button className={buttonClassName} onClick={onClick} {...props}>
      {children}
    </button>
  );
}

export default Button;
