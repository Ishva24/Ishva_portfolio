import React from 'react';

export function Skills() {
  const skills = {
    'Languages & Libraries': ['Python', 'Java', 'C++', 'JavaScript', 'HTML', 'scikit-learn'],
    'Tools & Frameworks': ['SQL', 'Pandas', 'Tableau', 'Streamlit'],
    'Soft Skills': ['Problem Solving', 'Critical Thinking', 'Technical Writing', 'Team Leadership']
  };

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-gray-800 p-6 rounded-lg shadow-xl">
              <h3 className="text-xl font-semibold text-white mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}