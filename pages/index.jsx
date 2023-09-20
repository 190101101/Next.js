import Head from 'next/head'
import Home from './home/home'

export default function index() {
  return (
    <div className='bg-black h-screen'>
      <Home/>
    </div>    
  )
}
