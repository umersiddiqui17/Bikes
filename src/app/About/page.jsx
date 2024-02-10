import React from 'react';

export default function AboutPage() {
  return (
    <div className='relative top-20 flex flex-col justify-center items-center '>
      <h1 className='font-serif text-red-500 border-b border-red-500 mb-4 text-2xl'>About Us</h1>
      <h2 className='text-2xl font-serif text-red-500 border-b border-red-500'>Welcome to BIKEZ,</h2>
      <div className='max-w-prose'>
        <p className='font-sans text-xl font-medium leading-relaxed'> your ultimate destination for all things related to cycling! Whether you&apos;re a seasoned cyclist or just getting started, BIKEZ is here to support your journey on two wheels.
          <br />
          <br />
          At BIKEZ, we are passionate about cycling and believe in the transformative power of riding a bike. From commuting to work to exploring scenic routes on the weekends, cycling offers numerous benefits for both physical health and the environment. Our mission is to promote cycling as a fun, sustainable, and accessible mode of transportation and recreation for everyone.
          <br />
          <br />
          What sets BIKEZ apart is our dedication to providing comprehensive resources and top-notch products to enhance your cycling experience. Our team consists of avid cyclists who understand the needs and challenges of riders of all levels. Whether you&apos;re looking for expert advice on choosing the right bike, tips for maintenance and repairs, or recommendations for the latest gear and accessories, you&apos;ll find everything you need right here at BIKEZ.
          <br />
          <br />
          At BIKEZ, we believe in community. We are more than just a website; we are a hub for cyclists to connect, share experiences, and inspire each other. Join our vibrant online community to engage with fellow cyclists, participate in discussions, and stay updated on the latest news and events in the cycling world.
          <br />
          <br />
          Thank you for choosing BIKEZ as your cycling companion. Whether you&apos;re embarking on a solo adventure, joining a group ride, or simply pedaling around town, we&apos;re here to support you every step of the way. Happy cycling!
        </p>
        <p className='flex flex-col'>
          <span className='font-serif text-red-500 text-2xl'>Sincerely,</span>
          <span className='font-serif text-red-500 border-b border-red-500 mb-4 text-2xl'>The BIKEZ Team</span>
        </p>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='font-sans text-2xl text-red-500 border-b border-red-500'>Contact Us</h1>
        <div className="mt-6 text-black font-semibold">You can contact us at our following socials</div>
        <div className='max-w-prose'></div>
      </div>
    </div>

  );
}
