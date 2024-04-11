import {Image, Text, View} from "react-native";
import {styles} from "../css/component/MessageChat";




function MessageChatReceiver({msg}) {
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

        </View>
    )
}

function MessageChatSender({msg}) {
    return(
        <View style={styles.messageBoxSender}>
            {msg.type === "text" && (
                <View style={styles.messageSenderText}>
                    <TextBox content={msg.content}/>
                </View>
            )}
            <View >
                {msg.type === "image" && (<ImageChat content={msg.content}/>)}
            </View>
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

export {MessageChatSender, MessageChatReceiver};
