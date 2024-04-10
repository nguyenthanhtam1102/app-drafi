import {Image, Text, TouchableOpacity, View} from "react-native";
import {styles} from "../css/component/ReceivedFriendRequest";



function ReceivedFriendRequest({navigation, listReceived}) {
    return(
        <View style={styles.container}>
            {listReceived.map((item)=>(
                <ReceivedBox key={item.id} navigation={navigation} item={item}/>
            ))}
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