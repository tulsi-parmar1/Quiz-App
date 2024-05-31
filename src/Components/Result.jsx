import { useSelector } from "react-redux"

const Result = () => {

    const correct = useSelector(store => store.item.correctquestion);
    const correct2 = correct.length;
    const incorrect = useSelector(store => store.item.incorrectquestion);
    const incorrect2 = incorrect.length;
    const total = useSelector(store => store.item.question);
    const total2 = total.length;
    const skipped = total2 - (correct2 + incorrect2);

    return (
        <>
            <div className="p-3 mb-2 bg-primary text-white my-5">Correct:{correct2}</div>
            <div className="p-3 mb-2 bg-danger text-white">Incorrect:{incorrect2}</div>
            <div className="p-3 mb-2 bg-warning text-white">skipped:{skipped}</div>
        </>
    )
}
export default Result;