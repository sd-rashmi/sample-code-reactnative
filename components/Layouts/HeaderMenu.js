import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { isTablet } from 'react-native-device-info';
import { FlexCol, HeaderCol, FlexRow, Icon_Menu, Flex } from '@components';

function HeaderMenu(props) {
	return (
		<HeaderCol customStyle={{ backgroundColor: props.color }}>
			<Flex
				customStyle={{
					...styles.container,
					backgroundColor: props.color
				}}>
				<FlexCol>
					<TouchableOpacity onPress={props.event}>
						<Icon_Menu
							color="white"
							height={isTablet() ? '50' : '30'}
							width={isTablet() ? '50' : '30'}
						/>
					</TouchableOpacity>
				</FlexCol>
				<FlexRow>{props.children}</FlexRow>
			</Flex>
		</HeaderCol>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 0,
		padding: 10
	}
});

export default HeaderMenu;
