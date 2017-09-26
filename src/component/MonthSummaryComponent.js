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
      "strokeWidth": 1,
      "renderPoints": false,
      "strokeColor": '#fff',

      "pointColor1": '#00a0de',
      "pointColor2": '#00a0de',

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
              gradientEndColor: '#00a0de',
              gradientStartColor: '#00a0de'
           }
          },
          {
            "x": '2',
            "y": 95,

            "props": {
              ...greenChartProps,
              fillGradient: true,
              gradientEndColor: '#00a0de',
              gradientStartColor: '#00a0de'
            }
          },
          {
            "x": '3',
            "y": 50,
            "props": {
              ...greenChartProps,
              fillGradient: true,
              gradientEndColor: '#00a0de',
              gradientStartColor: '#00a0de'
            }
          },
          {
            "x": '4',
            "y": 80,
            "props": {
              ...greenChartProps,
              fillGradient: true,
              gradientEndColor: '#00a0de',
              gradientStartColor: '#00a0de'
           }
          },
          {
            "x": '5',
            "y": 70,
            "props": {
              ...greenChartProps,
              fillGradient: true,
              gradientEndColor: '#00a0de',
              gradientStartColor: '#00a0de'
           }
          },
          {
            "x": '6',
            "y": 90,
            "props": {
              ...greenChartProps,
              fillGradient: true,
              gradientEndColor: '#00a0de',
              gradientStartColor: '#00a0de'
           }
          },

        ],
      }
    ]
 
		return(
			<View style={{flex:1,backgroundColor:'#142f47'}}>
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
              axisTextColorActive={'#fff'}
              renderAxisXLines={false}
              renderAxisYLines={false}
              hideXAxe={true}
              hideYAxe={true}
              activeAxisXTextArray={['1','2', '3', '4','5','6']}
              axisTextOpacity={4}
              backgroundColor={'#142f47'}
              leftPanelBG={'#142f47'}
              // width={800}
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
  alignItems:'flex-start',

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