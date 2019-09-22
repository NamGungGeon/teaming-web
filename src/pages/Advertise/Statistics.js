import React, {Component} from 'react';
import {quickConnect} from "../../redux";
import {LineSeries, VerticalBarSeries, XYPlot} from "react-vis";
import PageTitle from "../../components/PageTitle/PageTitle";

class Statistics extends Component {
    data = [
        {x: 0, y: 8},
        {x: 1, y: 5},
        {x: 2, y: 4},
        {x: 3, y: 9},
        {x: 4, y: 1},
        {x: 5, y: 7},
        {x: 6, y: 6},
        {x: 7, y: 3},
        {x: 8, y: 2},
        {x: 9, y: 0}
    ];

    render() {
        return (
            <div className={'lefting'}>
                <PageTitle title={'광고 통계'} explain={'해당 광고의 통계를 제공합니다'} noMargin/>
                <br/>
                <div className={'flexBox'}>
                    <div>
                        <XYPlot height={300} width={300}>
                            <LineSeries data={this.data} animation color={'#ff0069'}/>
                        </XYPlot>
                    </div>
                    <div>
                        <h4>
                            sdfasdfs
                        </h4>
                    </div>
                </div>
            </div>
        );
    }
}

export default quickConnect(Statistics);