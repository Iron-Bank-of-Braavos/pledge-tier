import styles from './CSS/Pledge.css';
import React from 'react';
import Amount from './PledgeAmount.jsx';
// import PledgeDefault from './pledgedefault.jsx';

class Pledge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showButton: false,
      overlay: styles.overlay
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    e.preventDefault();
    this.setState({
      showButton: true,
      overlay: ''
    });
  }
  render() {
    console.log(this.props.pledge);
    return (
      <div > 
        <li className={styles.list}>
        <div className={styles.container} onClick={(e)=>{this.handleClick(e)}}>
          <div className={this.state.overlay}>
            <div className={styles.select}>Select this Reward</div>
          </div>
          <div className={styles.pledge_info}>
            <h2 className={styles.pledge_ammount}>
              
              Pledge 
            <span className={styles.money}> ${this.props.pledge.pledge_ammount} </span>
              
              or more
              
            </h2>
            <div className={styles.rewards}>
              <h3 className={styles.rewards_title}>
                Rewards
              </h3>
            <span className={styles.pledge_descip}>
              {this.props.pledge.reward}
            </span>
            </div>
            <div className={styles.pledge_delivery}>
              <span className={styles.delivery_detail}>ESTIMATED DELIVERY</span>
              <span className={styles.date}>{this.props.pledge.eta}</span>
            </div>
            <div className={styles.pledge_ship}>
              <span className={styles.ship_detail}>SHIPS TO</span>
              <span className={styles.date}>{this.props.pledge.shipping_location}</span>
            </div>
            <div className={styles.backers}>
              <span className={styles.backer_detail}>{this.props.pledge.backers} backers</span>
            </div>
              {this.state.showButton ? <Amount /> : null}
          </div>
        </div>
      </li>
      </div>
      
    );
  }
}

export default Pledge;