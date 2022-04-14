import React from 'react';
import MaskedInput from 'react-maskedinput';
import Button from '../Button/Button';
import styles from './NewAccountForm.module.css';

// TODO Переписать в функциональный компонент
export default class NewAccountForm extends React.Component<any, any> {
  constructor(props) {
    super(props);

    this.state = {
      cardNumber: '',
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    // TODO
  };

  //TODO https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event
  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render = () => (
    <form onSubmit={this.handleSubmit}>
      <h2>Привязка банковской карты</h2>
      <div className={styles.cardForm}>
        <MaskedInput
          mask="1111 1111 1111 1111"
          name="cardNumber"
          value={this.state.cardNumber}
          onChange={this.handleInputChange}
          placeholder="Номер карты"
          className={styles.input}
        />
        <Button type="submit">Привязать</Button>
      </div>
    </form>
  );
}
