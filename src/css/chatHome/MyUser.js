import {StyleSheet} from "react-native";


const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    backgroundView:{
        width:"100%",
        height:200,
    },
    backgroundimage:{
        width:"100%",
        height:"100%",
        alignItems:'flex-end'
    },
    avatarView:{
        alignItems:'center',
        zIndex:5,
        top: -50,
    },
    behindAvatar:{
        backgroundColor:'white',
        padding:3,
        borderRadius:100
    },
    avatarImage:{
        width:"100px",
        height:"100px",
        borderRadius:100,

    },
})

export {styles};