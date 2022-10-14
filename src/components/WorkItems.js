import React from "react";
import { NavLink } from "react-router-dom";
import { getWorkItems } from "../utils/apiYouTracka";
import jsPDF from "jspdf";

function WorkItems({ summar, isLoggedIn }) {
  const [workItem, setWorkItem] = React.useState([]);

  const generatePDF = () => {
    const doc = new jsPDF("p", "pt", "a4");
    doc.html(document.querySelector("#invoice"), {
      callback: function (pdf) {
        pdf.save("WorkItems.pdf");
      },
    });
  };

  React.useEffect(() => {
    if (isLoggedIn) {
      getWorkItems().then((res) => {
        setWorkItem(res.data);
      });
    }
  }, [isLoggedIn]);

  function getTimeFromMins(mins) {
    if (mins >= 60) {
      let hours = Math.trunc(mins / 60);
      let minutes = mins % 60;
      return hours + " hour" + " : " + minutes + " minutes";
    } else {
      return mins + " minutes";
    }
  }

  function filterWorkItems() {
    return workItem.map((item, index) => {
      if (summar.id === item.issue.id) {
        return (
          <tr key={index}>
            <th className="users__info">{item.author.login}</th>
            <th className="users__info">
              {getTimeFromMins(item.duration.minutes)}
            </th>
          </tr>
        );
      }
    });
  }
  return (
    <div>
      <NavLink to="/Tasks">
        <button className="tasks__button-back">Назад к Таблице</button>
      </NavLink>
      <button onClick={generatePDF} className="tasks__button-save">
        Сохранить в PDF
      </button>
      <div className="tasks">
        <table id="invoice">
          <tbody>
            <tr>
              <th className="users__text">Name</th>
              <th className="users__text">Time</th>
            </tr>
            {filterWorkItems()}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default WorkItems;
