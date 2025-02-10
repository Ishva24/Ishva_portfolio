import React from 'react';

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-12">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=800&q=80"
              alt="AI Development"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <p className="text-lg text-gray-300 mb-6">
              I'm a Computer Science student at Karunya Institute of Technology and Sciences,
              specializing in Artificial Intelligence. With a strong foundation in programming
              and data analysis, I'm passionate about creating innovative solutions using AI
              and machine learning technologies.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              My academic journey has equipped me with expertise in Python, Java, and C++,
              along with practical experience in machine learning libraries and data visualization
              tools. I'm particularly interested in developing AI-powered applications that solve
              real-world problems.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-gray-700 px-4 py-2 rounded-full">
                <span className="text-gray-300">🎓 B.Sc. Computer Science</span>
              </div>
              <div className="bg-gray-700 px-4 py-2 rounded-full">
                <span className="text-gray-300">📊 8.0 CGPA</span>
              </div>
              <div className="bg-gray-700 px-4 py-2 rounded-full">
                <span className="text-gray-300">🌟 AI Specialist</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}