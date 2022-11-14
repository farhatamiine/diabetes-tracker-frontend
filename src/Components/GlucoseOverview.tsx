import React from 'react';
import {ArrowLeftOutline, ArrowRightOutline} from "heroicons-react";
import {Pie} from "@nivo/pie";
import {lineData, pieData} from "../Data/PieData";
import {ResponsiveLine} from '@nivo/line'
import OverviewCardData from "./OverviewCardData";
// @ts-ignore
import {ReactComponent as Cardiogram} from '../assets/cardiogram.svg'
// @ts-ignore
import {ReactComponent as Run} from '../assets/exercise_running.svg'
// @ts-ignore
import {ReactComponent as BloodPressure} from '../assets/blood_pressure_2.svg'
// @ts-ignore
import {ReactComponent as HotMeal} from '../assets/hot_meal.svg'
// @ts-ignore
import {ReactComponent as Syringe} from '../assets/syringe.svg'
// @ts-ignore
import {ReactComponent as Diabetes} from '../assets/diabetes.svg'


const CenteredMetric = ({dataWithArc, centerX, centerY}: any) => {
    let total = 0
    dataWithArc.forEach((datum: any) => {
        total += datum.value
    })

    return (
        <>
            <text
                x={centerX}
                y={centerY - 40}
                textAnchor="middle"
                dominantBaseline="central"
                style={{
                    fontSize: '20px',
                    fontWeight: "lighter",
                }}
            >
                AVG
            </text>
            <text
                x={centerX}
                y={centerY}
                textAnchor="middle"
                dominantBaseline="central"
                style={{
                    fontSize: '40px',
                    fontWeight: 300,
                }}
            >
                {total * 10}
            </text>
            <text
                x={centerX}
                y={centerY + 40}
                textAnchor="middle"
                dominantBaseline="central"
                style={{
                    fontSize: '20px',
                    fontWeight: "lighter",
                }}
            >
                mg/dl
            </text>
        </>
    )
}

function GlucoseOverview() {
    // @ts-ignore
    return (
        <div className="overflow-hidden  sm:rounded-lg">
            <div className="border mb-4 sm:p-6">
                <div className={"flex justify-between items-center flex-col md:flex-row"}>
                    <h2 className={"font-medium text-xl text-black"}>Glucose overview</h2>
                    <div className={"flex items-center space-x-2 flex-col md:flex-row"}>
                        <p className={"font-medium"}>30 days</p>
                        <button
                            className={"hover:bg-cyan-700 text-white md:text-lg text-sm shadow rounded bg-cyan-500 p-3"}>15
                            october
                            2022 - 13 november 2022
                        </button>
                        <button className={"hover:bg-cyan-700 text-white shadow rounded bg-cyan-500 p-3"}>
                            <ArrowLeftOutline/>
                        </button>
                        <button className={"hover:bg-cyan-700 text-white shadow rounded bg-cyan-500 p-3"}>
                            <ArrowRightOutline/>
                        </button>
                    </div>
                </div>
                <div className={"flex justify-between items-center mt-5 gap-4 flex-col md:flex-row"}>
                    <div className={"border "}>
                        <Pie
                            data={pieData}
                            innerRadius={0.65}
                            padAngle={1}
                            fit={true}
                            cornerRadius={0}
                            legends={[
                                {
                                    anchor: 'bottom',
                                    direction: 'row',
                                    justify: false,
                                    translateX: 0,
                                    translateY: 56,
                                    itemsSpacing: 0,
                                    itemWidth: 100,
                                    itemHeight: 18,
                                    itemTextColor: '#999',
                                    itemDirection: 'left-to-right',
                                    itemOpacity: 1,
                                    symbolSize: 18,
                                    symbolShape: 'circle',
                                    effects: [
                                        {
                                            on: 'hover',
                                            style: {
                                                itemTextColor: '#000'
                                            }
                                        }
                                    ]
                                },
                            ]}
                            activeOuterRadiusOffset={8}
                            borderWidth={4}
                            margin={{top: 40, right: 80, bottom: 80, left: 80}}
                            borderColor={{from: "color", modifiers: [["darker", 0.2]]}}
                            arcLabelsSkipAngle={10}
                            layers={['arcs', 'arcLabels', 'legends', CenteredMetric]}
                            height={400}
                            width={400}
                        />
                    </div>
                    <div className={""}>
                        <ResponsiveLine
                            data={lineData}
                            xScale={{type: 'point'}}
                            margin={{top: 50, right: 110, bottom: 50, left: 60}}
                            animate={true}
                            yScale={{
                                type: 'linear',
                                min: 'auto',
                                max: 'auto',
                                stacked: true,
                                reverse: false
                            }}
                            yFormat=" >-.2f"
                            axisTop={null}
                            axisRight={null}
                            pointSize={10}
                            pointColor={{theme: 'background'}}
                            pointBorderWidth={2}
                            pointBorderColor={{from: 'serieColor'}}
                            pointLabelYOffset={-12}
                            useMesh={true}
                            legends={[
                                {
                                    anchor: 'bottom-right',
                                    direction: 'column',
                                    justify: false,
                                    translateX: 100,
                                    translateY: 0,
                                    itemsSpacing: 0,
                                    itemDirection: 'left-to-right',
                                    itemWidth: 80,
                                    itemHeight: 20,
                                    itemOpacity: 0.75,
                                    symbolSize: 12,
                                    symbolShape: 'circle',
                                    symbolBorderColor: 'rgba(0, 0, 0, .5)',
                                    effects: [
                                        {
                                            on: 'hover',
                                            style: {
                                                itemBackground: 'rgba(0, 0, 0, .03)',
                                                itemOpacity: 1
                                            }
                                        }
                                    ]
                                }
                            ]}
                        />
                    </div>
                </div>
            </div>
            <div className={"grid grid-cols-1 gap-4  xl:grid-cols-3 lg:grid-cols-2"}>
                <OverviewCardData event={"Bedtime"}
                                  title={"Latest glucose"}
                                  dateOfEvent={new Date()}
                                  value={"101"}
                                  icon={<Diabetes className={"text-cyan-600"} size={50}/>}
                                  units={"mg/dl"}/>
                <OverviewCardData event={"NovoMix 30"}
                                  title={"Latest medication"}
                                  dateOfEvent={new Date()}
                                  value={"25.0"}
                                  icon={<Syringe className={"text-cyan-600"} size={50}/>}
                                  units={"units"}/>
                <OverviewCardData event={"Swimming"}
                                  title={"Latest activity"}
                                  dateOfEvent={new Date()}
                                  value={"120"}
                                  icon={<Run className={"text-cyan-600"} size={50}/>}
                                  units={"min"}/>
                <OverviewCardData event={"Medium GI"}
                                  title={"Latest meal"}
                                  dateOfEvent={new Date()}
                                  value={"120"}
                                  icon={<HotMeal className={"text-cyan-600"} size={50}/>}
                                  units={"carbs (g)"}/>
                <OverviewCardData event={"Medium GI"}
                                  title={"Latest blood pressure"}
                                  dateOfEvent={new Date()}
                                  value={"80/30"}
                                  icon={<BloodPressure className={"text-cyan-600"} size={50}/>}
                                  units={"mmHg"}/>
                <OverviewCardData event={""}
                                  title={"Latest HbA1c"}
                                  dateOfEvent={new Date()}
                                  value={"120"}
                                  icon={<Cardiogram className={"text-cyan-600"}/>}
                                  units={"%"}/>

            </div>
        </div>
    );
}

export default GlucoseOverview;