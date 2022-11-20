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