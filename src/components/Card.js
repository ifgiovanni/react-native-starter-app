import React from 'react';
import {
	Image,
	Text,
	TouchableOpacity,
	View
} from 'react-native';

const Card = (props) => (
	<View style={{
        
        flexDirection: 'row', 
        justifyContent: 'center', 
        marginTop: 10,alignItems: 'center', backgroundColor: '#FFF', padding: 20, borderRadius: 3, width: '94%', marginLeft: '3%', marginRight: '3%', shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowColor: '#000000',
    elevation: 2}}>
		{props.children}
	</View>
);
export default Card;