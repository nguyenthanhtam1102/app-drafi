import {Image, Text, TouchableOpacity, View} from "react-native";
import {styles} from "../css/component/GroupsComponent";
import {FontAwesome5, Ionicons} from "@expo/vector-icons";
import MessageBox from "./MessageBox";


function GroupsComponent({navigation}) {

    const {listGroups} = {};

    return(
        <View>
            <TouchableOpacity
                style={styles.createGroup}
                onPress={()=>{navigation.navigate("CreateNewGroup")}}
            >
                <FontAwesome5 name="user-friends" size={24} color="black" />
                <Text style={{ fontSize:18, marginLeft:10}}>
                    Create new group
                </Text>
            </TouchableOpacity>

            <View style={styles.listGroups}>
                <Text style={{fontWeight:'bold',fontSize:18, marginLeft:10, marginTop:10}}>
                    My groups
                </Text>

                {listGroups && listGroups.map((item) => {

                    const roomId = "";

                    return(
                        <MessageBox key={roomId} item={item} navigation={navigation}/>
                    )
                })}

            </View>
        </View>
    )
}

export default GroupsComponent;

