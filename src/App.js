
import './App.css';

function App() {
	

	const links = ['Service','Projects','About us'];

	return (
		<div className="App">
			<div>
                <h1>LOGOBAKERY</h1>
			</div>
			<div id="flex">
                {links.map((e)=>{
					return <Links link={e}></Links>
				})}
			</div>
			<div>
				<button>Contact</button>
			</div>
		</div>
	);
}

function Links(props) {
	return <p>{props.link}</p>;
}

export default App;
