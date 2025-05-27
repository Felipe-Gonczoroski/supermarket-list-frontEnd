import { getList } from 'services/request';
import { useState, useEffect } from 'react';
import { ListRender, Modal } from 'components/organism';
import { Title, Button, Loader } from 'components/atoms';
import {
  ScreenContainer,
  ContentContainer,
  ScreenHeader,
  HeaderTitleContainer,
  LogoImage,
  ListContainer,
  LoaderContainer,
} from './styles';

export const ListScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [listData, setListData] = useState([]);
  const [selectItem, setSelectItem] = useState(null);

  const loadListItems = async () => {
    setLoading(true);
    const result = await getList();
    setListData(result);
    setLoading(false);
  };

  useEffect(() => {
    loadListItems();
  }, []);

  const onClickAddButton = () => {
    setSelectItem(null);
    setModalVisible(true);
  };

  const onCloseModal = () => {
    setModalVisible(false);
    loadListItems();
    setSelectItem(null);
  };

  const onEditItem = (item) => {
    setSelectItem(item);
    setModalVisible(true);
  };

  return (
    <ScreenContainer>
      <ContentContainer>
        <ScreenHeader>
          <HeaderTitleContainer>
            <LogoImage src="/images/logo.png" alt="Ícone de cesta de compras" />
            <Title
              $fontSize={32}
              $fontSizeXXL={28}
              $fontSizeXL={28}
              $fontSizeSM={22}
              $lineHeightLG={26}
              $mwLG={310}
            >
              Lista Supermercado
            </Title>
          </HeaderTitleContainer>
          <Button variant="small" onClick={onClickAddButton}>
            {window.innerWidth <= 480 ? '+' : 'Adicionar'}
          </Button>
        </ScreenHeader>
        <ListContainer>
          {loading ? (
            <LoaderContainer>
              <Loader />
            </LoaderContainer>
          ) : (
            <ListRender onEdit={onEditItem} list={listData} />
          )}
        </ListContainer>
      </ContentContainer>
      {modalVisible && <Modal item={selectItem} onClose={onCloseModal} />}
    </ScreenContainer>
  );
};
