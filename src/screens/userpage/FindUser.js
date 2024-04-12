import {Image, Text, TextInput, TouchableOpacity, View} from "react-native";
import {styles} from "../../css/userpage/FindUser";
import {FontAwesome} from "@expo/vector-icons";
import {useState, useEffect} from "react";
import { Entypo } from '@expo/vector-icons';
import useGetUserByEmail from "../../api/useGetUserByEmail";
import {chatServiceApi} from "../../api/axiosConfig";
import {useDispatch, useSelector} from "react-redux";



// const dispatch = useDispatch();
// const user = useSelector((state) => state.user);
// console.log(user)

function FindUser({navigation}){

    // const { userInfo, isLoading: isLoadingUserInfo } = useGetUserInfo(userId);

    const roomName = 'Nguyen Thanh Tam';
    const userId = user.id;
    const chatId = '13343a76-d078-45b2-96f0-0a4b6114cb24';

    const [phone, setPhone] = useState("");
    const handleFindUser = () =>{
        const results = userList.find(user => user.phone === phone && user.id !== userId);
        console.log(results)
        // if(results.length > 0){
        //
        // }

    }

    const [userList, setUserList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await chatServiceApi.get(`"http://localhost:8082/api/users`);
                console.log(data)
                setUserList(data.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);


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
                        Add friend
                    </Text>
                </View>
            </View>

            <View style={styles.qgView}>
                <View style={styles.backgroundQG}>
                    <Text style={{color:'white', fontWeight:'bold', fontSize:18}}>User name</Text>
                    <Image
                        source={require('../../image/userpage/qgZalo.png')}
                        style={{width:150, height:150, marginVertical:10, borderRadius:5}}
                    />
                    <Text style={{color:'white'}}>Scan the code to add friends to Zalo with me</Text>
                </View>
            </View>

            <View style={styles.findView}>
                <View style={{flex:1, justifyContent:'center'}}>
                    <TextInput
                        onChangeText={setPhone}
                        value={phone}
                        style={styles.inputFindUser}
                        placeholder={"Enter phone"}
                        placeholderTextColor={"#CCCCCC"}
                    />
                </View>
                <TouchableOpacity
                    style={styles.btnFind}
                    onPress={handleFindUser}
                >
                    <Entypo name="arrow-with-circle-right" size={30} color="#AAAAAA" />
                </TouchableOpacity>

            </View>
        </View>
    )
}


export default FindUser;