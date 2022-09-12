function InfoPopup({ openInfoPopup, data, close }) {
  return (
    <div className={`popup ${openInfoPopup && "popup__opened"}`}>
          <div className="popup__box">
            <p>{`TYPE: ${data.$type}`}</p>
            <p>{`ID: ${data.id}`} </p>
            <p>{`Name: ${data.name}`}</p>
            <p>{`Login: ${data.login}`}</p>
            <p>{`Email: ${data.email}`}</p>
            <button type="button" onClick={close}>
        Закрыть
      </button>
          </div>
    </div>
  );
}

export default InfoPopup;
