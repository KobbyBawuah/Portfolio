import { motion } from 'framer-motion';
import { styles } from '../styles'
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div
        //can make is mx-auto below to recenter the text
        className={`absolute inset-0 top-[100px] max-w-7xl mx-16 sm:px-16 px-6 flex flex-row items-start gap-5 inset-0 z-[1]`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`font-black text-white lg:text-[60px] sm:text-[40px] xs:text-[35px] text-[40px] lg:leading-[98px] mt-2 text-white`}>
            Hello, I'm <span className='text-[#915EFF]'>Kobby</span>
          </h1>
          <p className={`text-[#dfd9ff] font-medium lg:text-[25px] sm:text-[21px] xs:text-[18px] text-[16px] lg:leading-[40px] mt-2 text-white-100`}>
            I develop applications to
            address everyday challenges whiles
            integrating cutting-edge technologies
            such as AI and Network Security
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <a href='#about'>
        <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </div>
      </a>
    </section>

  )
}

export default Hero