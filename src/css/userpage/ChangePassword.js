import {StyleSheet} from "react-native";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white'
    },
    title:{
        width:"100%",
        height:60,
        backgroundColor:"#33CCFF",
        flexDirection:'row',
        paddingHorizontal: 10,
        paddingVertical:5,

    },
    findView:{
        backgroundColor:'white',
        width:'100%',
        paddingHorizontal:5,
        paddingVertical:10,
        flexDirection:'row',
        marginHorizontal:5,

    },
    bodyView:{
        backgroundColor:'white',
        paddingVertical:15,
        paddingHorizontal:10
    },
    textInput:{
        fontSize:18,
        paddingVertical:5,
        outlineStyle:'none',
        borderBottomWidth:1,
        marginBottom:15

    },
    buttonUpdateView:{
        justifyContent:'center',
        alignItems:'center'
    },
    buttonUpdate:{
        backgroundColor:'#8470FF',
        paddingHorizontal:60,
        paddingVertical:5,
        borderRadius:100
    }

})

export {styles};