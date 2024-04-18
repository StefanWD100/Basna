
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {Link} from 'expo-router';

const index = () =>{

    return(

     <View style={styles.container}>
           <Text style={styles.title} >BASNAVERZUM</Text>
           <Text style={styles.txt} >Generiši priču:</Text>
           
          
           <Link  href="/entity1" style={styles.emoji}>🐷</Link>

           <Link href="/entity2" style={styles.emoji}>🦊</Link>

           <Link  href="/entity3" style={styles.emoji}>🐤</Link>
         </View>
    )

 

}
export default index;

const styles = StyleSheet.create({

 
  container: {
    flex: 1,
    backgroundColor: '#d79cdb',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 50,
    top:'-10%',
    
  },
  txt: {

    fontSize: 25,
    
  },
  emoji: {

    fontSize: 50,
    borderWidth: 2,
    borderRadius: 15,
    borderColor: "black",
    marginTop: 5,
    
  },
    
});