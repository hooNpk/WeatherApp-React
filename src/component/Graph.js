import React from 'react';
import BillboardChart from "react-billboardjs";
import "react-billboardjs/lib/billboard.css";

export default class LineChart extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            CHART_DATA : {
                columns : 
                [
                    props.weather.temp,
                ],
                type : "line"
            },
            
            SIZE : {
                height : 200,
                width : 750           
            },

            AXIS : {
                x : {
                    type : "category",
                    categories : [
                        "PM 3",
                        "PM 6",
                        "PM 9",
                        "AM 0",
                        "AM 3",
                        "AM 6",
                        "AM 9",
                        "PM 12",
                        "PM 3"
                    ]
                },
                y:{
                    show : false
                }
            },

            COLOR : {
                pattern : ["#ff0000"],
                onover : "#bb1111",
            },
            
            LEGEND : {
                show : false
            }
        }
    }
    // 이 부분 프로퍼티 받아서 바로 처리해버리
    
    componentDidUpdate(prevProps){
        if(this.props.weather !== prevProps.weather){
            this.setState({
                CHART_DATA : {
                    columns : 
                    [
                        this.props.weather.temp
                    ],
                    type: "line"
                }
            });
        }
    }

    render(){
        console.log("Graph Render"+this.state.CHART_DATA.columns);
        return(
            <BillboardChart
                data={this.state.CHART_DATA}
                size={this.state.SIZE}
                axis={this.state.AXIS}
                color={this.state.COLOR}
                legend={this.state.LEGEND}
                className="my-3 justify-content-center"    
            >
            </BillboardChart>
        )
    }
}