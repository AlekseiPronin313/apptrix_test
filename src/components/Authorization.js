import React from "react";

function Authorization( {onLogin}) {
    const [username, setLogin] = React.useState("");
    const [password, setPassword] = React.useState("");
    
    console.log('Login: erp_user')
    console.log('Password: 12qwaszx12qwaszx')

    function handleLoginChange(e) {
        setLogin(e.target.value);
      }
      function handlePasswordChange(e) {
        setPassword(e.target.value);
      }

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        onLogin(username, password)
       }
    
  return (
    <section className="authorization">
      <h1 className="authorization__title">Авторизация</h1>
      <form className="authorization__form" onSubmit={handleSubmit}>
        <input
          className="authorization__input"
          minLength="4"
          maxLength="40"
          name="username"
          type="username"
          placeholder="Login"
          value={username}
          onChange={handleLoginChange}
        ></input>
        <input
          className="authorization__input"
          minLength="6"
          maxLength="30"
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        ></input>
        <button className="authorization__button" type="submit">
          Войти
        </button>
      </form>
    </section>
  );
}

export default Authorization;
