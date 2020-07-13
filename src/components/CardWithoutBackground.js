import React from 'react';
import {
    StyleSheet,
	View
} from 'react-native';

const CardWithoutBackground = (props) => (
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
        
        padding: 20, 
        borderRadius: 3, 
        width: '94%', 
        marginLeft: '3%', 
        marginRight: '3%', 
        
    }
});

export default CardWithoutBackground;
