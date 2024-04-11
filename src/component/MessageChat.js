import {Button, Image, Modal, Text, TouchableOpacity, View} from "react-native";
import {styles} from "../css/component/MessageChat";
import {useState} from "react";
import {deleteMessage} from "../api/chatApi";
import { Feather } from '@expo/vector-icons';

function MessageChatReceiver({msg, chatId}) {
    return(
        <View style={styles.messageBoxReceiver}>
            <View>
                <Image
                    source={require("../image/chatHome/doraemon.png")}
                    style={{borderRadius:100, width:40, height:40}}
                />
            </View>
            <View style={styles.messageReceiver}>
                {msg.type === "text" && (<TextBox content={msg.content}/>)}
            </View>
            <View >
                {msg.type === "image" && (<ImageChat content={msg.content}/>)}
            </View>
            {msg.type === "file" && (
                <View style={styles.messageReceiver}>
                    <FileChat content={msg.content}/>
                </View>
            )}

        </View>
    )
}

function MessageChatSender({msg, chatId}) {

    const [editMessage, setEditMessage] = useState(false);
    const messageId = msg.messageId;
    const [hiddenWhenDelete, setHiddenWhenDelete] = useState(true);

    const handleDeleteMessage = () =>{
        deleteMessage({chatId, messageId})
            .then(()=>{
                setHiddenWhenDelete(false)
                console.log("complete deleteMessage");
            })
            .catch((error) =>{
                console.error(error)
            })
    }


    return (
        <View>
            {hiddenWhenDelete && (
                <View style={{margin:10}}>
                    <TouchableOpacity
                        style={styles.messageBoxSender}
                        onPress={()=>{setEditMessage(!editMessage)}}
                    >
                        {msg.type === "text" && (
                            <View style={styles.messageSenderText}>
                                <TextBox content={msg.content}/>
                            </View>
                        )}
                        <View>
                            {msg.type === "image" && (<ImageChat content={msg.content}/>)}
                        </View>
                        {msg.type === "file" && (
                            <View style={styles.messageSenderText}>
                                <FileChat content={msg.content}/>
                            </View>
                        )}
                    </TouchableOpacity>
                    {editMessage && (
                        <View style={styles.editMessage}>
                            <TouchableOpacity
                                style={{marginHorizontal:5, backgroundColor:'red', paddingHorizontal:5, borderRadius:5}}
                                onPress={handleDeleteMessage}
                            >
                                <Text style={{fontSize:15, color:'white'}}>Delete</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{marginHorizontal:5, backgroundColor:'#33CCFF', paddingHorizontal:5, borderRadius:5}}>
                                <Text style={{fontSize:15}}>Share</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </View>
            )}
        </View>
    )
}


function TextBox({content}){
    return(
        <View>
            <Text>
                {content}
            </Text>

        </View>
    )
}

function ImageChat({content}){

    const image = {uri:content}
    return(
        <View>
            <Image
                source={image}
                style={{width:100, height:100}}
            />
        </View>
    )
}


function FileChat({content}){
    return(
        <View style={{flexDirection:"row"}}>
            <Feather name="file" size={50} color="white" />
            <View style={{marginLeft:5,}}>
                <Text style={{fontSize:15,  fontWeight:'bold', color:'white'}}>
                    File name
                </Text>
                <Text style={{color:'#EEEEEE'}}>
                    300mb
                </Text>
            </View>
        </View>
    )
}

export {MessageChatSender, MessageChatReceiver};
