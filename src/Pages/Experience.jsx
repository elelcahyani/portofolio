import React, { useEffect } from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { experience as experienceDataStatic } from '../data/experience';

const Experience = () => {
  const { isDark } = useTheme();
  const [experienceData, setExperienceData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
      easing: 'ease-in-out',
    });
    
    // Load data dari file statis
    const formattedData = experienceDataStatic.map(exp => {
      const startMonth = exp.start_month ? months[exp.start_month - 1] : '';
      const endMonth = exp.end_month ? months[exp.end_month - 1] : '';
      
      const start = startMonth ? `${startMonth} ${exp.start_year}` : exp.start_year;
      const end = exp.is_current === 1 ? 'Present' : (endMonth ? `${endMonth} ${exp.end_year}` : exp.end_year);
      
      return {
        ...exp,
        period: `${start} - ${end}`
      };
    });
    setExperienceData(formattedData);
    setLoading(false);
  }, []);

  return (
    <div 
      className={`px-[5%] sm:px-[5%] lg:px-[10%] py-[10%] sm:py-[5%] ${isDark ? 'bg-slate-900' : 'bg-white'} transition-colors duration-300`}
      id="Experience"
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
            Experience
          </span>
        </h2>
        <p className={`${isDark ? 'text-slate-400' : 'text-slate-600'} max-w-2xl mx-auto text-sm md:text-base mt-2`}>
          My professional journey and work experience
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="max-w-4xl mx-auto">
        {loading ? (
          <div className="text-center py-8">
            <p className={`${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Loading...</p>
          </div>
        ) : experienceData.length === 0 ? (
          <div className="text-center py-8">
            <p className={`${isDark ? 'text-slate-400' : 'text-slate-600'}`}>No experience data available</p>
          </div>
        ) : (
          experienceData.map((exp, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="relative mb-12 last:mb-0"
          >
            {/* Card */}
            <div className={`relative ${isDark ? 'bg-slate-800/50' : 'bg-slate-50'} rounded-2xl p-6 md:p-8 border ${isDark ? 'border-slate-700' : 'border-slate-200'} hover:border-cyan-400/50 transition-all duration-300 group hover:shadow-xl will-change-transform`}>
              
              {/* Icon */}
              <div className={`absolute -left-6 top-6 w-12 h-12 bg-gradient-to-r ${exp.color} rounded-full flex items-center justify-center shadow-lg will-change-transform group-hover:scale-105 transition-transform duration-200`}>
                <Briefcase className="w-6 h-6 text-white" />
              </div>

              {/* Content */}
              <div className="ml-8 relative z-10">
                {/* Position & Type Badge */}
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className={`text-xl md:text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'} group-hover:text-cyan-400 transition-colors duration-200`}>
                    {exp.position}
                  </h3>
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full ${isDark ? 'bg-cyan-500/20 text-cyan-400' : 'bg-cyan-100 text-cyan-700'}`}>
                    {exp.type}
                  </span>
                </div>

                {/* Company */}
                <p className={`text-lg font-semibold ${isDark ? 'text-cyan-400' : 'text-cyan-600'} mb-3`}>
                  {exp.company}
                </p>

                {/* Meta Info */}
                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className={`w-4 h-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`} />
                    <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      {exp.period}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className={`w-4 h-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`} />
                    <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className={`${isDark ? 'text-slate-300' : 'text-slate-700'} mb-4 leading-relaxed`}>
                  {exp.description}
                </p>

                {/* Responsibilities */}
                {exp.responsibilities && exp.responsibilities.length > 0 && (
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className={`w-4 h-4 ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`} />
                      <span className={`text-sm font-semibold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                        Key Responsibilities:
                      </span>
                    </div>
                    <ul className="space-y-2 ml-6">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <li
                          key={idx}
                          className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'} flex items-start gap-2`}
                        >
                          <span className="text-cyan-400 mt-1">•</span>
                          <span>{responsibility}</span>
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

export default Experience;
