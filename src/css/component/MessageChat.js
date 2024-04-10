import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    messageBoxReceiver:{
        flex:1,
        flexDirection: 'row',
        margin:10
    },
    messageReceiver:{
        maxWidth:"70%",
        backgroundColor:'white',
        marginLeft:5,
        padding:10,
        borderRadius:10,
    },
    messageBoxSender:{
        flex:1,
        flexDirection: 'row-reverse',
        margin:10,
        alignItems:'flex-end'
    },
    messageSender:{
        maxWidth:"70%",
        backgroundColor:'#CCCCFF',
        marginLeft:5,
        padding:10,
        borderRadius:10,
    },
})

export {styles};