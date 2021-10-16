import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import TasksList from './components/TasksList';

export default function App() {

  const [showTask, setTask] = useState("");
  const [showAddTask, addTask] = useState([]);

  handleAddTask = () => {
    addTask([...showAddTask, showTask]);
    setTask(null);
  };

  completeTask = (index) => {
    let itemsCopy = [...showAddTask];
    itemsCopy.splice(index, 1);
    addTask(itemsCopy);

  };

  return (
    <View style={styles.page}>
     {/*Today tasks*/}
      <Text style={styles.title}>Today Tasks List:</Text>
      <View style={styles.itemsBox}>
        {showAddTask.map((item, index) => {
          return(
            <TouchableOpacity  key={index} onPress={() => completeTask()}>
              <TasksList text={item}/>  
            </TouchableOpacity>
          )
        })}
      </View>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
        style={styles.inputTask}
      >
        <TextInput style={styles.inputText} placeholder='Add Task' placeholderTextColor='#fff' value={showTask}  onChangeText={showTask => setTask(showTask)}/>
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.buttonRectangle}>
            <Text style={styles.buttonText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  page:{
    backgroundColor: '#F6F5FA',
    flex: 1
  },
  title:{
    paddingTop: 60,
    paddingHorizontal: 20,
    fontSize: 24,
    fontWeight: 'bold',
  },
  itemsBox:{
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  inputTask:{
    position: 'absolute',
    bottom: 30,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  inputText:{
    paddingVertical: 15,
    paddingHorizontal: 15,
    paddingLeft: 30,
    paddingRight: 30,
    width: 250,
    borderRadius: 60,
    borderColor: '#8645FF',
    borderWidth: 1,
    backgroundColor: '#181059',
    color: '#fff',
  },
  buttonRectangle:{
    width: 70,
    height: 70,
    backgroundColor: '#181059',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#8645FF',
    borderWidth: 1,
  },
  buttonText:{
    fontSize: 35,
    color: '#fff',
  }

});
