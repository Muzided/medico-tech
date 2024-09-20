import { Button, Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react'
import { useState } from 'react'

export default function TermsAndCondition({ setFormData, isOpen, setIsOpen }) {

    function open() {
        setIsOpen(true)
    }

    function close() {
        setIsOpen(false)
    }

    return (
        <>


            <Transition appear show={isOpen}>
                <Dialog as="div" className="relative z-10 focus:outline-none" onClose={close}>
                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4">
                            <TransitionChild
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 transform-[scale(95%)]"
                                enterTo="opacity-100 transform-[scale(100%)]"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 transform-[scale(100%)]"
                                leaveTo="opacity-0 transform-[scale(95%)]"
                            >
                                <DialogPanel className="w-3/5 max-h-[70vh] overflow-y-scroll   rounded-xl bg-white/5 border border-secondary/40      p-6 backdrop-blur-2xl">
                                    <div className='px-8 '>
                                        <h1 className='text-5xl text-black text-center py-4 font-bold'> Privacy Policy</h1>
                                        <h1 className='py-4 font-bold text-xl'>Privacy Policy of the site medicotechllc.com</h1>
                                        <p>The administration of the site medicotechllc.com is committed to maintaining your privacy on the Internet. We attach great importance to protecting the data you provide. Our privacy policy is based on the requirements of the European Union General Data Protection Regulation (GDPR). The purposes for which we collect personal data: improving the operation of our service, contacting visitors to this site, providing services related to the activities of this site, as well as for the actions listed below.
                                        </p>
                                        <h1 className='py-4 font-bold text-xl'>Collection and use of personal data</h1>
                                        <p>We collect and use your personal data only with your voluntary consent. By agreeing to this, you authorize us to collect and use the following data: first and last name, email, phone number,. The collection and processing of your data is carried out in accordance with the laws in force in the European Union and the USA.
                                        </p>
                                        <h1 className='py-4 font-bold text-xl'>Data storage, modification and deletion</h1>
                                        <p>The user who provided his personal data to the site medicotechllc.com has the right to change and delete it, as well as to withdraw his consent to its use. Duration for which your personal data will be stored: the time necessary to use the data for the main activities of the site. When you finish using your data, the site administration deletes it. To access your personal data, you can contact the site administration at the following address: 4747 W Peterson, Chicago, IL 60646, info@medicotechllc.com.
                                        </p>
                                        <h1 className='py-4 font-bold text-xl'>Use of technical data when visiting the site</h1>
                                        <p>When you visit the website medicotechllc.com, records are stored in the database about your IP address, time of visit, browser settings, operating system, as well as other technical information necessary for the correct display of the site's content. Using this data, it is impossible for us to identify the visitor's identity.
                                        </p>
                                        <h1 className='py-4 font-bold text-xl'>Providing information by children</h1>
                                        <p>If you are a parent or guardian and you are aware that your children have provided us with personal information without your consent, please contact us: info@medicotechllc.com. It is prohibited to leave personal data of minors on our service without the consent of parents or guardians.
                                        </p>
                                        <h1 className='py-4 font-bold text-xl'>Use of cookies</h1>
                                        <p>To display the content correctly and for ease of use of the medicotechllc.com website, we use cookies. These are small files that are stored on your device. They help the site remember information about you, such as what language you are viewing the site in and what pages you have already opened, this information will be useful the next time you visit. Cookies make browsing the site much more convenient. You can read more about these files here. You can configure your browser to accept or block cookies yourself. Failure to accept cookies may limit the functionality of the site.
                                        </p>
                                        <h1 className='py-4 font-bold text-xl'>Use of personal data by other services</h1>
                                        <p>We do not <span className='bg-yellow-500 text-black'>share</span>, we do not sell, we do not disclose customer information with another party. You can read the user agreements of these organizations on their websites. There you can also refuse to collect personal data from them, for example, the Google Analytics blocker is here, the Yandex Metrics
                                        </p>
                                        <h1 className='py-4 font-bold text-xl'>Links to other sites</h1>
                                        <p>Our website medicotechllc.com may contain links to other websites that are not operated by us. We are not responsible for their content. We encourage you to read the privacy policy of each website you visit, if it has one.
                                        </p>
                                        <h1 className='py-4 font-bold text-xl'>Changes to the privacy policy</h1>
                                        <p>Our website medicotechllc.com may update our privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page. We monitor changes in legislation regarding personal data in the European Union and the USA. If you have left personal information with us, we will notify you of changes to the privacy policy. If your personal data was entered incorrectly, we will not be able to contact you.
                                        </p>
                                        <h1 className='py-4 font-bold text-xl'>Feedback, final provisions</h1>
                                        <p>You can contact the administration of the site medicotechllc.com on issues related to the privacy policy at: info@medicotechllc.com, or using the contact form specified in the corresponding section of this site. If you do not agree with this privacy policy, you cannot use the services of the
                                            medicotechllc.com website in which case you should refrain from viciting                 </p>

                                    </div>
                                    <div className='flex justify-center gap-5 py-4'>
                                        <div className="mt-4">
                                            <Button
                                                className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
                                                onClick={() => {
                                                    close(); 
                                                    setFormData((prevData) => ({
                                                        ...prevData,
                                                        terms_and_condition: true
                                                    }));

                                                 }}
                                            >
                                                Yes, I agree
                                            </Button>
                                        </div>
                                        <div className="mt-4">
                                            <Button
                                                className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
                                                onClick={() => { close();  setFormData((prevData) => ({
                                                    ...prevData,
                                                    terms_and_condition: false
                                                })); }}
                                            >
                                                No, I don't
                                            </Button>
                                        </div>
                                    </div>

                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}