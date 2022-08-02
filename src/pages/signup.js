import React from 'react';
import { Link } from 'react-router-dom'; 


const SignUp = () => {
return (
	<div>
	<h1>Sign Up Successful</h1>

    <Link to="/contact">
    <button type="button">
          Submit Form!
     </button>
</Link>
	</div>
);
};

export default SignUp;
