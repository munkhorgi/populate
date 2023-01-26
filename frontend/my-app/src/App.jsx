import React from "react";
import Login from "./pages/login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import SignUp from "./pages/signup";
import ForgotPass from "./pages/forgotpass";
import { useState, useEffect } from "react";
import Link from "./components/link";
import axios from "axios";
import LoggedIn from "./pages/loggedIn";

function App() {
  const instance = axios.create({
    baseURL: "http://localhost:8000",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      "app-id": "63104c3120f6e665ecf628ba",
    },
  });
  const [data, setData] = useState([]);
  const getData = async () => {
    const res = await instance.get("/links");
    setData(res.data.data);
  };
  useEffect(() => {
    getData();
  } , []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home data={data} setData={setData} />}
          ></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/forgotpass" element={<ForgotPass />}></Route>
          <Route path="/:Shortlink" element={<Link />}></Route>
          <Route path="/users/:id" element={<LoggedIn />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
