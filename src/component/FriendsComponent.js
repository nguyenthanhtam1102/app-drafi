import {Text, TouchableOpacity, View, Image} from "react-native";
import {FontAwesome5, Ionicons} from '@expo/vector-icons';
import {styles} from '../css/component/FriendsComponent';
import {dataFriends} from "../dataDemo/DataDemo";
import useListParticipants from "../api/useListParticipants";

const listFriends = dataFriends;

function FriendsComponent({navigation}) {
    const userId = 'cec3f3b8-4cb4-4d96-99a9-e5b3d4d4d559';
    const { participants } = useListParticipants(userId);

    const handleFriendRequest = () =>{
        navigation.navigate("FriendRequest");
    }

    return(
        <View>
            <TouchableOpacity
                style={styles.friendRequest}
                onPress={handleFriendRequest}

            >
                <FontAwesome5 name="user-friends" size={24} color="black" />
                <Text style={{ fontSize:18, marginLeft:10}}>
                    Friend request
                </Text>
            </TouchableOpacity>
            <View style={styles.listFriends}>
                <Text style={{fontWeight:'bold',fontSize:18, marginLeft:10, marginTop:10}}>
                    My firends
                </Text>
                {participants && participants.map((item) => {
                    const chatId = item.chatId;
                    const participantIndex = item.participants.indexOf(userId);
                    const friendId = item.participants[participantIndex];
                    const friendName = item.name.split('/')[participantIndex];
                    const picture = item.picture;

                    const friendItem = {
                        id: chatId,
                        image: picture,
                        displayName: friendName,
                        userName: friendName,
                    }

                    return (
                        <BoxFriend item={friendItem} key={friendItem.id} navigation={navigation}/>
                    )
                })}
            </View>
        </View>
    )
}



function BoxFriend({item, navigation}){
    const handleBoxFriend = () =>{
        navigation.navigate("RoomChat")
    }
    const handleCallVideo = ()=>{
        console.log("Hi")
    }
    const handleCallPhone = () =>{

    }
    return(
        <TouchableOpacity
            style={styles.boxFriend}
            onPress={handleBoxFriend}
        >
            <View style={{flexDirection:'row',alignItems:'center', flex:1}}>
                <Image source={item.image} style={{width:50, height:50, borderRadius:100}}/>
                <Text style={{fontSize:18, marginLeft:15}}>
                    {item.displayName}
                </Text>
            </View>
            <TouchableOpacity

                style={{marginRight:10}}
                onPress={handleCallPhone}
            >
                <Ionicons name="call-outline" size={30} color="black" />
            </TouchableOpacity>
            <TouchableOpacity
                style={{marginLeft:10}}
                onPress={handleCallVideo}
            >
                <Ionicons name="videocam-outline" size={35} color="black" />
            </TouchableOpacity>

        </TouchableOpacity>
    )
}
export default FriendsComponent;

