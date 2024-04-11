import {FlatList, Image, ScrollView, Text, TextInput, TouchableOpacity, View} from "react-native";
import styles from "../../css/chatHome/HomeChat";
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import {listMessage} from "../../dataDemo/DataDemo";
import {useEffect} from "react";
import MessageBox from "../../component/MessageBox";
import {listAllParticipants} from "../../api/participantsApi";
import useListParticipants from "../../api/useListParticipants";
import useGetUserInfo from "../../api/useGetUserInfo";
import { io as socketIO } from "socket.io-client";
import {useQueryClient} from "@tanstack/react-query";
import QueryKey from "../../constants/QueryKey";
import socket from "../../../config/SocketIOConfig";
// const listMessage = listMessage;


function HomeChat({navigation}) {
    const userId = 'cec3f3b8-4cb4-4d96-99a9-e5b3d4d4d559';

    const queryClient = useQueryClient();

    const { userInfo, isLoading: isLoadingUserInfo } = useGetUserInfo(userId);
    const { participants, isLoadingParticipants } = useListParticipants(userId);

    console.log('USER INFO', userInfo);
    console.log(listMessage)
    console.log('LIST ALL PARTICIPANTS', participants);

    useEffect(() => {
        if (socket) {
            socket.emit("add-user", userId)

            socket.on("msg-recieve-private", (data) => {
                console.log(data)

                const chatId = data.from;
                queryClient.invalidateQueries({ queryKey: [QueryKey.LIST_ALL_PARTICIPANTS] });
                queryClient.invalidateQueries({ queryKey: [`${QueryKey.LIST_ALL_MESSAGES}_${chatId}`] });
            })

            socket.on("msg-recieve-public", (data) => {
                console.log(data)
            })
        }
    }, []);

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

                        console.log('LATEST MESSAGE', latestMessage);

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