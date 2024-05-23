import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
//import { useNavigate } from "react-router-dom";
import { CreateProduct } from "../Api/ApiHandler";

const Createproduct = () => {
 // const navigate = useNavigate();
  const [file, setFile] = useState("");
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      price: "",
      description: "",
      brand: "",
      image: "",
    },
  });
  const { mutate } = useMutation({
    mutationFn: CreateProduct,
    onSuccess: () => {
      toast("SignUp Successfully");
     // navigate("/login");
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
        <label htmlFor="">Price</label>
        <input type="number" {...register("number")} />
        <br />
        <br />
        <label htmlFor="">description</label>
        <input {...register("description")} />
        <br />
        <br />
        <label htmlFor="">Brand</label>
        <input {...register("brand")} />
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
        <ToastContainer />
      </form>
    </>
  );
};

export default Createproduct;
