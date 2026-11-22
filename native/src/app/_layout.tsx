// @ts-ignore NativeWind CSS is loaded by the bundler and has no TypeScript module declaration.
import "../../global.css"; // NativeWind Tailwind styles
import { useRouter, usePathname } from 'expo-router';
import { Drawer } from 'expo-router/drawer';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { 
  LayoutDashboard, Building2, Users, TrendingUp, Handshake, 
  Inbox, Zap ,PieChart,Upload,MessageSquare,User,Briefcase,ClipboardList
} from 'lucide-react-native';

// Custom Drawer Content (Sidebar equivalent for mobile)
function CustomDrawerContent(props: any) {
  const router = useRouter();
  const pathname = usePathname();

  // Menu Items List
  const menuItems = [
    { label: 'Dashboard', icon: LayoutDashboard, path: '/' },
    { label: 'Accounts', icon: Building2, path: '/accounts' },
    { label: 'Account Report', icon: PieChart, path: '/account-report' },
    { label: 'Account Upload', icon: Upload, path: '/account-upload' }, 
    { label: 'Contacts', icon: Users, path: '/contacts' },
    { label: 'Leads', icon: TrendingUp, path: '/leads' },
    { label: 'Deals', icon: Handshake, path: '/deals' },
    { label: 'Inbox', icon: Inbox, path: '/inbox' },
    { label: 'Feedback', icon: MessageSquare, path: '/feedback' },
    { label: 'Profile', icon: User, path: '/profile' },
    { label: 'My Jobs', icon: Briefcase, path: '/my-jobs' },
    { label: 'Test Results', icon: ClipboardList, path: '/test-results' },
  ];

  const navigateTo = (path: string) => {
    router.push(path);
    props.navigation.closeDrawer(); // Close drawer after clicking
  };

  return (
    <ScrollView className="flex-1 bg-white">
      {/* Logo Area */}
      <View className="flex-row items-center gap-3 px-6 pt-12 pb-6 border-b border-gray-100">
        <View className="w-10 h-10 bg-blue-600 rounded-lg items-center justify-center">
          <Zap size={24} color="white" fill="white" />
        </View>
        <View>
          <Text className="text-xl font-bold text-gray-900 leading-tight">Actify</Text>
          <Text className="text-[10px] font-semibold text-gray-500 tracking-wider">BUSINESS</Text>
        </View>
      </View>

      {/* Menu Items */}
      <View className="px-4 pt-4">
        {menuItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <TouchableOpacity 
              key={item.label}
              onPress={() => navigateTo(item.path)}
              className={`flex-row items-center gap-3 px-3 py-3 rounded-lg mb-1 ${
                isActive ? 'bg-gray-900' : 'bg-transparent'
              }`}
            >
              <item.icon size={18} color={isActive ? 'white' : '#6B7280'} />
              <Text className={`text-sm font-medium ${
                isActive ? 'text-white' : 'text-gray-700'
              }`}>
                {item.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Bottom Profile (Optional) */}
      <View className="mt-auto p-4 border-t border-gray-100">
        <View className="flex-row items-center gap-3">
          <View className="w-9 h-9 rounded-full bg-black items-center justify-center">
            <Text className="text-sm font-medium text-white">A</Text>
          </View>
          <View>
            <Text className="text-sm font-semibold text-gray-900">Admin</Text>
            <Text className="text-xs text-gray-500">admin@actify.com</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          headerStyle: { backgroundColor: 'white' },
          headerTintColor: '#111827',
          headerTitleStyle: { fontWeight: 'bold' },
          headerShadowVisible: false,
          drawerStyle: { width: 280 },
        }}
      >
        <Drawer.Screen name="index" options={{ title: 'Dashboard' }} />
        <Drawer.Screen name="accounts" options={{ title: 'Accounts' }} />
        <Drawer.Screen name="account-report" options={{ title: 'Account Report' }} />
        <Drawer.Screen name="account-upload" options={{ title: 'Account Upload' }} />
        <Drawer.Screen name="contacts" options={{ title: 'Contacts' }} />
        <Drawer.Screen name="leads" options={{ title: 'Leads' }} />
        <Drawer.Screen name="deals" options={{ title: 'Deals' }} />
        <Drawer.Screen name="inbox" options={{ title: 'Inbox' }} />
        <Drawer.Screen name="feedback" options={{ title: 'Feedback' }} />
        <Drawer.Screen name="profile" options={{ title: 'Profile' }} />
        <Drawer.Screen name="my-jobs" options={{ title: 'My Jobs' }} />
        <Drawer.Screen name="test-results" options={{ title: 'Test Results' }} />
        </Drawer>
    </GestureHandlerRootView>
  );
}