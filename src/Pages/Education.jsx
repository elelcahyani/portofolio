import React, { useEffect } from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { education as educationDataStatic } from '../data/education';

const Education = () => {
  const { isDark } = useTheme();
  const [educationData, setEducationData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
      easing: 'ease-in-out',
    });
    
    // Load data dari file statis
    const formattedData = educationDataStatic.map(edu => ({
      ...edu,
      period: `${edu.start_year} - ${edu.end_year || 'Present'}`
    }));
    setEducationData(formattedData);
    setLoading(false);
  }, []);

  return (
    <div 
      className={`px-[5%] sm:px-[5%] lg:px-[10%] py-[10%] sm:py-[5%] ${isDark ? 'bg-slate-900' : 'bg-white'} transition-colors duration-300`}
      id="Education"
    >
      {/* Header */}
      <div className="text-center pb-10" data-aos="fade-up" data-aos-duration="1000">
        <h2 className="inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
          <span style={{
            color: '#06b6d4',
            backgroundImage: 'linear-gradient(45deg, #06b6d4 10%, #3b82f6 93%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Education
          </span>
        </h2>
        <p className={`${isDark ? 'text-slate-400' : 'text-slate-600'} max-w-2xl mx-auto text-sm md:text-base mt-2`}>
          My academic journey and educational background
        </p>
      </div>

      {/* Education Timeline */}
      <div className="max-w-4xl mx-auto">
        {loading ? (
          <div className="text-center py-8">
            <p className={`${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Loading...</p>
          </div>
        ) : educationData.length === 0 ? (
          <div className="text-center py-8">
            <p className={`${isDark ? 'text-slate-400' : 'text-slate-600'}`}>No education data available</p>
          </div>
        ) : (
          educationData.map((edu, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="relative mb-12 last:mb-0"
          >
            {/* Timeline Line */}
            {index !== educationData.length - 1 && (
              <div className={`absolute left-6 top-20 w-0.5 h-[calc(100%+3rem)] ${isDark ? 'bg-slate-700' : 'bg-slate-300'}`} />
            )}

            {/* Card */}
            <div className={`relative ${isDark ? 'bg-slate-800/50' : 'bg-slate-50'} rounded-2xl p-6 md:p-8 border ${isDark ? 'border-slate-700' : 'border-slate-200'} hover:border-cyan-400/50 transition-all duration-300 group hover:shadow-xl will-change-transform`}>
              
              {/* Icon */}
              <div className={`absolute -left-6 top-6 w-12 h-12 bg-gradient-to-r ${edu.color} rounded-full flex items-center justify-center shadow-lg will-change-transform group-hover:scale-105 transition-transform duration-200`}>
                <GraduationCap className="w-6 h-6 text-white" />
              </div>

              {/* Content */}
              <div className="ml-8 relative z-10">
                {/* Degree */}
                <h3 className={`text-xl md:text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'} mb-2 group-hover:text-cyan-400 transition-colors duration-200`}>
                  {edu.degree}
                </h3>

                {/* Institution */}
                <p className={`text-lg font-semibold ${isDark ? 'text-cyan-400' : 'text-cyan-600'} mb-3`}>
                  {edu.institution}
                </p>

                {/* Meta Info */}
                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className={`w-4 h-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`} />
                    <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      {edu.period}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className={`w-4 h-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`} />
                    <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      {edu.location}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className={`${isDark ? 'text-slate-300' : 'text-slate-700'} mb-4 leading-relaxed`}>
                  {edu.description}
                </p>

                {/* Achievements */}
                {edu.achievements && edu.achievements.length > 0 && (
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 mb-2">
                      <Award className={`w-4 h-4 ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`} />
                      <span className={`text-sm font-semibold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                        Achievements:
                      </span>
                    </div>
                    <ul className="space-y-2 ml-6">
                      {edu.achievements.map((achievement, idx) => (
                        <li
                          key={idx}
                          className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'} flex items-start gap-2`}
                        >
                          <span className="text-cyan-400 mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Education;
