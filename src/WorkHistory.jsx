import { useState } from 'react';

export default function WorkHistory() {

  // State to track which tab is active - work or education. 
  const [activeTab, setActiveTab] = useState('work');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="bg-[#1A1A1A] text-white py-16">
      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-8">
        <button
          className={`px-6 py-2 rounded-lg text-lg font-medium transition-all ${activeTab === 'work' ? 'bg-gradient-to-r from-[#1A1A1A] via-[#222222] to-[#D9D9D9] bg-[length:200%_100%] animate-gradient-x' : 'bg-gray-700 text-gray-400'}`}
          onClick={() => handleTabClick('work')}
        >
          Work
        </button>
        <button
          className={`px-6 py-2 rounded-lg text-lg font-medium transition-all ${activeTab === 'education' ? 'bg-gradient-to-r from-[#1A1A1A] via-[#222222] to-[#D9D9D9] bg-[length:200%_100%] animate-gradient-x' : 'bg-gray-700 text-gray-400'}`}
          onClick={() => handleTabClick('education')}
        >
          Education
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === 'work' && (
        <div className="space-y-10 flex flex-col max-w-7xl mx-auto">
          {/* Work Experience 1 */}
          <div className="flex items-center space-x-8">
            <div className="relative w-20 md:flex-shrink-0">
              <img
                src="assets/TWGlogo.png"
                alt="TWG"
                className="rounded-full object-contain w-full border-4 border-gray-700 hidden md:block"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center space-x-4">
                <h3 className="text-2xl font-semibold">The Wittern Group</h3>
                <div className='flex flex-col'>
                  <p className="text-md text-gray-400 pt-2">Senior Software Engineer</p>
                  <p className="text-xs text-gray-400">JAN 2023 - PRESENT</p>
                </div>
              </div>

              {/* Technology Tags */}
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="text-xs text-white bg-[#4A4A4A] px-3 py-1 rounded-full hover:scale-110 transition-all duration-300">Project Management</span>
                <span className="text-xs text-white bg-[#4A4A4A] px-3 py-1 rounded-full hover:scale-110 transition-all duration-300">Python</span>
                <span className="text-xs text-white bg-[#4A4A4A] px-3 py-1 rounded-full hover:scale-110 transition-all duration-300">C++</span>
                <span className="text-xs text-white bg-[#4A4A4A] px-3 py-1 rounded-full hover:scale-110 transition-all duration-300">UI/UX Design</span>
                <span className="text-xs text-white bg-[#4A4A4A] px-3 py-1 rounded-full hover:scale-110 transition-all duration-300">SQL</span>
                <span className="text-xs text-white bg-[#4A4A4A] px-3 py-1 rounded-full hover:scale-110 transition-all duration-300">QT</span>
                <span className="text-xs text-white bg-[#4A4A4A] px-3 py-1 rounded-full hover:scale-110 transition-all duration-300">APIs</span>
              </div>

              <ul className="list-disc md:ml-6 mt-2 text-sm text-gray-300">
                <li className='pb-1'> <p className="font-bold underline">Product Development & Modernization: </p> Led development for consumer-facing products using C++ and Python, with an emphasis on scalability, modernization, accessibility and UI/UX design. Managed the full lifecycle from concept to development and successful rollout, ensuring high-quality code and seamless user experiences.</li>
                <li className='pb-1'> <p className="font-bold underline">Primary Developer & Integrator:</p> Led software development and hardware integration for key projects, ensuring reliable solutions and addressing operational challenges, particularly during staff shortages.</li>
                <li className='pb-1'> <p className="font-bold underline">Mentorship and Methodology:</p> Trained new software engineers and advocated for standard methodologies like pair programming and agile practices, improving team collaboration and overall project efficiency.</li>
                <li className='pb-1'> <p className="font-bold underline">Efficient Project Execution:</p> Consistently delivered projects ahead of schedule by applying best development practices and optimizing timelines, ensuring high-quality code in time-sensitive projects.</li>
              </ul>
            </div>
          </div>

          {/* Work Experience 2 */}
          <div className="flex items-center space-x-8">
            <div className="relative w-20 md:flex-shrink-0">
              <img
                src="assets/TWGlogo.png"
                alt="TWG"
                className="rounded-full object-contain w-full border-4 border-gray-700 hidden md:block"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center space-x-4">
                <h3 className="text-2xl font-semibold">The Wittern Group</h3>
                <div className='flex flex-col'>
                  <p className="text-md text-gray-400 pt-2">Software Engineer</p>
                  <p className="text-xs text-gray-400">APR 2021 - JAN 2023</p>
                </div>
              </div>

              {/* Technology Tags */}
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="text-xs text-white bg-[#4A4A4A] px-3 py-1 rounded-full hover:scale-110 transition-all duration-300">Project Leadership</span>
                <span className="text-xs text-white bg-[#4A4A4A] px-3 py-1 rounded-full hover:scale-110 transition-all duration-300">Software Resolution</span>
                <span className="text-xs text-white bg-[#4A4A4A] px-3 py-1 rounded-full hover:scale-110 transition-all duration-300">Efficient Task Handling</span>
                <span className="text-xs text-white bg-[#4A4A4A] px-3 py-1 rounded-full hover:scale-110 transition-all duration-300">Python</span>
                <span className="text-xs text-white bg-[#4A4A4A] px-3 py-1 rounded-full hover:scale-110 transition-all duration-300">C++</span>
                <span className="text-xs text-white bg-[#4A4A4A] px-3 py-1 rounded-full hover:scale-110 transition-all duration-300">APIs</span>
                <span className="text-xs text-white bg-[#4A4A4A] px-3 py-1 rounded-full hover:scale-110 transition-all duration-300">SQL</span>
              </div>

              <ul className="list-disc md:ml-6 mt-2 text-sm text-gray-300">
                <li className='pb-1'> <p className="font-bold underline">Leadership in High-Priority Projects:</p>Led high-priority projects, including spearheading the integration of new technology into proprietary firmware and diversifying the automated dispensing product line.</li>
                <li className='pb-1'> <p className="font-bold underline">Enhancing Product Solutions & Performance:</p>Played a pivotal role in enhancing the company’s dispensing solutions, resolving critical bugs, and ensuring thorough validation and performance.</li>
                <li className='pb-1'> <p className="font-bold underline">Handling Multiple Responsibilities with Efficiency:</p>Managed multiple responsibilities, delivering key functionality, APIs, and UI features while ensuring smooth integration and efficient task handling under tight staffing.</li>
              </ul>
            </div>
          </div>

          {/* Work Experience 1 */}
          <div className="flex items-center space-x-8">
            <div className="relative w-20 md:flex-shrink-0">
              <img
                src="assets/TWGlogo.png"
                alt="TWG"
                className="rounded-full object-contain w-full border-4 border-gray-700 hidden md:block"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center space-x-4">
                <h3 className="text-2xl font-semibold">The Wittern Group</h3>
                <div className='flex flex-col'>
                  <p className="text-md text-gray-400 pt-2">Jr. Software Engineer</p>
                  <p className="text-xs text-gray-400">MAY 2020 - APR 2021</p>
                </div>
              </div>

              {/* Technology Tags */}
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="text-xs text-white bg-[#4A4A4A] px-3 py-1 rounded-full hover:scale-110 transition-all duration-300">Python</span>
                <span className="text-xs text-white bg-[#4A4A4A] px-3 py-1 rounded-full hover:scale-110 transition-all duration-300">C++</span>
                <span className="text-xs text-white bg-[#4A4A4A] px-3 py-1 rounded-full hover:scale-110 transition-all duration-300">APIs</span>
                <span className="text-xs text-white bg-[#4A4A4A] px-3 py-1 rounded-full hover:scale-110 transition-all duration-300">SQL</span>
                <span className="text-xs text-white bg-[#4A4A4A] px-3 py-1 rounded-full hover:scale-110 transition-all duration-300">QT</span>
                <span className="text-xs text-white bg-[#4A4A4A] px-3 py-1 rounded-full hover:scale-110 transition-all duration-300">UI/UX Design</span>
                <span className="text-xs text-white bg-[#4A4A4A] px-3 py-1 rounded-full hover:scale-110 transition-all duration-300">Software Testing + Resolution</span>
              </div>

              <ul className="list-disc md:ml-6 mt-2 text-sm text-gray-300">
                <li className='pb-1'> <p className="font-bold underline">UI/UX Design & Feature Implementation:</p>Developed custom UI and functionality for modern vending machines, integrating new payment methods and offline features to enhance customer flexibility and operational efficiency.</li>
                <li className='pb-1'> <p className="font-bold underline">API Development & Backend Communication:</p>Played an integral role in the development of APIs, ensuring seamless backend communication, and drove significant improvements in team collaboration and project testing.</li>
              </ul>
            </div>
          </div>

          {/* Work Experience 2 */}
          <div className="flex items-center space-x-8">
            <div className="relative w-20 md:flex-shrink-0">
              <img
                src="assets/gforgelogo.png"
                alt="GForge"
                className="rounded-full object-contain w-full border-4 border-gray-700 hidden md:block"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center space-x-4">
                <h3 className="text-2xl font-semibold">GForge</h3>
                <div className='flex flex-col'>
                  <p className="text-sm text-gray-400">Software Developer (Internship)</p>
                  <p className="text-xs text-gray-400">JUN 2019 - AUG 2019</p>
                </div>
              </div>

              {/* Technology Tags */}
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="text-xs text-white bg-[#4A4A4A] px-3 py-1 rounded-full hover:scale-105 transition-all duration-300">SEO</span>
                <span className="text-xs text-white bg-[#4A4A4A] px-3 py-1 rounded-full hover:scale-105 transition-all duration-300">APIs</span>
                <span className="text-xs text-white bg-[#4A4A4A] px-3 py-1 rounded-full hover:scale-105 transition-all duration-300">Python</span>
                <span className="text-xs text-white bg-[#4A4A4A] px-3 py-1 rounded-full hover:scale-105 transition-all duration-300">UI/UX Design</span>
                <span className="text-xs text-white bg-[#4A4A4A] px-3 py-1 rounded-full hover:scale-105 transition-all duration-300">PHP</span>
                <span className="text-xs text-white bg-[#4A4A4A] px-3 py-1 rounded-full hover:scale-105 transition-all duration-300">Unit Testing</span>
              </div>

              <ul className="list-disc md:ml-6 mt-2 text-sm text-gray-300 text-overflow">
                <li className='pb-1'> <p className="font-bold underline">Web Development and Optimization:</p> Led SEO efforts by developing on-site body content, meta descriptions, and page titles while designing streamlined UI enhancements. Improved user experience by developing and designing an optimized internal site search feature, significantly enhancing search efficiency and functionality. </li>
                <li className='pb-1'> <p className="font-bold underline">Improved Code Quality:</p> Led the enhancement of unit testing protocols using PHP, resulting in improved code reliability, maintainability, and faster identification of potential issues.</li>
              </ul>
            </div>
          </div>

        </div>
      )}

      {/* Education Tab */}
      {activeTab === 'education' && (
        <div className="space-y-10 flex flex-col max-w-7xl mx-auto">
          {/* Education Experience */}
          <div className="flex items-center space-x-8">
            <div className="relative w-20 h-20">
              <img
                src="assets/isu.png"
                alt="ISU"
                className="rounded-full object-cover w-full h-full border-4 border-gray-700"
              />
            </div>
            <div className="flex flex-col">
              <h3 className="text-2xl font-semibold">Iowa State University</h3>
              <p className="text-sm text-gray-400">Bachelor of Science in Computer Engineering</p>
              <p className="mt-2 text-sm text-gray-300">Graduated in 2020, with a focus on Full-stack development.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
