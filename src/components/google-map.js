import React, { Component } from 'react';

class GoogleMap extends Component {
	map = React.createRef();

	componentDidMount() {
		new google.maps.Map(this.map.current, {
			zoom: 12,
			center: {
				lat: this.props.lat,
				lng: this.props.lon,
			},
		});
	}

	render() {
		return <div ref={this.map} />;
	}
}

export default GoogleMap;
