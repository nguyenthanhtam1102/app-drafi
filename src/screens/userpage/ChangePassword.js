import {Text, TextInput, TouchableOpacity, View} from "react-native";
import {styles} from "../../css/userpage/ChangePassword";
import {FontAwesome} from "@expo/vector-icons";
import {useState} from "react";



function changePassword({navigation}) {

    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");


    const handleUpdatePassword = () =>{

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
                        Change password
                    </Text>
                </View>
            </View>

            <View style={styles.bodyView}>
                <View style={{marginBottom:15}}>
                    <Text style={{fontWeight:'bold', fontSize:15}}>
                        Current password:
                    </Text>
                    <TextInput
                        style={styles.textInput}
                        secureTextEntry={true}
                        placeholder={"Current password"}
                        placeholderTextColor={"#CCCCCC"}
                        onChangeText={setCurrentPassword}
                        value={currentPassword}
                    />
                </View>

                <View>
                    <Text style={{fontWeight:'bold', fontSize:15}}>
                        New password:
                    </Text>
                    <TextInput
                        style={styles.textInput}
                        secureTextEntry={true}
                        placeholder={"New password"}
                        placeholderTextColor={"#CCCCCC"}
                        onChangeText={setNewPassword}
                        value={newPassword}
                    />
                    <TextInput
                        style={styles.textInput}
                        secureTextEntry={true}
                        placeholder={"Confirm new password"}
                        placeholderTextColor={"#CCCCCC"}
                        onChangeText={setConfirmNewPassword}
                        value={confirmNewPassword}
                    />
                </View>

                <View style={styles.buttonUpdateView}>
                    <TouchableOpacity
                        style={styles.buttonUpdate}
                        onPress={handleUpdatePassword}
                    >
                        <Text style={{fontWeight:'bold', color:'white', fontSize:18}}>
                            UPDATE
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}

export default changePassword;