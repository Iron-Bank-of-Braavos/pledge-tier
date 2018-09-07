import React from 'react';

const Pledge = (props) => {
	console.log(props.pledge);
	return(
		<li className="pledge">
			<div>
				<p>Pledge $ {props.pledge.pledge_ammount} or more</p>
				<br></br>
				<h3>
          Control Base Game
				</h3>
				<span>{props.pledge.reward}</span>
				<br></br>
        ESTIMATED DELIVERY 
				{props.pledge.eta}
				<br></br>
        SHIPS TO 
				{props.pledge.shipping_location}
				<br></br>
				{props.pledge.backers} backers
			</div>
		</li>
	);
};

export default Pledge;