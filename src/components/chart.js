import React from 'react';
import {
	Sparklines,
	SparklinesLine,
	SparklinesReferenceLine,
} from 'react-sparklines';
import _ from 'lodash';

function average(data) {
	return _.round(_.sum(data) / data.length);
}

export default props => {
	return (
		<React.Fragment>
			<Sparklines height={100} width={200} margin={5} data={props.data}>
				<SparklinesLine color={props.color} />
				<SparklinesReferenceLine type="avg" />
			</Sparklines>
			<div>
				{average(props.data)}
				{props.units}
			</div>
		</React.Fragment>
	);
};
