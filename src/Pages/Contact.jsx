import React, { useState, useEffect } from "react";
import { Share2, User, Mail, MessageSquare, Send } from "lucide-react";
import { Link } from "react-router-dom";
import SocialLinks from "../components/SocialLinks";
import { useTheme } from '../context/ThemeContext';
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactPage = () => {
  const { isDark } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    AOS.init({
      once: true, // Animasi hanya sekali
      duration: 800,
      easing: 'ease-in-out',
      disable: 'mobile',
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    Swal.fire({
      title: 'Mengirim Pesan...',
      html: 'Harap tunggu selagi kami mengirim pesan Anda',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '54479c7e-5390-4b6d-abdf-0497f78364d7',
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: 'Pesan Baru dari Website Portfolio'
        })
      });

      const result = await response.json();

      if (result.success) {
        Swal.fire({
          title: 'Berhasil!',
          text: 'Pesan Anda telah berhasil terkirim!',
          icon: 'success',
          confirmButtonColor: '#06b6d4',
          timer: 2000,
          timerProgressBar: true
        });

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        throw new Error('Failed to send message');
      }

    } catch (error) {
      Swal.fire({
        title: 'Gagal!',
        text: 'Terjadi kesalahan. Silakan coba lagi nanti.',
        icon: 'error',
        confirmButtonColor: '#06b6d4'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="px-[5%] sm:px-[5%] lg:px-[10%] transition-colors duration-300" >
      <div className="text-center lg:mt-[5%] mt-10 mb-2 sm:px-0 px-[5%]">
        <h2
          data-aos="fade-down"
          data-aos-duration="1000"
          className="inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"
        >
          <span
            style={{
              color: "#06b6d4",
              backgroundImage:
                "linear-gradient(45deg, #06b6d4 10%, #3b82f6 93%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Hubungi Saya
          </span>
        </h2>
        <p
          data-aos="fade-up"
          data-aos-duration="1100"
          className={`${isDark ? 'text-slate-400' : 'text-slate-600'} max-w-2xl mx-auto text-sm md:text-base mt-2`}
        >
          Punya pertanyaan? Kirimi saya pesan, dan saya akan segera membalasnya.
        </p>
      </div>

      <div
        className="h-auto py-10 flex items-center justify-center"
        id="Contact"
      >
        <div className="container max-w-7xl mx-auto px-4">
          <div className={`${isDark ? 'bg-white/5' : 'bg-slate-50/80'} backdrop-blur-xl rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-12`}>
            
            {/* 2 Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              
              {/* Left Column - Info */}
              <div className="space-y-6" data-aos="fade-right">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-4xl lg:text-5xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                      Hubungi
                    </h2>
                    <p className={`${isDark ? 'text-gray-400' : 'text-slate-600'} text-lg`}>
                      Ada yang ingin didiskusikan? Kirim saya pesan dan mari kita bicara.
                    </p>
                  </div>
                  <Share2 className="w-10 h-10 text-cyan-400 opacity-50 hidden lg:block" />
                </div>

                {/* Social Links */}
                <div className={`pt-6 border-t ${isDark ? 'border-white/10' : 'border-slate-200'}`}>
                  <h3 className={`${isDark ? 'text-white' : 'text-slate-900'} font-semibold mb-4 flex items-center gap-2`}>
                    <span className="w-1 h-6 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full"></span>
                    Connect With Me
                  </h3>
                  <div className="flex gap-4">
                    <SocialLinks />
                  </div>
                </div>
              </div>

              {/* Right Column - Form */}
              <div data-aos="fade-left">
                <form 
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div className="relative group">
                    <User className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-cyan-400 transition-colors" />
                    <input
                      type="text"
                      name="name"
                      placeholder="Nama Anda"
                      value={formData.name}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className={`w-full p-4 pl-12 ${isDark ? 'bg-white/10 border-white/20 placeholder-gray-500 text-white' : 'bg-white border-slate-200 placeholder-slate-400 text-slate-900'} rounded-xl border focus:outline-none focus:ring-2 focus:ring-cyan-400/30 transition-colors duration-200 disabled:opacity-50`}
                      required
                    />
                  </div>

                  <div className="relative group">
                    <Mail className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-cyan-400 transition-colors duration-200" />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Anda"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className={`w-full p-4 pl-12 ${isDark ? 'bg-white/10 border-white/20 placeholder-gray-500 text-white' : 'bg-white border-slate-200 placeholder-slate-400 text-slate-900'} rounded-xl border focus:outline-none focus:ring-2 focus:ring-cyan-400/30 transition-colors duration-200 disabled:opacity-50`}
                      required
                    />
                  </div>

                  <div className="relative group">
                    <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-cyan-400 transition-colors duration-200" />
                    <textarea
                      name="message"
                      placeholder="Pesan Anda"
                      value={formData.message}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className={`w-full resize-none p-4 pl-12 ${isDark ? 'bg-white/10 border-white/20 placeholder-gray-500 text-white' : 'bg-white border-slate-200 placeholder-slate-400 text-slate-900'} rounded-xl border focus:outline-none focus:ring-2 focus:ring-cyan-400/30 transition-colors duration-200 h-40 disabled:opacity-50`}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white py-4 rounded-xl font-semibold transition-all duration-200 ease-in-out hover:shadow-lg hover:shadow-cyan-400/20 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="w-5 h-5" />
                    {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
                  </button>
                </form>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;