import { Home } from "./components/Home";
import { About } from "./About/About";

export const Main = () => {
    return (
        <main className="main">
            <Home />
            <About />
        </main>
    );
};