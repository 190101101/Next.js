import Head from 'next/head'
import Header from '../components/layout/Header'
import Home from './home/home'
import Input from '../components/form/Input';

export default function index() {
  return (
    <div className='h-screen'>
      <Head>
        <title>food</title>
        <meta name="description" content="generated by create next app"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Home/>

      <div className='p-20 container mx-auto'>
        <Input/>
      </div>
    </div>    
  )
}
