import {FlatList, Image, ScrollView, Text, TextInput, TouchableOpacity, View} from "react-native";
import styles from "../../css/chatHome/RoomChat";
import { FontAwesome } from '@expo/vector-icons';
import {useEffect, useState} from "react";
import { Ionicons, Entypo } from '@expo/vector-icons';
import {chatWithDoraemon} from "../../dataDemo/DataDemo";
import {MessageChatSender, MessageChatReceiver} from "../../component/MessageChat";

const messageList = chatWithDoraemon;
const user = {
    username:"Tai",
    displayName:"Tai",
}
const receiver={
    username:"Doraemon",
    displayName:"Doraemon",
}

//Xử lý button gọi điện thoại
const handleCallPhone= () =>{

}

//xử lý button gọi video call
const handleCallVideo= () =>{

}

//xử lý button mở setting room
const handleSettingRoom= () =>{

}

function RoomChat({navigation}) {

    const [sendMessage, setSendMessage] = useState("");
    const [hiddenSend, setHiddenSend] = useState(true);
    useEffect(() => {
        if(sendMessage.length !== 0){
            setHiddenSend(false)
        }
        else setHiddenSend(true);
    });


    const handleSendMessage = () =>{
        setSendMessage("");
    }


    return(
        <View style={styles.container}>
            {/*Tilte Box*/}
            <View style={styles.title}>
                <TouchableOpacity
                    style={{marginRight:15, justifyContent:'center'}}
                    onPress={()=>{navigation.goBack()}}
                >
                    <FontAwesome name="arrow-left"  size={30} color="white" />
                </TouchableOpacity>
                <View style={styles.bodyTitle}>
                    <Text style={{fontSize:18, fontWeight:"bold", color:'white'}}>
                        {receiver.displayName}
                    </Text>
                    <Text style={{fontSize:12, color:'#DDDDDD'}}>
                        Đang hoạt động
                    </Text>
                </View>
                <View style={{flex:1, flexDirection:"row-reverse", alignItems:'center', justifyContent:'space-between'}}>
                    <TouchableOpacity
                        style={{flex:1}}
                        onPress={handleSettingRoom}
                    >
                        <Entypo name="menu" size={35} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{flex:1}}
                        onPress={handleCallVideo}
                    >
                        <Ionicons name="videocam-outline" size={35} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{flex:1}}
                        onPress={handleCallPhone}
                    >
                        <Ionicons name="call-outline" size={30} color="white" />
                    </TouchableOpacity>

                </View>
            </View>

            {/*Chat Box*/}
            <ScrollView style={styles.bodyChat}>
                {messageList.map((item)=>(
                    <View key={item.id}>
                        {item.u.username === user.username ?(
                            <MessageChatSender msg={item.msg}/>
                        ) : (
                            <MessageChatReceiver msg={item.msg}/>
                        )}
                    </View>
                ))}

            </ScrollView>

            {/*Sender input*/}
            <View style={styles.textInputChat}>
                <View style={{flex:1, marginRight:10, marginVertical:10}}>
                    <TextInput
                        style={{fontSize:18}}
                        value={sendMessage}
                        numberOfLines={2}
                        multiline={true}
                        onChangeText={setSendMessage}
                    />
                </View>
                <TouchableOpacity style={styles.sendImage}>
                    <Ionicons name="image-outline" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={handleSendMessage}
                    style={[styles.sendMessage]}
                >
                    <Ionicons name="send" size={24} color="black" />
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default RoomChat;
