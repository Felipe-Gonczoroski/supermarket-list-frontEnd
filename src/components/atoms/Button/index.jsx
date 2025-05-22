import { StyledButton } from './styles';

export const Button = ({ children, onClick, variant = 'medium', icon }) => {
  return (
    <StyledButton onClick={onClick} variant={variant}>
      {children}
      {icon && (
        <img
          className="button-icon"
          src={`/images/${icon}.svg`}
          alt={`supermarket-icon-${icon}`}
        />
      )}
    </StyledButton>
  );
};
