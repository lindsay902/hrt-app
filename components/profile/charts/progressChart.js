import React from 'react';
import * as shape from 'd3-shape';
import { Grid, StackedAreaChart, XAxis, YAxis } from 'react-native-svg-charts';
import { View } from 'react-native';

class ProgressChartHRT extends React.PureComponent {
  render() {
    const data = [
      {
        estrogen: 100,
        testosterone: 10,
        potassium: 9,
      },
      {
        estrogen: 125,
        testosterone: 20,
        potassium: 12,
      },
      {
        estrogen: 150,
        testosterone: 30,
        potassium: 15,
      },
      {
        estrogen: 200,
        testosterone: 40,
        potassium: 20,
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
