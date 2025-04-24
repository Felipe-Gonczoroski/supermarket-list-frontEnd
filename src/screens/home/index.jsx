import { useState } from "react";
import { useNavigate } from "react-router";
import "./index.css";
import { Button, Input } from "../../components";
import { SAVE_USERNAME_PATH } from "../../services/constants";

export const HomeScreen = () => {
  const [username, setUsername] = useState("");

  const navigate = useNavigate();

  const onClickContinue = () => {
    if (username.length < 3) {
      alert("O nome de usuário deve conter no mínimo 3 caracteres.");
      return;
    }
    localStorage.setItem(SAVE_USERNAME_PATH, username);
    navigate("/list");
  };

  return (
    <div className="home-screen-container">
      <div className="home-screen-content-container">
        <img
          className="shopping-bag-image"
          src="/images/shopping-bag.svg"
          alt="Sacola de compras"
        />
        <h2 className="home-screen-title">
          Sua lista de supermercado mais fácil do que nunca
        </h2>
        <p className="home-screen-subtitle">
          Ajudamos você a organizar sua <br />
          lista de compras de forma descomplicada.
        </p>
        <p className="home-screen-form-instruction">
          Digite abaixo seu usuário para ter acesso a sua lista de compras:
        </p>
        <div>
          <Input
            onChange={(text) => setUsername(text)}
            value={username}
            label={"Username"}
            placeholder={"Ex: usuario1"}
          />
        </div>
        <Button onClick={onClickContinue}>Continuar</Button>
      </div>
    </div>
  );
};
