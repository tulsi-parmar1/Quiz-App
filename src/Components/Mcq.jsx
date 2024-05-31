import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemaction } from "../Store/itemslice";
import { useNavigate } from "react-router-dom";

const Mcq = ({ item }) => {

    const dispatch = useDispatch();
    const [selectedquestions, setselected] = useState([]);

    //question index
    const index2 = useSelector(store => store.item.currentindex);
    const Navigate = useNavigate();

    const handleonclick = (index) => {
        const updateselected = [...selectedquestions, index];
        setselected(updateselected);

        //currectAnswer
        if (item.correctAnswer === index) {
            dispatch(itemaction.currectItem());
        }
        //incorrect Answer
        else {
            dispatch(itemaction.incorrectItem())
        }
    }
    const handleoptions = () => {

        dispatch(itemaction.nextmcq())

    }
    const handlesubmit = () => {

        Navigate("/result");
    }

    return (
        <>
            <div className="card">
                <div className="card-header">
                    {item.question}
                </div>
                <ul className="list-group list-group-flush">
                    {item.choices.map((option, index) => <li className={`list-group-item option`} onClick={() => handleonclick(index)} key={index}>{option}</li>)}
                </ul>
            </div>
            {index2 === 4 ? <button className="btn btn-primary finalbtn" type="submit" onClick={handlesubmit} >Submit</button> : <button className="btn btn-primary next" onClick={handleoptions}>Next</button>}
        </>
    )
}

export default Mcq;