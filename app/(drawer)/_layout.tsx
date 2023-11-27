import { Ionicons } from '@expo/vector-icons';
import { colorTokens } from '@tamagui/themes';
import Drawer from 'expo-router/drawer';

const _layout = () => {
  return (
    <Drawer screenOptions={{
        headerShown: true,
        drawerHideStatusBarOnOpen: true,
        drawerActiveBackgroundColor: colorTokens.dark.blue.blue7,
        drawerActiveTintColor: '#fff',
        drawerLabelStyle: { marginLeft: -20 },
    }}>
      <Drawer.Screen name="(home)" options={{
        title: 'Home',
        headerShown: false,
        drawerIcon: ({ color, size }) => <Ionicons name="ios-home" size={size} color={color} />
      }} />
      <Drawer.Screen name="(favorites)" options={{
        title: 'Favorites',
        headerShown: false,
        drawerIcon: ({ color, size }) => <Ionicons name="star-outline" size={size} color={color} />
      }} />
    </Drawer>
  );
};

export default _layout;
