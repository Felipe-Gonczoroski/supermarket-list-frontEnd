import { getList } from "../../services/request";
import { useState, useEffect } from "react";
import "./index.css";
import { ListRender, Loader, Button, Modal } from "../../components";

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
    <div className="list-screen-container">
      <div className="list-screen-content-container">
        <div className="list-screen-header">
          <div className="list-screen-header-title">
            <img
              className="logo-image"
              src="/images/logo.png"
              alt="Ícone de cesta de compras"
            />
            <h1>Lista Supermercado</h1>
          </div>
          <div>
            <Button variant="small" onClick={onClickAddButton}>
              {window.innerWidth <= 420 ? "+" : "Adicionar"}
            </Button>
          </div>
        </div>
        <div className="list-screen-list-container">
          {loading ? (
            <div className="loader-container">
              <Loader />
            </div>
          ) : (
            <ListRender onEdit={onEditItem} list={listData} />
          )}
        </div>
      </div>
      {modalVisible && <Modal item={selectItem} onClose={onCloseModal} />}
    </div>
  );
};
