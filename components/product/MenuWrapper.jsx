import Title from "../ui/Title"
import MenuItem from "./MenuItem"

const MenuWrapper = () => {
  return (
    <div className="container mx-auto mb-16">
      <div className=" flex flex-col items-center w-full">
        <Title addClass="text-[40px]">Our menu</Title>
        <div className="mt-10">
          <button className="px-6 py-2 bg-secondary rounded-3xl text-white">all</button>
          <button className="px-6 py-2">burger</button>
          <button className="px-6 py-2">Pizza</button>
          <button className="px-6 py-2">Pasta</button>
          <button className="px-6 py-2">Fries</button>
        </div>
      </div>

      <div className="mt-8 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        <MenuItem image={"/images/f1.png"}/>
        <MenuItem image={"/images/f2.png"}/>
        <MenuItem image={"/images/f3.png"}/>
        <MenuItem image={"/images/f4.png"}/>
        <MenuItem image={"/images/f5.png"}/>
        <MenuItem image={"/images/f6.png"}/>
        <MenuItem image={"/images/f7.png"}/>
        <MenuItem image={"/images/f8.png"}/>
        <MenuItem image={"/images/f9.png"}/>
      </div>

      <div className="pb-[100px]"></div>
    </div>
  )
}

export default MenuWrapper