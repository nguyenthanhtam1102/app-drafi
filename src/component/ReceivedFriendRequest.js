import {Image, Text, TouchableOpacity, View} from "react-native";
import {styles} from "../css/component/ReceivedFriendRequest";
import useListAllAddFriendRequestReceived from "../api/useListAllAddFriendRequestReceived";

function ReceivedFriendRequest({navigation, listReceived}) {
    const userId = 'cec3f3b8-4cb4-4d96-99a9-e5b3d4d4d559';

    const { addFriendRequestList, isLoading } = useListAllAddFriendRequestReceived(userId);

    console.log('ADD FRIEND REQUEST LIST', addFriendRequestList);

    return(
        <View style={styles.container}>
            {addFriendRequestList && addFriendRequestList.map((item)=> {
                const requestId = item.requestId;
                const senderId = item.sender;
                const senderName = item.senderName;
                const isAccepted = item.isAccepted;
                const picture = item.profilePicture;

                const addFriendRequest = {
                    _id: requestId,
                    u: {
                        username: senderName,
                        displayName: senderName,
                        id: senderId,
                        image: picture,
                    }
                }

                if(!isAccepted) {
                    return (
                        <ReceivedBox key={addFriendRequest._id} navigation={navigation} item={addFriendRequest}/>
                    )
                }
            })}
        </View>
    )
}

function ReceivedBox({item, navigation}) {

    const handleToPersonalPage = () =>{
        const idUser = item.u.id;
        navigation.navigate("PersonalPage", {idUser});
    }
    const handleRefuse = () =>{

    }
    const handleAccept = ()=>{

    }


    return(
        <View>
            <TouchableOpacity
                style={styles.box}
                onPress={handleToPersonalPage}
            >
                <View>
                    <Image source={item.u.image} style={styles.image}/>
                </View>
                <View style={{flexDirection:"row", flex: 1}}>
                    <View style={{marginLeft:15, justifyContent:"space-around", flex:1}}>
                        <Text style={{fontSize:18, fontWeight:'bold'}}>{item.u.displayName}</Text>
                        <Text style={{color:"#CCCCCC"}}>2 ngày trước</Text>
                        <View style={{flexDirection:'row', marginTop:10}}>
                            <TouchableOpacity
                                style={styles.btnRefuse}
                                onPress={handleRefuse}
                            >
                                <Text>Refuse</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.btnAccept}
                                onPress={handleAccept}
                            >
                                <Text>Accept</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            <View>

            </View>
        </View>
    )
}

export default ReceivedFriendRequest;