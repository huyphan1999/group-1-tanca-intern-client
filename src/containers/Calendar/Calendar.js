
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {
<<<<<<< HEAD
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
=======
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
>>>>>>> 7ee6b580aca8b06f579a3624ccb142472bbcc494

];

function Item({ data }) {
  return (

<<<<<<< HEAD
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
        padding: 14,
        paddingLeft: 30,
    },
    header: {
        flex: 1,
        fontSize: 16,
        backgroundColor: '#66ff33',
        color: 'white',
        padding: 10
    },
    title: {
        fontSize: 16,
    },
=======
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
>>>>>>> 7ee6b580aca8b06f579a3624ccb142472bbcc494
});

