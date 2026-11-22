import { useEffect } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { accounts, getStats, industries } from '@shared/data';
import Animated, { 
  FadeInDown, 
  FadeInUp, 
  useSharedValue, 
  useAnimatedStyle, 
  withTiming, 
  withDelay 
} from 'react-native-reanimated';

export default function AccountReport() {
  const stats = getStats();
  
  const industryData = industries.map((industry) => {
    const industryAccounts = accounts.filter((a) => a.industry === industry);
    const active = industryAccounts.filter((a) => a.status === 'Active').length;
    const inactive = industryAccounts.filter((a) => a.status === 'Inactive').length;
    const share = ((industryAccounts.length / stats.total) * 100).toFixed(1);
    return { name: industry, active, inactive, share };
  });

  const activePercent = Math.round((stats.active / stats.total) * 100);
  const inactivePercent = Math.round((stats.inactive / stats.total) * 100);

  // Animation for Status Progress Bar
  const progressActive = useSharedValue(0);
  const progressInactive = useSharedValue(0);

  useEffect(() => {
    progressActive.value = withDelay(400, withTiming(activePercent, { duration: 1000 }));
    progressInactive.value = withDelay(400, withTiming(inactivePercent, { duration: 1000 }));
  }, [activePercent, inactivePercent]);

  const animatedActiveStyle = useAnimatedStyle(() => ({
    width: `${progressActive.value}%`,
  }));

  const animatedInactiveStyle = useAnimatedStyle(() => ({
    width: `${progressInactive.value}%`,
  }));

  return (
    <ScrollView className="flex-1 bg-gray-50 p-4">
      <Animated.View entering={FadeInUp.duration(500)}>
        <Text className="text-sm text-gray-500 mb-4">Live analytics derived from your account dataset.</Text>
      </Animated.View>

      {/* Stat Cards */}
      <View className="flex-row flex-wrap justify-between gap-y-4 mb-6">
        <Animated.View entering={FadeInDown.delay(100).duration(500)} className="w-[48%] bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
          <Text className="text-[10px] font-bold text-gray-500 uppercase">Total</Text>
          <Text className="text-2xl font-bold text-gray-900 mt-1">{stats.total}</Text>
        </Animated.View>
        
        <Animated.View entering={FadeInDown.delay(200).duration(500)} className="w-[48%] bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
          <Text className="text-[10px] font-bold text-gray-500 uppercase">Active</Text>
          <Text className="text-2xl font-bold text-emerald-600 mt-1">{stats.active}</Text>
        </Animated.View>
        
        <Animated.View entering={FadeInDown.delay(300).duration(500)} className="w-[48%] bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
          <Text className="text-[10px] font-bold text-gray-500 uppercase">Inactive</Text>
          <Text className="text-2xl font-bold text-gray-400 mt-1">{stats.inactive}</Text>
        </Animated.View>
        
        <Animated.View entering={FadeInDown.delay(400).duration(500)} className="w-[48%] bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
          <Text className="text-[10px] font-bold text-gray-500 uppercase">Industries</Text>
          <Text className="text-2xl font-bold text-violet-500 mt-1">{stats.industries}</Text>
        </Animated.View>
      </View>

      {/* Status Distribution */}
      <Animated.View entering={FadeInDown.delay(500).duration(500)} className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm mb-6">
        <Text className="text-sm font-bold text-gray-900 mb-3">Status Distribution</Text>
        <View className="h-3 w-full bg-gray-200 rounded-full flex-row overflow-hidden mb-3">
          <Animated.View className="h-full bg-emerald-500" style={animatedActiveStyle} />
          <Animated.View className="h-full bg-gray-400" style={animatedInactiveStyle} />
        </View>
        <View className="flex-row justify-between">
          <Text className="text-xs text-gray-500">Active: {activePercent}%</Text>
          <Text className="text-xs text-gray-500">Inactive: {inactivePercent}%</Text>
        </View>
      </Animated.View>

      {/* Industry Summary List */}
      <Animated.View entering={FadeInDown.delay(600).duration(500)} className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
        <Text className="text-sm font-bold text-gray-900 mb-3">All Industries Summary</Text>
        {industryData.map((ind, index) => (
          <Animated.View 
            key={ind.name} 
            entering={FadeInDown.delay(700 + (index * 50)).duration(400)}
            className="flex-row justify-between items-center py-2 border-b border-gray-100 last:border-0"
          >
            <Text className="text-sm font-medium text-gray-800 w-1/2" numberOfLines={1}>{ind.name}</Text>
            <View className="flex-row w-1/2 justify-between">
              <Text className="text-xs text-emerald-600 font-bold">{ind.active} Active</Text>
              <Text className="text-xs text-gray-500">{ind.share}%</Text>
            </View>
          </Animated.View>
        ))}
      </Animated.View>
    </ScrollView>
  );
}