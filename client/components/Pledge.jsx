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
    console.log('clicked me')
    e.preventDefault();
    this.setState({
      showButton: true,
      overlay: ''
    });
  }
  render() {
    this.state.showButton ? console.log('yas') : console.log('nah');
    return (
      //on hover show button
      <div > 
        <ul>
        <div className={styles.container} onClick={this.handleClick}>
          <div className={this.state.overlay}>
            <div className={styles.select}>Select this Reward</div>
          </div>
          <div>
            <h2 className={styles.pledge_ammount}>Pledge</h2>
            <span className={styles.money}> ${this.props.pledge.pledge_ammount} or more</span>
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
              {this.state.showButton ? <Amount /> : null}
          </div>
        </div>
      </ul>
      </div>
      
    );
  }
}

export default Pledge;