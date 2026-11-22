import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { User, Mail, Phone, MapPin } from 'lucide-react-native';

export default function Profile() {
  return (
    <ScrollView className="flex-1 bg-gray-50 p-4">
      {/* Profile Header */}
      <View className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm items-center mb-6">
        <View className="w-20 h-20 rounded-full bg-gray-900 items-center justify-center mb-3">
          <Text className="text-3xl font-bold text-white">D</Text>
        </View>
        <Text className="text-xl font-bold text-gray-900">Deepu Maddheshiya</Text>
        <Text className="text-sm text-gray-500 mb-4">admin@actify.io</Text>
        
        <TouchableOpacity className="bg-gray-100 px-6 py-2 rounded-lg">
          <Text className="text-sm font-medium text-gray-900">Edit Profile</Text>
        </TouchableOpacity>
      </View>

      {/* Personal Info */}
      <View className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm mb-6">
        <Text className="text-base font-bold text-gray-900 mb-4">Personal Information</Text>
        
        <View className="flex-row items-center gap-3 mb-4">
          <User size={18} color="#6B7280" />
          <View>
            <Text className="text-xs text-gray-500">Full Name</Text>
            <Text className="text-sm font-medium text-gray-900">Deepu Maddheshiya</Text>
          </View>
        </View>
        
        <View className="flex-row items-center gap-3 mb-4">
          <Mail size={18} color="#6B7280" />
          <View>
            <Text className="text-xs text-gray-500">Email</Text>
            <Text className="text-sm font-medium text-gray-900">admin@actify.io</Text>
          </View>
        </View>
        
        <View className="flex-row items-center gap-3 mb-4">
          <Phone size={18} color="#6B7280" />
          <View>
            <Text className="text-xs text-gray-500">Phone</Text>
            <Text className="text-sm font-medium text-gray-900">+91 7208030455</Text>
          </View>
        </View>
        
        <View className="flex-row items-center gap-3">
          <MapPin size={18} color="#6B7280" />
          <View>
            <Text className="text-xs text-gray-500">Location</Text>
            <Text className="text-sm font-medium text-gray-900">Mumbai, India</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}