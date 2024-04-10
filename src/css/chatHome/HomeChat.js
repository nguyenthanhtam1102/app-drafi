import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    findChat:{
        backgroundColor:"#33CCFF",
        width: "100%",
        height: "60px",
        flexDirection:'row',
        padding:10,
        alignItems:'center'
    },
    findChatInput:{
        width:'75%',
        marginHorizontal:10,
        height:'30px',
        fontSize:18,
        outlineStyle: 'none',
    },
    plusButton:{flex:1,
        justifyContent:'center',
        alignItems: 'center'
    },
    body:{
        flex:1,
    },

})

export default styles;