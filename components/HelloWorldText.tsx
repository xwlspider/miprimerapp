import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const HelloWorldText = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hola Mundo</Text>
    </View>
  )
}
const styles = StyleSheet.create(
    { 
        container:{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#7FD3F0',
            maxHeight: 64, 
        },
        text:{ 
            fontSize: 20,
            fontWeight: 'bold',
            color: '#B1A0F2',
     

        }, 
    }
    
) 


export default HelloWorldText