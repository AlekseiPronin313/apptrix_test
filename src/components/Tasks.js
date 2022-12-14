import React from "react";
import { NavLink } from "react-router-dom";

function Tasks({ tasks, openSummary }) {
  const [filterProjectName, setFilterProjectName] = React.useState("");
  const getFiltered = filter();

  function filter() {
    if (!filterProjectName) {
      return tasks;
    } else {
      return tasks.filter((item) => {
        return (
          item.project.name.toLowerCase() === filterProjectName.toLowerCase()
        );
      });
    }
  }

  const mapProjectName = () => {
    let set = new Set();
    tasks.map((task) => {
      return set.add(task.project.name);
    });
    let arrSet = Array.from(set);
    return arrSet.map((arr, index) => {
      return <option key={index}>{arr}</option>;
    });
  };

  const mapTable = () => {
    return getFiltered.map((task, index) => {
      return (
        <tr className="tasks__card" key={index}>
          <th className="users__info">{task.id}</th>
          <th className="users__info">{task.summary}</th>
          <th className="users__info">{task.project.name}</th>
          <th className="users__info">
            <NavLink to={`/Tasks/${task.id}`}>
              <button className="tasks__button" onClick={() => openSummary(task)}>Timesheet</button>
            </NavLink>
          </th>
        </tr>
      );
    });
  };

  return (
    <main className="tasks">
      <p>
        Project Name:{" "}
        <select onChange={(event) => setFilterProjectName(event.target.value)}>
          {mapProjectName()}
        </select>
      </p>
      <table>
        <tbody>
          <tr>
            <th className="users__text">ID</th>
            <th className="users__text">Summary</th>
            <th className="users__text" value="projctName">
              Project Name
            </th>
            <th className="users__text">Timesheet</th>
          </tr>
          {mapTable()}
        </tbody>
      </table>
    </main>
  );
}

export default Tasks;
