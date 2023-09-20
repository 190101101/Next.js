import Head from 'next/head'
import Header from '../components/layout/Header'
import Home from './home/home'

export default function index() {
  return (
    <div className='bg-black h-screen'>
      <Header/>
      <Home/>
    </div>    
  )
}
