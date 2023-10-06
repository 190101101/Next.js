import Input from "@/components/form/Input";
import Title from "@/components/ui/Title";
import { useFormik } from "formik";
import { loginSchema } from "@/schema/login";
import { BsGithub } from "react-icons/bs";
import Link from "next/link";
import { useSession, signIn } from "next-auth/react";

const Login = () => {
  const { data: session } = useSession();
  console.log(session);

  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    actions.resetForm();
    console.log(JSON.stringify(values, null, 1));
  };

  const { values, handleChange, handleSubmit, touched, handleBlur, errors } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      onSubmit,
      validationSchema: loginSchema,
    });

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "your email",
      value: values.email,
      errorMessage: errors.email,
      touched: touched.email,
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
            <button
              type="button"
              className="btn-primary !bg-secondary flex justify-center items-center gap-1"
              onClick={() => {
                signIn("github");
              }}
            >
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

export default Login;
