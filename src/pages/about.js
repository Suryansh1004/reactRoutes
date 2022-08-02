import React from "react";
import { Link } from 'react-router-dom'

const About = () => {
return (
	<div>
	<h1>
		THIS IS About PAGE
	</h1>
    <Link to="/blogs">
    <button type="button">
          See Blogs
     </button>
</Link>
	</div>
    
);
};

export default About;
