import Input from "@/components/form/Input";
import Title from "@/components/ui/Title";
import { useFormik } from 'formik';
import { adminSchema } from '@/schema/admin';
import { BsGithub } from 'react-icons/bs';
import Link from "next/link";

const Admin = () => {
    const onSubmit = async (values, actions) => {
        await new Promise((resolve) => setTimeout(resolve, 500));
        actions.resetForm();
        console.log(JSON.stringify(values, null, 1));
    }
      
    const {values, handleChange, handleSubmit, touched, handleBlur, errors} = useFormik({
        initialValues: {
          username:'',
          password:'',
        },
        onSubmit,
        validationSchema: adminSchema,
      })
      
      const inputs = [
        {
          id:1,
          name:'username',
          type:'text',
          placeholder:'your username',
          value: values.username,
          errorMessage: errors.username,
          touched: touched.username,
        },
        {
          id:2,
          name:'password',
          type:'password',
          placeholder:'your password',
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
                  {inputs.map((input) => 
                    <Input key={input.id} {...input} onChange={handleChange} 
                        onBlur={handleBlur}
                    />
                    )}
                </div>
                <div className="flex flex-col w-full gap-y-2 my-4">
                  <button type="submit" className="btn-primary">Admin</button>
                  <Link href="/home">
                    <span className="text-[14px] underline cursor:pointer text-secondary">go to home page </span>
                  </Link>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Admin