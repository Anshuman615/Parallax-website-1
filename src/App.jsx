import React, { useState, useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";

function App() {
  let [showContent, setShowContent] = useState(false);
  const audioRef = useRef(null);
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
        }
      },
    });
  });

  useGSAP(() => {
    if (!showContent) return;

    gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-1",
      ease: "Expo.easeInOut",
    });

    gsap.to(".sky", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".bg", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".character", {
      scale: 1.4,
      x: "-50%",
      top: "15%",
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".text", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    const main = document.querySelector(".main");

    main?.addEventListener("mousemove", function (e) {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".main .text", {
        x: `${xMove * 0.4}%`,
      });
      gsap.to(".sky", {
        x: xMove,
      });
      gsap.to(".bg", {
        x: xMove * 1.7,
      });
    });
  }, [showContent]);

  return (
    <>
    <audio
  src="/gta6.mp3"
  autoPlay
  loop
  style={{ display: "none" }}
  ref={(audio) => {
    if (audio) audio.volume = 0.5;
  }}
/>

      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showContent && (
        <div className="main w-full rotate-[-10deg] scale-[1.7] relative z-10" style={{ marginBottom: '20vh' }}>
          <div className="landing overflow-hidden relative w-full h-screen bg-black">
            <div className="navbar absolute top-0 left-0 z-[10] w-full py-10 px-10">
              <div className="logo flex gap-7">
                <div className="lines flex flex-col gap-[5px]">
                  <div className="line w-15 h-2 bg-white"></div>
                  <div className="line w-8 h-2 bg-white"></div>
                  <div className="line w-5 h-2 bg-white"></div>
                </div>
                <h3 className="text-4xl -mt-[8px] leading-none text-white">
                  Rockstar
                </h3>
              </div>
            </div>

            <div className="imagesdiv relative overflow-hidden w-full h-screen">
              <img
                className="absolute sky scale-[1.5] rotate-[-20deg] top-0 left-0 w-full h-full object-cover"
                src="./sky.png"
                alt=""
              />
              <img
                className="absolute scale-[1.8] rotate-[-3deg] bg top-0 left-0 w-full h-full object-cover"
                src="./bg.png"
                alt=""
              />
              <div className="text text-white flex flex-col gap-3 absolute top-20 left-1/2 -translate-x-1/2 scale-[1.4] rotate-[-10deg]">
                <h1 className="text-[12rem] leading-none -ml-40">grand</h1>
                <h1 className="text-[12rem] leading-none ml-20">theft</h1>
                <h1 className="text-[12rem] leading-none -ml-40">auto</h1>
              </div>
              <img
                className="absolute character top-[15%] left-1/2 -translate-x-1/2 scale-[1.1] rotate-[-10deg]"
                src="./girlbg.png"
                alt=""
              />
            </div>
            <div className="btmbar text-white absolute bottom-0 left-0 w-full py-15 px-10 bg-gradient-to-t from-black to-transparent cursor-pointer pointer-events-auto" onClick={() => { window.scrollY < 1000 && window.scroll(0, window.scrollY + 800); }}>
              <div className="flex gap-4 items-center">
                <i className="text-4xl ri-arrow-down-line scroll-arrow"></i>


                <h3 className="text-xl font-[Helvetica_Now_Display]">
                  Scroll Down
                </h3>
              </div>
              <img
                className="absolute h-[55px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                src="./ps5.png"
                alt=""
              />
            </div>
          </div>
          <div className="w-full h-screen flex items-center justify-center bg-black relative">
            <div className="cntnr flex text-white w-full h-[80%] ">
              <div className="limg relative w-1/2 h-full">
                <img
                  className="absolute scale-[1.3] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  src="./imag.png"
                  alt=""
                />
              </div>
              <div className="rg w-[30%] py-30">
                <h1 className="text-8xl">Still Running,</h1>
                <h1 className="text-8xl">Not Hunting</h1>
                <p className="mt-10 text-xl font-[Helvetica_Now_Display]">
                 Grand Theft Auto VI is the next evolution of Rockstar Games’ open-world experience, set in a modern, vibrant Vice City where the world feels alive and constantly changing.
                </p>
                <p className="mt-3 text-xl font-[Helvetica_Now_Display]">
                 With enhanced visuals, smarter AI, and a focus on cinematic gameplay, GTA 6 aims to blend freedom, narrative, and realism like never before. It’s not just about chaos anymore—it’s about experiencing a world that feels alive, unpredictable, and constantly evolving.
                </p>
              </div>
            </div>
            <button className="absolute bg-yellow-500 px-10 py-10 text-black text-4xl left-20 top-[88%]">
              Download Now
            </button>
            <div className="absolute left-20 top-[95%] h-24"></div>
          </div>
        </div>
          )}
{showContent && (
  <div className="w-full min-h-screen bg-black flex items-center justify-center px-12 py-20">
    <div className="w-full max-w-7xl flex items-center gap-16">

      {/* LEFT SIDE TEXT */}
      <div className="w-1/2 text-white">
        <h1 className="text-7xl lg:text-8xl font-extrabold uppercase mb-8 leading-tight">

          GRAND THEFT AUTO VI
        </h1>

        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          Grand Theft Auto VI pushes the boundaries of open-world realism.
          Set in a vibrant, ever-evolving world inspired by Vice City,
          the game delivers cinematic storytelling and next-generation immersion.
        </p>

        <p className="text-gray-400 text-base leading-relaxed">
          With improved AI systems and seamless gameplay transitions,
          GTA VI redefines what modern open-world experiences can feel like.
        </p>
      </div>

      {/* RIGHT SIDE VIDEO */}
      <div className="w-1/2 flex justify-end">
        <video
          src="/gta6.mp4"
          autoPlay
          muted
          loop
         className="w-full max-w-[750px] rounded-lg shadow-2xl"

        />
      </div>

    </div>
  </div>
)}

      {showContent && (
        <div className="third-section w-full min-h-screen bg-black flex flex-col items-center justify-center relative z-50">
          <div className="container mx-auto w-full px-6 flex items-center gap-8">
              <div className="w-1/2">
                <div className="max-w-2xl text-white/90 text-lg leading-relaxed">
                  <h1 className="!text-7xl font-bold mb-6">
  ANSHUMAN PANDA
</h1>

                  <p className="mb-4">I’m a developer who enjoys building clean, visually engaging web experiences and am gradually moving toward becoming a full-stack developer. I like working on projects where design and logic come together, especially cinematic and interactive interfaces inspired by games and modern websites.</p>
                  <p className="mb-4">Currently, I work mainly with React, JavaScript, and modern CSS, and I enjoy using tools like GSAP to add smooth and meaningful animations. Alongside frontend development, I’m actively learning backend concepts, APIs, and databases to understand how complete systems work from end to end.</p>
                  <p>My goal is to grow into a well-rounded full-stack developer who can design, build, and scale real-world applications while maintaining a strong focus on user experience and clean code.</p>
                </div>
              </div>
              <div className="w-1/2 flex justify-end">
                <img src="/myphoto.png" alt="" className="max-h-[80vh] object-contain" />
              </div>
            </div>

          <footer className="absolute left-0 bottom-0 w-full">
            <div className="container mx-auto px-6 py-8">
              <div className="flex flex-col items-center gap-2">
                <div className="flex gap-4 mb-7">
                  <a
                    href="https://github.com/Anshuman615/Parallax-website-1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    aria-label="GitHub"
                  >
                    <i className="ri-github-fill"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/anshumanpanda156/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    aria-label="LinkedIn"
                  >
                    <i className="ri-linkedin-box-fill"></i>
                  </a>
                  <a
                    href="mailto:anshumanpanda744@gmail.com"
                    className="social-icon"
                    aria-label="Email"
                  >
                    <i className="ri-mail-line"></i>
                  </a>
                </div>
                <div className="text-white/80 text-sm">© ANSHUMAN PANDA 2026. All Rights Reserved.</div>
              </div>
            </div>
          </footer>
        </div>
      )}
    </>
  );
}

export default App;