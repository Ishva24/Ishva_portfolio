import React from 'react';

export function Certifications() {
  const certifications = [
    {
      title: 'IT Automation with Python',
      issuer: 'Google Tata Strive, Coursera',
      date: '2024',
      description: 'Completed a specialized course focused on automating tasks and processes using Python, enhancing efficiency and reliability in software solutions.'
    },
    {
      title: 'Data Analytics',
      issuer: 'Google Tata Strive, Coursera',
      date: '2024',
      description: 'Acquired skills in data manipulation, visualization, and analysis techniques, preparing for data-driven decision-making roles.'
    },
    {
      title: 'Fundamentals of AI on Microsoft Azure',
      issuer: 'Microsoft',
      date: '2024',
      description: 'Earned a badge for mastering the basics of artificial intelligence with Microsoft Azure, emphasizing AI solution development and implementation.'
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certifications.map((cert) => (
            <div key={cert.title} className="bg-gray-900 p-6 rounded-lg shadow-xl">
              <h3 className="text-xl font-semibold text-white mb-2">{cert.title}</h3>
              <p className="text-blue-400 mb-2">{cert.issuer}</p>
              <p className="text-gray-500 text-sm mb-4">{cert.date}</p>
              <p className="text-gray-400 text-sm">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}