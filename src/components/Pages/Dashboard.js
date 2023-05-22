import React from 'react'

const Dashboard = () => {
    return (
        <div>
            <div class="text-center p-5">
                <h1 class="font-bold text-4xl mb-4">User Story and Story Point Guidance</h1>
            </div>

            <div class="text-left p-1 ml-16">
                <h1 class="font-bold text-2xl text-gray-400 mb-4">User Story Template</h1>
            </div>

            <section class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-2 mb-5">

                <div class="w-80 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                    <a href="#">
                        <div class="px-4 py-5 w-80">
                            <span class="text-gray-400 mr-3 uppercase text-xs">Type 01</span>
                            <p class="text-lg font-bold text-black truncate block ">As a <span className=' text-red-600'>&lt;who&gt;</span>,
                            </p>
                            <p class="text-lg font-bold text-black truncate block ">I want <span className=' text-red-600'>&lt;what (action)&gt;</span>,
                            </p>
                            <p class="text-lg font-bold text-black truncate block ">so that <span className=' text-red-600'>&lt;why (business value)&gt;</span>
                            </p>
                        </div>
                    </a>
                </div>
                <div class="w-80 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                    <a href="#">
                        <div class="px-4 py-3 w-80">
                            <span class="text-gray-400 mr-3 uppercase text-xs">Type 02</span>
                            <p class="text-lg font-bold text-black truncate block ">As a <span className=' text-red-600'>&lt;who&gt;</span>,
                            </p>
                            <p class="text-lg font-bold text-black truncate block ">I can <span className=' text-red-600'>&lt;what (action)&gt;</span>,
                            </p>
                            <p class="text-lg font-bold text-black truncate block ">so that <span className=' text-red-600'>&lt;why (business value)&gt;</span>
                            </p>
                        </div>
                    </a>
                </div>

                <div class="w-80 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                    <a href="#">
                        <div class="px-4 py-3 w-80">
                            <span class="text-gray-400 mr-3 uppercase text-xs">Type 02</span>
                            <p class="text-lg font-bold text-black truncate block ">As a <span className=' text-red-600'>&lt;who&gt;</span>,
                            </p>
                            <p class="text-lg font-bold text-black truncate block ">I need <span className=' text-red-600'>&lt;what (action)&gt;</span>,
                            </p>
                            <p class="text-lg font-bold text-black truncate block ">so that <span className=' text-red-600'>&lt;why (business value)&gt;</span>
                            </p>
                        </div>
                    </a>
                </div>
            </section>

            <div class="text-left p-1 ml-16">
                <h1 class="font-bold text-2xl text-gray-400 mb-4">Complete User Story</h1>
            </div>

            <section class=" px-12 w-fit mx-auto grid grid-cols-1 lg:grid-cols-1 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-2 mb-5">

                <div class=" bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                    <a href="#">
                        <div class="px-4 py-5 w-full">
                            <span class="text-gray-400 mr-3 uppercase text-xs">Type 01</span>
                            <p class="text-lg font-bold text-black  block ">Task Summary (Title)

                            </p>
                            <p class="text-lg font-bold  text-blue-800 mb-8  block ">Sync device data dump to the device table

                            </p>
                            <p class="text-lg font-bold text-black  block ">
                            User Story/Detail
                            </p>
                            <p class="text-lg font-bold text-blue-800 mb-8 block "> As a user, I should be able to add a device, view device, edit device, and view subscriber profile(details view) interfaces with proper integrations from the backend after the developer syncs the device d
                                ata dump to the device table. (Backend development is there.)
                            </p>
                            <p class="text-lg font-bold text-black  block ">
                            Acceptance Criteria
                            </p>
                            <p class="text-lg font-bold text-blue-800 mb-8 block "> Backend integrations should be properly done in order to view, edit, and delete data in the frontend. (some device configuration functionalities and subscriber profile functionalities)
                            </p>
                        </div>
                    </a>
                </div>
            </section>

        </div>
    )
}

export default Dashboard