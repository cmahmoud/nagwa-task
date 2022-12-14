import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

// Task Progress component
function TaskProgress() {
    const { completedQuestions, tasks } = useSelector(
        (state: RootState) => state.app
    );
    // calculate the task progress
    const taskProgress = (completedQuestions / tasks.length) * 100 + "%";
    return (
        <div className="flex flex-col gap-2 mb-8">
            {taskProgress ? (
                <>
                    <span className="text-lg font-medium">
                        {taskProgress} completed
                    </span>
                    <span
                        style={{
                            width: taskProgress,
                        }}
                        className="h-2 w-full bg-indigo-500 rounded-full transition-all duration-500"
                    ></span>
                </>
            ) : null}
        </div>
    );
}

export default TaskProgress;
