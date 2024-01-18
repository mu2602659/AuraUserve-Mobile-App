import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { themeColors } from '../theme'
import { useNavigation } from '@react-navigation/native'

export default function ServiceProviderScreen() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: themeColors.bg }}>
            <ImageBackground
                source={require("../assets/images/background.jpg")} // Specify your background image path
                style={{ flex: 1, resizeMode: 'cover' }}
            >
                <View style={{ flex: 1, justifyContent: 'space-around', marginVertical: 4 }}>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 36, textAlign: 'center' }}>
                        Welcome Service Provider!
                    </Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <Image source={require("../assets/images/welcome.png")} style={{ width: 200, height: 200 }} />
                    </View>
                    <View style={{ spaceY: 4 }}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('SignUp')}
                            style={{ paddingVertical: 15, backgroundColor: '#FFD700', marginHorizontal: 20, marginVertical: 8, borderRadius: 10 }}
                        >
                            <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center', color: '#555555' }}>
                                Become Service Provider
                            </Text>
                        </TouchableOpacity>
                        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                            <Text style={{ color: 'white', fontWeight: 'bold' }}>Already a Service Provider?</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                                <Text style={{ fontWeight: 'bold', color: '#FFD700' }}> Log In</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}
