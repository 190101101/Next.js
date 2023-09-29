import Title from "@/components/ui/Title";
import Image from "next/image";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "../../redux/cartSlice";

const itemsExtra = [
    {
        id:1,
        name:'extra 1',
        price: 1,
    },
    {
        id:2,
        name:'extra 2',
        price: 2,
    },
    {
        id:3,
        name:'extra 3',
        price: 3,
    },
];

const foodItems = [
    {
        id:1,
        name:'pizza 1',
        price: 10,
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
        extraOptions:[
            {
                id:1,
                name:'extra 1',
                price:1,
            }
        ]
    },
]

const index = () => {
    
    const cart = useSelector((state) => state.cart);

    const dispatch = useDispatch();

    // 
    const [prices, setPrices] = useState([10,20,30]);
    const [price, setPrice] = useState(prices[0]);
    const [size, setSize] = useState(0);
    const [extraItems, setExtraItems] = useState(itemsExtra);
    const [extras, setExtras] = useState([]);

    const handleSize = (sizeIndex) => {
        const difference = prices[sizeIndex] - prices[size];
        setSize(sizeIndex);
        changePrice(difference);
    }

    const changePrice = (number) => {
        setPrice(price + number);
    }

    const handleChange = (e, item) => {
        const checked = e.target.checked;
        
        if(checked){
            setExtras([...extras, item]);
            changePrice(item.price);
        }else{
            setExtras(extras.filter((extra) => extra.id !== item.id));
            changePrice(-item.price);
        }
    }

    
    const handleClick = () => {
        dispatch(addProduct({...foodItems[0], extras, price, quantity:1}))
    }

    console.log(cart);

  return (
    <div className="flex flex-wrap items-center md:h-[calc(100vh_-_80px)] gap-5">
        <div className="relative md:flex-1 md:w-[80%] md:h-[80%] w-36 h-36 mx-auto py-20">
            <Image src="/images/f1.png" alt="" layout="fill" objectFit="contain"/>
        </div>
        <div className="md:flex-1 md:text-start text-center">
            <Title addClass="text-6xl">Good Pizza</Title>
            <span className="text-primary text-2xl font-bol underline underline-offset-2 my-4 inline-block">${price}</span>
            <p className="text-sm my-4 md:pr-24">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quasi repudiandae dolorem natus nesciunt placeat deleniti iusto, accusamus aut quaerat in ipsa aliquid, hic magni aliquam qui odio voluptate molestiae.</p>
            <div>
                <h4 className="text-xl font-bold">Choose the size</h4>
                <div className="flex items-center justify-center md:justify-start gap-10">
                    <div className="relative w-8 h-8 cursor-pointer">
                        <Image src="/images/f1.png" alt="" layout="fill" 
                            onClick={() => {
                                handleSize(0);
                            }}
                        />
                        <span className="absolute top-0 -right-6 text-xs bg-primary rounded-full px-[5px] font-medium">Small</span>
                    </div>
                    <div className="relative w-12 h-12 cursor-pointer">
                        <Image src="/images/f1.png" alt="" layout="fill" 
                            onClick={() => {
                                handleSize(1);
                            }}
                        />
                        <span className="absolute top-0 -right-6 text-xs bg-primary rounded-full px-[5px] font-medium">Middle</span>
                    </div>
                    <div className="relative w-16 h-16 cursor-pointer">
                        <Image src="/images/f1.png" alt="" layout="fill" 
                            onClick={() => {
                                handleSize(2);
                            }}
                        />
                        <span className="absolute top-0 -right-4 text-xs bg-primary rounded-full px-[5px] font-medium">Large</span>
                    </div>
                </div>
            </div>

            <div className="my-6">
                <div className="">
                    <p className="text-xl-2 font-bold">Choose addtional ingredients</p>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-x-4 my-6">
                    {extraItems.map((item) => 
                    <label key={item.id} className="flex items-center gap-x-1">
                        <input type="checkbox" className="w-5 h-5 accent-primary" 
                            value={item.name}
                            onChange={(e) => handleChange(e, item)}
                        />
                        <span className="text-sm font-semibold">{item.name}</span>
                    </label>
                    )}
                </div>
                <button className="btn-primary" onClick={handleClick}>add to cart</button>
            </div>
        </div>
    </div>
  )
}

export default index