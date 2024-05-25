'use client'
import Link from 'next/link'
import { HoverEffect } from "./ui/card-hover-effect";
import React from 'react'

export default function CardHoverEffect() {
  const cards = [
    {
      title: "Full-Stack Developer",
      description: "Skilled in both front-end and back-end development, with experience in building and maintaining web applications.",
      link: "GitHub Profile"
    },
    {
      title: "UI/UX Designer",
      description: "Passionate about creating user-centered designs. Experienced in designing intuitive and responsive user interfaces.",
      link: "Behance Portfolio"
    },
    {
      title: "Open Source Contributor",
      description: "Contributor to various open-source projects. Believer in the power of community-driven software development.",
      link: "Open Source Contributions"
    },
    {
      title: "Tech Blogger",
      description: "Author of multiple blog posts on web development, design, and technology trends. Avid writer and content creator.",
      link: "Medium Articles"
    },
    {
      title: "Public Speaker",
      description: "Experienced speaker at tech conferences and meetups. Enjoy sharing knowledge and inspiring others in the tech community.",
      link: "YouTube Channel"
    },
    {
      title: "Mentor",
      description: "Dedicated to mentoring junior developers and designers. Committed to helping others grow and succeed in their careers.",
      link: "LinkedIn Profile"
    }
  ];
  
  return (
    <div className='py-12 bg-gray-900'>
    <div className="text-center">
        <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURE COURSES</h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">learn with the best</p>
      </div>
      <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={cards} />
    </div>
      <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow" >
        <Link href="/webinar" className=" mt-4 px-4 py-1 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200">
          View All Webinar
        </Link>
      </div>
    </div>
  )
}
