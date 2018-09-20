import React from 'react';
import styles from './CSS/Support.css';
import Amount from './PledgeAmount.jsx';

class Support extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pledge: '5',
      css: styles.supportcontainer
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('the pledge ', this.state.pledge);
    this.setState({
      showButton: false,
      // pledge: ''
    });
  }

  handleChange(e) {
    this.setState({
      pledge: e.target.value
    });
  }

  handleClick() {
    this.setState({
      showButton: true,
      // css: styles.supportcontainerclick
    })
  }

  render() {
    return (
      <li className={styles.list}>
        <div className={this.state.css} onClick={this.handleClick}>
            <div className={styles.supportTitle}>
              <h2 className={styles.pledge_amount}>
                Make a pledge without a reward
              </h2>
              {this.state.showButton ? <Amount /> : <input className={styles.inputfield} value={this.state.pledge} onChange={this.handleChange}/>}
            </div>
          </div>
      </li>
      
    )
    
  }
}

export default Support;