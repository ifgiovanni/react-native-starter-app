import React from 'react';
import {
	Image,
	Text,
	TouchableOpacity,
	View
} from 'react-native';
import Icon from 'react-native-ionicons';

const Header = (props) => (
    <View style={{ flexDirection: 'row', flex: 0, marginTop: 5 }}>
        <TouchableOpacity style={{
            height: 55,
            backgroundColor: '#FAFAFA', 
            width: '20%',
            justifyContent: 'center',
            alignItems: 'center', 
            //borderWidth: 1,
            //borderColor: 'red'
        }}><Icon ios="ios-apps" android="md-apps" size={25} />
        </TouchableOpacity>
        <View style={{
            height: 55,
            backgroundColor: '#FAFAFA', 
            width: '60%',
            justifyContent: 'center',
            alignItems: 'center', 
            //borderWidth: 1,
            //borderColor: 'red'
        }}>
        <Text style={{ backgroundColor: '#212121', color: '#FFFFFF', paddingLeft: 20, paddingRight: 20, paddingTop: 5, paddingBottom: 5, borderRadius: 50}}>SOMENTHING</Text>
        </View>
        <View style={{
            height: 55,
            backgroundColor: '#FAFAFA', 
            width: '20%',
            justifyContent: 'center',
            alignItems: 'center', 
            //borderWidth: 1,
            //borderColor: 'red'
        }}>
        <Icon ios="ios-more" android="md-more" size={25} />
        </View>
  </View>
);
export default Header;