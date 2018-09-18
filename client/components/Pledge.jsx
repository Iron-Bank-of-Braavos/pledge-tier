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
    this.handleHover = this.handleHover.bind(this);
  }

  handleHover() {
    this.setState({
      showButton: !this.state.showButton
    });
  }

  render() {
    // this.state.showButton ? console.log('yas') : console.log('nah');
    return(
      //on hover show button
      <ul>
        {/* <div class="text">select this pledge</div> */}
        <div  className={styles.container}>
          <div className={styles.hover} onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
            <span>Pledge ${this.props.pledge.pledge_ammount} or more</span>
            <div className={styles.text}>
              <h3>
                Rewards
              </h3>
            </div>
            <ul className={styles.text}>{this.props.pledge.reward}</ul>
            <div>
              <span>ESTIMATED DELIVERY</span>
              <span>{this.props.pledge.eta}</span>
            </div>
            <div>
              <span>SHIPS TO</span>
              <span>{this.props.pledge.shipping_location}</span>
            </div>
            <div>
              <span>{this.props.pledge.backers} backers</span>
            </div>
          </div>
        </div>
      </ul>
    );
  }
}

export default Pledge;