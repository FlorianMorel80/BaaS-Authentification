import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';

const TaskForm = ({ onAddTask, createTask }) => {
    // On crée ici une valeur title et une méthode setTitle grâce à useState que j'importe de react
    // La valeur d'origine est une string vide
    const [title, setTitle] = useState('');
    const [taskName, setTaskName] = useState('');

    const _onChangeText = value => {
        // setTitle qui va permettre de changer la valeur de title; cette nouvelle valeur correspond à = value => qui est le paramètre de la méthode _onChangeText
        setTitle(value);
    };

    const _onPressBtn = () => {
        if (title) {
            onAddTask(title);
            setTitle('');
            createTask(title);
        }
    };


    return (
        <View style={styles.container}>
            <View style={styles.containerInput}>
                {/* onChangeText qui est la méthode qui sera rappelé lordque l'utilisateur changera le texte de l'input */}
                < TextInput value={title} onChangeText={_onChangeText} placeholder={'Ajouter votre nouvelle tâche'} placeholderTextColor={'white'}/>
            </View>
            <TouchableOpacity 
                style={styles.button}
                onPress={_onPressBtn}>
                <Text style={{textAlign:'center', color:'white'}}>Ajouter</Text>
            </TouchableOpacity>
        </View>

    );
};


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center', 
        marginHorizontal:20
    },

    containerInput: {
        width: '75%',
        borderWidth: 0.3,
        borderColor: 'white',
        borderRadius: 10,
        paddingLeft: 20,
        marginBottom: 15,
        marginTop: 15
    },
    button:{
        borderRadius: 5, 
        borderWidth: 0.3,
        borderColor: 'white',
        margin:15, 
        padding:10, 
        width:80, 
        backgroundColor:'#4746C3'
    }


})


export default TaskForm;