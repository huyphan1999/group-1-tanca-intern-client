
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  TouchableOpacity
} from 'react-native';


const DATA = [
  {
    date: 'Thứ 7, 14-12-2019',
    data: [{ name: 'Ca thứ 7', time: '8:30-17:30', number: '00:00-00:00' }, { name: 'Ca tối', time: '8:30-17:30', number: '00:00-00:00' }],
  },
  {
    date: 'Thứ Hai, 14-12-2019',
    data: [{ name: 'Ca thực tập', time: '8:30-17:30', number: '00:00-00:00' }],
  },
  {
    date: 'Thứ Hai, 14-12-2019',
    data: [{ name: 'Ca thực tập', time: '8:30-17:30', number: '00:00-00:00' }],
  },

];

function Item({ data }) {
  return (

    <TouchableOpacity
      style={styles.item}
    >
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{ paddingLeft: 10, }}>
          <Text style={{ fontWeight: 'bold', }}>{data.name}</Text>
          <Text>({data.time})</Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
        <Icon
          name='subway'
          size={10}
          style={{ paddingRight: 10, }}
        />
        <Text style={{ paddingRight: 10, fontWeight: 'bold' }}>{data.number}</Text>
        <Icon
          name='chevron-right'
          size={16}
          color='#aaafb3'
          style={{ paddingRight: 10, }}
        />

      </View>



    </TouchableOpacity>
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
          renderItem={({ item }) => <Item data={item} />}
          renderSectionHeader={({ section: { date } }) => (
            <Text style={styles.header}>{date}</Text>
          )}
          stickySectionHeadersEnabled={true}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'Open Sans'
  },
  item: {
    padding: 14,
    paddingLeft: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 0.4
  },
  header: {
    fontSize: 20,
    backgroundColor: '#5af542',
    color: 'white',
    padding: 10,
    paddingLeft: 20,
  },
  data: {
    fontSize: 24,
  },
});

