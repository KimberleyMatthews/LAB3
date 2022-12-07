import React from "react";
import { Button, StyleSheet, Text, View, TextInput, SafeAreaView } from "react-native";
import { styles } from "../styles";

export const Flexbox = () => {
    return (
        <View style={styles.overallView}>
        <View 
        style={{ backgroundColor: "blue", width: "50%", height: 200 }}
        ></View>
        <View
        style={{ backgroundColor: "red", width: "20%", height: 200 }}
        ></View>
        </View>
    );
};

export const FlexExample = () => {
    return ( 
    <SafeAreaView style={{...styles.overallView, ...styles.FlexExampleParent}}>
    <View 
    style={{...styles.FlexExampleChild, backgroundColor: "blue"}}
    ></View>
    <View 
    style={{...styles.FlexExampleChild, backgroundColor: "red"}}
    ></View>
    <View 
    style={{...styles.FlexExampleChild, backgroundColor: "green"}}
    ></View>
    </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    overallView: {
        flex: 1,
        bakcgroundColor: "yellow",
    },

    FlexExampleParent: {
        flexDirection: "row",
        flexWrap: "wrap",      // NOTE - only used if boxes or colors are OVERFLOWING
        // justifyContent: "space-between",
        justifyContent: "center", // NOTE - "space-around"
        // alignItems: "flex-end",
        alignContent: "space-between",
    },

    FlexExampleChild: {
        width: 100,
        height: 100,
        // flexDirection: "row", /* WILL ONLY APPLY TO CHILD OF THIS CIEW, NOT ITSELF! */
    },

    //size: {
        //flex: 1,
        //backgroundColor: "yellow",
        // flexDirection: "column",
        // width: "30%",
        // height: "50%",
        // alignItems: "center",
        // justifyContent: "center",
    //},
});