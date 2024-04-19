'use client';

import React, { useEffect, useState, useRef } from 'react';
import { usePathname } from 'next/navigation';
import NavIcon from './NavIcon';
import DoomriderLogo from './DoomriderLogo';
import InstagramIcon from './InstagramIcon';
import Link from 'next/link';
import NavIconClosed from './NavIconClosed';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { menuSlide, slide } from './anim';
import useMeasure from 'react-use-measure';

export default function Sidebar() {
  const isFirstRender = useRef(true);

  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(null);

  // useEffect(() => {
  //   setIsOpen(true);
  // }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (isOpen) {
      setIsOpen(false);
    }
    return () => {};
  }, [pathname]);

  return (
    <motion.div className='relative'>
      <motion.div
        className='size-[3.9rem] absolute z-20 inset-[3rem] transition-all duration-300  text-bgWhite hover:text-bgWhite/60'
        onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <NavIconClosed /> : <NavIcon />}
      </motion.div>

      <AnimatePresence mode='wait'>
        {isOpen && (
          <motion.aside
            variants={menuSlide}
            initial='initial'
            animate='enter'
            exit='exit'
            className='absolute h-[100dvh] w-[100dvw] sm:w-[35rem] md:w-[42rem] bg-primary p-11 text-bgWhite flex flex-col z-10'>
            <motion.div
              initial={{ y: -80 }}
              animate={{ y: 0 }}
              exit={{ y: -80, transition: { delay: 0 } }}
              transition={{
                type: 'spring',
                delay: 0.5,
              }}
              className='flex justify-end mb-[7rem]'>
              <Link href='/' className='text-bgWhite nav-trans'>
                <DoomriderLogo />
              </Link>
            </motion.div>
            <motion.nav
              variants={slide}
              initial='initial'
              animate='enter'
              exit='exit'
              className='divide-y-2 divide-bgWhite flex flex-col pr-24'>
              <div className='py-8'>
                <Link href='/'>
                  <h3 className='nav-trans'>PROJECTS</h3>
                </Link>
                <div className='pl-8'>
                  <Link href='/projects/bristol-punx'>
                    <p>Bristol Punx</p>
                  </Link>
                  <Link href='/projects/dlh'>
                    <p>DLH</p>
                  </Link>
                  <Link href='/projects/imnotfromhere'>
                    <p>I'm not from here</p>
                  </Link>
                  <Link href='/projects/nooneisillegal'>
                    <p>No one is illegal</p>
                  </Link>
                  <Link href='/projects/naples'>
                    <p>Naples</p>
                  </Link>
                  <Link href='/projects/ph'>
                    <p>PH</p>
                  </Link>
                  <Link href='/projects/poland'>
                    <p>Poland</p>
                  </Link>
                </div>
              </div>
              <div className='flex items-center py-8'>
                <Link href='/about'>
                  <h3 className='nav-trans'>ABOUT</h3>
                </Link>
              </div>
              <div className='py-8'>
                <h3 className='nav-trans'>CONTACT</h3>
                <a href='mailto:mastalerzmaciej@gmail.com '>
                  <p className='pl-8'>mastalerzmaciej@gmail.com</p>
                </a>
              </div>
            </motion.nav>
            <div className='flex-1 flex text-bgWhite justify-center'>
              <Link
                target='_blank'
                className='mt-auto text-bgWhite nav-trans'
                href='https://www.instagram.com/doomridermedia/'>
                <InstagramIcon />
              </Link>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
