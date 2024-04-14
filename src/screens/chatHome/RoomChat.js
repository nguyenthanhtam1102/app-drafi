import {Dimensions, FlatList, Image, Linking, ScrollView, Text, TextInput, TouchableOpacity, View} from "react-native";
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
import {EmojiKeyboard} from "rn-emoji-keyboard";
import {useDispatch, useSelector} from "react-redux";



//Xử lý button gọi điện thoại
const handleCallPhone= () =>{

}

//xử lý button gọi video call
const handleCallVideo= () =>{

}

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;



//xử lý button mở setting room

function RoomChat({ route, navigation}) {
    const { chatId, roomName } = route.params;
    console.log('PARAMS', route.params);

    //lấy my user từ redux
    const user = useSelector((state) => state.userData);
    const userId = user.id;
    const displayName = user.display_name;

    console.log('UUUUU', user);

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
            senderName: displayName,
            senderPicture: 'https://vn.portal-pokemon.com/play/resources/pokedex/img/pm/5794f0251b1180998d72d1f8568239620ff5279c.png',
            type: MessageType.TEXT,
            content: message,
            timestamp: Date.now()
        });
        setMessage("");
    }

    function importAll(r) {
        const images = {};
        r.keys().forEach((key) => (images[key] = r(key)));
        return images;
    }
    const imagesList = importAll(
        require.context("../../image/fileChat", false, /\.(png|jpe?g|svg)$/)
    );

    console.log(imagesList);

    const [openImage, setOpenImage] = useState(false);
    const handleOpenImage = async () =>{
        setOpenImage(!openImage)
        setopenEmoji(false)
    }



    const [openEmoji, setopenEmoji] = useState(false);
    const [isEmoji, setEmoji] = useState("");
    const handleOpenEmoji = async () =>{
        setopenEmoji(!openEmoji)
        setOpenImage(false)
    }
    const selectEmoji = item =>{

        setMessage((prevMessage) => prevMessage + item.emoji);
    }

    const handleSelectImage = (item) =>{

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
                        onPress={()=>{navigation.navigate("SettingSingleRoom")}}
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
                            <MessageChatSender msg={item} chatId={chatId}/>
                        ) : (
                            <MessageChatReceiver msg={item} chatId={chatId}/>
                        )}
                    </View>
                ))}

            </ScrollView>
            <View>
                <Text>{isEmoji}</Text>
            </View>


            {/*Sender input*/}
            <View style={styles.textInputChat}>
                <TouchableOpacity
                    style={{marginRight:10}}
                    onPress={handleOpenEmoji}
                >
                    <Entypo name="emoji-happy" size={24} color="black" />
                </TouchableOpacity>
                <View style={{flex:1, marginRight:10, marginVertical:10}}>
                    <TextInput
                        style={{fontSize:18}}
                        value={message}
                        numberOfLines={2}
                        multiline={true}
                        onChangeText={setMessage}
                        onFocus={()=>{
                            setopenEmoji(false);
                            setOpenImage(false);
                        }}
                    />
                </View>
                <TouchableOpacity
                    style={styles.sendImage}
                    onPress={handleOpenImage}
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

            {openEmoji && (
                <View style={{height:200}}>
                    <ScrollView>
                        <EmojiKeyboard onEmojiSelected={selectEmoji}/>
                    </ScrollView>
                </View>
            )}

            {openImage &&(
                <ScrollView style={{height:10}}>
                    <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                        {Object.entries(imagesList).map(([key, value]) => (
                            <TouchableOpacity
                                onPress={handleSelectImage}
                            >
                                <Image key={key} source={{ uri: value }} style={{width:WIDTH/3, height:WIDTH/3}}/>
                            </TouchableOpacity>
                        ))}
                    </View>
                </ScrollView>
            )}


        </View>
    )
}

export default RoomChat;
