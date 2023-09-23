import { useFormik } from 'formik';

import Image from "next/image";
import Input from "./form/Input";
import Title from "./ui/Title";
import { reservationSchema } from '@/schema/Reservation';

const Reservation = () => {
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
      persons:'',
      date:'',
    },
    onSubmit,
    validationSchema: reservationSchema,
  })
  
  const inputs = [
    {
      id:1,
      name:'fullname',
      type:'text',
      placeholder:'your full name',
      value: values.fullname,
      errorMessage: errors.fullname,
      touched: touched.fullname,
    },
    {
      id:2,
      name:'phone',
      type:'number',
      placeholder:'your phone number',
      value: values.phone,
      errorMessage: errors.phone,
      touched: touched.phone,
    },
    {
      id:3,
      name:'email',
      type:'email',
      placeholder:'your email',
      value: values.email,
      errorMessage: errors.email,
      touched: touched.email,
    },
    {
      id:4,
      name:'persons',
      type:'number',
      placeholder:'how many persons?',
      value: values.persons,
      errorMessage: errors.persons,
      touched: touched.persons,
    },
    {
      id:5,
      name:'date',
      type:'datetime-local',
      placeholder:'',
      value: values.date,
      errorMessage: errors.date,
      touched: touched.date,
    },
];

  return (
    <div className="container mx-auto py-12 ">
      <Title addClass="text-[40px] mb-10">Book a Table</Title>
      <div className="flex justify-between flex-wrap-reverse items-center gap-10">
        <form onSubmit={handleSubmit} className="lg:flex-1 w-full">
          <div className="flex flex-col gap-y-3">
              {inputs.map((input) => 
                <Input key={input.id} {...input} onChange={handleChange} onBlur={handleBlur}
                />
              )}
          </div>
          <button type="submit" className="btn-primary mt-4">BOOK NOW</button>
        </form>

        <div className="lg:flex-1 w-full !h-[384px]">
          <Image src="/images/map.png" alt=""  width={500} height={500}/>
          {/* 
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194530.81491365348!2d49.90135294145151!3d40.3746347065713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d6bd6211cf9%3A0x343f6b5e7ae56c6b!2z0JHQsNC60YM!5e0!3m2!1sru!2saz!4v1695411318623!5m2!1sru!2saz" 
          width="600" 
          height="450"
          allowFullScreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade"></iframe>
        */}
        </div>
      </div>
    </div>
  )
}

export default Reservation