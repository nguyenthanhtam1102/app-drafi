import {Text, TouchableOpacity, View} from "react-native";
import {styles} from "../css/component/GroupsComponent";
import {FontAwesome5} from "@expo/vector-icons";


function GroupsComponent({navigation}) {
    return(
        <View>
            <TouchableOpacity
                style={styles.createGroup}
            >
                <FontAwesome5 name="user-friends" size={24} color="black" />
                <Text style={{ fontSize:18, marginLeft:10}}>
                    Create new group
                </Text>
            </TouchableOpacity>
        </View>
    )
}
export default GroupsComponent;

