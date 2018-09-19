import styles from './CSS/Pledge.css';
import React from 'react';

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
      <div > 
        <ul>
        <div className={styles.container} onMouseOver={this.handleHover}>
          <div className={styles.overlay}>
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
          </div>
        </div>
      </ul>
      </div>
      
    );
  }
}

export default Pledge;