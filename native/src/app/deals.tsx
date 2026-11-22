import { View, Text, TouchableOpacity } from 'react-native';
import { deals } from '@shared/data';
import Animated, { FadeInDown } from 'react-native-reanimated';

export default function Deals() {
  return (
    <View className="flex-1 bg-gray-50">
      <Animated.FlatList
        data={deals}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ padding: 16, paddingBottom: 40 }}
        renderItem={({ item, index }) => (
          <Animated.View 
            entering={FadeInDown.delay(index < 10 ? index * 50 : 0).duration(400)}
          >
            <TouchableOpacity className="bg-white rounded-xl border border-gray-200 p-4 mb-3 shadow-sm active:bg-gray-50 transition-colors">
              <View className="flex-row items-center justify-between mb-1">
                <Text className="text-base font-bold text-gray-900 flex-1 mr-2" numberOfLines={1}>
                  {item.name}
                </Text>
                <Text className="text-lg font-bold text-emerald-600">
                  ${item.amount.toLocaleString()}
                </Text>
              </View>
              
              <Text className="text-sm text-gray-600 mb-3">{item.account}</Text>
              
              <View className="flex-row items-center justify-between border-t border-gray-100 pt-3">
                <View className={`px-2.5 py-1 rounded-full ${
                  item.stage === 'Negotiation' ? 'bg-amber-100' :
                  item.stage === 'Proposal' ? 'bg-blue-100' :
                  item.stage === 'Closed Won' ? 'bg-emerald-100' : 'bg-gray-100'
                }`}>
                  <Text className={`text-[10px] font-bold uppercase tracking-wider ${
                    item.stage === 'Negotiation' ? 'text-amber-700' :
                    item.stage === 'Proposal' ? 'text-blue-700' :
                    item.stage === 'Closed Won' ? 'text-emerald-700' : 'text-gray-700'
                  }`}>
                    {item.stage}
                  </Text>
                </View>
                <Text className="text-xs text-gray-400">Close: {item.closeDate}</Text>
              </View>
            </TouchableOpacity>
          </Animated.View>
        )}
      />
    </View>
  );
}