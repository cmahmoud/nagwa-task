import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

function QuestionHeader() {
    const currentQuestion = useSelector(
        (state: RootState) => state.app.currentQuestion
    );
    return (
        <h1 className="text-4xl text-indigo-600 font-semibold mb-8">
            {currentQuestion?.word}
        </h1>
    );
}

export default QuestionHeader;
