import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { FaArrowRight, FaCode } from "react-icons/fa";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [displayTitle, setDisplayTitle] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [displayDesc, setDisplayDesc] = useState("");

  const titleText = "Hello, It's Me";
  const nameText = "RUSHIKESH SHINDE";
  const roleText = "I AM FULL STACK WEB DEVELOPER";
  const descText =
    "I am a passionate Full Stack Web Developer skilled in building responsive and user-friendly web applications. I specialize in both frontend and backend development using modern technologies to create efficient, scalable, and visually appealing solutions.";

  // Typing animation
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= titleText.length) {
        setDisplayTitle(titleText.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);

        // Name animation
        setTimeout(() => {
          let nameIndex = 0;
          const nameInterval = setInterval(() => {
            if (nameIndex <= nameText.length) {
              setDisplayName(nameText.substring(0, nameIndex));
              nameIndex++;
            } else {
              clearInterval(nameInterval);

              // Role animation
              setTimeout(() => {
                let roleIndex = 0;
                const roleInterval = setInterval(() => {
                  if (roleIndex <= roleText.length) {
                    setDisplayText(roleText.substring(0, roleIndex));
                    roleIndex++;
                  } else {
                    clearInterval(roleInterval);

                    // Description typing animation
                    setTimeout(() => {
                      let descIndex = 0;
                      const descInterval = setInterval(() => {
                        if (descIndex <= descText.length) {
                          setDisplayDesc(descText.substring(0, descIndex));
                          descIndex++;
                        } else {
                          clearInterval(descInterval);
                        }
                      }, 15);
                    }, 300);
                  }
                }, 50);
              }, 300);
            }
          }, 100);
        }, 300);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section id='home' className="min-h-screen relative z-10 flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT PART */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            
            {/* Title */}
            <div className="mb-4">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-2xl sm:text-2xl lg:text-4xl font-medium text-gradient-primary"
              >
                {displayTitle}
                {displayTitle.length < titleText.length && (
                  <motion.span
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="inline-block ml-1"
                  >
                    |
                  </motion.span>
                )}
              </motion.span>
            </div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <h1 className="text-4xl sm:text-xl lg:text-6xl xl:text-5xl font-bold leading-tight">
                <span className="animated-name">
                  {displayName}
                  {displayName.length < nameText.length && displayName.length > 0 && (
                    <motion.span
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ repeat: Infinity, duration: 0.8 }}
                      className="inline-block ml-1"
                    >
                      |
                    </motion.span>
                  )}
                </span>
              </h1>

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1.5, duration: 1 }}
                className="h-1 bg-gradient-to-r from-blue-500 to-purple-600 mt-2 rounded-full"
              />
            </motion.div>

            {/* Role */}
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                <span className="text-gradient-secondary inline-block">
                  {displayText}
                  {displayText.length < roleText.length && displayText.length > 0 && (
                    <motion.span
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ repeat: Infinity, duration: 1 }}
                      className="inline-block ml-1"
                    >
                      |
                    </motion.span>
                  )}
                </span>
              </h2>
            </div>

            {/* Description - Now Typing */}
            <p className="text-lg sm:text-xl max-w-2xl mx-auto lg:mx-0 mb-10 text-gray-600 dark:text-gray-300">
              {displayDesc}
              {displayDesc.length < descText.length && displayDesc.length > 0 && (
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 1 }}
                  className="inline-block ml-1"
                >
                  |
                </motion.span>
              )}
            </p>

          </div>

          {/* RIGHT IMAGE - same */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="order-1 lg:order-2 relative flex justify-center"
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(59, 130, 246, 0.3)",
                    "0 0 30px rgba(147, 51, 234, 0.4)",
                    "0 0 20px rgba(59, 130, 246, 0.3)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1"
              >
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-800">
                  <img 
                    src="Screenshot 2026-02-02 193655.png"
                    alt="Rushikesh"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
