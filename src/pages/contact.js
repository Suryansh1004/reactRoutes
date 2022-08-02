import React from 'react';
import { Link } from 'react-router-dom'
const Contact = () => {
return (
	<div>
	<h1>HERE are Your Detailes</h1>
    <Link to="/about">
    <button type="button">
          About Page
     </button>
      </Link>
	</div>
);
};

export default Contact;
