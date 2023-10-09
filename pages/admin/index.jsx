import Input from "@/components/form/Input";
import Title from "@/components/ui/Title";
import { useFormik } from "formik";
import { adminSchema } from "@/schema/admin";
import { BsGithub } from "react-icons/bs";
import Link from "next/link";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const Login = () => {
  const {push} = useRouter();

  const onSubmit = async (values, actions) => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/admin`,
        values
      );
      if (res.status === 200) {
        toast.success("logged in");
        actions.resetForm();
        push("/admin/profile");
      }
    } catch (err) {
      toast.error("wrong credentials");
    }
  };

  const { values, handleChange, handleSubmit, touched, handleBlur, errors } =
    useFormik({
      initialValues: {
        username: "",
        password: "",
      },
      onSubmit,
      validationSchema: adminSchema,
    });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "your username",
      value: values.username,
      errorMessage: errors.username,
      touched: touched.username,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "your password",
      value: values.password,
      errorMessage: errors.password,
      touched: touched.password,
    },
  ];

  return (
    <div className="container mx-auto my-10">
      <div className="flex flex-col items-center md:w-1/2 w-full mx-auto">
        <Title addClass="text-center text-[40px]">Login</Title>
        <form onSubmit={handleSubmit} className="lg:flex-1 w-full my-10">
          <div className="flex flex-col gap-y-2">
            {inputs.map((input) => (
              <Input
                key={input.id}
                {...input}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            ))}
          </div>
          <div className="flex flex-col w-full gap-y-2 my-4">
            <button type="submit" className="btn-primary">
              login
            </button>
            <button className="btn-primary !bg-secondary flex justify-center items-center gap-1">
              <BsGithub />
              Github
            </button>
            <Link href="/auth/register">
              <span className="text-[14px] underline cursor:pointer text-secondary">
                Do you no have a account?
              </span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export const getServerSideProps = (ctx) => {
  const myCookie = ctx.req?.cookies || "";

  if(myCookie.token === process.env.ADMIN_TOKEN){
    return{
      redirect:{
        destination:'/admin/profile',
        permanent:false,
      }
    }
  }

  return {
    props:{},
  }
}

export default Login;
