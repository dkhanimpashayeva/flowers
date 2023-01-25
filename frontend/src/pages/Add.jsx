import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { formSchema } from "../schema/formschema";
import { yupResolver } from "@hookform/resolvers/yup";
import "./Add.scss";
import axios from "axios";

const Add = () => {
  const [state, setState] = useState({
    url: "",
    name: "",
    price: "",
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const addData = () => {
    if (!state.url || !state.name || !state.price) return;

    axios.post("http://localhost:8080/flowers", state);
  };

  const getData = async () => {
    axios.get("http://localhost:8080/flowers");
  };

  useEffect(() => {
    getData();
  });
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
    getData();
  };

  const onSubmit = (data) => {
    console.log(data);
    addData();
  };
  console.log(watch("example"));

  return (
    <div className="add">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("url")}
          onChange={handleChange}
          value={state.url}
          name="url"
          type="url"
          id="url"
        />

        {errors.url && <p>{errors.url.message}</p>}

        <input
          {...register("name")}
          onChange={handleChange}
          value={state.name}
          name="name"
          id="name"
        />

        {errors.name && <p>{errors.name.message}</p>}

        <input
          {...register("price")}
          onChange={handleChange}
          value={state.price}
          name="price"
          id="price"
        />

        {errors.price && <p>{errors.price.message}</p>}

        <input type="submit" />
      </form>
    </div>
  );
};

export default Add;
