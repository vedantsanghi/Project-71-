import React from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import db from '../config'
import firebase from 'firebase'

export default class WriteStoryScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            Story_Name: '',
            Author_Name: '',
            Story: '',
        }
    }
    submitStory() {
        var message = null
        db.collection("stories").add({
            StoryName: this.state.Story_Name,
            Author: this.state.Author_Name,
            Story: this.state.Story,
        })
        console.log("Hello")
    }
    render() {

        return (
            <View style={styles.container}>
                <View>
                    <Text style={{
                        textAlign: 'center',
                        fontSize: 30,
                        backgroundColor: 'orange',
                        width: 400,
                        fontWeight: "bold",
                    }}>Story Hub</Text>
                </View>
                <TextInput
                    style={styles.inputBox}
                    placeholder="Story Name"
                    onChangeText={(text) => {
                        this.setState({ Story_Name: text });
                    }}
                    value={this.state.Story_Name} />

                <TextInput
                    style={styles.inputBox}
                    placeholder="Author Name"
                    onChangeText={(text) => {
                        this.setState({ Author_Name: text });
                    }}
                    value={this.state.Author_Name} />

                <TextInput
                    style={styles.storyInputBox}
                    placeholder="Write the Story here"
                    onChangeText={(text) => {
                    this.setState({ Story: text });
                    }}
                    value={this.state.Story} />

                <TouchableOpacity 
                style={styles.submitButton}
                onPress={this.submitStory()}>
                <Text style={styles.buttonText}>Submit</Text></TouchableOpacity>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30,
        alignItems: 'center',
    },

    inputBox: {
        width: 360,
        height: 40,
        borderWidth: 1.5,
        fontSize: 20,
        marginTop: 30,
    },
    storyInputBox: {
        width: 360,
        height: 220,
        borderWidth: 1.5,
        fontSize: 20,
        marginTop: 30,
    },
    submitButton: {
        marginTop: 30,
        width: 100,
        backgroundColor: 'orange',
    },
    buttonText: {
        fontSize: 25,
        textAlign: 'center',
    }
});