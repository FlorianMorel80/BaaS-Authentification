import React from 'react';
import { FlatList } from 'react-native';

import TaskTile from './TaskTile'

const TasksList = ({ tasks, onChangeStatus, onDeleteTask }) => {
    const _renderItem = ({ item }) => {
        return(
        <TaskTile
            task={item}
            completed={item.status === 'open' ? false : true}
            onChangeStatus={onChangeStatus}
            onDeleteTask={onDeleteTask}>
        </TaskTile>
    )}
    return (
        <FlatList
            data={tasks}
            renderItem={_renderItem}
            keyExtractor={item => item._id}
        />
    );
};

export default TasksList;