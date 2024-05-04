
import { useState,useEffect } from 'react';
import { StyleSheet, Text, View ,ScrollView} from 'react-native';
import React from 'react';
import { chapters } from './Prasac';

const entity1 = () =>{
    
    //stry gen
    const [displayStory,setStory] = useState('');


    useEffect(() =>{
        const seeds = [];
        chapters.forEach(element => {
            
            if(element.seed.length === 3){
                
                seeds.push(element.seed);
            }
            
        });

        let story = '';
        let seed = seeds[Math.floor(Math.random()*seeds.length)];
        let seedEnd = 1;
        
        
        
        
        const chapterRandomizer = (ch) => {
            
            ch.forEach(element => {
                
            let rand = Math.floor(Math.random()*element.length);
            story +=element[rand];
           
        });

        
    }
        
    const seedCheker = (ch) =>{
        ch.forEach(element => {
            
            if(element.seed === seed.substring(0,seedEnd)){
                chapterRandomizer(element.ch);
                
            }
            
        })
        
        seedEnd++;
        
    }
    
    for(let i =0;i<seed.length;i++){
        seedCheker(chapters);
        
    }
    
    setStory(story);
    
},[]);

return(
    
    <View style={styles.container}>
        <ScrollView> 
      <Text   style={styles.txt}>{displayStory}</Text>

        </ScrollView>
    </View>
    )
    
    
    
}
export default entity1;

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        backgroundColor: '#eb818d',
        alignItems: 'center',
        justifyContent: 'center',
      },
    txt: {
        
        fontSize: 19,
        textAlign: 'center',

    },


});


   
        
    
    
    
    
        
    
            
            
    
    
    

