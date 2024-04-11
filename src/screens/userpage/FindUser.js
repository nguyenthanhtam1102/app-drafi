import {Image, Text, TextInput, TouchableOpacity, View} from "react-native";
import {styles} from "../../css/userpage/FindUser";
import {FontAwesome} from "@expo/vector-icons";
import {useState} from "react";
import { Entypo } from '@expo/vector-icons';
import useGetUserByEmail from "../../api/useGetUserByEmail";


function FindUser({navigation}){

    // const { userInfo, isLoading: isLoadingUserInfo } = useGetUserInfo(userId);

    const [email, setEmail] = useState("");
    const handleFindUser = () =>{
        // const {userInfor, isLoading: isLoadingUserInfor} = useGetUserByEmail(email);
        // console.log(userInfor)

        // navigation.navigate("PersonalPage");

    }

    return(
        <View style={styles.container}>
            <View style={styles.title}>
                <TouchableOpacity
                    style={{marginRight:15, justifyContent:'center'}}
                    onPress={()=>{navigation.goBack()}}
                >
                    <FontAwesome name="arrow-left"  size={30} color="white" />
                </TouchableOpacity>
                <View style={{justifyContent:'center'}}>
                    <Text style={{fontWeight:'bold', fontSize:20, color:'white'}}>
                        Add friend
                    </Text>
                </View>
            </View>

            <View style={styles.qgView}>
                <View style={styles.backgroundQG}>
                    <Text style={{color:'white', fontWeight:'bold', fontSize:18}}>User name</Text>
                    <Image
                        source={require('../../image/userpage/qgZalo.png')}
                        style={{width:150, height:150, marginVertical:10, borderRadius:5}}
                    />
                    <Text style={{color:'white'}}>Scan the code to add friends to Zalo with me</Text>
                </View>
            </View>

            <View style={styles.findView}>
                <View style={{flex:1, justifyContent:'center'}}>
                    <TextInput
                        onChangeText={setEmail}
                        value={email}
                        style={styles.inputFindUser}
                        placeholder={"Enter email"}
                        placeholderTextColor={"#CCCCCC"}
                    />
                </View>
                <TouchableOpacity
                    style={styles.btnFind}
                    onPress={handleFindUser}
                >
                    <Entypo name="arrow-with-circle-right" size={30} color="#AAAAAA" />
                </TouchableOpacity>
            </View>
        </View>
    )
}


export default FindUser;