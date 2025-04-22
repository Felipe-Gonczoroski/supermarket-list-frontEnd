import "./index.css";

export const Button = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="large-button">
      {children}
    </button>
  );
};
