import {Text, TouchableOpacity, View} from "react-native";
import {styles} from "../../css/userpage/SettingUser";
import {FontAwesome, AntDesign, Feather, SimpleLineIcons} from "@expo/vector-icons";

function SettingUser({navigation}) {

    // Xử lý edit information
    const handleEdit = () =>{

    }

    const handleChangePassword = () =>{
        navigation.navigate("ChangePassword")
    }
    const handleDeleteAccount = () =>{

    }
    const handleLogout = () =>{
        navigation.navigate("HomeLogin")
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
                        Setting user
                    </Text>
                </View>
            </View>

            <View style={styles.bodyView}>

                <TouchableOpacity
                    style={styles.button}
                    onPress={handleEdit}
                >
                    <FontAwesome name="pencil-square-o" size={30} color="blue" />
                    <View style={{flexDirection:'row', flex:1, height:'100%', borderBottomWidth:1, alignItems:'center', paddingRight:20}}>
                        <View style={{flex:1, justifyContent:'center', marginLeft:15, }}>
                            <Text style={{fontSize:15}}>
                                Edit personal information
                            </Text>
                        </View>
                        <AntDesign name="right" size={20} color="#CCCCCC" />
                    </View>
                </TouchableOpacity>


                <TouchableOpacity
                    style={styles.button}
                    onPress={handleChangePassword}
                >
                    <Feather name="lock" size={30} color="blue" />
                    <View style={{flexDirection:'row', flex:1, height:'100%', borderBottomWidth:1, alignItems:'center', paddingRight:20}}>
                        <View style={{flex:1, justifyContent:'center', marginLeft:15, }}>
                            <Text style={{fontSize:15}}>
                                Change password
                            </Text>
                        </View>
                        <AntDesign name="right" size={20} color="#CCCCCC" />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={handleDeleteAccount}
                >
                    <AntDesign name="delete" size={30} color="red" />
                    <View style={{flexDirection:'row', flex:1, height:'100%', alignItems:'center', paddingRight:20}}>
                        <View style={{flex:1, justifyContent:'center', marginLeft:15, }}>
                            <Text style={{fontSize:15}}>
                                Delete the account
                            </Text>
                        </View>
                        <AntDesign name="right" size={20} color="#CCCCCC" />
                    </View>
                </TouchableOpacity>


                <View style={[styles.button, {marginTop:10, padding:20}]}>
                    <TouchableOpacity
                        style={styles.buttonLogOut}
                        onPress={handleLogout}
                    >
                        <SimpleLineIcons name="logout" size={20} color="black" />
                        <Text style={{fontWeight:'bold', fontSize:20, marginLeft:10}}>
                            Log out
                        </Text>
                    </TouchableOpacity>
                </View>



            </View>

        </View>
    )
}


export default SettingUser;