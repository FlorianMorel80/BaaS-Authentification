import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

//------------Import components-------------------
import TasksList from './TaksList';
import TaskForm from './TaskForm';
import CountersContainer from './CounterContainer';
import FloatingButton from '../_Shared/FloatingButton';
import Header from '../_Shared/Header/';


function TasksContainer(props) {
    const [tasks, setTasks] = useState([
        { id: new Date().getTime(), title: 'Nouvelle tâches', completed: false }]);

    const [isFormOpened, setIsFormOpened] = useState(false);

    const onAddTask = (title) => {
        const newTask = {
            id: new Date().getTime(),
            title: title,
            completed: false
        };
        setTasks([newTask, ...tasks]);
    };

    const onChangeStatus = id => {
        let newTasks = [];

        tasks.forEach(task => {
            if (task.id === id) {
                newTasks.push({
                    id: id,
                    title: task.title,
                    completed: !task.completed
                });
            } else {
                newTasks.push(task);
            }
        });

        setTasks(newTasks);
    };

    const onDeleteTask = id => {
        let newTasks = []

        tasks.forEach(task => {
            if (task.id !== id) {
                newTasks.push(task);
            }
        })
        setTasks(newTasks)
    }

    const getTasksCompleted = () => {
        let counters = 0

        tasks.forEach(task => {
            if (task.completed) {
                counters++
            }
        })
    }

    const toggleForm = () => {
        setIsFormOpened(!isFormOpened)
    }

    const image = require('../../../assets/img/pira.jpg');

    return (
        <View style={styles.container}>
            
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                
                <Header/>
                {isFormOpened && <TaskForm onAddTask={onAddTask} />}
                
                <CountersContainer
                    nbTasks={tasks.length}
                    nbTasksCompleted={tasks.filter(task => task.completed).length}
                />
                <TasksList tasks={tasks} onChangeStatus={onChangeStatus} onDeleteTask={onDeleteTask} />
                <FloatingButton toggleForm={toggleForm} isFormOpened={isFormOpened} />
            </ImageBackground>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor:'white',
        flex: 1,
        position: 'relative', 
        // padding:10,
        // paddingTop:30
    }, 
    image: {
        flex: 1,
        justifyContent: "center", 
        
      },
})

export default TasksContainer;