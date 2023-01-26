import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const Links = () => {
  const params = useParams();
  const getDataById = async () => {
    const res = await axios.get(`http://localhost:8000/links/${params.Shortlink}`);
    window.location.replace(res.data.data.Longlink);
   
  };

  useEffect(() => {
    getDataById();
  }, []);

  return <div></div>;
};
export default Links;