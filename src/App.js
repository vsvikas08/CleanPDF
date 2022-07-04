import logo from "./logo.svg";
import "./App.css";
import { Typography } from "@material-ui/core";
import Navbar from "./components/Navbar";
import MainPage from "./components/MainPage";

function App() {
    return (
        <>
            <Navbar />
            <MainPage />
        </>
    );
}

export default App;
