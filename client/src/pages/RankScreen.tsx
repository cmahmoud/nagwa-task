import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import ProgressCircle from "../components/rank/ProgressCircle";
import TryAgainButton from "../components/rank/TryAgainButton";
import { RootState } from "../store/store";

function RankScreen() {
    const { rank, taskCompleted } = useSelector(
        (state: RootState) => state.app
    );
    return taskCompleted ? (
        rank && (
            <main className="container mx-auto px-4 md:px-16 h-screen flex flex-col items-center justify-center gap-6">
                <ProgressCircle rank={rank} />
                <h1 className="text-5xl font-bold">You rank is {rank}%</h1>
                <TryAgainButton />
            </main>
        )
    ) : (
        <Navigate to="/practice" />
    );
}

export default RankScreen;
