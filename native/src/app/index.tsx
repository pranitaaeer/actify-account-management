import { useEffect } from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { accounts, getStats, industries } from '@shared/data';
import { ArrowRight, Users, TrendingUp, Handshake } from 'lucide-react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, withDelay, FadeInDown, FadeInUp } from 'react-native-reanimated';

export default function Dashboard() {
  const router = useRouter();
  const stats = getStats();
  const recent = accounts.slice(0, 5);
  
  const industryCounts = industries.map((ind) => ({
    name: ind,
    count: accounts.filter((a) => a.industry === ind).length,
  }));

  return (
    <ScrollView className="flex-1 bg-gray-50 p-4">
      {/* Header */}
      <Animated.View entering={FadeInUp.duration(500)} className="mb-6">
        <Text className="text-2xl font-bold text-gray-900">Dashboard</Text>
        <Text className="text-sm text-gray-500 mt-1">Welcome back! Here's your business overview.</Text>
      </Animated.View>

      {/* Stat Cards */}
      <View className="flex-row flex-wrap justify-between gap-y-4">
        <Animated.View entering={FadeInDown.delay(100).duration(500)} className="w-[48%] bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
          <Text className="text-[10px] font-bold text-gray-500 uppercase">Total Accounts</Text>
          <Text className="text-2xl font-bold text-gray-900 mt-1">{stats.total}</Text>
          <Text className="text-[10px] text-gray-400 mt-1">All records</Text>
        </Animated.View>
        
        <Animated.View entering={FadeInDown.delay(200).duration(500)} className="w-[48%] bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
          <Text className="text-[10px] font-bold text-gray-500 uppercase">Active</Text>
          <Text className="text-2xl font-bold text-gray-900 mt-1">{stats.active}</Text>
          <Text className="text-[10px] text-gray-400 mt-1">{Math.round((stats.active / stats.total) * 100)}% of total</Text>
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(300).duration(500)} className="w-[48%] bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
          <Text className="text-[10px] font-bold text-gray-500 uppercase">Inactive</Text>
          <Text className="text-2xl font-bold text-gray-900 mt-1">{stats.inactive}</Text>
          <Text className="text-[10px] text-gray-400 mt-1">Needs re-engagement</Text>
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(400).duration(500)} className="w-[48%] bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
          <Text className="text-[10px] font-bold text-gray-500 uppercase">Industries</Text>
          <Text className="text-2xl font-bold text-gray-900 mt-1">{stats.industries}</Text>
          <Text className="text-[10px] text-gray-400 mt-1">Sectors covered</Text>
        </Animated.View>
      </View>

      {/* Recent Accounts */}
      <Animated.View entering={FadeInDown.delay(500).duration(500)} className="bg-white rounded-xl border border-gray-200 p-4 mt-6 shadow-sm">
        <View className="flex-row items-center justify-between mb-3">
          <Text className="text-base font-semibold text-gray-900">Recent Accounts</Text>
          <TouchableOpacity onPress={() => router.push('/accounts' as never)} className="flex-row items-center gap-1">
            <Text className="text-sm text-blue-600 font-medium">View all</Text>
            <ArrowRight size={14} color="#2563EB" />
          </TouchableOpacity>
        </View>
        
        {recent.map((acc) => (
          <View key={acc.id} className="flex-row items-center gap-3 py-3 border-b border-gray-100 last:border-0">
            <View className="w-8 h-8 rounded-full bg-gray-100 items-center justify-center">
              <Text className="text-xs font-bold text-gray-700">{acc.name.charAt(0)}</Text>
            </View>
            <View className="flex-1">
              <Text className="text-sm font-medium text-gray-900">{acc.name}</Text>
              <Text className="text-[10px] text-gray-500">{acc.email}</Text>
            </View>
            <View className={`px-2 py-1 rounded-full ${acc.status === 'Active' ? 'bg-green-100' : 'bg-gray-100'}`}>
              <Text className={`text-[10px] font-medium ${acc.status === 'Active' ? 'text-green-700' : 'text-gray-600'}`}>
                {acc.status}
              </Text>
            </View>
          </View>
        ))}
      </Animated.View>

      {/* Top Industries */}
      <Animated.View entering={FadeInDown.delay(600).duration(500)} className="bg-white rounded-xl border border-gray-200 p-4 mt-6 shadow-sm">
        <Text className="text-base font-semibold text-gray-900 mb-4">Top Industries</Text>
        <View className="space-y-3">
          {industryCounts.slice(0, 5).map((ind, index) => {
            const percent = Math.round((ind.count / stats.total) * 100);
            // Animate Progress Bar
            const progress = useSharedValue(0);
            
            useEffect(() => {
              progress.value = withDelay(800 + (index * 100), withTiming(percent, { duration: 1000 }));
            }, [percent]);

            const animatedBarStyle = useAnimatedStyle(() => ({
              width: `${progress.value}%`,
            }));

            return (
              <View key={ind.name} className="flex-row items-center justify-between py-1">
                <Text className="text-sm text-gray-700 flex-1 pr-2" numberOfLines={1}>{ind.name}</Text>
                <View className="flex-row items-center gap-3 w-1/2 justify-end">
                  <View className="w-24 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <Animated.View className="h-full bg-blue-500 rounded-full" style={animatedBarStyle} />
                  </View>
                  <Text className="text-xs text-gray-500 w-16 text-right font-medium">{ind.count} acc</Text>
                </View>
              </View>
            );
          })}
        </View>
      </Animated.View>

      {/* Shortcut Cards (Contacts, Leads, Deals) */}
      <Animated.View entering={FadeInDown.delay(700).duration(500)} className="flex-row justify-between mt-6 gap-x-2 mb-6">
        <TouchableOpacity onPress={() => router.push('/contacts')} className="flex-1 bg-white rounded-xl border border-gray-200 p-4 shadow-sm items-center">
          <Users size={24} color="#374151" className="mb-2" />
          <Text className="text-sm font-semibold text-gray-900">Contacts</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/leads')} className="flex-1 bg-white rounded-xl border border-gray-200 p-4 shadow-sm items-center">
          <TrendingUp size={24} color="#374151" className="mb-2" />
          <Text className="text-sm font-semibold text-gray-900">Leads</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/deals')} className="flex-1 bg-white rounded-xl border border-gray-200 p-4 shadow-sm items-center">
          <Handshake size={24} color="#374151" className="mb-2" />
          <Text className="text-sm font-semibold text-gray-900">Deals</Text>
        </TouchableOpacity>
      </Animated.View>
    </ScrollView>
  );
}