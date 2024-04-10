import {ScrollView, Text, TouchableOpacity, View} from "react-native";
import {styles} from "../../css/chatHome/FriendRequest";
import {FontAwesome} from "@expo/vector-icons";
import {useState} from "react";
import ReceivedFriendRequest from "../../component/ReceivedFriendRequest";
import SentFriendRequest from "../../component/SentFriendRequest";
import {sentFriend, receivedFriend} from "../../dataDemo/DataDemo";


const listSent = sentFriend;
const listReceived = receivedFriend;

function FriendRequest({navigation}) {

    const [selection, setSelection] = useState(true);
    const handleReceived = () =>{
        setSelection(true)
    }
    const handleSent = () =>{
        setSelection(false)
    }


    return(
        <View style={styles.container}>
            {/*Title*/}
            <View style={styles.title}>
                <TouchableOpacity
                    style={{marginRight:15, justifyContent:'center'}}
                    onPress={()=>{navigation.goBack()}}
                >
                    <FontAwesome name="arrow-left"  size={30} color="white" />
                </TouchableOpacity>
                <View style={{justifyContent:'center'}}>
                    <Text style={{fontWeight:'bold', fontSize:20, color:'white'}}>
                        Friend request
                    </Text>
                </View>
            </View>

            {/*Body*/}
            <View style={styles.body}>
                <View style={styles.boxSelection}>
                    <View
                        style={{flex:1, alignItems:'center'}}
                    >
                        <TouchableOpacity
                            style={{flex:1, alignItems:'center', justifyContent:'center'}}
                            onPress={handleReceived}
                        >
                            <Text style={{fontSize:20}}>Received</Text>
                        </TouchableOpacity>
                        <View style={[{width:'90%', height:2},selection?{backgroundColor:'#33CCFF'}:{backgroundColor:'none'}]}/>
                    </View>
                    <View
                        style={{flex:1, alignItems:'center'}}
                    >
                        <TouchableOpacity
                            style={{flex:1, alignItems:'center', justifyContent:'center'}}
                            onPress={handleSent}
                        >
                            <Text style={{fontSize:20}}>Sent</Text>
                        </TouchableOpacity>
                        <View style={[{ width:'90%', height:2, }, !selection?{backgroundColor:'#33CCFF'}:{backgroundColor:'none'}]}/>
                    </View>
                </View>
                <ScrollView>
                    {selection ? (
                        <ReceivedFriendRequest navigation={navigation} listReceived={listReceived}/>
                    ):(
                        <SentFriendRequest navigation={navigation} listSent={listSent}/>
                    )}
                </ScrollView>
            </View>
        </View>
    )
}

export default FriendRequest;