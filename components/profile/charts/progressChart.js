import React from 'react';
import * as shape from 'd3-shape';
import { Grid, StackedAreaChart, XAxis, YAxis } from 'react-native-svg-charts';
import { View } from 'react-native';

class ProgressChartHRT extends React.PureComponent {
  render() {
    const data = [
      {
        month: new Date(2015, 0, 1),
        estrogen: 3840,
        testosterone: 1920,
        potassium: 960,
      },
      {
        month: new Date(2015, 1, 1),
        estrogen: 1600,
        testosterone: 1440,
        potassium: 960,
      },
      {
        month: new Date(2015, 2, 1),
        estrogen: 640,
        testosterone: 960,
        potassium: 3640,
      },
      {
        month: new Date(2015, 3, 1),
        estrogen: 3320,
        testosterone: 480,
        potassium: 640,
      },
    ];

    const colors = ['#8800cc', '#aa00ff', '#cc66ff'];
    const keys = ['estrogen', 'testosterone', 'potassium'];
    const months = ['January', 'February', 'March'];
    const svgs = [
      { onPress: () => console.log('apples') },
      { onPress: () => console.log('bananas') },
      { onPress: () => console.log('cherries') },
    ];

    return (
      <View
        style={{
          flexDirection: 'row',
          height: 200,
          marginLeft: 55,
          marginRight: 55,
          marginTop: 20,
          backgroundColor: 'white',
        }}
      >
        <StackedAreaChart
          style={{ flex: 1, paddingTop: 15, paddingBottom: -20 }}
          contentInset={{ top: 10, bottom: 10 }}
          data={data}
          keys={keys}
          colors={colors}
          months={months}
          curve={shape.curveNatural}
        >
          <Grid />
        </StackedAreaChart>
        <YAxis
          style={{ position: 'absolute', top: 0, bottom: 0 }}
          data={StackedAreaChart.extractDataPoints(data, keys)}
          contentInset={{ top: 10, bottom: 10 }}
          svg={{
            fontSize: 8,
            fill: 'white',
            stroke: 'black',
            strokeWidth: 0.1,
            alignmentBaseline: 'baseline',
            baselineShift: '3',
          }}
        />
      </View>
    );
  }
}

export default ProgressChartHRT;
