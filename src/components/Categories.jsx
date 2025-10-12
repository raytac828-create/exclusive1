import "./Categories.css";
import { ChevronRight } from "lucide-react";
import {Link} from "react-router-dom";
import i100 from "../assets/i100.webp"
function Categories() {
    const categories = [
        { name: "Women's Fashion",
            path: "/womensfashion" },
        { name:"Men's Fashion",
            path: "/mensfashion"},
        { name:"Electronics",
            path: "/electronics"},
        { name:"Home & Lifestyle",
            path: "/homelifestyle"},
        { name:"Medicine",
            path: "/medicine"},
        { name:"Baby's & Toys",
            path:"/babystoys"},
        { name:"Groceries & Pets",
            path:"/groceriespets"},
        { name:"Health & Beauty",
            path:"/healthbeauty"},
    ];
    return(
     <div className="categories">
        <ul className="list1">
            {categories.map((cat, index) => (<li key={index} className="category-item">
                <Link to={cat.path}>{cat.name}</Link>
                
            </li>))}
        </ul>
        <img src={i100} className="i100"></img>
     </div>
    );
}
export default Categories;