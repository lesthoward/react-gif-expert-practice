import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifList from "./components/GifList";

const GifExpertApp = () => {
    const [categories , setCategories] = useState(["one punch"]);

    const handleAdd = (category) => {
        const exist = categories.find(data => data === category)
        if(exist) return alert("Category already exist");
        setCategories([category, ...categories]);
        if(categories.length > 5) {
            setCategories(categories.slice(0, 5));
        }
    }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory handleAdd={handleAdd}/>
            {categories.map((category, index) => (
                <GifList  key={index} category={category}/>
            ))}
        </>
    );
};

export default GifExpertApp;
