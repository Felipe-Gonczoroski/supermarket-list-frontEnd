import "./index.css";

export const Button = ({ children, onClick, variant = "large" }) => {
  return (
    <button onClick={onClick} className={`${variant}-button`}>
      {children}
    </button>
  );
};
