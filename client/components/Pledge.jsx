import styles from './CSS/Pledge.css';
import React from 'react';

// const Container = {
//   border: '10px', 
//   color: '#000000',
//   // border-radius: '3px',
// }

// const Pledge = (props) => {
// 	return(
// 		<ul className="Pledge">
// 			<div className={styles.container}>
// 				<span>Pledge ${props.pledge.pledge_ammount} or more</span>
// 				<h3>
//           Control Base Game
// 				</h3>
// 				<span>{props.pledge.reward}</span>
//         <div>
//           <span>ESTIMATED DELIVERY</span>
// 				  <span>{props.pledge.eta}</span>
//         </div>
//         <div>
//           <span>SHIPS TO</span>
// 				  <span>{props.pledge.shipping_location}</span>
//         </div>
//         <div>
// 				  <span>{props.pledge.backers} backers</span>
//         </div>
// 			</div>
// 		</ul>
// 	);
// };

class Pledge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showButton: false
    }
  }

  handleHover() {
    this.setState({
      showButton: !this.state.showButton
    });
  }

  render() {

    return(
      //on hover show button
      <ul className="Pledge">
        <div className={styles.container}>
          <span>Pledge ${props.pledge.pledge_ammount} or more</span>
          <h3>
            Control Base Game
          </h3>
          <span>{props.pledge.reward}</span>
          <div>
            <span>ESTIMATED DELIVERY</span>
            <span>{props.pledge.eta}</span>
          </div>
          <div>
            <span>SHIPS TO</span>
            <span>{props.pledge.shipping_location}</span>
          </div>
          <div>
            <span>{props.pledge.backers} backers</span>
          </div>
        </div>
      </ul>
    );
  }
}

export default Pledge;