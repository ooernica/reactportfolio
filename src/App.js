import Nav from "./components/nav/Nav";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";


function App() {
  return (
    <div>
      <Nav/>
      <Header/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;