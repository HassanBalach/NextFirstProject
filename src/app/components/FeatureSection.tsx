'use client'
import Link from 'next/link'
import FeatureData from '../../Data/Data.json'
import { BackgroundGradient } from './ui/background-gradient'

interface FeatureCourses {
  id: number,
  title: string,
  slug: string,
  description: string,
  price: number,
  instructor: string,
  isFeatured: boolean,
}




export default function FeatureSection() {
  const FeatureCourses = FeatureData.courses.filter((course: FeatureCourses) => course.isFeatured)
  return (
    <div className='py-12 bg-gray-900'>
      <div className="text-center">
        <div className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURE COURSES</div>
        <div className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">learn with the best</div>
      </div>
      <div className="mt-10 mx-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          
           
            {FeatureCourses.map((course: FeatureCourses) => (
               <div className="flex justify-center">
                <BackgroundGradient  className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">>
                 <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">

                  <h2 className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{course.title}</h2>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{course.description}</p>
                  <Link href={`/course/${course.slug}`} className=" mt-4 px-4 py-1 rounded border border-neutral-600 text-neutral-700 bg- hover:bg-gray-100 transition duration-200">
                    Learn More
                  </Link>

                 </div>
                </BackgroundGradient>
               </div>
            ))}

       
        </div>


      </div>


      <div className="text-center mt-20">
        <Link href="/courses"
          className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
        >
          View All Courses
        </Link>
      </div>
    </div>
  )
}
