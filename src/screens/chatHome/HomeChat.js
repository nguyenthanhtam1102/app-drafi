import {FlatList, Image, ScrollView, Text, TextInput, TouchableOpacity, View} from "react-native";
import styles from "../../css/chatHome/HomeChat";
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import {listMessage} from "../../dataDemo/DataDemo";
import {useEffect} from "react";
import MessageBox from "../../component/MessageBox";

// const listMessage = listMessage;


function HomeChat({navigation}){
    console.log(listMessage)
    return(
        <View style={styles.container}>
            <View style={styles.findChat}>
                <FontAwesome name="search" size={24} color="white" />
                <TextInput style={styles.findChatInput} placeholder={"Search"} placeholderTextColor={"#EEEEEE"}/>
                <TouchableOpacity style={styles.plusButton}>
                    <AntDesign name="pluscircleo" size={25} color="white" />
                </TouchableOpacity>
            </View>
            <View style={styles.body}>
                <ScrollView>
                    {listMessage.map((item) => (
                        <MessageBox item={item} navigation={navigation} key={item.id}/>
                    ))}
                </ScrollView>
            </View>
        </View>
    )
}



export default HomeChat;