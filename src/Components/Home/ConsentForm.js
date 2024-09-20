import React, { useState } from 'react'
import { FaCheck } from "react-icons/fa6";
import {
    CitySelect,
    CountrySelect,
    StateSelect,
} from "react-country-state-city";
import "./Form.css"
import TermsAndCondition from '../Modals/TermsAndCondition';
import { Checkbox } from '@headlessui/react';
import toast, { Toaster } from 'react-hot-toast';
import { optForMessages } from '../../Services/Server/api';
const ConsentForm = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [countryid, setCountryid] = useState(0);
    const [stateid, setstateid] = useState(0);
    const [checked, setChecked] = useState(false)
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        email: "",
        phone_number: "",
        city: {
            name: "",
            id: ""
        },
        state: {
            name: "",
            id: ""
        },
        country: {
            name: "",
            id: ""
        },
        authorized: "",
        terms_and_condition: "",
        send_text_message: false
    })
    const handleSubmit = () => {
        if (!formData?.terms_and_condition) return toast.error("please accept terms and conditions")
        if (!formData?.country?.name || !formData?.state?.name || formData?.send_text_message == false) return toast.error("please fill out all the information")
        setLoading(true)
        optForMessages(formData.email, formData.phone_number, formData.country.name, formData.state.name, formData.authorized, setLoading)
        
    }

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value
        }));
    };
    console.log("form-data", formData)
    return (
        <div className=' px-8 xl:px-28 py-12 bg-gray-500/5    '>
            
            <div className='grid grid-cols-1 lg:grid-cols-3  '>
                
                <div className='col-span-1 lg:col-span-2 flex flex-col py-6 lg:py-0 space-y-2 items-center justify-center'>
                <p className='pb-4 text-3xl font-bold    tracking-widest text-black/80'> Let's Talk To Us </p>
                    <h1 className='text-xl md:text-4xl lg:text-5xl text-black font-bold'>Get <span className='bg-secondary text-white px-2 rounded-md'>Exclusive</span> Updates via Text</h1>
                    <p className='pt-4 font-medium text-sm flex items-center gap-2'><span><FaCheck className='text-green-700' /></span> Be the first to know about exclusive offers and updates. Subscribe now for instant access</p>
                    <p className=' font-medium text-sm flex items-center gap-2'> <span className='text-green-700'><FaCheck /></span> Receive personalized updates and offers tailored just for you. Opt in for text messages now!</p>
                </div>
                <form className="col-span-1 bg-[#14151B]/10 px-4 py-4 rounded-md border border-secondary/40 drop-shadow-lg" onSubmit={(e) => { e.preventDefault(); handleSubmit() }}>
                
                    <div class="md:col-span-6 flex flex-col space-y-2 mt-2 ">
                        <label for="email" className='font-semibold text-base'>Email* </label>
                        <input required onChange={handleChange} type="text" name="email" id="email" class="h-10 border mt-1 rounded px-4 w-full text-gray-800 bg-gray-50" value={formData?.email} placeholder="Enter here" />
                    </div>
                    <div class="md:col-span-6 flex flex-col space-y-2 mt-2 ">
                        <label for="phone_number" className='font-semibold text-base'>Phone Number* </label>
                        <input required onChange={handleChange} type="text" name="phone_number" id="phone_number" class="h-10 border mt-1 rounded px-4 w-full text-gray-800 bg-gray-50" value={formData?.phone_number} placeholder="enter here" />
                    </div>
                    <div class="md:col-span-2 flex flex-col space-y-2 mt-2">
                        <label for="country" className='font-semibold text-base'>Country / region</label>
                        <CountrySelect
                            containerClassName="text-white"
                            inputClassName="text-white"
                            onChange={(e) => {

                                const country = {
                                    "name": e.name,
                                    "id": e.id
                                }
                                setFormData((prevData) => ({
                                    ...prevData,
                                    country: country
                                }));
                                setCountryid(0)
                                setstateid(0)
                                setCountryid(e.id);

                            }}
                            placeHolder="Select Country"
                        />
                    </div>
                    {/* state */}
                    <div class="md:col-span-2 flex flex-col k space-y-2 mt-2">
                        <label for="state" className='font-semibold  text-base'>State / province</label>
                        <StateSelect
                            required
                            className="mt-2 p-2 border rounded"
                            countryid={countryid}
                            onChange={(e) => {

                                const state = {
                                    "name": e.name,
                                    "id": e.id
                                }
                                setFormData((prevData) => ({
                                    ...prevData,
                                    state: state
                                }));
                                setstateid(e.id);
                            }}
                            placeHolder="Select State"
                        />
                    </div>
                    {formData?.state?.name !== "" &&
                        <div className="md:col-span-6 flex flex-col space-y-2 mt-2 ">
                            <label htmlFor="authorized" className='font-semibold text-base'>Are you authorized to work in {formData?.state?.name} ? </label>
                            <select
                                required
                                onChange={handleChange}
                                id="authorized"
                                className="h-10 border mt-1 rounded px-4 w-full text-gray-800 bg-gray-50"
                                value={formData?.authorized}
                            >
                                <option value="">Select an option</option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                    }
                    <div className='flex gap-2 items-center py-2'>
                        <input type='checkbox' checked={formData?.terms_and_condition} onClick={() => { setIsOpen(!isOpen) }} />
                        <button className='' >Accept the terms and conditions</button>

                    </div>
                    <div className='flex gap-2 items-center py-2'>
                        <input type='checkbox' checked={formData?.send_text_message} onClick={() => {
                            setFormData((prevData) => ({
                                ...prevData,
                                send_text_message: !formData.send_text_message
                            }));
                        }} />
                        <button className='' >Opt me in for text messages</button>

                    </div>
                    <button
                        id='submit'
                        type='submit' className={` ${loading ? 'animate-pulse' : 'animate-none'} bg-secondary w-full rounded-md py-1.5 text-xl text-white font-semibold`}>Submit</button>



                </form>
            </div>
            <TermsAndCondition
                setFormData={setFormData}
                isOpen={isOpen}
                setIsOpen={setIsOpen} />
            <Toaster
                toastOptions={{
                    success: {
                        style: {
                            background: '#22223b',
                            color: 'white'

                        },
                    },
                    loading: {
                        style: {
                            background: '#22223b',
                            color: 'white'

                        },
                    },
                    error: {
                        style: {
                            background: '#22223b',
                            color: 'white'
                        },
                    },
                }}
            />
        </div>
    )
}

export default ConsentForm
