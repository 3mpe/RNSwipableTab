import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Platform, StatusBar } from 'react-native';

export default function ExampleTabBar({ tabList, currentTab, onChangeTab }) {
    const [tabs] = useState(tabList);
    const onChange = onChangeTab || ((index) => {  });

    const renderTabList = () => (
        tabs.map((itemText, index) => {
            const isActive = currentTab === index;
            const selectedTabWrapperStyle = isActive ? styles.selectedTabWrapper : styles.defaultTabWrapper;
            const selectedTabTextStyle = isActive ? styles.selectedTabText : styles.defaultTabText;

            return (
                <TouchableOpacity style={selectedTabWrapperStyle} key={index} onPress={() => onChange(index)}>
                    <Text style={selectedTabTextStyle}>{itemText}</Text>
                </TouchableOpacity>
            );
        })
    );

    return (
        <View style={styles.container}>
            {renderTabList()}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#dddd',
        justifyContent: 'space-between',
        paddingTop: Platform.select({ android: StatusBar.currentHeight + 10, ios: 20 }),
        paddingBottom: 8
    },
    defaultTabWrapper: {
        maxHeight: 50,
    },
    selectedTabWrapper: {
        maxHeight: 50,
        borderBottomWidth: 1,
        borderBottomColor: '#dddd'
    },
    defaultTabText: {
        textAlign: "center",
        padding: 8,
    },
    selectedTabText: {
        textAlign: "center",
        padding: 8,
        fontSize: 14,
        fontWeight: "900"
    }
});
