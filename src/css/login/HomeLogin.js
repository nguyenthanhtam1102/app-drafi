import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    imageBackground: {
        flex: 1,
        justifyContent: 'center',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    body: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingVertical: 15,

    },
    buttonLogin: {
        width: '300px',
        height: '40px',
        color: 'white',
        borderWidth: 1,
        marginVertical: 10,
        backgroundColor: '#00BFFF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    buttonSignUp: {
        width: '300px',
        height: '40px',
        color: 'white',
        borderWidth: 1,
        marginVertical: 10,
        backgroundColor: '#363636',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
});

export default styles;
