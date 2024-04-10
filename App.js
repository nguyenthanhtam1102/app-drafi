import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeLogin from './src/screens/login/HomeLogin';
import Login from "./src/screens/login/Login";
import Register from "./src/screens/login/Register";
import ForgotPassword from "./src/screens/login/ForgotPassword";
import SuccessRegister from './src/screens/login/SuccessRegister';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import PhoneBook from "./src/screens/chatHome/PhoneBook";
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import HomeChat from "./src/screens/chatHome/HomeChat";
import RoomChat from "./src/screens/chatHome/RoomChat";
import MyUser from "./src/screens/chatHome/MyUser";
import SettingRoom from "./src/screens/chatHome/SettingRoom";
import FriendRequest from "./src/screens/chatHome/FriendRequest";
import PersonalPage from "./src/screens/userpage/PersonalPage";
import FindUser from "./src/screens/userpage/FindUser";


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"HomeChat"}>
          <Stack.Screen name='HomeLogin' component={HomeLogin} options={{ headerShown: false, }} />
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='Register' component={Register} />
          <Stack.Screen name='ForgotPassword' component={ForgotPassword} />
          <Stack.Screen name="SuccessRegister" component={SuccessRegister} options={{ headerShown: false, }} />
          <Stack.Screen name="HomeChat" component={MyTabs} options={{ headerShown: false, }}/>
          <Stack.Screen name="RoomChat" component={RoomChat} options={{ headerShown: false, }}/>
          <Stack.Screen name="SettingRoom" component={SettingRoom} options={{ headerShown: false, }}/>
          <Stack.Screen name="FriendRequest" component={FriendRequest} options={{ headerShown: false, }}/>
          <Stack.Screen name="PersonalPage" component={PersonalPage} options={{ headerShown: false, }}/>
          <Stack.Screen name="FindUser" component={FindUser} options={{ headerShown: false, }}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

function MyTabs(){
  return(
      <Tab.Navigator initialRouteName={"Chat"} >
        <Tab.Screen name={"Chat"} component={HomeChat}
                    options={{
                        headerShown:false,
                        tabBarLabel:"Chat",
                        tabBarActiveTintColor:"#63B8FF",
                        tabBarIcon:({color, size})=>(
                            <AntDesign name="message1" size={size} color={color} />
                        )
                    }}
        />
         <Tab.Screen name={"PhoneBook"} component={PhoneBook}
                    options={{
                        headerShown:false,
                        tabBarLabel:"PhoneBook",
                        tabBarActiveTintColor:"#63B8FF",
                        tabBarIcon:({color, size})=>(
                            <FontAwesome name="address-book-o" size={size} color={color} />
                        )


                    }}
        />
         <Tab.Screen name={"MyUser"} component={MyUser}
                    options={{
                        headerShown:false,
                        tabBarLabel:"My",
                        tabBarActiveTintColor:"#63B8FF",
                        tabBarIcon:({color, size})=>(
                            <FontAwesome name="user-circle-o" size={size} color={color} />
                        )

                    }}
        />

      </Tab.Navigator>
  )
}

