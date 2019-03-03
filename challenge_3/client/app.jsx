class App extends React.Component { // always start component names with a capital letter
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      addressLine1: '',
      addressLine2: '',
      city: '',
      state: '',
      zip: 0,
      phone: '',
      creditCard: '',
      expiryDate: '',
      CVV: 0,
      billingZip: 0
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    alert('Check out clicked!');
    // Create new record in database, go to F1
  };

  render() {
    return (
      <div>
        <h2>Shopping Cart</h2>
        <button onClick={this.handleClick} >Check Out</button>
      </div>
    );
  }
}

function F1(props) {

}

function F2(props) {

}

function F3(props) {

}

function confirmation(props) {

}

ReactDOM.render(<App />, document.getElementById('app')); // render element to app id

// use react forms to handle multiple controlled input elements, save to database record on each next click
// When the checkout button is clicked, a new record is created in the database. State collects user info as it is typed in. Next button adds it to database record.
