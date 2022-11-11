import { useState } from 'react';
import AddCategory from './Components/AddCategory';
import GifGrid from './Components/GifGrid';
import './style.css';
function GifExpertApp() {
    const [categories, setCategories] = useState([]);
 const onNewCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([ newCategory, ...categories ])
 }

    return ( <>
   <h1>Gif Expert App</h1>
   <AddCategory onNewcategory={onNewCategory} />
     {categories.map((category)=>(
<GifGrid 
key={category}
category = {category}


/>
     )
     )}
 
    </> );
}

export default GifExpertApp;