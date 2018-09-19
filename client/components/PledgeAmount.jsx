import React from 'react';
import styles from './CSS/Button.css';
class Amount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }
  handleSubmit() {
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <div>
          Pledge ammount
          <form>
            <input className={styles.inputfield} value="5" onChange={this.handleChange}/>
          </form>
          <button className={styles.btn}>
            Continue
          </button>
        </div>
      </div>
    )
  }
}

export default Amount;