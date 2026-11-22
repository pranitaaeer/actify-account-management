import { useState } from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { X } from 'lucide-react-native';
import { industries } from '@shared/data';

interface CreateAccountModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CreateAccountModal({ isOpen, onClose }: CreateAccountModalProps) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    industry: '',
    status: '',
    remark: '',
  });

  const handleChange = (name: string, value: string) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = () => {
    alert('Account Created Successfully (Demo)');
    onClose();
    setTimeout(() => {
      setForm({ name: '', email: '', phone: '', website: '', industry: '', status: '', remark: '' });
    }, 300);
  };

  return (
    <Modal
      visible={isOpen}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1 justify-end bg-black/50"
      >
        <View className="bg-white rounded-t-3xl w-full max-h-[90%]">
          {/* Header */}
          <View className="flex-row items-start justify-between p-6 border-b border-gray-100">
            <View>
              <Text className="text-xl font-bold text-gray-900">Add New Account</Text>
              <Text className="text-sm text-gray-500 mt-1">Fill in the details to create a new account.</Text>
            </View>
            <TouchableOpacity onPress={onClose} className="p-1 bg-gray-100 rounded-full mt-1">
              <X size={20} color="#374151" />
            </TouchableOpacity>
          </View>

          {/* Form Body */}
          <ScrollView className="p-6">
            <View className="gap-y-4">
              {/* Account Name */}
              <View>
                <Text className="text-sm font-medium text-gray-700 mb-1.5">Account Name <Text className="text-red-500">*</Text></Text>
                <TextInput
                  value={form.name}
                  onChangeText={(v) => handleChange('name', v)}
                  placeholder="e.g. Deepu Maddheshiya"
                  placeholderTextColor="#9CA3AF"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-900 focus:border-gray-900"
                />
              </View>

              {/* Email */}
              <View>
                <Text className="text-sm font-medium text-gray-700 mb-1.5">Email <Text className="text-red-500">*</Text></Text>
                <TextInput
                  value={form.email}
                  onChangeText={(v) => handleChange('email', v)}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  placeholder="deepu18@example.com"
                  placeholderTextColor="#9CA3AF"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-900"
                />
              </View>

              {/* Phone */}
              <View>
                <Text className="text-sm font-medium text-gray-700 mb-1.5">Phone Number <Text className="text-red-500">*</Text></Text>
                <TextInput
                  value={form.phone}
                  onChangeText={(v) => handleChange('phone', v)}
                  keyboardType="phone-pad"
                  placeholder="+91-720-803-0455"
                  placeholderTextColor="#9CA3AF"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-900"
                />
              </View>

              {/* Website */}
              <View>
                <Text className="text-sm font-medium text-gray-700 mb-1.5">Website</Text>
                <TextInput
                  value={form.website}
                  onChangeText={(v) => handleChange('website', v)}
                  keyboardType="url"
                  autoCapitalize="none"
                  placeholder="https://example.com (optional)"
                  placeholderTextColor="#9CA3AF"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-900"
                />
              </View>

              {/* Industry Dropdown (Simple Representation for Native) */}
              <View>
                <Text className="text-sm font-medium text-gray-700 mb-1.5">Industry <Text className="text-red-500">*</Text></Text>
                <View className="border border-gray-300 rounded-lg overflow-hidden">
                  <ScrollView horizontal className="p-1">
                    {industries.map((ind) => (
                      <TouchableOpacity 
                        key={ind} 
                        onPress={() => handleChange('industry', ind)}
                        className={`px-4 py-2 rounded-md mr-2 ${form.industry === ind ? 'bg-gray-900' : 'bg-gray-100'}`}
                      >
                        <Text className={`text-xs font-medium ${form.industry === ind ? 'text-white' : 'text-gray-700'}`}>{ind}</Text>
                      </TouchableOpacity>
                    ))}
                  </ScrollView>
                </View>
              </View>

              {/* Status */}
              <View>
                <Text className="text-sm font-medium text-gray-700 mb-1.5">Account Status <Text className="text-red-500">*</Text></Text>
                <View className="flex-row gap-x-2">
                  {['Active', 'Inactive'].map((status) => (
                    <TouchableOpacity 
                      key={status} 
                      onPress={() => handleChange('status', status)}
                      className={`flex-1 py-2.5 rounded-lg items-center border ${form.status === status ? 'bg-gray-900 border-gray-900' : 'bg-white border-gray-300'}`}
                    >
                      <Text className={`text-sm font-medium ${form.status === status ? 'text-white' : 'text-gray-700'}`}>{status}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>

              {/* Remark */}
              <View>
                <Text className="text-sm font-medium text-gray-700 mb-1.5">Remark</Text>
                <TextInput
                  value={form.remark}
                  onChangeText={(v) => handleChange('remark', v)}
                  placeholder="Optional notes about this account..."
                  placeholderTextColor="#9CA3AF"
                  multiline
                  numberOfLines={3}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-900 h-24"
                  textAlignVertical="top"
                />
              </View>
            </View>

            {/* Footer Buttons */}
            <View className="flex-row gap-x-3 mt-8 mb-4">
              <TouchableOpacity
                onPress={onClose}
                className="flex-1 py-3 bg-white border border-gray-300 rounded-lg items-center"
              >
                <Text className="text-sm font-medium text-gray-700">Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleSubmit}
                className="flex-1 py-3 bg-gray-900 rounded-lg items-center"
              >
                <Text className="text-sm font-medium text-white">Create Account</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}