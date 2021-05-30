import React from 'react';
import { Text, View, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { AppTabNavigator } from '../components/appTabNavigator';
import firebase from 'firebase';
import db from '../config';
import { FlatList } from 'react-native-gesture-handler';
import { ListItem } from 'react-native-elements';
import MyHeader from '../components/MyHeader';

export default class RequestScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            allMedicines: [],
            medicineName: '',
            numberOfMedicines: '',
        }
    }

    getAllMedicines = () => {
        this.itemsRef = db.collection("requestMedicines")
            .onSnapshot((snapshot) => {
                var allMedicines = snapshot.docs.map(document => document.data());
                console.log("Line 120 : ", allMedicines);
                this.setState({
                    allMedicines: allMedicines
                });
                console.log("Line 123 : ", this.state.allMedicines);
            })
    }

    keyExtractor = (item, index) => index.toString()

    renderItem = ({ item, i }) => {
        console.log(item)
        return (
            <ListItem
                key={i}
                title={"Medicine Name: " + item.medicineName}
                titleStyle={{ color: 'black', fontWeight: 'bold' }}
                rightElement={
                    <TouchableOpacity style={styles.button1}
                        onPress={() => {
                            //this.addRequest(this.state.medicineName, this.state.numberOfMedicines);
                        }}>
                        <Text style={{ color: 'black' }}>View</Text>
                    </TouchableOpacity>
                }
                bottomDivider
            />
        )
    }

    componentDidMount() {
        this.getAllMedicines()
    }

    render() {
        return (
            <View>
                <MyHeader title="Request Medicines" navigation={this.props.navigation} />
                <ScrollView>
                    <FlatList
                        keyExtractor={this.keyExtractor}
                        data={this.state.allMedicines}
                        renderItem={this.renderItem}
                    />
                </ScrollView>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    button1:{
        width: 100,
        height: 25,
        marginTop: 10,
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: "#CE8A8A",
        shadowColor: "#DDDCDC",
        shadowOffset: {
            width: 0,
            height: 8
        }
    }
})