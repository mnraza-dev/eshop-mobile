import React from 'react'
import { KeyboardAvoidingView, Platform, ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function LoginScreen() {
    return (
        <SafeAreaView className='flex-1 bg-white justify-center items-center'>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} className='flex-1 w-full justify-center items-center'>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    className='flex-1 px-6'>

                    {/* Header */}
                    <View className="mt-16 mb-8 ">
                        <Text className='text-3xl font-poppins '>Welcome Back </Text>

                    </View>
                    <View className="flex-1 items-center justify-center bg-white">
                        <Text className="text-xl font-bold text-blue-500">
                            Welcome to Nativewind!
                        </Text>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}
