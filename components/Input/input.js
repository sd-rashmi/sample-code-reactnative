import React, { useState, useEffect } from 'react';
import { TextInput, Text, StyleSheet } from 'react-native';

const CustomInput = (props) => {
	const [dividerColor, setDividerColor] = useState('gray');
	const {
		field: {
			value,
			onChange,
			placeholderLabel,
			secure = false,
			keyboardType = 'default',
			maxLength,
			editable,
			fontcolor,
			name,
			onBlur
		},
		form: { errors, touched, setFieldTouched },
		...inputProps
	} = props;

	const hasError = errors[name];

	// useEffect(() => {
	// 	if ([...value.trim()].length === 0) {
	// 		setDividerColor('gray');
	// 	} else {
	// 		setDividerColor('#009A74');
	// 	}
	// }, [value]);

	return (
		<>
			<TextInput
				style={{
					...styles.container,
					borderBottomColor: dividerColor,
					color: inputProps.fontcolor
				}}
				placeholder={placeholderLabel}
				value={value}
				onChangeText={(text) => onChange(name)(text.replace(/\s+/g, ' '))}
				onBlur={() => {
					setFieldTouched(name);
					onBlur(name);
				}}
				secureTextEntry={secure}
				keyboardType={keyboardType}
				clearButton={false}
				placeholderTextColor="gray"
				maxLength={maxLength}
				editable={editable}
				{...inputProps}
			/>
			{hasError && <Text style={styles.errorText}>{errors[name]}</Text>}
		</>
	);
};

// function Input({
// 	value,
// 	onChange,
// 	placeholderLabel,
// 	secure = false,
// 	keyboardType = 'default',
// 	maxLength,
// 	editable,
// 	fontcolor
// }) {
// 	const [dividerColor, setDividerColor] = useState('gray');

// 	useEffect(() => {
// 		if ([...value.trim()].length === 0) {
// 			setDividerColor('gray');
// 		} else {
// 			setDividerColor('#009A74');
// 		}
// 	}, [value]);

// 	return (
// 		<TextInput
// 			style={{
// 				...styles.container,
// 				borderBottomColor: dividerColor,
// 				color:fontcolor
// 			}}
// 			placeholder={placeholderLabel}
// 			value={value}
// 			onChangeText={(text) => onChange(text)}
// 			secureTextEntry={secure}
// 			keyboardType={keyboardType}
// 			clearButton={false}
// 			placeholderTextColor="gray"
// 			maxLength={maxLength}
// 			editable={editable}
// 		/>
// 	);
// }

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'transparent',
		borderBottomWidth: 0.9,
		paddingHorizontal: 0,
		paddingVertical: 10,
		fontSize: 15,
		fontFamily: 'SFUIText-Regular',
		color: 'white'
	},
	textInput: {
		width: '100%',
		height: '90%',
		fontFamily: 'Poppins-Regular',
		fontSize: 10,
		color: '#636363',
		paddingBottom: 0,
		paddingTop: 0,
		paddingHorizontal: 8
	},
	errorText: {
		fontSize: 10,
		color: 'red',
		marginVertical: 5
	},
	errorInput: {
		borderColor: 'red'
	}
});

export default CustomInput;
