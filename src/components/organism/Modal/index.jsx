import { useEffect, useState } from 'react';
import { Input } from '../../molecules';
import { Title, Button } from '../../atoms';
import { createItem, updateItem, deleteItem } from '../../../services/request';
import {
  ModalBackgroundContainer,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ButtonsContainer,
} from './styles';

export const Modal = ({ onClose, item }) => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);

  const validateBeforeSave = () => {
    const quantityAsNumber = Number(quantity);

    if (name.length < 3) {
      alert('O nome precisa conter no mínimo 3 caracteres!');
      return false;
    }
    if (isNaN(quantityAsNumber) || quantityAsNumber < 1) {
      alert('A quantidade precisa ser um número válido e maior que zero!');
      return false;
    }
    return true;
  };

  const callAddItem = async () => {
    const validate = validateBeforeSave();
    if (validate) {
      const result = await createItem({ name, quantity: Number(quantity) });
      if (!result?.error) {
        alert('Item salvo com sucesso!');
        onClose();
      }
    }
  };

  const callUpdateItem = async () => {
    const validate = validateBeforeSave();
    if (validate) {
      const result = await updateItem(item?._id, {
        name,
        quantity: Number(quantity),
        checked: item?.checked,
      });
      if (!result?.error) {
        alert('Item atualizado com sucesso!');
        onClose();
      }
    }
  };

  const callDeleteItem = async () => {
    const result = await deleteItem(item?._id);
    if (!result?.error) {
      alert('Item deletado com sucesso!');
      onClose();
    }
  };

  useEffect(() => {
    if (item?.name && item?.quantity) {
      setName(item?.name);
      setQuantity(item?.quantity);
    }
  }, [item]);

  const mode = item ? 'edit' : 'add';

  return (
    <ModalBackgroundContainer>
      <ModalContent>
        <ModalHeader>
          <Title as="h2" $fontWeight={500}>
            {item ? 'Editar item' : 'Adicionar novo item'}
          </Title>
          <ModalCloseButton onClick={onClose} />
        </ModalHeader>
        <Input
          onChange={(text) => setName(text)}
          value={name}
          label={'Nome'}
          placeholder={'Ex: Arroz'}
          $margin={'32px 0 24px 0'}
        />
        <Input
          onChange={(text) => setQuantity(text)}
          value={quantity}
          label={'Quantidade'}
          type="number"
        />
        <ButtonsContainer mode={mode}>
          <Button
            onClick={item ? callUpdateItem : callAddItem}
            variant="larger"
          >
            {item ? 'Atualizar' : 'Adicionar'}
          </Button>
          {item && (
            <Button onClick={callDeleteItem} variant="lightLarger" icon="trash">
              Deletar item
            </Button>
          )}
        </ButtonsContainer>
      </ModalContent>
    </ModalBackgroundContainer>
  );
};
