import React from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const TaskTile = ({ id, title, onChangeStatus, completed, onDeleteTask }) => {
    return (
        <TouchableOpacity
            onPress={() => onChangeStatus(id)}
        >

            <View style={completed ? styles.taskItemDone : styles.taskItem}>
                <View style={styles.subContainer}>
                    <Image
                        style={completed 
                            ? styles.done
                            : styles.icon}
                        source={completed
                            ? require('../../../assets/img/iconCheck.png')
                            : require('../../../assets//img/iconCircle.png')}
                    />
                    <Text style={completed ? styles.done : styles.nodone }>
                        {title}
                    </Text>
                </View>
                <TouchableOpacity onPress={() => onDeleteTask(id)}>
                    <Image
                        style={styles.icon}
                        source={require('../../../assets/img/iconBin.png')}
                    />
                </TouchableOpacity>

            </View >
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    icon: {
        width: 30,
        height: 30,

    },

    done:{
        backgroundColor:'lightgreen',
        paddingLeft:20,
        borderRadius:40, 
        color:'black', 
        fontSize:16,
        textDecorationLine: 'line-through'
    },
    nodone:{
        paddingLeft:20,
        fontSize:16,
        borderRadius:40, 
        color:'white', 
    },

    taskItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center', 
        marginHorizontal:20
        // backgroundColor:'rgba(255,255,255, 0.4)'
    },
    taskItemDone: {
        flexDirection: 'row',
        marginHorizontal:20,
        justifyContent: 'space-between',
        alignItems: 'center', 
        backgroundColor:'lightgreen'
    },

    subContainer: {
        flexDirection: 'row',
        alignItems: 'center',
     
        

    },

    title: {
        marginLeft: 30
    }
})



export default TaskTile;