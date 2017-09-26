/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Chart from 'react-native-simple-charts';


import HeaderView from './src/component/HeaderComponent';
import TodaySummary from './src/component/TodaySummaryComponent';
import WeekSummary from './src/component/WeekSummaryComponent';
import MonthSummary from './src/component/MonthSummaryComponent';

// import Tabs from 'react-native-tabs';

var ScrollableTabView = require('react-native-scrollable-tab-view');



export default class graph extends Component {
 render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
            <HeaderView />
        </View>
        <View style={styles.menuContainer}>

          <ScrollableTabView  tabBarActiveTextColor='#00a0de' tabBarTextStyle={styles.tabLabel} tabBarUnderlineStyle={styles.bar}>
            <TodaySummary tabLabel="Today" />
            <WeekSummary tabLabel="This Week" />
            <MonthSummary tabLabel="This Month" />
         </ScrollableTabView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    // backgroundColor:'#142f47'
  },
  headerContainer:{
    flex:1,
    backgroundColor:'#142f47'
  },
  menuContainer:{
    flex:8,
    backgroundColor:'#142f47'
    
  },
  tabLabel:{
    color:'#fff'
  },
  bar:{
    borderBottomColor:'#00a0de',
    borderBottomWidth:5
  }
  
});


AppRegistry.registerComponent('graph', () => graph);
