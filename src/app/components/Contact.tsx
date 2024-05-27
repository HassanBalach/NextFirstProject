"use client";
import React, { useState } from "react";
import { BackgroundBeams } from "./ui/background-beams";


function Contact() {

    return (
        <div className='min-h-screen bg-black py-12 pt-36'>
            <div className="max-w-2xl mx-auto p-4 relative z-10">
            <h1 className='text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white'>Contact us</h1>
            <p className='text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center'>Feel free to reach out with any questions, feedback, or collaboration ideas. Use the form below to contact me, and I'll respond as soon as possible. Your input is valuable and always appreciated. Thank you for connecting!</p>

            <form className="space-y-4 mt-4">
                <input type="email"
                    placeholder="Your email address"
                    className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
                    required
                    

                />
                <textarea
                    placeholder="Your message"
                    className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
                    required
                />
            </form>
            </div>


            <BackgroundBeams />
        </div>
    )
}

export default Contact
