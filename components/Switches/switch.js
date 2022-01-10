import React from 'react';
import PropTypes from 'prop-types';
import { Animated, Easing, TouchableOpacity } from 'react-native';

const knobOffset = 17;

class Switch extends React.Component {
	static propTypes = {
		isOn: PropTypes.bool,
		onToggle: PropTypes.func.isRequired
	};

	static defaultProps = {
		isOn: false
	};

	state = {
		isOn: this.props.isOn,
		animatedValue: new Animated.Value(this.props.isOn ? knobOffset : 0)
	};

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.isOn !== this.props.isOn) {
			this.setState({ isOn: this.props.isOn }, () => {
				Animated.timing(this.state.animatedValue, {
					toValue: this.state.isOn ? knobOffset : 0,
					easing: Easing.elastic(0.8),
					duration: 100,
					useNativeDriver: false
				}).start();
			});
		}
	}

	handlePress() {
		this.setState({ isOn: !this.state.isOn }, () =>
			this.props.onToggle(this.state.isOn)
		);
	}

	render() {
		return (
			<TouchableOpacity
				activeOpacity={0.5}
				style={{
					backgroundColor: this.state.isOn ? '#34C759' : 'gray',
					width: 43,
					borderRadius: 32,
					padding: 3
				}}
				onPress={() => this.handlePress()}>
				<Animated.View
					style={{
						backgroundColor: 'white',
						width: 20,
						height: 20,
						borderRadius: 32,
						shadowColor: '#000',
						shadowOffset: {
							width: 0,
							height: 4
						},
						shadowOpacity: 0.3,
						shadowRadius: 4.65,
						elevation: 8,
						transform: [
							{
								translateX: this.state.animatedValue
							}
						]
					}}
				/>
			</TouchableOpacity>
		);
	}
}

export default Switch;
