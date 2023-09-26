import { useFormik } from 'formik';
import Input from '@/components/form/Input';
import Title from '@/components/ui/Title';
import Image from 'next/image';
import { profileSchema } from '@/schema/profile';

const Index = () => {
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
    <div className="flex px-10 min-h-[calc(100vh_-_433px)] my-10">
      <div className='w-80 flex-shrink-0'>
        <div className='relative flex flex-col items-center p-10 border border-b-0 '>
          <Image src="/images/client1.png" alt="" width={100} height={100} className='rounded-md'/>
          <span className='text-[24px] text-bold mt-2'>jon doe</span>
        </div>
        <ul className='w-full font-semibold'>
            <li className='border w-full p-3 cursor-pointer hover:bg-primary list-none hover:text-white transition-all'>
              <i className='fa fa-home'></i>
              <button className="ml-1">account</button>
            </li>
            <li className='border w-full p-3 cursor-pointer hover:bg-primary list-none hover:text-white transition-all'>
              <i className='fa fa-key'></i>
              <button className="ml-1">password</button>
            </li>
            <li className='border w-full p-3 cursor-pointer hover:bg-primary list-none hover:text-white transition-all'>
              <i className='fa fa-list'></i>
              <button className="ml-1">orders</button>
            </li>
            <li className='border w-full p-3 cursor-pointer hover:bg-primary list-none hover:text-white transition-all'>
              <i className='fa fa-sign-out'></i>
              <button className="ml-1">exit</button>
            </li>
        </ul>
      </div>

      <div className='p-4 flex-1'>
        <Title addClass="text-[40px]">account settings</Title>
        <form onSubmit={handleSubmit} className='grid grid-cols-2 gap-2 mt-4'>
          {inputs.map((input) => 
            <Input key={input.id} {...input} onChange={handleChange} onBlur={handleBlur}/>
          )}
          <button type="submit" className='btn-primary w-36'>update</button>
        </form>

      </div>
    </div>
  )
}

export default Index