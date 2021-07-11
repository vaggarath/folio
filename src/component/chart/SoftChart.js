import React from "react";
import { SoftData, SoftDataEng, SoftOptions } from "./SoftConfig";
import { Radar } from "react-chartjs-2";

export class SoftChart extends React.Component {
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
            <Radar ref={this.chartRef} data={this.props.language ? SoftDataEng : SoftData} options={SoftOptions} />
      </div>
    );
  }
}
