class App extends React.Component { // always start component names with a capital letter
  constructor(props) {
    super(props);
    this.state = {
      page: 'checkout',
      name: '',
      email: '',
      password: '',
      addressLine1: '',
      addressLine2: '',
      city: '',
      state: '',
      zip: '',
      phone: '',
      creditCard: '',
      expiryDate: '',
      CVV: '',
      billingZip: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleCheckout = this.handleCheckout.bind(this);
    this.handleF1Next = this.handleF1Next.bind(this);
    this.handleF2Next = this.handleF2Next.bind(this);
    this.handleF3Next = this.handleF3Next.bind(this);
    this.handlePurchase = this.handlePurchase.bind(this);
  }

  handleInputChange(event) {
    var value = event.target.value;
    var name = event.target.name;

    this.setState({
      [name]: value
    });
  }

  handleCheckout() {
    this.setState({page: 'f1'});
    fetch('/f1', {method: 'POST'});
  };
  handleF1Next() {
    this.setState({page: 'f2'});
    fetch('/f2', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      })
    });
  }
  handleF2Next() {
    this.setState({page: 'f3'});
    fetch('/f3', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        addressLine1: this.state.addressLine1,
        addressLine2: this.state.addressLine2,
        city: this.state.city,
        state: this.state.state,
        zip: this.state.zip,
        phone: this.state.phone
      })
    })
  }
  handleF3Next() {
    this.setState({page: 'purchase'});
    fetch('/purchase', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        creditCard: this.state.creditCard,
        expiryDate: this.state.expiryDate,
        CVV: this.state.CVV,
        billingZip: this.state.billingZip
      })
    })
  }
  handlePurchase() {
    this.setState({page: 'checkout'});
    alert('Thanks for your order, your tacos are on the way!');
  }

  render() {
    var output;
    switch(this.state.page) {

      case 'checkout':
        output = (<div>
          <h2>Shopping Cart</h2>
          <button onClick={this.handleCheckout}>Check Out</button>
        </div>);
        break;

      case 'f1':
        output = (<div>
          <h2>Check Out</h2>
          <h3>Create an Account</h3>
          <p>
            <label>
              Name:
              <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange} />
            </label>
          </p>
          <p>
            <label>
              Email Address:
              <input type="email" name="email" value={this.state.email} onChange={this.handleInputChange} />
            </label>
          </p>
          <p>
            <label>
              Password:
              <input type="password" name="password" value={this.state.password} onChange={this.handleInputChange} />
            </label>
          </p>
          <button onClick={this.handleF1Next}>Next</button>
        </div>);
        break;

      case 'f2':
        output = (<div>
          <h2>Check Out</h2>
          <h3>Shipping Address</h3>
          <p>
            <label>
              Address Line 1:
              <input type="text" name="addressLine1" value={this.state.addressLine1} onChange={this.handleInputChange} />
            </label>
          </p>
          <p>
            <label>
              Address Line 2:
              <input type="text" name="addressLine2" value={this.state.addressLine2} onChange={this.handleInputChange} />
            </label>
          </p>
          <p>
            <label>
              City:
              <input type="text" name="city" value={this.state.city} onChange={this.handleInputChange} />
            </label>
          </p>
          <p>
            <label>
              State:
              <input type="text" name="state" value={this.state.state} onChange={this.handleInputChange} />
            </label>
          </p>
          <p>
            <label>
              Zip Code:
              <input type="text" name="zip" value={this.state.zip} onChange={this.handleInputChange} />
            </label>
          </p>
          <p>
            <label>
              Phone Number:
              <input type="text" name="phone" value={this.state.phone} onChange={this.handleInputChange} />
            </label>
          </p>
          <button onClick={this.handleF2Next}>Next</button>
        </div>);
        break;

      case 'f3':
        output = (<div>
          <h2>Check Out</h2>
          <h3>Payment Information</h3>
          <p>
            <label>
              Credit Card Number:
              <input type="password" name="creditCard" value={this.state.creditCard} onChange={this.handleInputChange} />
            </label>
          </p>
          <p>
            <label>
              Expiry Date:
              <input type="text" name="expiryDate" value={this.state.expiryDate} onChange={this.handleInputChange} />
            </label>
          </p>
          <p>
            <label>
              CVV:
              <input type="text" name="CVV" value={this.state.CVV} onChange={this.handleInputChange} />
            </label>
          </p>
          <p>
            <label>
              Billing Zip Code:
              <input type="text" name="billingZip" value={this.state.billingZip} onChange={this.handleInputChange} />
            </label>
          </p>
          <button onClick={this.handleF3Next}>Next</button>
        </div>);
        break;

      case 'purchase':
        output = (<div>
          <h2>Order Confirmation</h2>
          <p>
            Please review your order below:
          </p>
          <h3>Account Information</h3>
          <p>
            Name: {this.state.name}
          </p>
          <p>
            Email Address: {this.state.email}
          </p>
          <p>
            Password: {this.state.password}
          </p>
          <h3>Shipping Information</h3>
          <p>
            Shipping Address: {this.state.addressLine1} {this.state.addressLine2} {this.state.city}, {this.state.state} {this.state.zip}
          </p>
          <p>
            Phone Number: {this.state.phone}
          </p>
          <h3>Payment Information</h3>
          <p>
            Credit Card Number: {this.state.creditCard}
          </p>
          <p>
            Expiry Date: {this.state.expiryDate}
          </p>
          <p>
            CVV: {this.state.CVV}
          </p>
          <p>
            Billing Zip Code: {this.state.billingZip}
          </p>

          <button onClick={this.handlePurchase}>Purchase</button>
        </div>);
        break;

      default:
        output = (<div>
          <h2>Check Out</h2>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <button onClick={this.handlePurchase}>Purchase</button>
        </div>);

    }
    return output;
  }
}

ReactDOM.render(<App />, document.getElementById('app')); // render element to app id