import {FlatList, Image, Linking, ScrollView, Text, TextInput, TouchableOpacity, View} from "react-native";
import styles from "../../css/chatHome/RoomChat";
import { FontAwesome } from '@expo/vector-icons';
import {useEffect, useRef, useState} from "react";
import { Ionicons, Entypo } from '@expo/vector-icons';
import {chatWithDoraemon} from "../../dataDemo/DataDemo";
import {MessageChatSender, MessageChatReceiver} from "../../component/MessageChat";
import FileViewer from 'react-native-file-viewer'
import useListAllMessages from "../../api/useListAllMessages";
import socket from "../../../config/SocketIOConfig";
import { useSendMessage } from "../../api/useSendMessage";
import MessageType from "../../constants/MessageType";
import { v4 as uuidv4 } from 'uuid';

//Xử lý button gọi điện thoại
const handleCallPhone= () =>{

}

//xử lý button gọi video call
const handleCallVideo= () =>{

}

//xử lý button mở setting room

function RoomChat({navigation}) {
    const roomName = 'Nguyen Thanh Tam';
    const userId = 'cec3f3b8-4cb4-4d96-99a9-e5b3d4d4d559';
    const chatId = '13343a76-d078-45b2-96f0-0a4b6114cb24';

    const { messages, isLoadingAllMessage } = useListAllMessages(chatId);
    const [message, setMessage] = useState('');

    const sendMessage = useSendMessage(chatId);

    console.log('ALL MESSAGES', messages);

    const handleSendMessage = () =>{
        console.log('Send message: ', message);
        sendMessage({
            chatId: chatId,
            messageId: uuidv4(),
            senderId: userId,
            senderName: 'Nguyen Thanh Tam',
            senderPicture: 'https://vn.portal-pokemon.com/play/resources/pokedex/img/pm/5794f0251b1180998d72d1f8568239620ff5279c.png',
            type: MessageType.TEXT,
            content: message,
            timestamp: Date.now()
        });
        setMessage('');
    }

    const handleOpenFile = async () =>{

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
                        {roomName}
                    </Text>
                    <Text style={{fontSize:12, color:'#DDDDDD'}}>
                        Đang hoạt động
                    </Text>
                </View>
                <View style={{flex:1, flexDirection:"row-reverse", alignItems:'center', justifyContent:'space-between'}}>
                    <TouchableOpacity
                        style={{flex:1}}
                        onPress={()=>{navigation.navigate("SettingRoom")}}
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
                {messages && messages?.length > 0 && messages.map((item)=>(
                    <View key={item.messageId}>
                        {item.senderId === userId ?(
                            <MessageChatSender msg={item.content}/>
                        ) : (
                            <MessageChatReceiver msg={item.content}/>
                        )}
                    </View>
                ))}

            </ScrollView>

            {/*Sender input*/}
            <View style={styles.textInputChat}>
                <View style={{flex:1, marginRight:10, marginVertical:10}}>
                    <TextInput
                        style={{fontSize:18}}
                        value={message}
                        numberOfLines={2}
                        multiline={true}
                        onChangeText={setMessage}
                    />
                </View>
                <TouchableOpacity
                    style={styles.sendImage}
                    onPress={handleOpenFile}
                >
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
