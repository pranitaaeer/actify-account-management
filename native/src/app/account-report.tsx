import { ScrollView, View, Text } from 'react-native';
import { accounts, getStats, industries } from '@shared/data';

export default function AccountReport() {
  const stats = getStats();
  
  const industryData = industries.map((industry, index) => {
    const industryAccounts = accounts.filter((a) => a.industry === industry);
    const active = industryAccounts.filter((a) => a.status === 'Active').length;
    const inactive = industryAccounts.filter((a) => a.status === 'Inactive').length;
    const share = ((industryAccounts.length / stats.total) * 100).toFixed(1);
    return { name: industry, active, inactive, share };
  });

  const activePercent = Math.round((stats.active / stats.total) * 100);
  const inactivePercent = Math.round((stats.inactive / stats.total) * 100);

  return (
    <ScrollView className="flex-1 bg-gray-50 p-4">
      <Text className="text-sm text-gray-500 mb-4">Live analytics derived from your account dataset.</Text>

      {/* Stat Cards */}
      <View className="flex-row flex-wrap justify-between gap-y-4 mb-6">
        <View className="w-[48%] bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
          <Text className="text-[10px] font-bold text-gray-500 uppercase">Total</Text>
          <Text className="text-2xl font-bold text-gray-900 mt-1">{stats.total}</Text>
        </View>
        <View className="w-[48%] bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
          <Text className="text-[10px] font-bold text-gray-500 uppercase">Active</Text>
          <Text className="text-2xl font-bold text-emerald-600 mt-1">{stats.active}</Text>
        </View>
        <View className="w-[48%] bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
          <Text className="text-[10px] font-bold text-gray-500 uppercase">Inactive</Text>
          <Text className="text-2xl font-bold text-gray-400 mt-1">{stats.inactive}</Text>
        </View>
        <View className="w-[48%] bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
          <Text className="text-[10px] font-bold text-gray-500 uppercase">Industries</Text>
          <Text className="text-2xl font-bold text-violet-500 mt-1">{stats.industries}</Text>
        </View>
      </View>

      {/* Status Distribution */}
      <View className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm mb-6">
        <Text className="text-sm font-bold text-gray-900 mb-3">Status Distribution</Text>
        <View className="h-3 w-full bg-gray-200 rounded-full flex-row overflow-hidden mb-3">
          <View className="h-full bg-emerald-500" style={{ width: `${activePercent}%` }} />
          <View className="h-full bg-gray-400" style={{ width: `${inactivePercent}%` }} />
        </View>
        <View className="flex-row justify-between">
          <Text className="text-xs text-gray-500">Active: {activePercent}%</Text>
          <Text className="text-xs text-gray-500">Inactive: {inactivePercent}%</Text>
        </View>
      </View>

      {/* Industry Summary List */}
      <View className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
        <Text className="text-sm font-bold text-gray-900 mb-3">All Industries Summary</Text>
        {industryData.map((ind) => (
          <View key={ind.name} className="flex-row justify-between items-center py-2 border-b border-gray-100 last:border-0">
            <Text className="text-sm font-medium text-gray-800 w-1/2" numberOfLines={1}>{ind.name}</Text>
            <View className="flex-row w-1/2 justify-between">
              <Text className="text-xs text-emerald-600 font-bold">{ind.active} Active</Text>
              <Text className="text-xs text-gray-500">{ind.share}%</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}