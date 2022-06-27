import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

const Task = (props) => {

    return (

        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
        </View>

    )
};

const styles = StyleSheet.create({

    item:{

        backgroundColor: "#ffffff",
        padding: 15,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 20,

    },
    itemLeft: {

        flexDirection: "row",
        alignItems: "center",

    },
    square:{

        width: 24,
        height: 24,
        backgroundColor: 'red',
        opacity: 0.3,
        borderRadius: 5,
        marginRight: 15,

    },
    itemText:{

        maxWidth: '80%',
        fontFamily: 'monospace',
        flexDirection: "row",
        flex: 1,
        flexWrap: 'wrap'

    },

});

export default Task;