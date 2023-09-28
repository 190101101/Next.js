import React, { useState } from "react";
import Title from "../ui/Title";
import Input from "../form/input";

const Category = () => {
    const [inputText, setInputText] = useState("");
    const [categories, setCategories] = useState(['pizza', 'burger']);

    return (
    <div className="md:p-4 p-0 flex-1 lg:mt-0 mt-5">
      <Title addClass="text-[40px]">Category</Title>
      <div className="mt-5">
        <div className="flex gap-4 flex-1 items-center">
            <Input 
                placeholder="add a new category..." 
                onChange={(e) => {setInputText(e.target.value)}} 
                value={inputText}
            />
            
            <button 
                className="btn-primary" 
                onClick={() => {
                    setCategories([...categories, inputText]);
                    setInputText("");
                }}> add 
            </button>
        </div>
        <div className="mt-10">
            {categories.map((item, index) => 
                <div key={index} className="flex justify-between mt-4">
                    <b className="text-xl">{item}</b>
                    <button className="btn-primary !bg-danger" onClick={(index) => {
                        setCategories(categories.filter((cat) => cat !== item));
                    }}> delete </button>
                </div>
            )}
            <div></div>
        </div>
      </div>
    </div>
  );
};

export default Category;