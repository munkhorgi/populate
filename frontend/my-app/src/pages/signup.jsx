import React from "react";
import "../App.css";
import Logo from "../assets/boginooLogo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
function Signupp() {
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [role , setRole] = useState()
  const SignUp = async () => {
    try {
      await axios.post("http://localhost:8000/users/signup", {
        password: password,
        email: email,
        role: role,
      });
      window.location.replace("/login");
      toast.success("Amjilttai burtguullee");
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <>
      <div className="header">
        <div className="topHeader">
          <p className="topHeaderShit">Хэрхэн ажилладаг вэ?</p>
        </div>
        <div className="bottomHeader">
          <Link to={"/"}>
            <img src={Logo} alt="" className="logo" />
          </Link>
        </div>
        <div>
          <p className="headerShit">Бүртгүүлэх</p>
        </div>
      </div>
      <div className="main">
        <div className="input">
          <p className="holder">Цахим хаяг</p>
          <input
            type="text"
            className="inputs"
            placeholder="name@mail.domain"
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="holder">Нууц үг</p>
          <input
            type="text"
            className="inputs"
            placeholder="··········"
            style={{ fontWeight: "bolder" }}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="holder">Role</p>
          <input
            type="text"
            className="inputs"
            placeholder="··········"
            style={{ fontWeight: "bolder" }}
            onChange={(e) => setRole(e.target.value)}
          />
          <p className="holder">Нууц үгээ давтна уу?</p>
          <input
            type="text"
            className="inputs"
            placeholder="··········"
            style={{ fontWeight: "bolder" }}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      <div className="thridMain">
        <div className="help">
          <button className="button" onClick={() => SignUp()}>
            Бүртгүүлэх
          </button>
        </div>
      </div>
      <div className="footer">
        <div className="texts">
          <p className="secondMainShit" style={{ color: "black" }}>
            Made with ❤️ by Nest Academy
          </p>
          <p
            className="secondMainShit"
            style={{ color: "gray", fontSize: "13px", marginLeft: "60px" }}
          >
            ©boginoo.io 2023
          </p>
        </div>
      </div>

      <ToastContainer />
    </>
  );
}

export default Signupp;
