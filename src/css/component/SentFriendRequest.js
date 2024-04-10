import {StyleSheet} from "react-native";


const styles = StyleSheet.create({
    container:{
        width:"100%",
        backgroundColor:'white'
    },
    box:{
        width:"100%",
        paddingHorizontal:20,
        paddingVertical:15,
        flexDirection:'row'
    },
    image:{
        width:60,
        height:60,
        borderRadius:100,
        // justifyContent:"space-around"
    },
    btnRecall:{
        backgroundColor:"#CCCCCC",
        paddingHorizontal:15,
        paddingVertical:10,
        borderRadius:50,
    }
})

export {styles};