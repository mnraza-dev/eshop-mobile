import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
export default function OnboardingScreen() {
    return (
        <View style={styles.container}>
            <Image
                style={styles.backgroundImage}
                source={require('../assets/images/onboarding/onboarding.jpg')}
            />
            <LinearGradient
                colors={['transparent', 'rgba(0,0,0,0.8)']}
                style={styles.overlay}
            />
            {/* Content */}
            <View style={styles.contentContainer}>
                <Text style={styles.HeadingText}>
                    Welcome to Eshop
                </Text>
                <Text style={styles.SubheadingText}>
                    Discover amazing products & shop with ease.
                </Text>
                <TouchableOpacity onPress={() => { /* Handle Get Started action */ }}>
                    <LinearGradient
                        colors={['#ff7e5f', '#feb47b']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={styles.button}
                    >
                    <Text style={styles.buttonText}>Get Started</Text>
                    </LinearGradient>
                </TouchableOpacity>
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
        backgroundColor: '#000',
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
        width,
    },
    HeadingText: {
        color: '#fff',
        fontSize: 32,
        fontWeight: '600'
    },
    SubheadingText: {
        color: '#888',
        fontSize: 18,
        marginTop: 10,
        textAlign: 'center'
    },
    button: {
        width: width - 60,
        marginTop: 20,
        paddingVertical: 16,
        paddingHorizontal: width * 0.2,
        borderRadius: 16
    },
    buttonText: {
        color: '#000',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '600'
    }
});
