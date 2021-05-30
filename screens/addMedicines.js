import React from 'react';
import {Text,View} from 'react-native';
import {AppTabNavigator} from '../components/appTabNavigator';
import MyHeader from '../components/MyHeader';

export default class AddMedicines extends React.Component{
    

    render(){
        return(
            <View>
                <MyHeader title="Request Medicines" navigation={this.props.navigation} />
                <Text>Add Medicines</Text>
            </View>
        )
    }
}