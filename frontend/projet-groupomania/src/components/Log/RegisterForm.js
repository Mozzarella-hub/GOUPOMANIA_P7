import React, { useState } from "react";
import axios from "axios";
import LoginForm from "./LoginForm";

const RegisterForm = () => {
  const [formSubmit, setFormSubmit] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [controlPassword, setControlPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    const nameError = document.querySelector(".name.error");
    const emailError = document.querySelector(".email.error");
    const passwordError = document.querySelector(".password.error");
    const passwordConfirmError = document.querySelector(
      ".password-confirm.error"
    );

    passwordConfirmError.innerHTML = "";

    if (password !== controlPassword) {
      if (password !== controlPassword)
        passwordConfirmError.innerHTML =
          "Les mots de passe ne correspondent pas";
    } else {
      await axios({
        method: "POST",
        url: `${process.env.REACT_APP_API_URL}api/user/register`,
        withCredentials: false,
        data: {
          email,
          name,
          password,
        },
      })
        .then((res) => {
          console.log(res);
          if (res.data.errors) {
            nameError.innerHTML = res.data.errors.name;
            emailError.innerHTML = res.data.errors.email;
            passwordError.innerHTML = res.data.errors.password;
          } else {
            setFormSubmit(true);
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      {formSubmit ? (
        <>
          <LoginForm />
          <span></span>
          <h4 className="success">
            "Enregistrement réussi, veuillez-vous connecter"
          </h4>
        </>
      ) : (
        <form action="" onSubmit={handleRegister} id="sign-up-form">
          <label htmlFor="name">Nom</label>
          <br />
          <input
            type="text"
            name="nom"
            id="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <div className="name error"></div>
          <br />
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="text"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <div className="email error"></div>
          <br />
          <label htmlFor="password">Mot de passe</label>
          <br />
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <div className="password error"></div>
          <br />
          <label htmlFor="password-conf">Confirmer mot de passe</label>
          <br />
          <input
            type="password"
            name="password"
            id="password-conf"
            onChange={(e) => setControlPassword(e.target.value)}
            value={controlPassword}
          />
          <div className="password-confirm error"></div>
          <br />
          <div className="terms error"></div>
          <br />
          <input type="submit" value="Valider inscription" />
        </form>
      )}
    </>
  );
};

export default RegisterForm;
