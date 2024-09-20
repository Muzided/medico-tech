import React from 'react';

const GoogleMap = () => {
  return (
    <div className='p-28'>
      <div
      className='pb-4 text-5xl font-bold   tracking-wide  text-center text-[#08485E] ' >Get directions in</div>
    <div className="relative overflow-hidden" style={{ paddingBottom: "56.25%" }}>
      <iframe 
        className="absolute inset-0 w-full h-full" 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3527.8747832312197!2d-82.64075712467123!3d27.84438637610429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2e7ab04da46bf%3A0x3379bec16791fa7e!2sFlorida%20Registered%20Agent%20LLC!5e0!3m2!1sen!2s!4v1711263873209!5m2!1sen!2s" 
        allowfullscreen="" 
        loading="lazy"
      ></iframe>
    </div>
    </div>
  );
};

export default GoogleMap;