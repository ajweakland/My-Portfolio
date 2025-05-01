import { useState } from 'react';


export default function ProjectDisplay() {

    const [currentImageIndexIM, setCurrentImageIndexIM] = useState(0);
    const [currentImageIndexHW, setCurrentImageIndexHW] = useState(0);

    const imillerImages = [
        "assets/imillerExample.png",
        "assets/imillerExample2.png",
        "assets/imillerExample3.png",
    ];

    const healingWaysImages = [
        "assets/HWEx1.png",
        "assets/HWEx2.png",
        "assets/HWEx3.png",
        "assets/HWEx4.png",
        "assets/HWEx5.png"
    ];

    // Function to change the image in the project slideshows.
    const changeImage = (index, project) => {
        if (project === 'imiller') {
            setCurrentImageIndexIM(index);
        } else if (project === 'healingWays') {
            setCurrentImageIndexHW(index);
        }
    };


    return (
        <div className="max-w-7xl mx-auto px-6" >
            <h2 className="text-3xl font-semibold mb-8">My Portfolio</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">

                <div className="bg-[#2C2C2C] rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-all duration-300">
                    {/* Slideshow Image */}
                    <div className="relative w-full">
                        <img
                            src={healingWaysImages[currentImageIndexHW]}
                            alt="Healing Ways"
                            className="w-full h-96 object-cover"
                        />
                        <div className="absolute bottom-1 w-full flex justify-between space-x-4">
                            <button
                                className="text-black p-2"
                                onClick={() => changeImage((currentImageIndexHW - 1 + healingWaysImages.length) % healingWaysImages.length, 'healingWays')}
                            >
                                &lt;
                            </button>
                            <button
                                className="text-black p-2"
                                onClick={() => changeImage((currentImageIndexHW + 1) % healingWaysImages.length, 'healingWays')}
                            >
                                &gt;
                            </button>
                        </div>
                    </div>
                    <div className="p-4">
                        <h3 className="font-semibold text-lg mb-2">Healing Ways</h3>

                        <div className="flex flex-wrap gap-2 mt-2 mb-2">
                            <span className="text-xs text-white bg-[#4A4A4A] px-3 py-1 rounded-full hover:scale-110 transition-all duration-300">React.js</span>
                            <span className="text-xs text-white bg-[#4A4A4A] px-3 py-1 rounded-full hover:scale-110 transition-all duration-300">TailwindCSS</span>
                            <span className="text-xs text-white bg-[#4A4A4A] px-3 py-1 rounded-full hover:scale-110 transition-all duration-300">Next.js</span>
                            <span className="text-xs text-white bg-[#4A4A4A] px-3 py-1 rounded-full hover:scale-110 transition-all duration-300">Vite</span>
                        </div>

                        <p className="text-xs text-gray-300">This project was born after noticing that my mom's therapist website was not mobile-friendly, and clients had difficulty finding the portal page to schedule appointments. The layout and color choices made it hard to easily access essential information, like therapist contact details. To solve these issues, I revamped the website using React, TailwindCSS, Next.js, and Vite, enhancing its accessibility and user-friendliness.</p>
                        <p className="text-xs text-gray-300 pt-3">Key improvements include the placement of "Client Portal" and "Contact Us" buttons at the top of the header for immediate access, as well as the addition of a "Meet Our Team" section on the homepage. These additions significantly improve user experience and provide valuable features for a small business.</p>
                        <p className="text-xs text-gray-300 pt-3">Looking ahead, I plan to add a CMS system that will allow the website administrators to easily update content, modify colors, and remove a therapist if needed. Additionally, I aim to scale this system to other small businesses in the future, offering an affordable and customizable solution to help them manage their websites efficiently.</p>
                        <p className="text-xs text-gray-300 pt-3">I plan to upload the project framework to GitHub in the future, once sensitive information is removed.</p>

                    </div>
                </div>

                <div className="bg-[#2C2C2C] rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-all duration-300">
                    {/* Slideshow Image */}
                    <div className="relative w-full">
                        <img
                            src={imillerImages[currentImageIndexIM]}
                            alt="iMiller Project"
                            className="w-full h-96 object-cover"
                        />
                        <div className="absolute bottom-1 w-full flex justify-between space-x-4">
                            <button
                                className="text-black p-2"
                                onClick={() => changeImage((currentImageIndexIM - 1 + imillerImages.length) % imillerImages.length, 'imiller')}
                            >
                                &lt;
                            </button>
                            <button
                                className="text-black p-2"
                                onClick={() => changeImage((currentImageIndexIM + 1) % imillerImages.length, 'imiller')}
                            >
                                &gt;
                            </button>
                        </div>
                    </div>
                    <div className="p-4">
                        <h3 className="font-semibold text-lg mb-2">iMiller</h3>

                        <div className="flex flex-wrap gap-1 mt-2 mb-2">
                            <span className="text-xs text-white bg-[#4A4A4A] px-3 py-1 rounded-full hover:scale-110 transition-all duration-300">React.js</span>
                            <span className="text-xs text-white bg-[#4A4A4A] px-3 py-1 rounded-full hover:scale-110 transition-all duration-300">Ethers.js</span>
                            <span className="text-xs text-white bg-[#4A4A4A] px-3 py-1 rounded-full hover:scale-110 transition-all duration-300">Solidity</span>
                            <span className="text-xs text-white bg-[#4A4A4A] px-3 py-1 rounded-full hover:scale-110 transition-all duration-300">Blockchain</span>
                            <span className="text-xs text-white bg-[#4A4A4A] px-3 py-1 rounded-full hover:scale-110 transition-all duration-300">ERC721A</span>
                        </div>

                        <p className="text-xs text-gray-300">Developed and deployed a custom ERC721A Solidity smart contract to facilitate secure crypto payments, enabling users to claim and purchase clothing items using digital assets. The project was built with scalability in mind, allowing for future releases of new items to NFT holders seamlessly.</p>
                        <p className="text-xs text-gray-300 pt-3">The React.js storefront was fully integrated with the ERC721A smart contract and Ethers.js, creating an intuitive and dynamic user experience. A gallery page was implemented to display the available clothing items that could be claimed, each linked to a corresponding NFT. The platform also supported continuous releases of exclusive items to holders, making the system flexible and adaptable.</p>
                        <p className="text-xs text-gray-300 pt-3 pb-5">This project went beyond a simple contract and e-commerce site, combining secure blockchain technology, dynamic item releases, and a clean, user-friendly interface matching the projects theme to enhance the purchasing experience with NFTs.</p>

                        <a href="https://github.com/ajweakland/iMiller" target="_blank" className="hover:text-white inline-block" rel="noopener noreferrer" title="GitHub">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-github size-5"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                        </a>
                    </div>
                </div>

            </div>
        </div >
    );
}