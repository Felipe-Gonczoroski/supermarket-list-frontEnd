import { useState } from 'react';
import { updateItem } from '../../../services/request/';
import {
  CardContainer,
  Checkbox,
  StyledLabel,
  HiddenCheckbox,
  TextContainer,
  ArrowIcon,
} from './styles';
import { SmallText } from 'components/atoms';

export const ListCard = ({ item, onClick }) => {
  const [checked, setChecked] = useState(item?.checked);

  const handleChange = async () => {
    const newChecked = !checked;
    setChecked(newChecked);

    const updatedItem = { ...item, checked: newChecked };
    await updateItem(item?._id, updatedItem);
  };

  return (
    <CardContainer checked={checked}>
      <Checkbox>
        <HiddenCheckbox
          onChange={handleChange}
          checked={checked}
          id={`checkbox-${item._id}`}
        />

        <StyledLabel htmlFor={`checkbox-${item._id}`} />
      </Checkbox>
      <TextContainer>
        <SmallText
          $align={'left'}
          $margin={'4px 0 3px 0'}
          $fontSizeMobile={16}
          $checked={checked}
        >
          {item.name}
        </SmallText>
        <SmallText $align={'left'} $fontSize={14}>
          {item.quantity} unidades
        </SmallText>
      </TextContainer>
      <ArrowIcon
        src="/images/arrow.svg"
        alt="arrow-icon"
        onClick={() => onClick(item)}
      />
    </CardContainer>
  );
};
