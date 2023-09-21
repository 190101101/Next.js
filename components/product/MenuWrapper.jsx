import Title from "../ui/Title"
import MenuItem from "./MenuItem"

const MenuWrapper = () => {
  return (
    <div className="container mx-auto flex flex-col items-center mb-16">
      <Title addClass="text-[48px]">Our menu</Title>
      <div className="mt-10">
        <button className="px-6 py-2 bg-secondary rounded-3xl text-white">all</button>
        <button className="px-6 py-2">burger</button>
        <button className="px-6 py-2">Pizza</button>
        <button className="px-6 py-2">Pasta</button>
        <button className="px-6 py-2">Fries</button>
      </div>
      {/*  */}
      <div className="mt-8">
        <MenuItem/>
      </div>
    </div>
  )
}

export default MenuWrapper