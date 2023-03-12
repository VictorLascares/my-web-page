import { Home } from "./Home";
import { About } from "../About/About";
import { Skills } from "../Skills/Skills";
import { Portfolio } from "../Portfolio/Portfolio";
import { Contact } from "../Contact/Contact";

export const Main = () => {
    return (
        <main className="main">
            <Home />
            <About />
            <Skills />
            <Portfolio />
            <Contact />
        </main>
    );
};