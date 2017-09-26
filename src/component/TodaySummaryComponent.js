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
            "y": 10,

            "props": {
              ...greenChartProps,
              fillGradient: true,
              gradientEndColor: 'green',
              gradientStartColor: 'yellow'
           }
          },
          {
            "x": '2',
            "y": 60,

            "props": {
              ...greenChartProps,
              fillGradient: true,
              gradientEndColor: 'green',
              gradientStartColor: 'yellow'
            }
          },
          {
            "x": '3',
            "y": 30,
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
            "y": 40,
            "props":{
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
		         stepsOY={4 }
		         axisTextColorActive={'#000'}
		         renderAxisXLines={false}
		         renderAxisYLines={false}
		         hideXAxe={true}
		         hideYAxe={true}
             activeAxisXTextArray={['1','2', '3', '4','5']}
             axisTextOpacity={2}
             backgroundColor={'#142f47'}
             leftPanelBG={'#142f47'}

             // activeAxisXTextArray={['1':'red',2:'yellow']}


		        />			
         	</View>

         	<View style={{flex:3,backgroundColor:'#fff'}}>

         	</View>

        </View>



	);
  }
}

module.exports=TodaySummary;