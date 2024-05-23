import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { signIn } from "../Api/ApiHandler";

const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const queryClient = useQueryClient()

  const { mutate } = useMutation({
    mutationFn: signIn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] })
      navigate("/user/dashboard");
      toast("Login SucessFully");
    },
  });

  const onSubmit = (data) => mutate({ ...data });
 
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="">Email</label>
        <input type="email" {...register("email")} />
        <br />

        <br />
        <label htmlFor="">Password</label>
        <input {...register("password")} />
        <br />
        <br />

        <input type="submit" />
      </form>
    </>
  );
};

export default Login;
