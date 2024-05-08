import React, { useState } from 'react';
import Fade, { Slide } from 'react-awesome-reveal';
import InformationModal from './InformationModal';
const InformationCards = () => {
    const cards = [
        {
            id: 1,
            title: 'Phishing Prevention Playbook: How to Spot and Avoid Online Scams',
            description: 'Empowering Internet Users to Safeguard Against Fraudulent Websites',
            imageUrl: '/assets/istockphoto-1346734927-612x612.jpg', // replace with actual path
            buttonLabel: 'Read More'
        },
        {
            id: 2,
            title: 'Safeguarding Investments: A Guide to Spotting Scams',
            description: 'Empowering Investors to Detect Deception, Protect Wealth, and Achieve Steady Growth',
            imageUrl: '/assets/case2.jpg', // replace with actual path
            buttonLabel: 'Read More'
        },
        {
            id: 3,
            title: 'Navigating Online Romance Safely: A Guide to Avoiding Scams',
            description: 'Empowering Hearts to Find Love While Dodging Deception',
            imageUrl: '/assets/case3.jpg', // replace with actual path
            buttonLabel: 'Read More'
        }
    ];

    const TipSet = [
        [

            // Add more items as needed
            { id: 1, title: "Check the Sender's Details", description: "Always examine the sender's email address or contact information carefully. Many phishing attempts use email addresses that resemble those from reputable companies but often have small typos or different domains." },
            { id: 2, title: "Look for Urgency or Threats", description: "Phishers often create a sense of urgency or use threats to prompt a hasty response. Be wary of emails or messages that pressure you to act quickly to verify your account or update your information." },
            { id: 3, title: "Avoid Clicking on Unsolicited Links", description: "If you receive a link in an unexpected email or message, do not click on it directly. Instead, go to the website by typing the URL directly into your browser or using a bookmark you have previously saved." },
            { id: 4, title: "Use Multi-Factor Authentication", description: "Enable multi-factor authentication (MFA) on all accounts that support it. MFA adds an additional layer of security by requiring two or more credentials to log in, which makes it harder for phishers to gain access to your information." }

        ],
        [
            { id: 1, title: "Check the Sender's Details ", description: "Always examine the sender's email address or contact information carefully. Many phishing attempts use email addresses that resemble those from reputable companies but often have small typos or different domains." },
            { id: 2, title: "Look for Urgency or Threats", description: "Phishers often create a sense of urgency or use threats to prompt a hasty response. Be wary of emails or messages that pressure you to act quickly to verify your account or update your information." },
            { id: 3, title: "Avoid Clicking on Unsolicited Links", description: "If you receive a link in an unexpected email or message, do not click on it directly. Instead, go to the website by typing the URL directly into your browser or using a bookmark you have previously saved." },
            { id: 4, title: "Use Multi-Factor Authentication", description: "Enable multi-factor authentication (MFA) on all accounts that support it. MFA adds an additional layer of security by requiring two or more credentials to log in, which makes it harder for phishers to gain access to your information." },

            // Add more items as needed
        ],
        [
            { id: 1, title: "Verify Their Identity", description: "Make sure the person you're communicating with is who they say they are. You can ask them to video chat, or check their social media profiles to ensure their online presence matches what they tell you." },
            { id: 2, title: "Be Cautious with Personal Information", description: "Avoid sharing too much personal information early on. Scammers can use details like your address, birthdate, and social security number to steal your identity." },
            { id: 3, title: "Watch for Love Bombing", description: "Be wary of someone who expresses strong emotions or makes grand romantic gestures quickly without ever meeting you. This can be a tactic to manipulate you." },
            { id: 4, title: "Never Send Money", description: "Do not send money or provide your financial details to someone you've only met online, no matter how convincing their story might be." },
        ]
        // Add more sets as needed
    ];

    const [modalContent, setModalContent] = useState('');
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = (index) => {
        setModalContent(TipSet[index]); // Set content based on index
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };


    return (
        <div className='min-h-screen flex flex-col justify-center items-center mt-10'>
            <div className="container mx-auto px-4">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold uppercase mb-5 text-green-400">Anti-Scam Guidance</h1>
                    <hr className={`border-b-2`} />
                </div>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">

                    {cards.map((card, index) => (

                        < Fade cascade={false} delay={index * 500} direction="up" >

                            <div key={card.id} className=" text-black p-4 rounded shadow-lg h-full">

                                < img className="w-full" src={`${card.imageUrl}`} alt="Image description" />
                                <div className="px-6 py-4 flex flex-col">
                                    <div className="font-bold text-xl mb-2">
                                        <span>
                                            {card.title}
                                        </span>
                                    </div>
                                    <div>
                                        <p className="text-gray-700 text-base">{card.description}</p>
                                    </div>

                                </div>
                                <div className="px-6 pt-4 pb-2">
                                    <button
                                        className='transition-transform duration-300 transform hover:scale-110 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'
                                        onClick={() => openModal(index)}
                                    >
                                        Read more
                                    </button>
                                </div>


                            </div>
                        </Fade>
                    ))}
                    <InformationModal isOpen={isModalOpen} content={modalContent} closeModal={closeModal} />


                </div>
            </div >
        </div >

    );
};

export default InformationCards;
