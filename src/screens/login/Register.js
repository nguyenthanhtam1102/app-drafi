import { View, ImageBackground, TextInput, Text, CheckBox, TouchableOpacity, Image } from "react-native";
import styles from "../../css/login/Register";
import { useState } from "react";
import axios from "axios";
import { auth, googleAuthProvider } from "../../../config/FirebaseConfig";
import { signInWithPopup, signInWithRedirect } from "firebase/auth";


const logoGoogle = { uri: 'https://cdn.iconscout.com/icon/free/png-256/free-google-1772223-1507807.png' };

function Register({ navigation }) {

    const [isSelected, setSelected] = useState(false);
    const [isDisplayName, setDisplayName] = useState("");
    const [isEmail, setEmail] = useState("");
    const [isUsername, setUsername] = useState("");
    const [isPassword, setPassword] = useState("");
    const [isCPassword, setCPassword] = useState("");
    const [isCheckValid, setCheckValid] = useState("");

    const addSignUp = () => {
        setCheckValid("");
        if (isDisplayName.trim() == '' || isEmail.trim() == "" || isUsername.trim() == "" || isPassword.trim == "") {
            setCheckValid("Không được để trống!");
            return;
        }
        const regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!regexEmail.test(isEmail)) {
            setCheckValid("Email không đúng định dạng!")
            return;
        }
        if (isUsername.length < 6) {
            setCheckValid("User name phải có độ dài lớn hơn 6")
            return;
        }
        const regexUsername = /^[a-zA-Z][a-zA-Z\d]+$/;
        if (!regexUsername.test(isUsername)) {
            setCheckValid("User name phải bắt đầu bằng số và không được chứa ký tự đặc biệt")
        }
        if (isPassword.length < 6) {
            setCheckValid("Mật khẩu phải có độ dài lớn hơn 6")
            return;
        }
        const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]/;
        if (!regexPassword.test(isPassword)) {
            setCheckValid("Mật khẩu phải có chữ số, chữ cái thường và chữ hoa")
            return;
        }
        if (isPassword !== isCPassword) {
            setCheckValid("Nhập lại mật khẩu không đúng");
            return;
        }
        const newUser = {
            displayName: isDisplayName,
            email: isEmail,
            userName: isUsername,
            password: isPassword
        }

        axios.post('http://localhost:8080/api/v1/auth/signup', {
            displayName: isDisplayName,
            username: isUsername,
            email: isEmail,
            password: isPassword,
        })
            .then(response => {
                axios.post('http://localhost:8080/api/v1/auth/verify/email/send', {
                    email: isEmail,
                })
                    .then((response) => {
                        navigation.navigate("SuccessRegister", { isEmail });
                    })
                    .catch(error => {
                        setCheckValid(error.response.data);
                        console.error(error.response.data);
                    })


            })
            .catch(error => {
                setCheckValid(error.response.data);
                console.error(error.response.data);
            })


    }


    const addSignUpWithGoogle = async () => {
        try {
            signInWithPopup(auth, googleAuthProvider)
                .then((result) => {
                    console.log(result);
                    const user = result.user
                    axios.post("http://localhost:8080/api/v1/auth/signup/google", {
                        token: user.accessToken,
                        displayName: user.displayName,
                    })
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
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>DISPLAY NAME</Text>
                        <TextInput style={styles.inputLogin} value={isDisplayName} onChangeText={setDisplayName}></TextInput>
                    </View>
                    <View style={{ width: '90%', marginVertical: 5 }}>
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>EMAIL</Text>
                        <TextInput style={styles.inputLogin} value={isEmail} onChangeText={setEmail}></TextInput>
                    </View>
                    <View style={{ width: '90%', marginVertical: 5 }}>
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>USERNAME</Text>
                        <TextInput style={styles.inputLogin} value={isUsername} onChangeText={setUsername}></TextInput>
                    </View>
                    <View style={{ width: '90%', marginVertical: 5 }}>
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>PASSWORD</Text>
                        <TextInput style={styles.inputLogin} secureTextEntry={true} value={isPassword} onChangeText={setPassword}></TextInput>
                    </View>
                    <View style={{ width: '90%', marginVertical: 5 }}>
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>CONFIRM PASSWORD</Text>
                        <TextInput style={styles.inputLogin} secureTextEntry={true} value={isCPassword} onChangeText={setCPassword}></TextInput>
                    </View>

                    <View>
                        <Text style={{ color: 'red' }}>
                            {isCheckValid}
                        </Text>
                    </View>
                    <View style={{ width: '90%', marginVertical: 5, flexDirection: 'row' }}>
                        <View style={{ paddingTop: 3 }}>
                            <CheckBox
                                value={isSelected}
                                onValueChange={setSelected}
                            ></CheckBox>
                        </View>
                        <Text style={{ color: 'white', marginLeft: 2 }}>(Optional) It's okey to send me email with DraFi updates, típ, and special ofers. You can opt out at any time.</Text>
                    </View>


                    <View style={{ width: "100%", alignItems: 'center' }}>
                        <View style={{ width: '90%', marginVertical: 5, alignItems: 'center' }}>
                            <TouchableOpacity
                                style={styles.buttonLogin}
                                disabled={!isSelected}
                                onPress={addSignUp}
                            >
                                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>Sign up</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15 }}>OR</Text>
                        </View>
                        <View style={{ width: '90%', marginVertical: 5, alignItems: 'center' }}>
                            <TouchableOpacity style={styles.buttonLoginWithGoogle}
                                onPress={addSignUpWithGoogle}
                            >
                                <Image source={logoGoogle} style={styles.logoGoogle}></Image>
                                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>Sign up with Google</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
            </ImageBackground>
        </View>
    )
}

export default Register;