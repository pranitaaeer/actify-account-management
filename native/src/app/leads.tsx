import { View, Text, FlatList } from 'react-native';
import { leads } from '@shared/data';

export default function Leads() {
  return (
    <View className="flex-1 bg-gray-50">
      <FlatList
        data={leads}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ padding: 16, paddingBottom: 40 }}
        renderItem={({ item }) => (
          <View className="bg-white rounded-xl border border-gray-200 p-4 mb-3 shadow-sm">
            <View className="flex-row items-center justify-between mb-2">
              <Text className="text-base font-bold text-gray-900">{item.name}</Text>
              <Text className="text-sm font-bold text-gray-900">${item.value.toLocaleString()}</Text>
            </View>
            
            <View className="flex-row items-center justify-between mt-2">
              <Text className="text-xs text-gray-500">Source: {item.source}</Text>
              
              {/* Status Badge */}
              <View className={`px-2.5 py-1 rounded-full ${
                item.status === 'New' ? 'bg-blue-100' :
                item.status === 'Contacted' ? 'bg-yellow-100' :
                item.status === 'Qualified' ? 'bg-green-100' : 'bg-red-100'
              }`}>
                <Text className={`text-[10px] font-bold ${
                  item.status === 'New' ? 'text-blue-700' :
                  item.status === 'Contacted' ? 'text-yellow-700' :
                  item.status === 'Qualified' ? 'text-green-700' : 'text-red-700'
                }`}>
                  {item.status}
                </Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
}