import Head from 'next/head'
import Header from '../components/layout/Header'
import Home from './home/home'
import MenuWrapper from "@/components/product/MenuWrapper"
import About from '@/components/product/About'

export default function index() {
  return (
    <div className='h-screen'>
      <Header/>
      <Home/>
      <MenuWrapper/>
      <About/>
    </div>    
  )
}
