import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Chart from 'react-native-simple-charts';


class TodaySummary extends Component{

	render() {
		let greenChartProps = {
      "strokeWidth": 1,
      "renderPoints": false,
      "strokeColor": '#fff',

      "pointColor1": 'red',
      "pointColor2": 'red',

    }
    let data = [
      {
        "chart": [
          {
            "x": '1',
            "y": 10,

            "props": {
              ...greenChartProps,
              fillGradient: true,
              gradientEndColor: 'red',
              gradientStartColor: 'red'
           }
          },
          {
            "x": '2',
            "y": 60,

            "props": {
              ...greenChartProps,
              fillGradient: true,
              gradientEndColor: 'red',
              gradientStartColor: 'red'
            }
          },
          {
            "x": '3',
            "y": 30,
            "props": {
              ...greenChartProps,
              fillGradient: true,
              gradientEndColor: 'green',
              gradientStartColor: 'green'
            }
          },
          {
            "x": '4',
            "y": 80,
            "props": {
              ...greenChartProps,
              fillGradient: true,
              gradientEndColor: 'red',
              gradientStartColor: 'red'
           }

          },
          {
            "x": '5',
            "y": 40,
            "props":{
              ...greenChartProps,
              fillGradient: true,
              gradientEndColor: 'green',
              gradientStartColor: 'green'
           }
          },
           {
            "x": '6',
            "y": 90,
            "props": {
              ...greenChartProps,
              fillGradient: true,
              gradientEndColor: 'green',
              gradientStartColor: 'green'
           }
          },
        ],
      }
    ]
 
	return(
		<View style={{flex:1}}>
			<View style={{flex:1 ,flexDirection:'row',backgroundColor:'#142f47'}}>
              <View style={{flex:1}}>
                <View >
                  <Text>Cash</Text>
                </View>
                <View>
                  <Text>$45000</Text>
                </View>
              </View>
              <View style={{flex:1}}>
                <View>
                  <Text>Credit</Text>
                </View>
                <View>
 				          <Text>$5000</Text>
                </View>
              </View>
              <View style={{flex:1}}>
                <View>
                  <Text>Investments</Text>
                </View>
                <View >
                  <Text>$75000</Text>
                </View>
              </View>

			</View>

			<View style={{flex:2,backgroundColor:'#142f47'}}>
			   <Chart
		          data={data}
              stepsOY={4}
              axisTextColorActive={'#fff'}
              renderAxisXLines={false}
              renderAxisYLines={false}
              hideXAxe={true}
              hideYAxe={true}
              activeAxisXTextArray={['1','2', '3', '4','5','6']}
              axisTextOpacity={4}
              backgroundColor={'#142f47'}
              leftPanelBG={'#142f47'}
              leftPanelWidth={5}
              gradientOpacityStart='1'
              gradientOpacityEnd='1'
             


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
module.exports=TodaySummary;