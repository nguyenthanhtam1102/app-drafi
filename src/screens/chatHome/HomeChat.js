import {FlatList, Image, ScrollView, Text, TextInput, TouchableOpacity, View} from "react-native";
import styles from "../../css/chatHome/HomeChat";
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import {listMessage} from "../../dataDemo/DataDemo";
import {useEffect} from "react";
import MessageBox from "../../component/MessageBox";
import {listAllParticipants} from "../../api/participantsApi";
import useListParticipants from "../../api/useListParticipants";
import useGetUserInfo from "../../api/useGetUserInfo";

// const listMessage = listMessage;


function HomeChat({navigation}){
    const { userInfo, isLoading: isLoadingUserInfo } = useGetUserInfo('a7441827-3ac8-49f8-b7e8-80bfd498b5f9');
    const { participants, isLoadingParticipants } = useListParticipants('a7441827-3ac8-49f8-b7e8-80bfd498b5f9');

    console.log('USER INFO', userInfo);
    console.log(listMessage)
    console.log('LIST ALL PARTICIPANTS', participants);

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
                    {participants && participants.map((item) => {
                        let chatName = item.name.split('/');
                        chatName = chatName[0] !== 'Nguyen Thi Thu Mo' ? chatName[0] : chatName[1];
                        let latestMessage = item?.messages && item?.messages?.length > 0 ? item.messages[item.messages.length - 1] : null;

                        return (
                            <MessageBox
                                item={{
                                    id: item.chatId,
                                    displayName: chatName,
                                    image: item.picture,
                                    content: latestMessage,
                                }}
                                navigation={navigation}
                                key={item.chatId}
                            />
                        )
                    })}
                </ScrollView>
            </View>
        </View>
    )
}



export default HomeChat;