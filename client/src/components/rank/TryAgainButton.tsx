import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { repeatTask } from "../../store/appSlice";

function TryAgainButton() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Button handler
    const handleTaskRepeat = () => {
        dispatch(repeatTask());
        navigate("/practice");
    };
    return (
        <button
            className="bg-indigo-700 text-white rounded-lg px-8 py-3 font-medium"
            onClick={handleTaskRepeat}
        >
            Try again
        </button>
    );
}

export default TryAgainButton;
