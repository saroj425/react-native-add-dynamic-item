import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Button, FlatList, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
//import { BleManager } from 'react-native-ble-plx';
//import { useState,useEffect } from 'react';

//const bleManager = new BleManager();
const DATA = [
  {
    id:1,
    title:"HTML",
    completed:false
  },
  {
    id:2,
    title:"CSS3",
    completed:false

  },
  {
    id:3,
    title:"Bootstrap",
    completed:false
  },
  {
    id:4,
    title:"ANTD",
    completed:false
  },
  {
    id:5,
    title:"SCSS",
    completed:false
  },
  {
    id:6,
    title:"Javascript",
    completed:false
  }
]

// const TodoItme = (props)=>{
//   <View>
//     <Text>{props.item.title}</Text>
//   </View>
// } 

// const DATA = [
//   {
//     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//     title: 'First Item',
//   },
//   {
//     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//     title: 'Second Item',
//   },
//   {
//     id: '58694a0f-3da1-471f-bd96-145571e29d72',
//     title: 'Third Item',
//   },
// ];



export default function App() {
  const[items,setItems] = useState(DATA);
  const[text,setText] = useState("");

  const addNewTodo = ()=>{
    let newTodo ={
      id:items.length + 1,
      title: text,
      completed:false
    }
    setItems([...items, newTodo]);
    setText("");
  }
  const markItemCompleted = (item)=>{
    const itemIndex = items.findIndex(currItem=>currItem.id === item.id);
    if(itemIndex !== -1){
      const updatedItems= [...items];
      updatedItems[itemIndex] = {...items[findIndex],completed:true};
      setItems(updatedItems);
    }
    console.log("Items",items)
  }

  const Item = ({title}) => (
    <TouchableOpacity style={styles.item} onPress={()=>markItemCompleted(this.props.item)}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.mtop}>Saroj React Native Test on mobile new1</Text>
      <TextInput style={styles.input} onChangeText={setText} value={text}/>
      <Button title='Start' onPress={addNewTodo}/>      
      {/* <FlatList data={DATA} renderItem={({item})=><TodoItme item={item}/>} keyExtractor={item=>item.id}/> */}
      <FlatList
      style={styles.list}
        data={items}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

// const width_proportion = '80%';
// const height_proportion = '40%';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    height:40,
    //width:200,
    //width:width_proportion,
    borderWidth:1,
    padding:10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderColor:"#ffc400",
    alignSelf:"stretch"
  },
  item: {
    //width:width_proportion,
    backgroundColor: '#ffc400',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius:10,
    textAlign:"center",
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
    
  },
  title: {
    fontSize: 24,
  },
  list:{
    alignSelf:"stretch"
  },
  mtop:{
    marginTop:30,
    marginBottom:10
  },
  mbtm:{
    marginBottom:20
  }
});
