import React, { Component } from 'react';


export class App extends React.Component {
	render() {
		return (
			<button onClick={this.props.onClick}
				className={ this.props.light ? 'light-button' : 'dark-button' }>
				Refresh
			</button>
		);
	}
}
export default App;