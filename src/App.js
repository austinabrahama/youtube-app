import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Video from "./pages/Video";
import ContextProvider from "./contexts/AppContext";

let App = () => {
    return (
        <ContextProvider>
            <Navbar />
            <Outlet />
        </ContextProvider>
    );
};

let appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/video/:id",
                element: <Video />,
            }
        ]
    }
]);

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);