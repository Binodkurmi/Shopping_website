import React from 'react';
import Hero from '../Components/Hero.jsx';
import LatestCollection from '../Components/LatestCollection.jsx';


function Home() {
	return (
		<div className="mt-20"> 
			<Hero />
		  <LatestCollection/>
		</div>
	);
}

export default Home;
