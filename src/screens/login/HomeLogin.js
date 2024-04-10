import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import styles from '../../css/login/HomeLogin';


function HomeLogin({ navigation }) {
    return (
        <View style={styles.container}>
            <ImageBackground source={require("../../image/login/backgroundLogin.png")} resizeMode='cover' style={styles.imageBackground}>
                <View style={styles.container}>
                    <View style={styles.content}>
                        <Text style={{ fontSize: 70, color: 'white', fontWeight: 'bold' }}>DRAFI</Text>
                    </View>
                    <View style={styles.body}>
                        <TouchableOpacity style={styles.buttonLogin}
                            onPress={() => { navigation.navigate("Login") }}
                        >
                            <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 20 }}>Đăng nhập</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonSignUp}
                            onPress={() => { navigation.navigate("Register") }}
                        >
                            <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 20 }}>Tạo tài khoản mới</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

export default HomeLogin;


