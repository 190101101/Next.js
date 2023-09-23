import Title from "../ui/Title"
import CustomerItem from "./CustomerItem"

const Customers = () => {
  return (
    <div className="container mx-auto my-20">
        <div>
            <Title addClass={"text-[40px] text-center"}>What Says Our Customers</Title>
        </div>
        <div className="flex gap-x-10">
            <CustomerItem image={"/images/client1.png"}/>
            <CustomerItem image={"/images/client2.png"}/>
        </div>
        <div>
            <span>arrow 1</span>
            <span>arrow 2</span>
        </div>
    </div>
  )
}

export default Customers