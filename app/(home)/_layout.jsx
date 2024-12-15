import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import Entypo from '@expo/vector-icons/Entypo';

export default function Layout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color="#4DB6AC" />,
        }}
      />
      <Tabs.Screen
        name="topup"
        options={{
          title: 'TopUp',
          tabBarIcon: ({ color }) => <Entypo name="wallet" size={24} color="#4DB6AC" />,
        }}
      />
      
      <Tabs.Screen
        name="transfer"
        options={{
          title: 'Transfer',
          tabBarIcon: ({ color }) => <FontAwesome name="send-o" size={24} color="#4DB6AC" />,
        }}
      />
    </Tabs>
    
  );
}
