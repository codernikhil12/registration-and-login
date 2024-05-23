import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { signUp } from "../Api/ApiHandler";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState("");
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      mobile: "",
      first_school: "",
      image: "",
    },
  });
  const { mutate } = useMutation({
    mutationFn: signUp,
    onSuccess:  () => {
      toast("SignUp Successfully");
      navigate("/login");
    },
  });
  const onSubmit = (data) => mutate({ ...file, ...data });

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="">Name</label>
        <input {...register("name")} />
        <br />
        <br />
        <label htmlFor="">Email</label>
        <input type="email" {...register("email")} />
        <br />
        <br />
        <label htmlFor="">Mobile</label>
        <input type="number" {...register("mobile")} />
        <br />
        <br />
        <label htmlFor="">Password</label>
        <input {...register("password")} />
        <br />
        <br />
        <label htmlFor="">First_School</label>
        <input {...register("first_school")} />
        <br />
        <br />
        <label htmlFor="">image</label>
        <input
          type="file"
          {...register("image")}
          onChange={(e) => setFile(e.target.files[0])}
        />
        <br />
        <br />
        <input type="submit" />
        <ToastContainer/>
      </form>
    </>
  );
};

export default Registration;
