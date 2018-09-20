import React from 'react';
import styles from './CSS/Button.css';

class Amount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '5'
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      value: ''
    })
  }

  handleClick() {
    this.setState({
      value: ''
    })
  }

  render() {
    return (
      <div>
        <div className={styles.container_padding}>
          Pledge ammount
          <form onSubmit={(e)=>{this.handleSubmit(e)}}>
            <input className={styles.inputfield} value={this.state.value} onChange={this.handleChange}/>
          </form>
          <div className={styles.currency_container}>
            <div className={styles.currency}>
              <span className={styles.currency_detail}>$</span>
            </div>
          </div>
          <button className={[styles.btn, styles.bttn_medium].join(' ')} onClick={this.handleClick}>
            Continue
          </button>
        </div>
      </div>
    )
  }
}

export default Amount;