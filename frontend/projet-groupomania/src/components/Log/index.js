import React, { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const Log = ( props ) => {
  const [registerModal, setRegisterModal] = useState(props.signup);
  const [loginModal, setLoginModal] = useState(props.signin);

  const handleModals = (e) => {
    if (e.target.id === "register") {
      setLoginModal(false);
      setRegisterModal(true);
    } else if (e.target.id === "login") {
      setRegisterModal(false);
      setLoginModal(true);
    }
  };

  return (
    <div className="connection-form">
      <div className="form-container">
        <ul>
          <li
            onClick={handleModals}
            id="register"
            className={registerModal ? "active-btn" : null}
          >
            S'inscrire
          </li>
          <li
            onClick={handleModals}
            id="login"
            className={loginModal ? "active-btn" : null}
          >
            Se connecter
          </li>
        </ul>

        {/* si le registerModal est sur true alors affiches le <RegisterForm />*/}
        {registerModal && <RegisterForm />}  

        {/* si le {loginModal && <LoginForm />} est sur true alors affiches le <LoginForm />*/}
        {loginModal && <LoginForm />}
      </div>
    </div>
  );
};

export default Log;