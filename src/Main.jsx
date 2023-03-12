import { Home } from "./components/Home";
import { About } from "./About/About";
import { Skills } from "./Skills/Skills";

export const Main = () => {
    return (
        <main className="main">
            <Home />
            <About />
            <Skills />
        </main>
    );
};