import React from 'react';

export function Education() {
  return (
    <section id="education" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Education</h2>
        <div className="space-y-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-white">Karunya Institute of Technology and Sciences</h3>
                <p className="text-gray-400">Bachelor of Science - Computer Science (AI Specialization)</p>
              </div>
              <div className="text-right">
                <p className="text-gray-400">July 2021 - May 2024</p>
                <p className="text-blue-400 font-semibold">CGPA: 8.0</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-white">Sri Vijay Vidyalaya</h3>
                <p className="text-gray-400">High School Diploma in Computer Science</p>
              </div>
              <div className="text-right">
                <p className="text-gray-400">2019 - 2020</p>
                <p className="text-blue-400 font-semibold">Score: 80%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}