"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export default function MovingCards() {
    const testimonials = [
        {
            "quote": "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it.",
            "name": "Steve Jobs",
            "title": "Co-founder of Apple Inc."
        },
        {
            "quote": "Technology is nothing. What's important is that you have a faith in people, that they're basically good and smart, and if you give them tools, they'll do wonderful things with them.",
            "name": "Steve Jobs",
            "title": "Co-founder of Apple Inc."
        },
        {
            "quote": "The best way to predict the future is to invent it. It is not about predicting what the future holds, but rather about creating it. When you have a vision, when you have an idea, pursue it. Make it a reality.",
            "name": "Alan Kay",
            "title": "Computer Scientist"
        },
        {
            "quote": "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. It’s the passion that drives you and makes you thrive.",
            "name": "Albert Schweitzer",
            "title": "Philosopher, Physician"
        },
        {
            "quote": "Don't watch the clock; do what it does. Keep going. Your journey is not defined by the time you take, but by the progress you make. Stay persistent and dedicated, and you will reach your destination.",
            "name": "Sam Levenson",
            "title": "Humorist, Author"
        },
        {
            "quote": "The only limit to our realization of tomorrow is our doubts of today. Let us move forward with strong and active faith, dismissing our doubts and embracing the potential of our future.",
            "name": "Franklin D. Roosevelt",
            "title": "32nd President of the United States"
        },
        {
            "quote": "Act as if what you do makes a difference. It does. Your actions have an impact, and the choices you make can shape the world around you. Believe in the significance of your contributions.",
            "name": "William James",
            "title": "Philosopher, Psychologist"
        },
        {
            "quote": "You miss 100% of the shots you don't take. It's not about the opportunities you miss, but about the chances you take. Step forward, take the risk, and seize the moment.",
            "name": "Wayne Gretzky",
            "title": "Professional Ice Hockey Player"
        },
        {
            "quote": "Whether you think you can or you think you can’t, you’re right. Your mindset determines your success. Believe in your abilities, and you will find the strength to achieve your goals.",
            "name": "Henry Ford",
            "title": "Founder of Ford Motor Company"
        },
        {
            "quote": "Do not wait to strike till the iron is hot; but make it hot by striking. Take initiative and create your own opportunities. The moment is now, and the power to act lies within you.",
            "name": "William Butler Yeats",
            "title": "Poet, Dramatist"
        },
        {
            "quote": "The future belongs to those who believe in the beauty of their dreams. Dream big and believe in yourself. Your dreams are the blueprint of your future, and with belief and determination, they can become a reality.",
            "name": "Eleanor Roosevelt",
            "title": "Former First Lady of the United States"
        }
    ]


    return (
        <div className="">
            <div className="h-[30rem]  rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-dot-white/[0.05] items-center justify-center relative overflow-hidden ">
            <p className="text-2xl sm:text-4xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">Live like a leader</p>
               
                <div className="h-[50rem] mb-16 w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">



                    <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">


                    </div>
                    <InfiniteMovingCards
                        items={testimonials}
                        direction="right"
                        speed="normal"
                    />

                </div>
            </div>

        </div>
    )
}
