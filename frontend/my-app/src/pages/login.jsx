import React from "react";
import "../App.css";
import Logo from "../assets/boginooLogo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
function Loginn() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const Login = async () => {
    try {
      const res = await axios.post("http://localhost:8000/users/login", {
        email: email,
        password: password,
      });
      console.log(res.data.token);
      //   console.log(res.data.data._id);
      toast.success("amjilttai");
      window.localStorage.setItem("token", JSON.stringify(res.data.token));
      window.location.replace(`/users/${res.data.data._id}`);
      // localStorage.setItem("token");
    } catch (error) {
      toast.error(error.response.data.error);
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
          <p className="headerShit">Нэвтрэх</p>
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
        </div>
      </div>
      <div className="secondMain">
        <input type="checkbox" name="" id="" className="checkBox" />
        <p className="secondMainShit">Намайг сана</p>
        <Link to={"/forgotpass"}>
          <p
            className="secondMainShit"
            style={{
              color: "black",
              textDecorationLine: "underline",
              marginLeft: "140px",
            }}
          >
            Нууц үгээ мартсан
          </p>
        </Link>
      </div>
      <div className="thridMain">
        <div className="help">
          <button className="button" onClick={() => Login()}>
            Нэвтрэх
          </button>
          <Link to={"/signup"}>
            <p
              className="secondMainShit"
              style={{
                marginLeft: "60px",
                marginTop: "30px",
                textDecorationLine: "underline",
              }}
            >
              Шинэ хэрэглэгч бол энд дарна уу?
            </p>
          </Link>
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

export default Loginn;
