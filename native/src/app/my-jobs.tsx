import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { myJobs } from '@shared/data';
import { Briefcase, Building2, Calendar, ArrowRight } from 'lucide-react-native';

export default function MyJobs() {
  return (
    <View className="flex-1 bg-gray-50">
      <FlatList
        data={myJobs}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ padding: 16, paddingBottom: 40 }}
        renderItem={({ item }) => (
          <TouchableOpacity className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm mb-4 flex-row items-center gap-4">
            <View className="w-12 h-12 rounded-lg bg-gray-50 border border-gray-100 items-center justify-center">
              <Briefcase size={20} color="#4B5563" />
            </View>
            
            <View className="flex-1">
              <View className="flex-row justify-between items-start mb-1">
                <Text className="text-base font-bold text-gray-900 flex-1 mr-2" numberOfLines={1}>{item.title}</Text>
                <View className={`px-2 py-1 rounded-full ${item.status === 'Active' ? 'bg-emerald-100' : 'bg-gray-100'}`}>
                  <Text className={`text-[10px] font-bold ${item.status === 'Active' ? 'text-emerald-700' : 'text-gray-600'}`}>
                    {item.status}
                  </Text>
                </View>
              </View>
              
              <View className="flex-row items-center gap-3 mt-1">
                <View className="flex-row items-center gap-1">
                  <Building2 size={12} color="#6B7280" />
                  <Text className="text-xs text-gray-600">{item.company}</Text>
                </View>
                <View className="flex-row items-center gap-1">
                  <Calendar size={12} color="#6B7280" />
                  <Text className="text-xs text-gray-600">{item.type}</Text>
                </View>
              </View>
            </View>
            
            <ArrowRight size={16} color="#D1D5DB" />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}