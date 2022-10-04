import React from "react";

function Users({open, cards}) {
  return (
    <main className="users">
      <table className="users__table">
        <tbody>
          <tr>
            <th className="users__text">ID</th>
            <th className="users__text">Name</th>
            <th className="users__text">Login</th>
            <th className="users__text">Email</th>
          </tr>
        {cards.map((card) => {
          return(
            <tr className="users__card" key={card.id} onClick={() => open(card)}>
          <th className="users__info">{card.id}</th>
          <th className="users__info">{card.name}</th>
          <th className="users__info">{card.login}</th>
          <th className="users__info">{card.email}</th>
        </tr>
          ) 
        }
        )}
        </tbody>
      </table>
    </main>
  );
}

export default Users;