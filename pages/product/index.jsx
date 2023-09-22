import Title from "@/components/ui/Title";
import Image from "next/image";

const index = () => {
  return (
    <div className="flex flex-wrap items-center h-screen gap-20">
        <div className="relative md:flex-1 w-[80%] h-[80%] mx-20 py-20">
            <Image src="/images/f1.png" alt="" layout="fill" objectFit="contain"/>
        </div>
        <div className="md:flex-1 md:text-start text-center">
            <Title addClass="text-6xl">Good Pizza</Title>
            <span className="text-primary text-2xl font-bol underline underline-offset-2 my-4 inline-block">$10</span>
            <p className="text-sm my-4 md:pr-24">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quasi repudiandae dolorem natus nesciunt placeat deleniti iusto, accusamus aut quaerat in ipsa aliquid, hic magni aliquam qui odio voluptate molestiae.</p>
            <div>
                <h4 className="text-xl font-bold">Choose the size</h4>
                <div className="flex items-center md:justify-start sm:justify-center gap-10">
                    <div className="relative w-8 h-8">
                        <Image src="/images/f1.png" alt="" layout="fill"/>
                        <span className="absolute top-0 -right-6 text-xs bg-primary rounded-full px-[5px] font-medium">Small</span>
                    </div>
                    <div className="relative w-12 h-12">
                        <Image src="/images/f1.png" alt="" layout="fill"/>
                        <span className="absolute top-0 -right-6 text-xs bg-primary rounded-full px-[5px] font-medium">Middle</span>
                    </div>
                    <div className="relative w-16 h-16">
                        <Image src="/images/f1.png" alt="" layout="fill"/>
                        <span className="absolute top-0 -right-4 text-xs bg-primary rounded-full px-[5px] font-medium">Large</span>
                    </div>
                </div>
            </div>

            <div className="my-6">
                <div className="">
                    <p className="text-xl font-bold">Choose addtional ingredients</p>
                </div>
                <div className="flex items-center md:justify-start sm:justify-center gap-x-4 my-6">
                    <label className="flex items-center gap-x-1">
                        <input type="checkbox" className="w-5 h-5 accent-primary" />
                        <span className="text-sm font-semibold">ketcup</span>
                    </label>
                    <label className="flex items-center gap-x-1">
                        <input type="checkbox" className="w-5 h-5 accent-primary" />
                        <span className="text-sm font-semibold">ketcup</span>
                    </label>
                    <label className="flex items-center gap-x-1">
                        <input type="checkbox" className="w-5 h-5 accent-primary" />
                        <span className="text-sm font-semibold">ketcup</span>
                    </label>
                </div>
                <button className="btn-primary">add to cart</button>
            </div>
        </div>
    </div>
  )
}

export default index