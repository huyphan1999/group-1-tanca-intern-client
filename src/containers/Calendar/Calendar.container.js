
import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    SectionList,
  } from 'react-native';

const DATA = [
    {
        title: 'Thứ 7, 14-12-2019',
        data: ['Ca văn phòng', 'Tăng ca'],
    },
    {
        title: 'Thứ 2, 16-12-2019',
        data: ['Ca văn phòng', 'Tăng ca'],
    },
    {
        title: 'Thứ 4, 21-12-2019',
        data: ['Ca văn phòng thứ 7'],
    },
];

function Item({ title }) {
    return (
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
}

export default class Calendar_Activity extends Component {

    static navigationOptions =
        {
            title: 'Lịch công'
        }

    render() {

        return (
            <SafeAreaView style={styles.container}>
            <SectionList
              sections={DATA}
              keyExtractor={(item, index) => item + index}
              renderItem={({ item }) => <Item title={item} />}
              renderSectionHeader={({ section: { title } }) => (
                <Text style={styles.header}>{title}</Text>
              )}
            />
          </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    item: {
      backgroundColor: 'white',
      padding:14,
      paddingLeft:30,
    },
    header: {
      flex:1,
      fontSize: 22,
      backgroundColor:'#66ff33',
      color:'white',
      padding:10
    },
    title: {
      fontSize: 24,
    },
  });
  
