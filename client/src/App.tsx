import HomeScreen from "./pages/HomeScreen";
import PracticeScreen from "./pages/PracticeScreen";
import RankScreen from "./pages/RankScreen";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeScreen />,
    },
    {
        path: "/practice",
        element: <PracticeScreen />,
    },
    {
        path: "/rank",
        element: <RankScreen />,
    },
]);

export default function App() {
    return <RouterProvider router={router} />;
}
