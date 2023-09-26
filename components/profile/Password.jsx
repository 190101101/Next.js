import Input from '@/components/form/Input';
import Title from '@/components/ui/Title';
import { useFormik } from 'formik';
import { passwordSchema } from '@/schema/password';

const Password = () => {
  
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    actions.resetForm();
    console.log(JSON.stringify(values, null, 1));
  }

  const {values, handleChange, handleSubmit, touched, handleBlur, errors} = useFormik({
    initialValues: {
      password:'',
      confirmpassword:'',
    },
    onSubmit,
    validationSchema: passwordSchema,
  })

    const inputs = [
      {
        id:1,
        name:'password',
        type:'password',
        placeholder:'password',
        value: values.password,
        errorMessage: errors.password,
        touched: touched.password,
      },
      {
        id:2,
        name:'confirmpassword',
        type:'password',
        placeholder:'confirm password',
        value: values.confirmpassword,
        errorMessage: errors.confirmpassword,
        touched: touched.confirmpassword,
      },
  ];

  return (
    <form onSubmit={handleSubmit} className='md:p-4 p-0 flex-1 md:mt-0 mt-10'>
        <Title addClass="lg:text-[40px] md:text-[30px] text-[20px]">password</Title>
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-2 mt-4'>
          {inputs.map((input) => 
            <Input key={input.id} {...input} onChange={handleChange} onBlur={handleBlur}/>
          )}
          <button type="submit" className='btn-primary w-36'>update</button>
        </div>
    </form>
  )
}

export default Password