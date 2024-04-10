import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    imageBackground: {
        flex: 1,
        justifyContent: 'center',
    },
    body: {
        flex: 1,
        alignItems: "center",
        justifyContent:'center',
        paddingVertical: 15,
        paddingHorizontal:20
    },
    sendAgainButton: {
        marginVertical: 15,
        backgroundColor: '#00BFFF',
        width: 100,
        height: "30px",
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
    },

});

export default styles;
