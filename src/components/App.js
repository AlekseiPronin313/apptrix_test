import React from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Authorization from "./Authorization";
import * as api from "../utils/api";
import InfoPopup from "./InfoPopup";
import { getContent, getTasks} from "../utils/apiYouTracka";
import Users from "./Users";
import ProtectedRoute from './ProtectedRoute'
import { Layout } from "./Layout";
import Tasks from "./Tasks";
import WorkItems from "./WorkItems";

function App() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [openInfoPopup, setOpenInfoPopup] = React.useState(false);
  const [cards, setCards] = React.useState([]);
  const [data, setData] = React.useState([]);
  const [tasks, setTasks] = React.useState([])
  const [summar, setSummar] = React.useState([])

  function handleClick(items) {
    setSummar(items);
  }

  function handleInfoPopupClick(card) {
    setData(card);
    setOpenInfoPopup(true);
  }

  function closeInfoPopup() {
    setOpenInfoPopup(false);
  }

  React.useEffect(() => {
    if (isLoggedIn) {getContent()
      .then((res) => {
        setCards(res.data);
      });
    }
  }, [isLoggedIn]);
  

  React.useEffect(() => {
    if (isLoggedIn) {getTasks().then((res) => {
        setTasks(res.data)
      });
    }
  }, [isLoggedIn]);

  function onLogin(username, password) {
    api
      .sendData(username, password)
      .then(() => {
        alert("Успешно");
        setIsLoggedIn(true);
        navigate("/");
      })
      .catch((err) => {
        alert("Введен неверный логин или пароль");
        setIsLoggedIn(false);
        navigate("/Login");
        console.log(err);
      });
  }

  return (
    <div>
      <Routes>
        <Route path="/Login" element={<Authorization onLogin={onLogin} />} />
        <Route path="/" element={<ProtectedRoute 
        component={Layout}
        loggedIn = {isLoggedIn}
        />}>
          <Route
            index
            element={<Users open={handleInfoPopupClick} cards={cards} />}
          />
          <Route path="Tasks" element={<Tasks tasks={tasks} openSummary={handleClick}/>} />
          <Route path="Tasks/:id" element={<WorkItems isLoggedIn={isLoggedIn} summar={summar}/>}/>
        </Route>
         
        <Route
          path="*"
          element={<Navigate to={isLoggedIn ? "" : "/Login"} />}
        />
      </Routes>
      <InfoPopup
        close={closeInfoPopup}
        openInfoPopup={openInfoPopup}
        data={data}
      />
    </div>
  );
}

export default App;
