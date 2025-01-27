import React, {Component} from 'react';
import { Line } from 'react-chartjs-2';

class LineChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: props.chartData
    }
  }

  static defaultProps = {
    chartTitle: 'chart',
    displayTitle: true,
    displayLegend: true,
    legendPosition: 'right'
  }

  render() {
    return (
      <div className="chart">
        <Line
          data={this.state.chartData}
          options={{
            title: {
              display: this.props.displayTitle,
              text: this.props.chartTitle,
              fontSize: 15,
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition
            },
            maintainAspectRatio: true,
      			spanGaps: false,
            scales: {
              xAxes: [{
  							stacked: true,
  						}],
  						yAxes: [{
  							stacked: true
  						}]
  					}
          }}
        />
      </div>
    )
  }
}

export default LineChart;
