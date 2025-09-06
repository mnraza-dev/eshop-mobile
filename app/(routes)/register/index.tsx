import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function RegisterScreen() {
  return (
    <View>
      <Text style={styles.title}>Register</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
})