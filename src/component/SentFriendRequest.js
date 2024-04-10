import {Image, Text, TouchableOpacity, View} from "react-native";
import {styles} from "../css/component/SentFriendRequest";





function SentFriendRequest({navigation, listSent}) {
    return(
        <View style={styles.container}>
            {listSent.map((item)=>(
                <SentBox key={item.id} navigation={navigation} item={item}/>
            ))}
        </View>
    )
}

function SentBox({item, navigation}) {

    const handleToPersonalPage = () =>{
        const idUser = item.u.id;
        navigation.navigate("PersonalPage", {idUser});
    }


    return(
        <TouchableOpacity
            style={styles.box}
            onPress={handleToPersonalPage}
        >
            <View style={{flexDirection:"row", flex: 1}}>
                <Image source={item.u.image} style={styles.image}/>
                <View style={{marginLeft:15, justifyContent:"space-around"}}>
                    <Text style={{fontSize:18, fontWeight:'bold'}}>{item.u.displayName}</Text>
                    <Text style={{color:"#CCCCCC"}}>2 ngày trước</Text>
                </View>
            </View>
            <View style={{alignItems:'center', justifyContent:'center'}}>
                <TouchableOpacity
                    style={styles.btnRecall}

                >
                    <Text>Recall</Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}

export default SentFriendRequest;

