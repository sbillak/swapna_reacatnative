import React, {useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
  TextInput,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Shoe, ShoeList, ListItemSeparator} from '../Components/FootView';
import {FooterList} from '../Components/FooterList';

const styles = StyleSheet.create({
  navTitle: {
    flexDirection: 'row',
  },
  retryButton: {
    height: 16,
    alignSelf: 'flex-end',
    marginRight: 10,
  },
  textStyle: {
    color: 'grey',
    fontSize: 20,
    paddingRight: 10,
  },
  title: {
    fontSize: 25,
    color: 'white',
    padding: 20,
    paddingLeft: 2,
    fontWeight: 'bold',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  filterText: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  requestText: {
    flexDirection: 'row',
    color: '#fff',
    textAlign: 'center',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'white',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
    width: Dimensions.get('window').width / 2 + 20,
  },
  imageArrow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginTop: -58,
    marginRight: 6,
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    width: Dimensions.get('window').width,
    textAlign: 'center',
    marginRight: 40,
    marginBottom: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'white',
  },
  center: {
    justifyContent: 'center',
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  titleStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -30,
  },
  titleTextStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    borderWidth: 4,
    borderColor: 'white',
    paddingLeft: 10,
    paddingRight: 10,
  },
});
export const Dunks = ({navigation}) => {
  const HeaderRightView = () => {
    return (
      <View style={{flexDirection: 'row'}}>
        <Image
          source={require('../../assets/images/search.png')}
          style={{
            marginLeft: 0,
            marginRight: 5,
            height: 30,
            width: 30,
          }}></Image>
        <ImageBackground
          source={require('../../assets/images/cart.png')}
          style={{marginLeft: 25, marginRight: 5, height: 30, width: 30}}>
          <Text
            style={{
              color: 'white',
              paddingLeft: 8,
              paddingTop: 8,
              fontWeight: 'bold',
            }}>
            2
          </Text>
        </ImageBackground>
        <Image
          source={require('../../assets/images/menu.jpg')}
          style={{
            marginLeft: 25,
            marginRight: 15,
            height: 40,
            width: 30,
          }}></Image>
      </View>
    );
  };

  const navigationTo = item => {
    switch (item) {
      case 'Nike':
        navigation.navigate('Nike');
        break;
      case 'Jordans':
        navigation.navigate('Jordans');
        break;
      case 'Adidas':
        navigation.navigate('Adidas');
        break;
      case 'Supreme':
        navigation.navigate('Supreme');
        break;
      case 'Yeezys':
        navigation.navigate('Yeezys');
        break;
      default:
        alert(item+ ' not available')
        break;
    }
  };
  useEffect(() => {
    navigation.setOptions({
      title: '',
      headerTintColor: 'black',
      headerRight: () => <HeaderRightView></HeaderRightView>,
    });
  });
  return (
    <SafeAreaView>
      <FlatList
        listKey="parentList"
        keyExtractor={(_, index) => index.toString()}
        data={[]}
        renderItem={null}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <>
            <Image
              source={require('../../assets/images/garden.png')}
              style={{height: 70}}></Image>

            <Text style={styles.textStyle}>
              Home {'>'} Nike {'>'} Dunks
            </Text>
            <View style={{flexDirection: 'row-reverse'}}>
              <Image
                source={require('../../assets/images/arrow4.png')}
                style={{height: 30, width: 70}}></Image>
            </View>
            <ListItemSeparator />
            <Text style={styles.title}>DUNKS</Text>
            <ListItemSeparator />
            <View style={styles.tabs}>
              <Text
                style={[
                  styles.textStyle,
                  {
                    fontWeight: 'bold',
                    color: 'white',
                    textAlign: 'center',
                    padding: 20,
                  },
                ]}>
                Filters
              </Text>
              <View style={[styles.filterText, {flexDirection: 'row'}]}>
                <Text style={[styles.textStyle, {}]}>Open</Text>
                <Image
                  source={require('../../assets/images/menu.jpg')}
                  style={{height: 20, width: 20}}></Image>
              </View>
            </View>
            <ListItemSeparator />
            {/* <ShoeList></ShoeList>  */}
            <ListItemSeparator />
            <Text
              style={{
                color: 'white',
                fontSize: 26,
                padding: 20,
                fontWeight: 'bold',
              }}>
              {' '}
              1{' '}
              <Text style={{color: 'gray'}}>
                {' '}
                2 3 4 5 {'<'} {'>'}
              </Text>
            </Text>
            <ListItemSeparator />
          </>
        }
        ListFooterComponent={
          <View>
            <Image
              source={require('../../assets/images/nike.png')}
              style={{height: 120}}></Image>
            {/* <Text style={[styles.title,{fontSize:35}]}>Not Seeing {"\n"}What You're {"\n"}Looking For?</Text>
                      <Text style={[styles.title,{padding:15,fontWeight:'normal'}]}>Our concierge service will track it down for you.</Text> */}
            <View style={{backgroundColor: '#404040', marginBottom: 100}}>
              <View style={styles.requestText}>
                <Text
                  style={{
                    color: 'white',
                    padding: 10,
                    textAlign: 'center',
                    paddingRight: 20,
                    fontWeight: 'bold',
                  }}>
                  REQUEST COCIERGE
                </Text>
                <Image
                  source={require('../../assets/images/arrow3.png')}
                  style={{height: 20, width: 30}}></Image>
              </View>
              <Text
                style={[
                  styles.title,
                  {fontSize: 35, justifyContent: 'center', textAlign: 'center'},
                ]}>
                Sign up For The Newsletter.
              </Text>
              <TextInput
                placeholderTextColor={'red'}
                placeHolder={'Your email here'}
                style={{
                  backgroundColor: 'black',
                  padding: 10,
                  borderRadius: 5,
                  margin: 0,
                }}
              />
              <View style={styles.row}>
                <Text
                  style={[styles.center, {color: 'white', fontWeight: 'bold'}]}>
                  SUBSCRIBE
                </Text>
              </View>
              {/* <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "white",
        //   margingTop:-120
        }}
      /> */}
              <ListItemSeparator></ListItemSeparator>
              <View style={styles.imageArrow}>
                <Image
                  source={require('../../assets/images/arrow3.png')}
                  style={{
                    height: 20,
                    width: 30,
                    alignItems: 'flex-end',
                    marginTop: 10,
                    marginRight: 10,
                    marginBottom: 10,
                  }}></Image>
              </View>
            </View>

            <View style={styles.titleStyle}>
              <Text style={styles.titleTextStyle}> BLITZ</Text>
            </View>
            <FooterList navigationTo={navigationTo} />
          </View>
        }
      />
    </SafeAreaView>
  );
};
