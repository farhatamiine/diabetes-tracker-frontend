import React from 'react';
import {format} from 'date-fns'

type OverviewCardDataType = {
    title: String,
    icon: any
    value: String,
    units: String,
    event: String,
    dateOfEvent: Date
}

function OverviewCardData({title, dateOfEvent, icon, units, event, value}: OverviewCardDataType) {
    return (
        <div className="bg-white overflow-hidden border shadow  w-full">
            <div className="py-5 sm:px-6">
                <h2 className={"font-light text-xl text-black "}>{title.toUpperCase()}</h2>
            </div>
            <div className="px-4 py-5 sm:p-6 flex items-center justify-between">
                {icon}
                <div className={"items-end flex flex-col"}>
                    <div className={"flex items-end"}>
                        <p className={"text-3xl text-green-800 mr-1"}>{value.toString()}</p>
                        <span className={"text-gray-500 font-medium"}>{units}</span>
                    </div>
                    <p>{event}</p>
                </div>
            </div>
            <div className="px-4 py-4 sm:px-6 flex font-medium text-gray-600  bg-gray-100 justify-end" style={{
                marginTop: event === "" ? "12px" : 0
            }}>
                {format(dateOfEvent, "PPpp")}
            </div>
        </div>
    );
}

export default OverviewCardData;