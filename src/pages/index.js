import React from 'react';
import { Link } from 'react-router-dom'; 
const Home = () => {
return (
	<div>
	<h1>Welcome to HOMEPAGE Birthday</h1> 
<Link to="/sign-up"> 
    <button type="button">
    Registration Page
     </button>
</Link>
	</div>
);
};

export default Home;
