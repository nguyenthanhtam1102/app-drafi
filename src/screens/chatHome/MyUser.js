import {Image, ImageBackground, Text, TouchableOpacity, View} from "react-native";
import {styles} from "../../css/chatHome/MyUser";
import {AntDesign} from "@expo/vector-icons";
import {personData} from "../../dataDemo/DataDemo";



const myUser = personData;

function MyUser({navigation}){
    return(
        <View style={styles.container}>
            <View style={styles.backgroundView}>
                <ImageBackground
                    style={styles.backgroundimage}
                    source={require('../../image/chatHome/backgroundImage.png')}
                >
                    <TouchableOpacity
                        style={{marginTop:10, marginRight:10}}
                        onPress={() => navigation.navigate("SettingUser")}
                    >
                        <AntDesign name="setting" size={30} color="white" />
                    </TouchableOpacity>
                </ImageBackground>
            </View>
            <View style={styles.avatarView}>
                <View style={styles.behindAvatar}>
                    <Image
                        source={myUser.image}
                        style={styles.avatarImage}
                    />
                </View>
                <Text style={{fontWeight:'bold', fontSize:20}}>
                    {myUser.displayName}
                </Text>
            </View>
        </View>
    )
}

export default MyUser;