'use client';

import Image from 'next/image';
import React from 'react';

import bio from '@/public/assets/bio.jpg';
import { motion } from 'framer-motion';
import { IoIosArrowForward } from 'react-icons/io';
import Link from 'next/link';

export default function About() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 1 } },
  };

  return (
    <main className='w-full h-screen grid sm:place-content-center p-12'>
      <div className='flex max-sm:flex-col items-center gap-20'>
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1, transition: { duration: 1 } }}
          className='w-full max-w-[40rem] h-auto pt-[2rem]'>
          <Image
            src={bio}
            alt='profile picture'
            priority
            className='w-full h-auto '
          />
        </motion.div>
        <div className='flex flex-col'>
          <motion.div
            variants={container}
            initial='hidden'
            animate='show'
            className='space-y-6 [&>p]:max-w-prose'>
            <motion.h2 variants={item} className='text-4xl'>
              Maciek Mastalerz
            </motion.h2>
            <motion.p variants={item}>
              Originally from Poland and now based in Bristol, UK, Maciek has
              been a hardcore punk enthusiast for two decades. This deep love
              seamlessly merges with Maciek's knack for photography, which has
              become the foundation of their creative expression.
            </motion.p>
            <motion.p variants={item}>
              With a sharp eye for raw energy and a deep connection to the
              genre's ethos, Maciek captures the essence of hardcore and punk
              through their lens. From capturing the intensity of mosh pits to
              the camaraderie among fans, Maciek’s photography takes viewers on
              a visual journey into the heart of the DIY scene.
            </motion.p>
            <motion.p variants={item}>
              Having explored punk scenes in both Poland and the UK, Maciek
              remains a committed member of the hardcore/punk community. Through
              their photography, they immortalize the unfiltered authenticity,
              passion, and individuality that define this vibrant subculture.
            </motion.p>
          </motion.div>
          <Link href='/' className='self-end pt-28'>
            <motion.p className='flex gap-1 items-center max-sm:mb-12'>
              Take me{' '}
              <span className='font-medium pl-2 hover:underline underline-offset-4'>
                home
              </span>
              <IoIosArrowForward />
            </motion.p>
          </Link>
        </div>
      </div>
    </main>
  );
}
