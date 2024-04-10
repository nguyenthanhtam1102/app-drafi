import {Image, ImageBackground, Text, TouchableOpacity, View} from "react-native";
import {styles} from "../../css/userpage/PersonalPage";
import {personData} from "../../dataDemo/DataDemo";
import {FontAwesome, AntDesign, Feather} from "@expo/vector-icons";
import myUser from "../chatHome/MyUser";

//Dữ liệu user trong trang cá nhân
const person = personData;

//check có phải bạn bè không
const checkFriend  = false;



function PersonalPage({navigation}) {
    //Xử lý button chat
    const handleChat = ()  =>{

    }

    //Xử lý button kết bạn
    const handleRequestFriend = ()  =>{

    }

    // Xử lý button hủy kết bạn
    const handleRefuseFriend = ()  =>{

    }



    return(
        <View style={styles.container}>
            <View style={styles.backgroundView}>
                <ImageBackground
                    style={styles.backgroundimage}
                    source={require('../../image/chatHome/backgroundImage.png')}
                >
                    <TouchableOpacity
                        style={{marginTop:10, marginLeft:10}}
                        onPress={() => navigation.goBack()}
                    >
                        <FontAwesome name="arrow-left"  size={30} color="white" />
                    </TouchableOpacity>
                </ImageBackground>
            </View>
            <View style={styles.avatarView}>
                <View style={styles.behindAvatar}>
                    <Image
                        source={person.image}
                        style={styles.avatarImage}
                    />
                </View>
                <Text style={{fontWeight:'bold', fontSize:20}}>
                    {person.displayName}
                </Text>
                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity
                        style={styles.btnChat}
                        onPress={handleChat}
                    >
                        <AntDesign name="message1" size={20} color="black" />
                        <Text style={{fontWeight:'bold', fontSize:18, marginLeft:10}}>Chat</Text>
                    </TouchableOpacity>
                    {!checkFriend?(
                        <TouchableOpacity
                            style={styles.btnRequestFriend}
                            onPress={handleRequestFriend}
                        >
                            <Feather name="user-plus" size={24} color="black" />
                        </TouchableOpacity>
                    ):(
                        <TouchableOpacity
                            style={styles.btnRefuseFriend}
                            onPress={handleRefuseFriend}
                        >
                            <Feather name="user-x" size={24} color="black" />
                        </TouchableOpacity>
                    )}

                </View>
            </View>
            <View style={{alignItems: "center"}}>
                <Text>Chưa có hoạt động</Text>
            </View>
        </View>
    )
}





export default PersonalPage;