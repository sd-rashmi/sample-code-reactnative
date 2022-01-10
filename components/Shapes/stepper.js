//https://developer.aliyun.com/mirror/npm/package/react-native-ui-stepper#:~:text=A%20react%2Dnative%20component%20which,(%E2%80%9C%2B%E2%80%9D)%20symbol.
import React, { Component } from 'react';
import { Icon_Plus, Icon_Subtract } from '../';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { isTablet } from 'react-native-device-info';

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row'
	},
	button: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	valueContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});

class Stepper extends Component {
	static propTypes = {
		initialValue: PropTypes.number,
		value: PropTypes.number,
		minimumValue: PropTypes.number,
		maximumValue: PropTypes.number,
		steps: PropTypes.number,
		tintColor: PropTypes.string,
		backgroundColor: PropTypes.string,
		width: PropTypes.number,
		height: PropTypes.number,
		borderColor: PropTypes.string,
		borderWidth: PropTypes.number,
		borderRadius: PropTypes.number,
		onValueChange: PropTypes.func,
		onDecrement: PropTypes.func,
		onIncrement: PropTypes.func,
		onMinimumReached: PropTypes.func,
		onMaximumReached: PropTypes.func,
		wraps: PropTypes.bool,
		displayValue: PropTypes.bool,
		textColor: PropTypes.string,
		fontSize: PropTypes.number,
		overrideTintColor: PropTypes.bool,
		vertical: PropTypes.bool,
		displayDecrementFirst: PropTypes.bool,
		innerRef: PropTypes.func
	};
	static defaultProps = {
		initialValue: 0,
		value: 0,
		minimumValue: 0,
		maximumValue: 100000,
		steps: 1,
		tintColor: '#0076FF',
		backgroundColor: 'transparent',
		width: isTablet() ? 94 : 74,
		height: isTablet() ? 30 : 25,
		borderColor: '#0076FF',
		borderWidth: 1,
		borderRadius: 4,
		onValueChange: null,
		onDecrement: null,
		onIncrement: null,
		onMinimumReached: null,
		onMaximumReached: null,
		wraps: false,
		displayValue: false,
		overrideTintColor: false,
		vertical: false,
		displayDecrementFirst: false,
		innerRef: null
	};
	constructor(props) {
		super(props);
		this.state = {
			value: props.value
		};
	}
	componentDidMount() {
		const { innerRef } = this.props;
		if (innerRef) {
			innerRef(this);
		}
	}
	componentWillUnmount() {
		const { innerRef } = this.props;
		if (innerRef) {
			innerRef(undefined);
		}
	}
	decrement = () => {
		const { steps, onDecrement } = this.props;
		let value = this.state.value;
		value -= steps;
		this.validate(value, onDecrement);
	};
	increment = () => {
		const { steps, onIncrement } = this.props;
		let value = this.state.value;
		value += steps;
		this.validate(value, onIncrement);
	};
	isExternalImage = (image) => typeof image === 'string';
	resolveImage = (image) => {
		if (this.isExternalImage(image)) {
			return { uri: image };
		}
		return image;
	};
	validate = (value, callback) => {
		const {
			minimumValue: min,
			maximumValue: max,
			onValueChange,
			onMinimumReached,
			onMaximumReached,
			wraps
		} = this.props;
		if (min <= value && max >= value) {
			this.setState({
				value
			});
			if (onValueChange) {
				onValueChange(value);
			}
			if (callback) {
				callback(value);
			}
			return;
		}
		if (value < min) {
			if (wraps) {
				this.setState({
					value: max
				});
				if (onValueChange) {
					onValueChange(max);
				}
				if (callback) {
					callback(max);
				}
				return;
			}
			onMinimumReached && onMinimumReached(value);
		}
		if (value > max) {
			if (wraps) {
				this.setState({
					value: min
				});
				if (onValueChange) {
					onValueChange(min);
				}
				if (callback) {
					callback(min);
				}
				return;
			}
			onMaximumReached && onMaximumReached(value);
		}
	};
	setValue = (value, callback) => {
		const { onValueChange } = this.props;
		this.setState({
			value: value
		});
		if (onValueChange) {
			onValueChange(value);
		}
		if (callback) {
			callback(value);
		}
	};
	resetValue = () => {
		const { initialValue } = this.props;
		this.setState({
			value: initialValue
		});
	};
	render() {
		const {
			backgroundColor,
			width,
			height,
			borderColor,
			borderWidth,
			borderRadius,
			displayValue,
			vertical,
			displayDecrementFirst
		} = this.props;
		return (
			<View
				style={[
					styles.container,
					{
						backgroundColor,
						width: vertical ? width / 2 : width,
						height: vertical ? 'auto' : height,
						borderColor,
						borderWidth,
						borderRadius,
						flexDirection: vertical
							? displayDecrementFirst
								? 'column'
								: 'column-reverse'
							: 'row'
					}
				]}>
				<TouchableOpacity
					onPress={this.decrement}
					style={[
						styles.button,
						{
							borderRightWidth: vertical ? 0 : borderWidth,
							borderRightColor: borderColor,
							height: vertical ? 30 : 'auto'
						}
					]}>
					<Icon_Subtract color="gray" width="13" />
				</TouchableOpacity>
				<TouchableOpacity
					onPress={this.increment}
					style={[
						styles.button,
						{
							borderLeftWidth: vertical ? 0 : displayValue ? 1 : 0,
							borderColor,
							height: vertical ? 30 : 'auto'
						}
					]}>
					<Icon_Plus color="gray" height="10" width="10" />
				</TouchableOpacity>
			</View>
		);
	}
}

export default Stepper;
