import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Registration from "./Registration";

const initialFormValues = {
  name: "",
  email: "",
  password: "",
  occupation: "",
  state: "",
};

function App() {
  //Setting up form values
  const [formValue, setFormValue] = useState(initialFormValues);

  //onChange handler
  const onChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const navigate = useNavigate();

  //onSubmit handler
  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://frontend-take-home.fetchrewards.com/form", formValue)
      .then((res) => {
        console.log("posted!");
        navigate("/success");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //state for retrieved data, starts with dummy data
  const [retrieve, setRetrieve] = useState({
    occupations: ["loading occupations"],
    states: [{ name: "loading state", abbreviation: "loading abbreviation" }],
  });

  //At the start of the app, a get request is made
  useEffect(() => {
    axios
      .get("https://frontend-take-home.fetchrewards.com/form")
      .then((res) => {
        setRetrieve(res.data);
        console.log("get request successful!");
      })
      .catch((error) => {
        console.error("Server Error", error);
      });
  }, []);

  return (
    <>
      <Registration
        retrieve={retrieve}
        formValue={formValue}
        onChange={onChange}
        onSubmit={onSubmit}
      />
    </>
  );
}

export default App;
