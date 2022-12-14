import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import QuestionForm from "../components/practice/QuestionForm";
import QuestionHeader from "../components/practice/QuestionHeader";
import TaskProgress from "../components/practice/TaskProgress";
import Spinner from "../components/Spinner";
import { RootState } from "../store/store";
import { useGetTasksQuery } from "../store/taskApi";

function PracticeScreen() {
    const { isLoading } = useGetTasksQuery("");
    const { taskCompleted } = useSelector((state: RootState) => state.app);

    return taskCompleted ? (
        <Navigate to="/rank" />
    ) : (
        <Spinner isLoading={isLoading}>
            <main className="container mx-auto px-4 md:px-16 py-8">
                <TaskProgress />
                <QuestionHeader />
                <QuestionForm />
            </main>
        </Spinner>
    );
}

export default PracticeScreen;
