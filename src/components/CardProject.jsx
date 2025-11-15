import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const CardProject = ({ Img, Title, Description, Link: ProjectLink, id }) => {
  const { isDark } = useTheme();
  
  // Get proper image URL - untuk static site, gambar ada di public folder
  const imageUrl = Img;
  
  // Handle kasus ketika ProjectLink kosong
  const handleLiveDemo = (e) => {
    if (!ProjectLink) {
      console.log("ProjectLink kosong");
      e.preventDefault();
      alert("Live demo link is not available");
    }
  };
  
  const handleDetails = (e) => {
    if (!id) {
      console.log("ID kosong");
      e.preventDefault();
      alert("Project details are not available");
    }
  };
  

  return (
    <div className="group relative w-full">
            
      <div className={`relative overflow-hidden rounded-xl ${isDark ? 'bg-slate-900/90' : 'bg-white'} border ${isDark ? 'border-white/10' : 'border-slate-200'} shadow-lg hover:shadow-xl transition-shadow duration-300`}>
    
        <div className="relative p-5">
          <div className="relative overflow-hidden rounded-lg">
            <img
              src={imageUrl}
              alt={Title}
              className="w-full h-full object-cover will-change-transform group-hover:scale-105 transition-transform duration-300 ease-out"
              loading="lazy"
              onError={(e) => {
                console.error('Failed to load image:', imageUrl);
                e.target.src = 'https://via.placeholder.com/400x300?text=No+Image';
              }}
            />
          </div>
          
          <div className="mt-4 space-y-3">
            <h3 className={`text-xl font-semibold ${isDark ? 'bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent' : 'text-slate-900'}`}>
              {Title}
            </h3>
            
            <p className={`${isDark ? 'text-gray-300/80' : 'text-slate-600'} text-sm leading-relaxed line-clamp-2`}>
              {Description}
            </p>
            
            <div className="pt-4 flex items-center justify-between">
              {ProjectLink ? (
                <a
                href={ProjectLink || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleLiveDemo}
                  className={`inline-flex items-center space-x-2 ${isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'} transition-colors duration-200`}
                >
                  <span className="text-sm font-medium">Live Demo</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              ) : (
                <span className={`${isDark ? 'text-gray-500' : 'text-slate-400'} text-sm`}>Demo Not Available</span>
              )}
              
     

              {id ? (
                <Link
                  to={`/project/${id}`}
                  onClick={handleDetails}
                  className={`inline-flex items-center space-x-2 px-4 py-2 rounded-lg ${isDark ? 'bg-white/5 hover:bg-white/10 text-white/90' : 'bg-slate-100 hover:bg-slate-200 text-slate-900'} transition-colors duration-200 focus:outline-none focus:ring-2 ${isDark ? 'focus:ring-purple-500/50' : 'focus:ring-blue-500/50'}`}
                >
                  <span className="text-sm font-medium">Details</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              ) : (
                <span className={`${isDark ? 'text-gray-500' : 'text-slate-400'} text-sm`}>Details Not Available</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProject;