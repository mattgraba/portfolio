import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { useRef } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface Scene {
  id: string;
  title: string;
  description: string;
  path: string;
  backgroundImage: string; // URL to the background image
}

interface ScrollScenesProps {
  scenes: Scene[];
}

// Helper to generate transforms for each scene
function useSceneTransforms(
  scrollYProgress: MotionValue<number>,
  scenesCount: number
) {
  return Array.from({ length: scenesCount }).map((_, index) => {
    const yProgress = useTransform(
      scrollYProgress,
      [index / scenesCount, (index + 1) / scenesCount],
      [0, 1]
    );
    // All transforms needed for a scene
    return {
      yProgress,
      opacity: useTransform(yProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]),
      scale: useTransform(yProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8]),
      y: useTransform(yProgress, [0, 1], ['50px', '-50px']),
      titleY: useTransform(yProgress, [0, 0.3, 0.7, 1], [30, 0, 0, -30]),
      descY: useTransform(yProgress, [0, 0.3, 0.7, 1], [20, 0, 0, -20]),
      ctaY: useTransform(yProgress, [0, 0.3, 0.7, 1], [10, 0, 0, -10]),
      maskClip: useTransform(
        yProgress,
        [0, 0.5, 1],
        [
          'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
          'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)'
        ]
      ),
      parallaxY: useTransform(yProgress, [0, 1], ['0%', '10%']),
      imageOpacity: useTransform(yProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]),
    };
  });
}

const ImageBackground = ({ 
  image, 
  progress, 
  isCurrentScene 
}: { 
  image: string;
  progress: any;
  isCurrentScene: boolean;
}) => {
  return (
    <motion.div
      className="absolute inset-0 w-full h-full"
      style={{
        opacity: isCurrentScene ? 
          useTransform(progress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]) : 0,
      }}
    >
      {/* Parallax background image */}
      <motion.div
        className="absolute inset-0 scale-110"
        style={{
          y: useTransform(progress, [0, 1], ['0%', '10%']),
        }}
      >
        <Image
          src={image}
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Overlay gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      
      {/* Moving reveal mask */}
      <motion.div
        className="absolute inset-0 bg-black"
        style={{
          clipPath: useTransform(
            progress,
            [0, 0.5, 1],
            [
              'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
              'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
              'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)'
            ]
          ),
        }}
      />
    </motion.div>
  );
};

export const ScrollScenes: React.FC<ScrollScenesProps> = ({ scenes }) => {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  const transforms = useSceneTransforms(scrollYProgress, scenes.length);

  const handleNavigate = (path: string) => {
    router.push(path);
  };

  return (
    <div 
      ref={containerRef} 
      className="relative w-full"
      style={{ 
        height: `${scenes.length * 100}vh`,
      }}
    >
      {scenes.map((scene, index) => {
        return (
          <motion.div
            key={scene.id}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100vh',
            }}
            className="flex items-center justify-center"
          >
            <ImageBackground 
              image={scene.backgroundImage} 
              progress={transforms[index].yProgress}
              isCurrentScene={true}
            />
            
            <motion.div 
              className="relative z-10 w-4/5 md:w-3/4 lg:w-2/3"
              style={{
                opacity: transforms[index].opacity,
                scale: transforms[index].scale,
                y: transforms[index].y,
              }}
            >
              <motion.div
                className="backdrop-blur-md bg-black/30 rounded-xl p-8 cursor-pointer border border-white/10 hover:bg-black/40 transition-colors"
                onClick={() => handleNavigate(scene.path)}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: '0 0 30px rgba(0,0,0,0.3)'
                }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.h2 
                  className="text-4xl font-bold mb-4 text-white"
                  style={{
                    translateY: transforms[index].titleY,
                  }}
                >
                  {scene.title}
                </motion.h2>
                <motion.p 
                  className="text-xl text-gray-200"
                  style={{
                    translateY: transforms[index].descY,
                  }}
                >
                  {scene.description}
                </motion.p>
                <motion.div 
                  className="mt-6"
                  style={{
                    translateY: transforms[index].ctaY,
                  }}
                >
                  <span className="text-white/70 text-sm">Click to explore →</span>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}; 