import React from 'react';
import {
    StyleSheet,
	View
} from 'react-native';

const Card = (props) => (
	<View style={styles.card}>
		{props.children}
	</View>
);

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row', 
        justifyContent: 'center', 
        marginTop: 10,
        alignItems: 'center', 
        backgroundColor: '#FFF', 
        padding: 20, 
        borderRadius: 3, 
        width: '94%', 
        marginLeft: '3%', 
        marginRight: '3%', 
        shadowRadius: 2,
        shadowOffset: {
            width: 0,
            height: -3,
        },
        shadowColor: '#000000',
        elevation: 2
    }
});

export default Card;
