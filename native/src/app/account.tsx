import { useState } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { accounts } from '@shared/data';
import { Search, Plus } from 'lucide-react-native';
import CreateAccountModal from '../components/CreateAccountModal'; 

export default function Accounts() {
  const [search, setSearch] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal State

  const filteredAccounts = accounts.filter((acc) => 
    acc.name.toLowerCase().includes(search.toLowerCase()) || 
    acc.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View className="flex-1 bg-gray-50">
      {/* Search Bar */}
      <View className="p-4 bg-white border-b border-gray-200 flex-row items-center gap-3">
        <View className="flex-1 flex-row items-center bg-gray-100 rounded-lg px-3 py-2">
          <Search size={18} color="#6B7280" />
          <TextInput
            placeholder="Search accounts..."
            value={search}
            onChangeText={setSearch}
            className="flex-1 ml-2 text-sm text-gray-900"
            placeholderTextColor="#9CA3AF"
          />
        </View>
        <TouchableOpacity 
          onPress={() => setIsModalOpen(true)} 
          className="bg-black p-2.5 rounded-lg shadow-sm"
        >
          <Plus size={20} color="white" />
        </TouchableOpacity>
      </View>

      {/* List */}
      <FlatList
        data={filteredAccounts}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ padding: 16, paddingBottom: 40 }}
        renderItem={({ item }) => (
          <View className="bg-white rounded-xl border border-gray-200 p-4 mb-3 shadow-sm">
            <View className="flex-row items-center justify-between mb-2">
              <Text className="text-base font-bold text-gray-900">{item.name}</Text>
              <View className={`px-2 py-1 rounded-full ${item.status === 'Active' ? 'bg-green-100' : 'bg-gray-100'}`}>
                <Text className={`text-[10px] font-bold ${item.status === 'Active' ? 'text-green-700' : 'text-gray-600'}`}>
                  {item.status}
                </Text>
              </View>
            </View>
            <Text className="text-sm text-blue-600 mb-1">{item.email}</Text>
            <Text className="text-xs text-gray-500 font-medium">{item.industry}</Text>
          </View>
        )}
      />

      <CreateAccountModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </View>
  );
}