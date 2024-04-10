import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title:{
        width:"100%",
        height:60,
        backgroundColor:"#33CCFF",
        flexDirection:'row',
        paddingHorizontal: 10,
        paddingVertical:5,

    },
    bodyTitle:{
        width:"50%",
        paddingVertical:5

    },
    bodyChat:{
        flex:1,
        flexDirection:'column-reverse'
    },
    textInputChat:{
        flexDirection:'row',
        width:"100%",
        height:50,
        backgroundColor:'white',
        justifyContent:'center',
        paddingHorizontal:20,
        paddingVertical:5,
        alignItems:'center'

    },
    sendMessage:{
        marginLeft:10
    },
    sendImage:{

    },
    messageBoxReceiver:{
        flex:1,
        flexDirection: 'row',
        margin:10
    },
    messageReceiver:{
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
        width:"70%",
        backgroundColor:'#CCCCFF',
        marginLeft:5,
        padding:10,
        borderRadius:10,
    },



})

export default styles;