import { useForm, SubmitHandler } from "react-hook-form";
import "./FeedbackForm.css";
import { yupResolver } from "@hookform/resolvers/yup";
import { userSchema } from "../src/validations/userValidation";
type Inputs = {
  name: string;
  email: string;
  rating: number;
  comments?: string;
};

const DownloadJSON = (Data: Inputs, fileName: string) => {
  const dataStr =
    "data:application/json;charset=utf-8," +
    encodeURIComponent(JSON.stringify(Data));
  const download = document.createElement("a");
  download.setAttribute("href", dataStr);
  download.setAttribute("download", `${fileName}.json`);
  document.body.appendChild(download);
  download.click();
  download.remove();
};

function FeedbackForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({ resolver: yupResolver(userSchema) });
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    DownloadJSON(data, "feedback-form-data");
  };

  console.log(watch("name"));
  return (
    
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="Name" {...register("name", { required: true })} />
      <p>{errors.name?.message}</p>
      <input placeholder="Email" {...register("email", { required: true })} />
      <p>{errors.email?.message}</p>
      <input placeholder="Rating" {...register("rating", { required: true })} />
      <p>{errors.rating?.message}</p>
      <input placeholder="Comments" {...register("comments")} />
      <p>{errors.comments?.message}</p>

      <button type="submit">Submit</button>
    </form>
  );
}

export default FeedbackForm;
