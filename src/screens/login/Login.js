import { ImageBackground, Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import styles from "../../css/login/Login"
import { useState } from "react";
import axios from "axios";
import { signInWithPopup } from "firebase/auth";
import { auth, googleAuthProvider } from "../../../config/FirebaseConfig";
import {useDispatch} from "react-redux";
import {setUser} from "../../redux/action";




const logoGoogle = { uri: 'https://cdn.iconscout.com/icon/free/png-256/free-google-1772223-1507807.png' };

function Login({ navigation }) {

    const dispatch = useDispatch();

    const [isEmail, setEmail] = useState("");
    const [isPassword, setPassword] = useState("");
    const [isCheckValid, setCheckValid] = useState("");

    const login = () => {
        if (isEmail.trim() == "" || isPassword.trim() == "") {
            setCheckValid("Không được để trống");
            return;
        }
        axios.post('http://localhost:8080/api/v1/auth/signin', {
            username: isEmail,
            password: isPassword
        })
            .then(response => {
                dispatch(setUser(response))
                setCheckValid("");
                // const user
                navigation.navigate("HomeChat");
            })
            .catch(error => {
                setCheckValid(error.response.data);
                console.error(error.response.data);
            })
    }
    const loginWithGoogle = async () => {
        try {
            signInWithPopup(auth, googleAuthProvider)
                .then((result) => {
                    console.log(result);
                    const user = result.user
                    axios.post("http://localhost:8080/api/v1/auth/signin/google", {
                        token: user.accessToken,
                    })
                    navigation.navigate("HomeChat")
                }).catch((error) => {
                    console.error(error)
                })
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={require("../../image/login/backgroundLogin.png")} resizeMode='cover' style={styles.imageBackground}>
                <View style={styles.body}>
                    <View style={{ width: '90%', marginVertical: 5 }}>
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>USER NAME</Text>
                        <TextInput style={styles.inputLogin} value={isEmail} onChangeText={setEmail}></TextInput>
                    </View>
                    <View style={{ width: '90%', marginVertical: 5 }}>
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>PASSWORD</Text>
                        <TextInput style={styles.inputLogin} secureTextEntry={true} value={isPassword} onChangeText={setPassword}></TextInput>
                    </View>

                    <View>
                        <Text style={{ color: 'red' }}>
                            {isCheckValid}
                        </Text>
                    </View>

                    <TouchableOpacity style={{ width: '90%', marginVertical: 5, paddingHorizontal: 5 }}
                        onPress={() => { navigation.navigate("ForgotPassword") }}
                    >
                        <Text style={{ color: '#6495ED', textDecorationLine: 'underline' }}>Forgot Password!</Text>
                    </TouchableOpacity>
                    <View style={{ width: '90%', marginVertical: 5, alignItems: 'center' }}>
                        <TouchableOpacity style={styles.buttonLogin}
                            onPress={login}
                        >
                            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>Log In</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15 }}>OR</Text>
                    </View>
                    <View style={{ width: '90%', marginVertical: 5, alignItems: 'center' }}>
                        <TouchableOpacity style={styles.buttonLoginWithGoogle}
                            onPress={loginWithGoogle}
                        >
                            <Image source={logoGoogle} style={styles.logoGoogle}></Image>
                            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>Log in with Google</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

export default Login;