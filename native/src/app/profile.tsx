import { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { Save, GraduationCap, Briefcase, Plus } from 'lucide-react-native';
import Animated, { FadeInDown, FadeInUp, FadeInRight } from 'react-native-reanimated';

export default function Profile() {
  const [activeTab, setActiveTab] = useState('Personal');
  const tabs = ['Personal', 'Education', 'Experience', 'Other'];

  return (
    <ScrollView className="flex-1 bg-gray-50">
      {/* Tabs ScrollView with Animated Underline */}
      <View className="bg-white border-b border-gray-200">
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="px-4 pt-2">
          {tabs.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <TouchableOpacity
                key={tab}
                onPress={() => setActiveTab(tab)}
                className="mr-6 pb-3 relative"
              >
                <Text className={`text-sm font-medium ${
                  isActive ? 'text-gray-900' : 'text-gray-500'
                }`}>{tab}</Text>
                {/* Animated Underline */}
                {isActive && (
                  <Animated.View 
                    entering={FadeInDown.duration(300)}
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900"
                  />
                )}
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>

      <View className="p-4">
        {/* Animated Tab Content Area */}
        {/* Key prop change hone se naya content smooth animate hoga */}
        <Animated.View 
          key={activeTab} 
          entering={FadeInRight.duration(300)}
        >
          {/* ========================================== */}
          {/* 1. PERSONAL TAB */}
          {/* ========================================== */}
          {activeTab === 'Personal' && (
            <View className="space-y-4">
              <View className="bg-gray-900 px-5 py-6 rounded-xl mb-4">
                <Text className="text-lg font-bold text-white">Personal Details</Text>
                <Text className="text-sm text-gray-300 mt-1">Make changes to your Profile Account here.</Text>
              </View>

              <View className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm space-y-4">
                <View>
                  <Text className="text-sm font-medium text-gray-700 mb-1.5">First Name <Text className="text-red-500">*</Text></Text>
                  <TextInput placeholder="First name" placeholderTextColor="#9CA3AF" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-900 focus:border-gray-900" />
                </View>
                <View>
                  <Text className="text-sm font-medium text-gray-700 mb-1.5">Middle Name</Text>
                  <TextInput placeholder="Middle name" placeholderTextColor="#9CA3AF" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-900 focus:border-gray-900" />
                </View>
                <View>
                  <Text className="text-sm font-medium text-gray-700 mb-1.5">Last Name <Text className="text-red-500">*</Text></Text>
                  <TextInput placeholder="Last name" placeholderTextColor="#9CA3AF" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-900 focus:border-gray-900" />
                </View>
                
                <View>
                  <Text className="text-sm font-medium text-gray-700 mb-1.5">Email <Text className="text-red-500">*</Text></Text>
                  <TextInput defaultValue="admin@gmail.com" editable={false} className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm bg-gray-50 text-gray-500" />
                </View>
                
                <View>
                  <Text className="text-sm font-medium text-gray-700 mb-1.5">Phone <Text className="text-red-500">*</Text></Text>
                  <TextInput defaultValue="7108230454" keyboardType="phone-pad" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-900 focus:border-gray-900" />
                </View>

                <View>
                  <Text className="text-sm font-medium text-gray-700 mb-1.5">Address <Text className="text-red-500">*</Text></Text>
                  <TextInput multiline numberOfLines={3} placeholder="Type your address here." placeholderTextColor="#9CA3AF" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-900 h-20 focus:border-gray-900" textAlignVertical="top" />
                </View>

                <View>
                  <Text className="text-sm font-medium text-gray-700 mb-1.5">Pin Code <Text className="text-red-500">*</Text></Text>
                  <TextInput placeholder="Pin code" keyboardType="number-pad" placeholderTextColor="#9CA3AF" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-900 focus:border-gray-900" />
                </View>

                <View>
                  <Text className="text-sm font-medium text-gray-700 mb-1.5">Country <Text className="text-red-500">*</Text></Text>
                  <View className="border border-gray-300 rounded-lg px-3 py-2.5">
                    <Text className="text-sm text-gray-700">India</Text>
                  </View>
                </View>

                <View>
                  <Text className="text-sm font-medium text-gray-700 mb-1.5">State <Text className="text-red-500">*</Text></Text>
                  <View className="border border-gray-300 rounded-lg px-3 py-2.5">
                    <Text className="text-sm text-gray-700">Maharashtra</Text>
                  </View>
                </View>

                <View>
                  <Text className="text-sm font-medium text-gray-700 mb-1.5">City <Text className="text-red-500">*</Text></Text>
                  <TextInput placeholder="City" placeholderTextColor="#9CA3AF" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-900 focus:border-gray-900" />
                </View>

                <TouchableOpacity className="flex-row items-center justify-center gap-2 bg-gray-900 px-5 py-3 rounded-lg mt-4 active:scale-95 transition-transform">
                  <Save size={18} color="white" />
                  <Text className="text-sm font-bold text-white">Save Changes</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}

          {/* ========================================== */}
          {/* 2. EDUCATION TAB */}
          {/* ========================================== */}
          {activeTab === 'Education' && (
            <View>
              <View className="flex-row items-center justify-between pb-4 mb-4 border-b border-gray-200">
                <View>
                  <Text className="text-lg font-bold text-gray-900">Education</Text>
                  <Text className="text-sm text-gray-500">Add your educational qualifications.</Text>
                </View>
                <TouchableOpacity className="flex-row items-center gap-1 bg-gray-900 px-3 py-2 rounded-lg active:scale-95 transition-transform">
                  <Plus size={16} color="white" />
                  <Text className="text-sm font-medium text-white">Add</Text>
                </TouchableOpacity>
              </View>
              
              <View className="bg-white rounded-xl border border-gray-200 p-8 items-center justify-center">
                <GraduationCap size={48} color="#D1D5DB" />
                <Text className="text-base font-semibold text-gray-900 mt-3">No education records yet</Text>
                <Text className="text-sm text-gray-500 mt-1 text-center">Click "Add" to add your first record.</Text>
              </View>
            </View>
          )}

          {/* ========================================== */}
          {/* 3. EXPERIENCE TAB */}
          {/* ========================================== */}
          {activeTab === 'Experience' && (
            <View>
              <View className="flex-row items-center justify-between pb-4 mb-4 border-b border-gray-200">
                <View>
                  <Text className="text-lg font-bold text-gray-900">Experience</Text>
                  <Text className="text-sm text-gray-500">Add your work experience records.</Text>
                </View>
                <TouchableOpacity className="flex-row items-center gap-1 bg-gray-900 px-3 py-2 rounded-lg active:scale-95 transition-transform">
                  <Plus size={16} color="white" />
                  <Text className="text-sm font-medium text-white">Add</Text>
                </TouchableOpacity>
              </View>
              
              <View className="bg-white rounded-xl border border-gray-200 p-8 items-center justify-center">
                <Briefcase size={48} color="#D1D5DB" />
                <Text className="text-base font-semibold text-gray-900 mt-3">No experience records yet</Text>
                <Text className="text-sm text-gray-500 mt-1 text-center">Click "Add" to add your first role.</Text>
              </View>
            </View>
          )}

          {/* ========================================== */}
          {/* 4. OTHER TAB */}
          {/* ========================================== */}
          {activeTab === 'Other' && (
            <View>
              <View className="bg-gray-100 px-5 py-4 rounded-t-xl border-b border-gray-200 mb-4">
                <Text className="text-base font-bold text-gray-900">Other Details</Text>
                <Text className="text-sm text-gray-500 mt-1">Skills, languages, certifications, and links.</Text>
              </View>
              
              <View className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm space-y-4">
                <View>
                  <Text className="text-sm font-medium text-gray-700 mb-1.5">Skills</Text>
                  <TextInput placeholder="e.g. React, Python..." placeholderTextColor="#9CA3AF" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-900 focus:border-gray-900" />
                </View>
                <View>
                  <Text className="text-sm font-medium text-gray-700 mb-1.5">Languages</Text>
                  <TextInput placeholder="e.g. English, Hindi..." placeholderTextColor="#9CA3AF" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-900 focus:border-gray-900" />
                </View>
                
                <View>
                  <Text className="text-sm font-medium text-gray-700 mb-1.5">Certifications</Text>
                  <TextInput multiline numberOfLines={2} placeholder="List your certifications..." placeholderTextColor="#9CA3AF" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-900 h-16 focus:border-gray-900" textAlignVertical="top" />
                </View>

                <View>
                  <Text className="text-sm font-medium text-gray-700 mb-1.5">LinkedIn Profile</Text>
                  <TextInput placeholder="https://linkedin.com/in/..." placeholderTextColor="#9CA3AF" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-900 focus:border-gray-900" />
                </View>
                <View>
                  <Text className="text-sm font-medium text-gray-700 mb-1.5">Portfolio Website</Text>
                  <TextInput placeholder="https://yourportfolio.com" placeholderTextColor="#9CA3AF" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-900 focus:border-gray-900" />
                </View>
                <View>
                  <Text className="text-sm font-medium text-gray-700 mb-1.5">GitHub Profile</Text>
                  <TextInput placeholder="https://github.com/..." placeholderTextColor="#9CA3AF" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-900 focus:border-gray-900" />
                </View>

                <View>
                  <Text className="text-sm font-medium text-gray-700 mb-1.5">Additional Information</Text>
                  <TextInput multiline numberOfLines={3} placeholder="Anything else relevant..." placeholderTextColor="#9CA3AF" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-900 h-20 focus:border-gray-900" textAlignVertical="top" />
                </View>

                <TouchableOpacity className="flex-row items-center justify-center gap-2 bg-gray-900 px-5 py-3 rounded-lg mt-4 active:scale-95 transition-transform">
                  <Save size={18} color="white" />
                  <Text className="text-sm font-bold text-white">Save Changes</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </Animated.View>
      </View>
    </ScrollView>
  );
}