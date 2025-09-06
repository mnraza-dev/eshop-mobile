import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';


export default function OnboardingScreen() {
    return (
        <View style={styles.container}>
            <Image
                style={styles.backgroundImage}
                source={require('../assets/images/onboarding/onboarding.jpg')}
            />
            {/* Overlay Gradient */}
            <LinearGradient
                colors={['transparent', 'rgba(0,0,0,0.8)']}
                style={styles.overlay}
            />
            {/* Content */}
            <View style={styles.contentContainer}>
                <Text style={{ color: '#fff', fontSize: 32, fontWeight: '600' }}>
                    Welcome to Eshop
                </Text>
                <Text style={{ color: '#888', textAlign: 'center', fontSize: 16, fontWeight: '400' }}>
                    Discover amazing products & shop with ease.
                </Text>

            </View>
        </View>
    );
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000', // fallback
    },
    backgroundImage: {
        width,
        height,
        position: 'absolute',
        resizeMode: 'center',
        top: 0,
        left: 0,
    },
    overlay: {
        position: 'absolute',
        height: height * 0.8,
        bottom: 0,
        left: 0,
        right: 0,
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingBottom: 50,
    },
});
