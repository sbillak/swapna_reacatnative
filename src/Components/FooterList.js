import React, {useState} from 'react';
import {
  FlatList,
  StyleSheet,
  SectionList,
  View,
  Text,
  Image,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Navigation} from '../Common/Navigation';
import {ListItemSeparator} from '../Components/FootView';

const styles = StyleSheet.create({
  requestText: {
    flexDirection: 'row',
    color: '#fff',
    textAlign: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
    justifyContent: 'space-between',
    alignContent: 'flex-end',
  },
  items:{
    color: 'gray',
    fontSize: 17,
    paddingTop: 10,
    paddingBottom: 10,
  },
  itemList:{color: 'white', fontSize: 17, fontWeight: 'bold'}
});

const footerItems = [
  {
    title: 'Shop',
    index: '0',
    data: ['Nike', 'Yeezys', 'Converse', 'Air Jordans', 'Adidas', 'Supreme'],
  },
  {
    title: 'New Releases',
    index: '1',
    data: ['Sample', 'Yeezys', 'Converse'],
  },
  {
    title: 'Latest Trends',
    index: '2',
    data: ['Converse', 'Air Jordans', 'Adidas', 'Supreme'],
  },
  {
    title: 'Company',
    index: '3',
    data: [],
  },
  {
    title: 'Account',
    index: '4',
    data: [],
  },
];

export const FooterList = props => {
  const [collapsedState, setCollapsedState] = useState([
    false,
    true,
    true,
    true,
    true,
  ]);
  const sectionCollapse = index => {
    let collapsedStates = collapsedState;
    collapsedStates[index] = !collapsedStates[index];
    setCollapsedState(collapsedStates);
  };
  const ItemList = props => {
    return (
      <TouchableOpacity onPress={() => sectionCollapse(props.index)}>
        <View style={[styles.requestText]}>
          <Text style={styles.itemList}>
            {props.title}
          </Text>
          {collapsedState[props.index] ? (
            <Image
              source={require('../../assets/images/plus.png')}
              style={{height: 20, width: 20}}
            />
          ) : (
            <Image
              source={require('../../assets/images/minus.png')}
              style={{height: 20, width: 20}}
            />
          )}
        </View>
      </TouchableOpacity>
    );
  };
  const Item = props => {
    const sectionIndex = props.section.index;
    if (!collapsedState[sectionIndex]) {
      return (
        <TouchableOpacity onPress={props.navigationTo}>
          <Text
            style={styles.items}>
            {props.item}
          </Text>
        </TouchableOpacity>
      );
    } else {
      return <></>;
    }
  };
  return (
    <SectionList
      keyExtractor={(item, index) => item + index}
      listKey="footerList"
      sections={footerItems}
      extradata={collapsedState}
      renderItem={({item, index, section}) => (
        <Item
          item={item}
          section={section}
          index={index}
          navigationTo={()=>props.navigationTo(item)}></Item>
      )}
      renderSectionHeader={({section}) => (
        <ItemList title={section.title} index={section.index} />
      )}
    />
  );
};
