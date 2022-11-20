import React, {useState} from 'react';
import {format} from "date-fns";
import {HiPencil, HiSave, HiTrash} from "react-icons/hi";
import {Button} from 'flowbite-react';
import {Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import { Combobox } from '@headlessui/react'
import ComboboxInput from "../Components/Combobox";

const SignupSchema = Yup.object().shape({
    dateOfGlucoseTest: Yup.date()
        .required('Required'),
    timeOfGlucoseTest: Yup.string()
        .required("end time cannot be empty"),
});
const people = [
    { id: 1, name: 'Wade Cooper' },
    { id: 2, name: 'Arlene Mccoy' },
    { id: 3, name: 'Devon Webb' },
    { id: 4, name: 'Tom Cook' },
    { id: 5, name: 'Tanya Fox' },
    { id: 6, name: 'Hellen Schmidt' },
]

function Logbook() {

    const [selected, setSelected] = useState(people[0])

    return (
        <>
            <div className="bg-white">
                <div className="mt-8 mx-8">
                    <div className={"grid grid-cols-12 gap-4"}>
                        <div className={"col-span-12 xl:cols-span-3 lg:col-span-4 md:col-span-12"}>
                            <div className={"bg-green-200 w-full shadow"}>
                                Hello
                            </div>
                        </div>
                        <div className={"col-span-12 md:col-span-12 xl:cols-span-8 lg:col-span-8"}>
                            <div className={"w-full  bg-white border border-gray-200 "}>
                                <div className={"bg-gray-100 flex justify-between items-center p-3"}>
                                    <Button.Group>
                                        <Button color="gray">
                                            <HiPencil className="mr-3 h-4 w-4"/>
                                            {' '}New Logbook Entry
                                        </Button>

                                        <Button color="gray">
                                            <HiSave className="mr-3 h-4 w-4"/>
                                            {' '}Save
                                        </Button>
                                        <Button color="gray" className={"bg-red-600 text-white ring-0"}>
                                            <HiTrash className="mr-3 h-4 w-4"/>
                                            {' '}Delete Entry
                                        </Button>
                                    </Button.Group>
                                    <div className={"date"}>
                                        <p>Creating new Entry : {format(new Date(), "dd/MM/yyyy hh:mm")}</p>
                                    </div>
                                </div>
                            </div>
                            <div className={"p-3 bg-white border"}>

                                <Formik
                                    initialValues={{
                                        dateOfGlucoseTest: '',
                                        timeOfGlucoseTest: '',
                                        category: '',
                                    }}
                                    validationSchema={SignupSchema}
                                    onSubmit={values => {
                                        // same shape as initial values
                                        console.log(values);
                                    }}
                                >
                                    {({errors, touched}) => (
                                        <Form className={"space-y-3"}>
                                            <div>
                                                <label htmlFor="dateOfGlucoseTest"
                                                       className="block mb-2 text-md font-medium text-gray-900 dark:text-white">Date of the test:</label>

                                                <Field name="dateOfGlucoseTest"
                                                       type={"date"}
                                                       className={"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}
                                                       placeholder="Chose a date"/>
                                                {errors.dateOfGlucoseTest && touched.dateOfGlucoseTest ? (
                                                    <div>{errors.dateOfGlucoseTest}</div>
                                                ) : null}
                                            </div>
                                            <div>
                                                <label htmlFor="timeOfGlucoseTest"
                                                       className="block mb-2 text-md font-medium text-gray-900 dark:text-white">Time of the test</label>
                                                <Field name="timeOfGlucoseTest"
                                                       type={"time"}
                                                       className={"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}
                                                       placeholder="name@flowbite.com"/>
                                                {errors.timeOfGlucoseTest && touched.timeOfGlucoseTest ? (
                                                    <div>{errors.timeOfGlucoseTest}</div>
                                                ) : null}
                                            </div>
                                            <div>
                                                <label htmlFor="Category"
                                                       className="block mb-2 text-md font-medium text-gray-900 dark:text-white">Category</label>
                                                <ComboboxInput name={"category"} selected={selected} setSelected={setSelected} comboboxItem={people} />
                                                {errors.category && touched.category ? <div>{errors.category}</div> : null}
                                            </div>
                                            <button type="submit">Submit</button>
                                        </Form>
                                    )}
                                </Formik>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Logbook;