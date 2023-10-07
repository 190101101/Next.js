import axios from "axios";
import Input from "@/components/form/Input";
import Title from "@/components/ui/Title";
import { useFormik } from 'formik';
import { registerSchema } from '@/schema/register';
import { BsGithub } from 'react-icons/bs';
import Link from "next/link";

const Register = () => {
    const onSubmit = async (values, actions) => {
      /*
      await new Promise((resolve) => setTimeout(resolve, 500));
      actions.resetForm();
      */ 

     try{
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/users/register`, values);
     }catch(err){
      console.log(err);
     }

    }
      
    const {values, handleChange, handleSubmit, touched, handleBlur, errors} = useFormik({
        initialValues: {
          fullname:'',
          email:'',
          password:'',
          confirmpassword:'',
        },
        onSubmit,
        validationSchema: registerSchema,
      })
      
      const inputs = [
        {
          id:1,
          name:'fullname',
          type:'fullname',
          placeholder:'your fullname',
          value: values.fullname,
          errorMessage: errors.fullname,
          touched: touched.fullname,
        },
        {
          id:2,
          name:'email',
          type:'email',
          placeholder:'your email',
          value: values.email,
          errorMessage: errors.email,
          touched: touched.email,
        },
        {
          id:3,
          name:'password',
          type:'password',
          placeholder:'your password',
          value: values.password,
          errorMessage: errors.password,
          touched: touched.password,
        },
        {
          id:4,
          name:'confirmpassword',
          type:'password',
          placeholder:'your confirm password',
          value: values.confirmpassword,
          errorMessage: errors.confirmpassword,
          touched: touched.confirmpassword,
        },
    ];

  return (
    <div className="container mx-auto my-10">
        <div className="flex flex-col items-center md:w-1/2 w-full mx-auto">
            <Title addClass="text-center text-[40px]">Register</Title>
            <form onSubmit={handleSubmit} className="lg:flex-1 w-full my-10">
                <div className="flex flex-col gap-y-2">
                  {inputs.map((input) => 
                    <Input key={input.id} {...input} onChange={handleChange} 
                        onBlur={handleBlur}
                    />
                    )}
                </div>
                <div className="flex flex-col w-full gap-y-2 my-4">
                  <button type="submit" className="btn-primary">Register</button>
                  <button type="button" className="btn-primary !bg-secondary flex justify-center items-center gap-1">
                    <BsGithub/>
                    Github
                  </button>
                  <Link href="/auth/login">
                    <span className="text-[14px] underline cursor:pointer text-secondary">have a account?</span>
                  </Link>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Register