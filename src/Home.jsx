import Song from './Song';
import styles from './Router.module.css';
import { useState } from 'react';
import Reproductor from './Reproductor';

const Home = ({ favoriteSongs }) => {
	const [ currentSong, setCurrentSong ] = useState(null);
	return (
		<main className={styles.todo}>
			<h1>Favorite Songs</h1>
			<section
				style={{
					display: 'grid',
					gridTemplateColumns: 'repeat(3, 1fr)',
					gap: '1rem'
				}}
			>
				{favoriteSongs.length > 0 ? (
					favoriteSongs.map((song) => <Song song={song} setCurrentSong={setCurrentSong} />)
				) : (
					<h4>Empty favorite song list</h4>
				)}
			</section>
			{currentSong && (
				<Reproductor source={currentSong.previewURL} name={currentSong.name} album={currentSong.albumName} />
			)}
		</main>
	);
};

export default Home;
