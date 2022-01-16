import "./App.css";
import Card from "./Components/Card";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Skills from "./Components/Skills";
import ContactMe from "./Components/ContactMe";
function App() {
	return (
		<div className="min-h-screen py-10 px-3 sm:px-5 bg-gray-100">
			<Card />
			<About />
			<Skills />
			<ContactMe />
			<Footer />
		</div>
	);
}

export default App;
