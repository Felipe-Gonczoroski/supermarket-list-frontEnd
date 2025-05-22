import { InputContainer, InputLabel, InputText } from './styles';

export const Input = ({
  label,
  placeholder,
  value,
  onChange,
  type,
  $margin,
}) => {
  return (
    <InputContainer $margin={$margin}>
      <InputLabel>{label}</InputLabel>
      <InputText
        onChange={(event) => onChange(event.target.value)}
        value={value}
        className="input"
        placeholder={placeholder}
        type={type || 'text'}
      />
    </InputContainer>
  );
};
