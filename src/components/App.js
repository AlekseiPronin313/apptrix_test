import React from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Authorization from "./Authorization";
import Main from "./Main";
import * as api from "../utils/api";
import InfoPopup from "./InfoPopup";
import { getContent } from "../utils/apiYouTracka";

function App() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [openInfoPopup, setOpenInfoPopup] = React.useState(false);
  const [cards, setCards] = React.useState([]);
  const [data, setData] = React.useState([])

  function handleInfoPopupClick(card) {
    setData(card)
    setOpenInfoPopup(true);
  }

  function closeInfoPopup() {
    setOpenInfoPopup(false);
  }

  React.useEffect(() => {
    getContent().then((res) => {
      setCards(res);
    });
  }, []);

  function onLogin(username, password) {
    api
      .sendData(username, password)
      .then(() => {
        alert("Успешно");
        setIsLoggedIn(true);
        navigate("/Home");
      })
      .catch((err) => {
        alert("Введен неверный логин или пароль");
        setIsLoggedIn(false);
        navigate("/Login");
        console.log(err);
      });
  }

  React.useEffect(() => {
    if (isLoggedIn) {
      navigate("/Home");
    }
  }, [isLoggedIn, navigate]);

  return (
    <div>
      <Routes>
        <Route path="/login" element={<Authorization onLogin={onLogin} />} />
        <Route path="/Home" element={<Main open={handleInfoPopupClick} cards={cards} />} />
        <Route
          path="*"
          element={<Navigate to={isLoggedIn ? "/Home" : "/Login"} />}
        />
      </Routes>
      <InfoPopup close={closeInfoPopup} openInfoPopup={openInfoPopup} data={data}/>
    </div>
  );
}

export default App;
