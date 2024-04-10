import {View, ImageBackground, Text, TouchableOpacity} from "react-native";
import styles from "../../css/login/SuccessRegister";
import axios from "axios";





function SuccessRegister({ navigation, route }) {
    const isEmail = route.params.isEmail;
    const handleSendAgain = ()=>{
        axios.post('http://localhost:8080/api/v1/auth/verify/email/send',{
            email: isEmail
        })
            .then((response)=>{
                navigation.navigate("SuccessRegister");
            })
            .catch(error =>{
                console.error(error.response.data);
            })
    }
    return (
        <View style={styles.container}>
            <ImageBackground source={require("../../image/login/backgroundLogin.png")} resizeMode='cover' style={styles.imageBackground}>
                <View style={styles.body}>
                    <Text style={{color:'white', fontSize: 25, fontWeight:'bold',textAlign:'center'}}>
                        ĐĂNG KÍ TÀI KHOẢN THÀNH CÔNG
                    </Text>
                    <Text style={{color:'white', fontSize: 15, fontWeight:'bold',textAlign:'center'}}>
                        Một email xác thực đã được gửi về hộp thư mà bạn đăng kí. Vui lòng kiểm tra và xác thực tài khoản.
                    </Text>
                    <TouchableOpacity style={styles.sendAgainButton}>
                        <Text style={{color:'white', fontSize:15, fontWeight:'bold'}}>Gửi lại</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginVertical:15}}
                                      onPress={()=>{navigation.navigate("HomeLogin")}}
                    >
                        <Text style={{fontSize:15, color:'blue', textDecorationLine:'underline'}}>Trở về</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}

export default SuccessRegister;