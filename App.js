import React, { useState } from "react";
import { View,StyleSheet,Text,TouchableHighlight, FlatList, TextInput, ScrollView } from "react-native";

import {getallBooks,addBook,deleteallBook} from './realm'

function App(){
  const[contacts,setContacts]=useState(getallBooks)
  const [counter,setCounter]=useState(contacts.length+1)

  const [name,setName]=useState('')
  const [details,setDetails]=useState('')
  const [auther,setAuther]=useState('')

   
  
  return(
    <ScrollView>
      <View style={{padding:3,alignItems:'center'}}>
       
        <TouchableHighlight style={{ height: 35, width: 100, backgroundColor: 'black',borderRadius:2,marginTop:10 }}
        onPress={()=>{
          addBook(counter,name,details,auther)
          setContacts(getallBooks)
          setCounter(counter+1)

        }}>
        <Text style={{ color: 'white', fontWeight: 'bold', marginTop: 7, marginLeft: 25 }}>Display</Text>

      </TouchableHighlight>

      
      <TouchableHighlight style={{ height: 35, width: 100, backgroundColor: 'black' ,marginTop:20,borderRadius:2}}
      onPress={()=>{
        deleteallBook()
        setContacts(getallBooks)
        setCounter(1)
      }}>
        <Text style={{ color: 'white', fontWeight: 'bold', marginTop: 7, marginLeft: 30 }}>Delete</Text>

      </TouchableHighlight>
      <TextInput style={{height:35,width:200,borderRadius:5,borderWidth:2,borderColor:'gray',marginTop:20}}
      placeholder='enter book name'
      placeholderTextColor={'black'}
      onChangeText={name=>setName(name)}>

      </TextInput>

      <TextInput style={{height:35,width:200,borderRadius:5,borderWidth:2,borderColor:'gray',marginTop:20}}
      placeholder='enter book details'
      placeholderTextColor={'black'}
      onChangeText={details=>setDetails(details)}>

      </TextInput>

      <TextInput style={{height:35,width:200,borderRadius:5,borderWidth:2,borderColor:'gray',marginTop:20}}
      placeholder='enter auther name'
      placeholderTextColor={'black'}
      onChangeText={auther=>setAuther(auther)}>

      </TextInput>

      <View style={{alignItems:'center'}}>
        <Text style={{fontSize:24,color:'black',marginTop:30,fontWeight:'bold'}}>Book Store</Text>
        <FlatList
        data={contacts}
         keyExtractor={item=>item.recordid}
         
         renderItem={({item})=>{
          return(
          <View style={{justifyContent:'space-between',marginTop:5}}>
              <View style={{flexDirection:'row'}}>
                <Text style={{color:'blue',fontWeight:'bold',fontSize:24,color:'black'}}>{item.recordid}.</Text>
                <Text style={{color:'orange',fontWeight:'bold',fontSize:24}}> {item.bookname}</Text>
               
               </View>
         
               <Text style={{color:'black',fontWeight:'bold'}}>*details: {item.details}</Text>
               <Text style={{color:'black',fontWeight:'bold'}}>*Auther name: {item.authername}</Text>
         
              </View>
              )
           }}/>
        

      </View>




        

      </View>
      </ScrollView>
  )
}
const styles= StyleSheet.create({

  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  }
})
export default App