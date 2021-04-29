import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Search from './Search';
import Home from './Home';
import { useEffect, useState } from 'react';
import styles from './Router.module.css';


const initialState = JSON.parse(localStorage.getItem('favoritos') || '[]');
const initialStates = JSON.parse(localStorage.getItem('lista') || '[]');

const App = () => {
	const [ favoriteSongs, setFavoriteSongs ] = useState(initialState);
	//const [ favoriteSongs, setFavoriteSongs ] = useLocalStorage('favoritos', []);
	useEffect(
		() => {
			localStorage.setItem('favoritos', JSON.stringify(favoriteSongs));
		},
		[ favoriteSongs ]
	);
	const [ lista, setlista ] = useState(initialStates);
	//const [ favoriteSongs, setFavoriteSongs ] = useLocalStorage('favoritos', []);
	useEffect(
		() => {
			localStorage.setItem('lista', JSON.stringify(lista));
		},
		[ lista ]
	);
	return (
		<div className={styles.cabecera}>
		<Router>
			<Link className={styles.router} to="/">Home</Link>
			<Link className={styles.router}to="/search">Search</Link>
			<div className={styles.bajo}>
			<Switch>
				<Route exact path="/">
					<Home favoriteSongs={favoriteSongs} />
				</Route>
				<Route path="/search">
					<Search favoriteSongs={favoriteSongs} setFavoriteSongs={setFavoriteSongs} lista={lista} setlista={setlista}/>
				</Route>
			</Switch>
			</div>
		</Router>
		</div>
	);
};

export default App;
