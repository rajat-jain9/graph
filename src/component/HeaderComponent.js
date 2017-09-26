import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';




class HeaderView extends Component {
	
  render() {
    return(
      <View style={styles.container}>
        <View style={styles.menuContainer}>
          <Text>
          
          </Text>
        </View>

        <View style={styles.summaryContainer}>
          <Text style={styles.textSummary}>Summary</Text>
        </View>
        <View style={styles.pictureContainer}>
          <Text>
            
          </Text>
        </View>
      </View>


    );
  }

}

const styles=StyleSheet.create( {
container:{
  flex:1,
	flexDirection:'row',
  alignItems:'center',

},
menuContainer:{
	flex:1
},
summaryContainer:{
	flex:4,
  alignItems:'center',
  alignContent:'center',
},
pictureContainer:{
	flex:1
},
textSummary:{
  fontSize:20,
  color:'#fff'
}
});

module.exports=HeaderView;