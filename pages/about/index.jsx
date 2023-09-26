import About from '@/components/About'
import Title from '@/components/ui/Title'

const index = () => {
  return (
    <div className='my-10'>
      <Title addClass="text-center text-2xl font-bold mb-10">About page</Title>
      <About/>
    </div>
  )
}

export default index