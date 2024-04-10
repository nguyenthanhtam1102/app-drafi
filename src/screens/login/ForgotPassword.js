import {View, ImageBackground, TouchableOpacity, Text, TextInput} from "react-native";
import styles from "../../css/login/ForgotPassword";
import {useState} from "react";

const backgroundImage = require('../../image/login/backgroundLogin.png')

function ForgotPassword({ navigation }) {

    const [isUserName, setUserName] = useState("");
    const [isPassword, setPassword] = useState("");
    const [isCPassword, setCPassword] = useState("");
    const [isOTP, setOTP] = useState("");

    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={backgroundImage} resizeMode='cover' style={styles.imageBackground}>
                <View style={styles.container}>
                    <View>
                        <Text style={{color:'white', fontWeight:'bold', fontSize:15}}>
                            USERNAME
                        </Text>
                        <View style={styles.inputLogin}>
                            <TextInput style={styles.inputUsername}
                                       onChangeText={setUserName}
                                       value={isUserName}
                            />
                            <TouchableOpacity>

                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <View>
                            <Text style={{color:'white', fontWeight:'bold', fontSize:15}}>
                                OTP
                            </Text>
                            <TextInput style={styles.inputLogin}
                                       onChangeText={setOTP}
                                       value={isOTP}
                            />
                        </View>
                        <View>
                            <Text style={{color:'white', fontWeight:'bold', fontSize:15}}>
                                PASSWORD
                            </Text>
                            <TextInput style={styles.inputLogin}
                                       onChangeText={setPassword}
                                       value={isPassword}
                            />
                        </View>
                        <View>
                            <Text style={{color:'white', fontWeight:'bold', fontSize:15}}>
                                CONFIRM PASSWORD
                            </Text>
                            <TextInput style={styles.inputLogin}
                                       onChangeText={isCPassword}
                                       value={isCPassword}
                            />
                        </View>
                    </View>



                </View>
            </ImageBackground>
        </View>
    )
}

export default ForgotPassword;