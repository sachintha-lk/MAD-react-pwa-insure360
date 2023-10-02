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
  className?: string;
}

function Button({
  children,
  onClick,
  variant = "primary",
  className,
  ...props
}: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  let buttonClassName =
    "block px-12 mt-3 rounded-md px-5 py-3 font-medium text-md hover:shadow-sm transition duration-300 ease";

  switch (variant) {
    case "primary":
      buttonClassName += ` bg-gradient-to-br from-blue-700 to-blue-800 hover:from-blue-800 hover:to-blue-900 text-gray-50 hover:text-white`;
      break;
    case "secondary":
      buttonClassName += ` bg-gray-200 border border-gray-300 hover:border-gray-400 hover:bg-gray-300 text-gray-600 hover:text-gray-800`;
      break;
    case "tertiary":
      buttonClassName += ` bg-transparent hover:bg-gray-50 text-gray-600  hover:text-gray-700 border border border-gray-600 hover:border-gray-600`;
      break;
    case "danger":
      buttonClassName += ` bg-gradient-to-br from-red-700 to-red-800 hover:from-red-800 hover:to-red-900 text-gray-50`;
      break;
    case "success":
      buttonClassName += ` bg-gradient-to-br from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-gray-50`;
      break;
    case "warning":
      buttonClassName += ` bg-gradient-to-br from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-gray-50`;
      break;
    default:
      break;
  }

  buttonClassName += ` ${className}`;
  function onBtnClick() {
    navigator.vibrate([45, 100, 82, 96]);
    if (onClick) {
      onClick();
    }
  }

  return (
    <button className={buttonClassName} onClick={onBtnClick} {...props}>
      {children}
    </button>
  );
}

export default Button;
