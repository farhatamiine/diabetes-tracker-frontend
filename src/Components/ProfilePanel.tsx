import React, {Dispatch, Fragment, SetStateAction} from 'react';
import {Dialog, Transition} from "@headlessui/react";
import {HeartIcon, XIcon} from "@heroicons/react/outline";
import {PencilIcon, PlusSmIcon} from "@heroicons/react/solid";
import {useSelector} from "react-redux";
import {selectUserProfile} from "../redux/features/user/userSlice";

type ProfilePanelType = {
    setOpen: Dispatch<SetStateAction<boolean>>,
    open: boolean
}


function ProfilePanel({setOpen, open}: ProfilePanelType) {
    const authenticatedUser = useSelector(selectUserProfile)
    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="fixed inset-0 z-50 overflow-hidden" onClose={setOpen}>
                <div className="absolute inset-0 overflow-hidden">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-in-out duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"/>
                    </Transition.Child>
                    <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                        <Transition.Child
                            as={Fragment}
                            enter="transform transition ease-in-out duration-500 sm:duration-700"
                            enterFrom="translate-x-full"
                            enterTo="translate-x-0"
                            leave="transform transition ease-in-out duration-500 sm:duration-700"
                            leaveFrom="translate-x-0"
                            leaveTo="translate-x-full"
                        >
                            <div className="pointer-events-auto relative w-96">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-in-out duration-500"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in-out duration-500"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                                        <button
                                            type="button"
                                            className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                                            onClick={() => setOpen(false)}
                                        >
                                            <span className="sr-only">Close panel</span>
                                            <XIcon className="h-6 w-6" aria-hidden="true"/>
                                        </button>
                                    </div>
                                </Transition.Child>
                                <div className="h-full overflow-y-auto bg-white p-8">
                                    <div className="space-y-6 pb-16">
                                        <div>
                                            <div
                                                className="h-40 w-40 mx-auto rounded-full block w-full overflow-hidden rounded-lg ">
                                                <img
                                                    src="https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80"
                                                    alt=""
                                                    className="object-cover hover:bg-gray-100"
                                                />
                                            </div>
                                            <div className="mt-4 flex items-center justify-center">
                                                <div>
                                                    <h2 className="text-lg font-medium text-gray-900">
                                                        <span className="sr-only">Username is</span> {authenticatedUser.username.toUpperCase()}
                                                    </h2>
                                                </div>

                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-gray-900">User Information</h3>
                                            <dl className="mt-2 divide-y divide-gray-200 border-t border-b border-gray-200">
                                                <div className="flex justify-between py-3 text-sm font-medium">
                                                    <dt className="text-gray-500">Full Name</dt>
                                                    <dd className="text-gray-900">{authenticatedUser.firstName} {authenticatedUser.lastName}</dd>
                                                </div>
                                                <div className="flex justify-between py-3 text-sm font-medium">
                                                    <dt className="text-gray-500">Email</dt>
                                                    <dd className="text-gray-900">{authenticatedUser.email}</dd>
                                                </div>
                                                <div className="flex justify-between py-3 text-sm font-medium">
                                                    <dt className="text-gray-500">Country</dt>
                                                    <dd className="text-gray-900">{authenticatedUser.country}</dd>
                                                </div>
                                                <div className="flex justify-between py-3 text-sm font-medium">
                                                    <dt className="text-gray-500">Date of birth</dt>
                                                    <dd className="text-gray-900">{authenticatedUser.yearsOfBirth}</dd>
                                                </div>
                                            </dl>
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-gray-900">About me</h3>
                                            <div className="mt-2 flex items-center justify-between">
                                                <p className="text-sm italic text-gray-500">Add a description to
                                                    this image.</p>
                                                <button
                                                    type="button"
                                                    className="-mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                                >
                                                    <PencilIcon className="h-5 w-5" aria-hidden="true"/>
                                                    <span className="sr-only">Add description</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
}

export default ProfilePanel;