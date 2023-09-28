import Input from '@/components/form/Input';
import Title from '@/components/ui/Title';
import { useFormik } from 'formik';
import { footerSchema } from '@/schema/footer';
import { useState } from 'react';

const footer = () => {

  const [linkAdress, setLinkAdress] = useState("");
  const [iconName, setIconName] = useState("");
  
  const [icons, setIcons] = useState([
    'fa fa-facebook', 
    'fa fa-instagram', 
    'fa fa-twitter',
  ]);
  
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    actions.resetForm();
    console.log(JSON.stringify(values, null, 1));
  }

  const {values, handleChange, handleSubmit, touched, handleBlur, errors} = useFormik({
    initialValues: {
      location:'',
      email:'',
      phone:'',
      desc:'',
      day:'',
      time:'',
    },
    onSubmit,
    validationSchema: footerSchema,
  })

    const inputs = [
      {
        id:1,
        name:'location',
        type:'text',
        placeholder:'location',
        value: values.location,
        errorMessage: errors.location,
        touched: touched.location,
      },
      {
        id:2,
        name:'email',
        type:'text',
        placeholder:'email',
        value: values.email,
        errorMessage: errors.email,
        touched: touched.email,
      },
      {
        id:3,
        name:'phone',
        type:'number',
        placeholder:'phone number',
        value: values.phone,
        errorMessage: errors.phone,
        touched: touched.phone,
      },
      {
        id:4,
        name:'desc',
        type:'text',
        placeholder:'desc',
        value: values.desc,
        errorMessage: errors.desc,
        touched: touched.desc,
      },
      {
        id:5,
        name:'day',
        type:'text',
        placeholder:'day',
        value: values.day,
        errorMessage: errors.day,
        touched: touched.day,
      },
      {
        id:6,
        name:'time',
        type:'text',
        placeholder:'time',
        value: values.time,
        errorMessage: errors.time,
        touched: touched.time,
      },
  ];

  return (
    <form onSubmit={handleSubmit} className='md:p-4 p-0 flex-1 md:mt-0 mt-10'>
        <Title addClass="lg:text-[40px] md:text-[30px] text-[20px]">footer settings</Title>
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-2 mt-4'>
          {inputs.map((input) => 
            <Input key={input.id} {...input} onChange={handleChange} onBlur={handleBlur}/>
          )}
        </div>
        <div className="mt-4 flex justify-between md:items-center md:flex-row flex-col gap-4">
            <div className='flex gap-4 items-center'>
              <Input placeholder="link address" value="https://"/>
              <Input placeholder="icon name" 
                value={iconName} 
                onChange={(e) => {
                  setIconName(e.target.value);
                }}
              />
              <button 
                className='btn-primary' 
                type="button" 
                onClick={() => {
                  setIcons([...icons, iconName])
                  setIconName('');
                }}>add</button>
            </div>
            <ul className='flex items-center gap-6'>
              {icons.map((icon, index) => 
                <li key={index} className='items-center'>
                  <i className={`${icon} text-1xl`}/>
                  <button className='text-danger ml-2' type="button" onClick={() => {
                    setIcons((prev) => prev.filter((item, i) => i !== index));
                  }}>
                    <i className='fa fa-trash'/>
                  </button>
                </li>
              )}
              
            </ul>
        </div>
        <button type="submit" className='btn-primary w-36'>update</button>
    </form>
  )
}

export default footer