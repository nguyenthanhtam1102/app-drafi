import {styles} from "../css/component/MessageBox";
import {Image, Text, TouchableOpacity, View} from "react-native";


function MessageBox({item, navigation}) {
    return(
        <TouchableOpacity
            style={styles.message}
            onPress={()=>{navigation.navigate("RoomChat")}}
        >

            <View style={styles.img}>
                <Image source={item.image} style={{width:50, height:50, borderRadius:100}}/>
            </View>
            <View style={styles.body}>
                <View style={styles.content}>
                    <Text style={{fontSize:15}}>{item.displayName}</Text>
                    <Text style={{fontSize:15, color:"#AAAAAA", marginTop:10}}>
                        {item.content.message.length > 28 ? `${item.content.message.slice(0, 28)}...` : item.content.message}
                    </Text>
                </View>
                <View style={styles.time}>
                    <Text style={{color:"#AAAAAA"}}>
                        23 giờ
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}



export default MessageBox;