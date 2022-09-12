import React from "react";

function Main({open, cards}) {

  return (
    <main className="main">
      <table className="main__table">
        <tbody>
          <tr>
            <th className="main__text">ID</th>
            <th className="main__text">Name</th>
            <th className="main__text">Login</th>
            <th className="main__text">Email</th>
          </tr>
        {cards.map((card) => {
          return(
            <tr className="main__card" key={card.id} onClick={() => open(card)}>
          <th className="main__info">{card.id}</th>
          <th className="main__info">{card.name}</th>
          <th className="main__info">{card.login}</th>
          <th className="main__info">{card.email}</th>
        </tr>
          ) 
        }
        )}
        </tbody>
      </table>
    </main>
  );
}

export default Main;
