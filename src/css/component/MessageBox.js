import {StyleSheet} from "react-native";


export const styles = StyleSheet.create({
    message:{
        width:"100%",
        height:"80px",
        backgroundColor:'white',
        flexDirection:'row'
    },
    img:{
        justifyContent: "center",
        height: "100%",
        paddingHorizontal:15
    },
    body:{
        borderBottomWidth:1,
        borderColor:'#BBBBBB',
        flex:1,
        paddingVertical:10,
        flexDirection:'row'
    },
    content:{
        flex:1
    },
    time:{
        width:60,
        height:"100%",
        alignItems:'flex-end',
        paddingRight:10
    }
})