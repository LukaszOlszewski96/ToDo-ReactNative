import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const TasksList = (props) => {

    return(
        <View style={styles.taskBox}>
            <View style={styles.horizontalBox}>
                <TouchableOpacity style={styles.check}></TouchableOpacity>
                <Text style={styles.taskText}>{props.text}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    taskBox:{
        backgroundColor: '#181059',
        borderRadius: 10,
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom:20
    },
    check:{
        width: 25,
        height: 25,
        backgroundColor: '#8645FF',
        borderRadius: 5,
        opacity: 0.4,
        marginRight: 20
    },
    horizontalBox:{
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    taskText:{
        color: '#fff',
        width: '80%',
    }
})

export default TasksList;
