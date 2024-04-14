import {Image, Text, TouchableOpacity, View} from "react-native";
import {styles} from "../../css/chatHome/SeeMembers";
import {FontAwesome} from "@expo/vector-icons";
import {dataMembers} from "../../dataDemo/DataDemo";


const listMember = dataMembers;

function SeeMembers({navigation}){
    return(
        <View style={styles.container}>
            <View style={styles.title}>
                <TouchableOpacity
                    style={{marginRight:15, justifyContent:'center'}}
                    onPress={()=>{navigation.goBack()}}
                >
                    <FontAwesome name="arrow-left"  size={30} color="white" />
                </TouchableOpacity>
                <View style={{justifyContent:'center'}}>
                    <Text style={{fontWeight:'bold', fontSize:20, color:'white'}}>
                        See member
                    </Text>
                </View>
            </View>
            <View style={styles.viewMembers}>
                <Text style={{color:'blue', fontWeight:'bold'}}>
                    Members
                </Text>
                <View style={{marginTop:15, paddingHorizontal:10}}>
                    {listMember.map((item,index)=>{
                        return(
                        <MemberBox key={item.id} item={item} navigation={navigation}/>
                        )
                    })}
                </View>
            </View>
        </View>
    )
}

function MemberBox({item, navigation}){
    return(
        <TouchableOpacity style={styles.boxFriend}>
            <Image
                source={item.image}
                style={{width:50, height:50, borderRadius:100}}
            />
            <View style={{flex:1, marginLeft:10, justifyContent:'center'}}>
                <Text style={{fontSize:18}}>
                    {item.displayName}
                </Text>
                <Text>{item.permission}</Text>
            </View>
        </TouchableOpacity>
    )
}


export default SeeMembers;

