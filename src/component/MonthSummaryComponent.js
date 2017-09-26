import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Chart from 'react-native-simple-charts';


class MonthSummary extends Component{

	render() {
		let greenChartProps = {
      "strokeWidth": 5,
      "renderPoints": true,
      "strokeColor": 'green',

      "pointColor1": 'red',
      "pointColor2": 'red',

    }
    let data = [
      {
        "chart": [
          {
            "x": '1',
            "y": 60,

            "props": {
              ...greenChartProps,
              fillGradient: true,
              gradientEndColor: 'green',
              gradientStartColor: 'yellow'
           }
          },
          {
            "x": '2',
            "y": 45,

            "props": {
              ...greenChartProps,
              fillGradient: true,
              gradientEndColor: 'green',
              gradientStartColor: 'yellow'
            }
          },
          {
            "x": '3',
            "y": 10,
            "props": {
              ...greenChartProps,
              fillGradient: true,
              gradientEndColor: 'green',
              gradientStartColor: 'yellow'
            }
          },
          {
            "x": '4',
            "y": 20,
            "props": {
              ...greenChartProps,
              fillGradient: true,
              gradientEndColor: 'green',
              gradientStartColor: 'yellow'
           }
          },
          {
            "x": '5',
            "y": 20,
            "props": {
              ...greenChartProps,
              fillGradient: true,
              gradientEndColor: 'green',
              gradientStartColor: 'yellow'
           }
          },
        ],
      }
    ]
 
		return(
			<View style={{flex:1,backgroundColor:'green'}}>
			  <View style={styles.aggContainer}>
          <View style={styles.aggAmount}>
            <View >
              <Text style={styles.textContainer}>Cash</Text>
            </View>
            <View>
              <Text style={styles.amount}>$45000</Text>
            </View>
          </View>
          <View style={styles.aggAmount}>
            <View>
              <Text style={styles.textContainer}>Credit</Text>
            </View>
            <View>
 				      <Text style={styles.amount}>$5000</Text>
            </View>
          </View>
          <View style={styles.aggAmount}>
              <View>
                <Text style={styles.textContainer}>Investments</Text>
              </View>
              <View >
                <Text style={styles.amount}>$75000</Text>
              </View>
          </View>
			  </View>

			   <View style={styles.chartContainer}>
			     <Chart
              data={data}
              stepsOY={4}
              axisTextColorActive={'red'}
              renderAxisXLines={false}
              renderAxisYLines={false}
              hideXAxe={true}
              hideYAxe={true}
              activeAxisXTextArray={['1','2', '3', '4','5']}
              axisTextOpacity={0}
              backgroundColor={'#142f47'}
              leftPanelBG={'#142f47'}
              width={800}
              leftPanelWidth={5}
            />			
          </View>

          <View style={{flex:3,backgroundColor:'#fff'}}>
            <View style={styles.card}>
              <View style={{ marginBottom: 10, marginLeft: 20, marginTop: 10 }}>
                <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'black' }}>
                  Transactions
                </Text>
              </View>
              <View style={styles.textBox}>
                <Text style={styles.labelBox}>Income</Text>
                
                <View style={styles.valueBox}>
                  <Text style={styles.valueText}>Rs 40000</Text>
                </View>
              </View>

              <View style={styles.textBox}>
                <Text style={styles.labelBox}>Expense</Text>
               
                <View style={styles.valueBox}>
                  <Text style={[styles.valueText, { color: 'black' }]}>Rs 20000</Text>
                </View>
              </View>
               <View style={styles.textBox}>
                <Text style={styles.labelBox}>Highest Transaction</Text>
                
                <View style={styles.valueBox}>
                  <Text style={[styles.valueText, { color: 'black' }]}>Rs 1100</Text>
                </View>
              </View>
               <View style={styles.textBox}>
                <Text style={styles.labelBox}>Most Frequent Transaction</Text>
                <View style={styles.valueBox}>
                  <Text style={[styles.valueText, { color: 'black' }]}>Rs 1100</Text>
                </View>
              </View>
            </View>
          </View>
      </View>





			);
	}
}


const styles=StyleSheet.create({
aggContainer:{
flex:1,
flexDirection:'row',
alignItems:'center',
justifyContent:'center',
backgroundColor:'#142f47'
},
aggAmount:{
  flex:1,
  alignItems:'center'
},
textContainer:{

  fontSize:15,
  fontWeight:'bold',
  color:'#fff'
},
amount:{
  color:'#fff'
},
chartContainer:{
  flex:2,
  backgroundColor:'#142f47',
  alignItems:'flex-start'
},
card: {
    marginTop: 10,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#efefef',
    borderWidth: 2,
    borderColor: '#e2e0e0',
  
  },
  textBox: {
    height: 40,
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20,

  },
  labelBox: {
    flex: 3.5,
    justifyContent: 'flex-start',
    fontSize: 12,
    
  },
  valueBox: {
    flex: 2,
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    
      },
  valueText: {
    color: '#46824c',
    fontSize: 12,
  },
});

module.exports=MonthSummary;