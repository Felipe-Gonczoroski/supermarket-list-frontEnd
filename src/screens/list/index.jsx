import { getList } from "../../services/request";
import { useState, useEffect } from "react";
import "./index.css";
import { ListRender, Loader, Button } from "../../components";

export const ListScreen = () => {
  const [loading, setLoading] = useState(true);
  const [listData, setListData] = useState([]);

  const loadListItems = async () => {
    setLoading(true);
    const result = await getList();
    console.log({ result });
    setListData(result);
    setLoading(false);
  };

  useEffect(() => {
    loadListItems();
  }, []);

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
            <Button variant="small">Adicionar</Button>
          </div>
        </div>
        <div className="list-screen-list-container">
          {loading ? <Loader /> : <ListRender item={listData} />}
        </div>
      </div>
    </div>
  );
};
