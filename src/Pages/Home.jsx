import React from 'react';
import Hero from '../Components/Hero.jsx';
import LatestCollection from '../Components/LatestCollection.jsx';
import BestSeller from '../Components/BestSeller.jsx';
import OurPolicy from '../Components/OurPolicy.jsx';


function Home() {
	return (
		<div className="mt-20"> 
			<Hero />
		  <LatestCollection/>
			<BestSeller/>
			<OurPolicy/>
		</div>
	);
}

export default Home;
