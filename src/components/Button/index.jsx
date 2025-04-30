import "./index.css";

export const Button = ({ children, onClick, variant = "large", icon }) => {
  return (
    <button onClick={onClick} className={`${variant}-button`}>
      {children}
      {icon && (
        <img
          src={`/images/${icon}.svg`}
          className="button-icon"
          alt={`supermarket-icon-${icon}`}
        />
      )}
    </button>
  );
};
