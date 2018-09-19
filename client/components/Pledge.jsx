import styles from './CSS/Pledge.css';
import React from 'react';
// import reward from './Pledge Image/select_reward.png'

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
    console.log('hello');
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
        <div className={styles.container} onMouseOver={this.handleHover}>
          <div className={styles.overlay}>
            <div className={styles.text}>Select this Reward</div>
          </div>
          <div>
            <span>Pledge ${this.props.pledge.pledge_ammount} or more</span>
            <div>
              <h3>
                Rewards
              </h3>
            </div>
            <span>{this.props.pledge.reward}</span>
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