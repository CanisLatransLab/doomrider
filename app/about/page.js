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
              Born in Poland and now based in Bristol, UK, Maciek has been a
              devoted fan of hardcore punk for two decades. This intense passion
              has seamlessly blended with Maciek’s talent for photography,
              becoming the focal point of their creative expression.
            </motion.p>
            <motion.p variants={item}>
              With a keen eye for raw energy and an innate connection to the
              genre's spirit, Maciek captures the essence of hardcore and punk
              through the lens. From documenting mosh pit intensity to the
              camaraderie of fans, Maciek’s photography serves as a visual
              journey into the heart of the DIY scene.
            </motion.p>
            <motion.p variants={item}>
              Navigating the punk scenes in both Poland and the UK, Maciek
              remains a dedicated contributor to the hardcore/punk community.
              Through their lens, they immortalize the unfiltered authenticity,
              passion, and individuality that define this dynamic subculture.
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
