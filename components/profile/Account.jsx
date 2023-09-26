import Input from '@/components/form/Input';
import Title from '@/components/ui/Title';
import { useFormik } from 'formik';
import { profileSchema } from '@/schema/profile';

const Account = () => {
  
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    actions.resetForm();
    console.log(JSON.stringify(values, null, 1));
  }

  const {values, handleChange, handleSubmit, touched, handleBlur, errors} = useFormik({
    initialValues: {
      fullname:'',
      phone:'',
      email:'',
      address:'',
      job:'',
      bio:'',
    },
    onSubmit,
    validationSchema: profileSchema,
  })

    const inputs = [
      {
        id:1,
        name:'fullname',
        type:'text',
        placeholder:'full name',
        value: values.fullname,
        errorMessage: errors.fullname,
        touched: touched.fullname,
      },
      {
        id:2,
        name:'phone',
        type:'number',
        placeholder:'phone number',
        value: values.phone,
        errorMessage: errors.phone,
        touched: touched.phone,
      },
      {
        id:3,
        name:'email',
        type:'text',
        placeholder:'email',
        value: values.email,
        errorMessage: errors.email,
        touched: touched.email,
      },
      {
        id:4,
        name:'address',
        type:'text',
        placeholder:'address',
        value: values.address,
        errorMessage: errors.address,
        touched: touched.address,
      },
      {
        id:5,
        name:'job',
        type:'text',
        placeholder:'job',
        value: values.job,
        errorMessage: errors.job,
        touched: touched.job,
      },
      {
        id:6,
        name:'bio',
        type:'text',
        placeholder:'bio',
        value: values.bio,
        errorMessage: errors.bio,
        touched: touched.bio,
      },
  ];

  return (
    <form onSubmit={handleSubmit} className='md:p-4 p-0 flex-1 md:mt-0 mt-10'>
        <Title addClass="lg:text-[40px] md:text-[30px] text-[20px]">account settings</Title>
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-2 mt-4'>
          {inputs.map((input) => 
            <Input key={input.id} {...input} onChange={handleChange} onBlur={handleBlur}/>
          )}
          <button type="submit" className='btn-primary w-36'>update</button>
        </div>
    </form>
  )
}

export default Account