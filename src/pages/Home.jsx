import Categories from "../components/Categories.jsx"
import Category from "../components/Category.jsx";
import Todays from "../components/Todays.jsx";

function Home() {
    return(
        <div>
            <Categories/>
            <Todays/>
            <Category/>
        </div>
    );
}
export default Home;
