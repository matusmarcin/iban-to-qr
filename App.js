import React from 'react';
import ReactDOM from 'react-dom';
import QRCode from 'qrcode.react'; //'react-qr';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			iban: "Matus"
		}
		this.update = this.update.bind(this)
	}
	update(e) {
		this.setState({
			iban: ReactDOM.findDOMNode(this.refs.iban).value
		})
	}
	render() {
		return (
			<div>
				Input: <Input ref="iban" update={this.update} /><br /><br />
				<QRCode value={this.state.iban} size="256" /><br /><br />
				Contents: <code>{this.state.iban}</code>
			</div>
		);
	}
}

class Input extends React.Component {
	render() {
		return <input type="text"
				onChange={this.props.update} />
	}
}

export default App
