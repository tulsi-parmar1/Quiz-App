import { useSelector } from "react-redux";
import Mcq from "./Mcq";


const Home = () => {

    const index2 = useSelector(store => store.item.currentindex);
    const items = useSelector(store => store.item.question);

    return (
        <>
            {<Mcq item={items[index2]}></Mcq>}
        </>
    )
}
export default Home;