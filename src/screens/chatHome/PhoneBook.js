import {ScrollView, Text, TextInput, TouchableOpacity, View} from "react-native";
import {styles} from "../../css/chatHome/PhoneBook";
import { FontAwesome } from '@expo/vector-icons';
import FriendsComponent from "../../component/FriendsComponent";
import {useState} from "react";
import GroupsComponent from "../../component/GroupsComponent";

function PhoneBook({navigation}){

    const [selection, setSelection] = useState(true);
    const handleFriends = () =>{
        setSelection(true)
    }
    const handleGroups = () =>{
        setSelection(false)
    }

    return(
        <View style={styles.container}>
            <View style={styles.findChat}>
                <FontAwesome name="search" size={24} color="white" />
                <TextInput style={styles.findChatInput} placeholder={"Search"} placeholderTextColor={"#EEEEEE"}/>
                <TouchableOpacity style={styles.plusUserPlus}>
                    <FontAwesome name="user-plus" size={24} color="white" />
                </TouchableOpacity>
            </View>
            <View style={styles.body}>
                <View style={styles.boxSelection}>
                    <View
                        style={{flex:1, alignItems:'center'}}
                    >
                        <TouchableOpacity
                            style={{flex:1, alignItems:'center', justifyContent:'center'}}
                            onPress={handleFriends}
                        >
                            <Text style={{fontSize:20}}>Friends</Text>
                        </TouchableOpacity>
                        <View style={[{width:'90%', height:2},selection?{backgroundColor:'#33CCFF'}:{backgroundColor:'none'}]}/>
                    </View>
                    <View
                        style={{flex:1, alignItems:'center'}}
                    >
                        <TouchableOpacity
                            style={{flex:1, alignItems:'center', justifyContent:'center'}}
                            onPress={handleGroups}
                        >
                            <Text style={{fontSize:20}}>Groups</Text>
                        </TouchableOpacity>
                        <View style={[{ width:'90%', height:2, }, !selection?{backgroundColor:'#33CCFF'}:{backgroundColor:'none'}]}/>
                    </View>
                </View>
                <ScrollView>
                    {selection ? (
                        <FriendsComponent navigation={navigation}/>
                    ) : (
                        <GroupsComponent/>
                    )}
                </ScrollView>
            </View>
        </View>
    )
}

export default PhoneBook;