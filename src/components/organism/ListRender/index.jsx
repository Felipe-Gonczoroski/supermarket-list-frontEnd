import { Subtitle } from 'components/atoms';
import { ListCard } from '../../molecules/ListCard';
import { ListRenderContainer } from './styles';

export const ListRender = ({ list, onEdit }) => {
  if (!Array.isArray(list) || list?.length === 0) {
    return (
      <Subtitle>
        Sua lista está vazia, adicione um novo item clicando no botão
        "Adicionar"
      </Subtitle>
    );
  }

  return (
    <ListRenderContainer>
      {list.map((item) => (
        <ListCard onClick={onEdit} item={item} key={item?._id} />
      ))}
    </ListRenderContainer>
  );
};
