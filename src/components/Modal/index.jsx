import './index.css';
import { useEffect, useState } from 'react';
import { Input } from '../Input';
import { Button } from '../Button';
import { createItem, updateItem, deleteItem } from '../../services/request';

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

  return (
    <div className="modal">
      <div className={`modal-content ${item ? 'edit-mode' : 'add-mode'}`}>
        <div className="modal-header">
          <h3>{item ? 'Editar item' : 'Adicionar novo item'}</h3>
          <button className="modal-close-button" onClick={onClose} />
        </div>
        <Input
          onChange={(text) => setName(text)}
          value={name}
          label={'Nome'}
          placeholder={'Ex: Arroz'}
        />
        <Input
          onChange={(text) => setQuantity(text)}
          value={quantity}
          label={'Quantidade'}
          type="number"
        />
        <div className="buttons-container">
          <Button
            onClick={item ? callUpdateItem : callAddItem}
            variant="larger"
          >
            {item ? 'Atualizar' : 'Adicionar'}
          </Button>
          {item && (
            <Button
              onClick={callDeleteItem}
              variant="light-larger"
              icon="trash"
            >
              Deletar item
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
