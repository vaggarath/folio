import React from "react";
import { RadarData, RadarOptions } from "./RadarConfig";
import { Radar } from "react-chartjs-2";

export class RadarChart extends React.Component {
  constructor(props) {
    super(props);
    this.chartRef = React.createRef();
  }

  componentDidMount() {
    console.log(this.chartRef);
  }

  

  render() {
    
    return (
        <div className="radar mx-auto">
            <Radar ref={this.chartRef} data={RadarData} options={RadarOptions} />
      </div>
    );
  }
}
