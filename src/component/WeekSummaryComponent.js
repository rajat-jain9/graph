import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
// import Chart from 'react-native-simple-charts';
import Chart from 'react-native-chart';



class WeekSummary extends Component{

	render() {
		/*let greenChartProps = {
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
            "y": 20,

            "props": {
              ...greenChartProps,
              fillGradient: true,
              gradientEndColor: 'green',
              gradientStartColor: 'yellow'
           }
          },
          {
            "x": '2',
            "y": 40,

            "props": {
              ...greenChartProps,
              fillGradient: true,
              gradientEndColor: 'green',
              gradientStartColor: 'yellow'
            }
          },
          {
            "x": '3',
            "y": 60,
            "props": {
              ...greenChartProps,
              fillGradient: true,
              gradientEndColor: 'green',
              gradientStartColor: 'yellow'
            }
          },
          {
            "x": '4',
            "y": 80,
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
    ]*/


    const data = [
    [0,0],
    [1,10],
    [3,5],
    [4,15],
    [5,8],
    [6,10],
    [7,5],
    [8,10],
    [9,10],
    [10,12],
    [11,14],
    [12,11],
];
 
		return(
			/*<View style={{flex:1}}>
			  <View style={{flex:1 ,flexDirection:'row',backgroundColor:'#142f47'}}>
          <View style={{flex:1}}>
            <View >
              <Text>Income</Text>
            </View>
            <View>
              <Text>$45000</Text>
            </View>
          </View>
          <View style={{flex:1}}>
            <View>
              <Text>Expense</Text>
            </View>
            <View>
 				      <Text>$5000</Text>
            </View>
          </View>
          <View style={{flex:1}}>
            <View>
              <Text>Balance</Text>
            </View>
            <View >
             <Text>$75000</Text>
            </View>
          </View>
  			</View>

			  <View style={{flex:2 ,backgroundColor:'#142f47'}}>
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
          />		
        </View>*/
       <View style={{flex:1,backgroundColor:'#142f47'}}>
         <View style={styles.containerChart}>
                <Chart
                    style={styles.chart}
                    data={data}
                    verticalGridStep={3}
                    type="line"
                    color="#fff"

                    // fillColor="red"
                    dataPointColor="red"
                    dataPointFillColor="#00a0de"
                    dataPointRadius={3}
                    lineWidth={3}
                    axisColor="#142f47"
                    showDataPoint={false}
                    axisLabelColor='#fff'
                    showYAxisLabels={false}
                    hideHorizontalGridLines={true}
                    showAxis={true}
                    showGrid={false} 
                 />
            </View>
            <View style={{flex:1,backgroundColor:'#fff'}}>
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

const styles = StyleSheet.create({
    containerChart: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: '#142f47',
        
    },
    chart: {
        width: 400,
        height: 200,
      
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


module.exports=WeekSummary;