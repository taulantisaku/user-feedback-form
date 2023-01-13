import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import "./FeedbackForm.css";
import { yupResolver } from "@hookform/resolvers/yup";
import { userSchema } from "../src/validations/userValidation.js";
type Inputs = {
  name: string;
  email: string;
  rating: number;
  comments?: string;
};

function FeedbackForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({ resolver: yupResolver(userSchema) });
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  // const downloadData = () => {
  //   const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
  //     JSON.stringify(data)
  //   )}`;
  //   const link = document.createElement("a");
  //   link.href = jsonString;
  //   link.download = "data.json";

  //   link.click();
  // }

  console.log(watch("name"));
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="Name" {...register("name", { required: true })} />
      <p>{errors.name?.message}</p>
      <input placeholder="Email" {...register("email", { required: true })} />
      <p>{errors.email?.message}</p>
      <input
        placeholder="Rating"
        {...register("rating", { required: true })}
      />
      <p>{errors.rating?.message}</p>
      <input placeholder="Comments" {...register("comments")} />
      <p>{errors.comments?.message}</p>


      <input type="submit"/>
    </form>
  );
}

export default FeedbackForm;
