import './App.css';
import Features from './components/Features/Features';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Users from './components/Users/Users';
import Working from './components/Working/Working';
import Premium from './components/Premium/Premium';
import Workflow from './components/Workflow/Workflow';
import Guarantee from './components/Guarantee/Guarantee';
import { Footer } from './components/Footer/Footer';
import { FAQ } from './components/FAQ/FAQ';
import Customers from './components/Customers/Customers';
import { Support } from './components/Support/Support';

function App() {
	return (
		<>
			<Header />
			<main className="main">
				<Hero />
				<Users />
				<Working />
				<Features />
				<Premium />
				<Workflow />
				<Guarantee />
				<Support />
				<FAQ />
				<Customers />
			</main>
			<Footer />
		</>
	);
}

export default App;
