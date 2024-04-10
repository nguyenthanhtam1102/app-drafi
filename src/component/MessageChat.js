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
                <Text>{msg}</Text>
            </View>
        </View>
    )
}

function MessageChatSender({msg}) {
    return(
        <View style={styles.messageBoxSender}>
            <View style={styles.messageSender}>
                <Text>{msg}</Text>
            </View>
        </View>
    )
}

export {MessageChatSender, MessageChatReceiver};
