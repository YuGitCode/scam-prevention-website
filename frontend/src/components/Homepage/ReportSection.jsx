import React from "react";
import styles, { layout } from "../../styles";
import useOnScreen from "../useOnScreen";

const ReportSection = () => {
  const [ref, isVisible] = useOnScreen({
    threshold: 0.5, // Trigger when 50% of the element is in view
  });

  return (
    <section className={`${layout.section}`}>
      <div
        ref={ref}
        className={`${layout.section}  ${
          isVisible ? "animate-fadeInUp" : "opacity-0"
        }`}
      >
        <div ref={ref} className={`grid sm:grid-cols-1 justify-center`}>
          <h2 className={`${styles.heading3} flex items-center justify-center`}>
            Channels of Reporting Scam
          </h2>
          <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-6 my-8 mx-auto'>
            <a
              href='https://www.scamwatch.gov.au/report-a-scam'
              target='_blank'
              rel='noopener noreferrer'
            >
              <div
                data-aos='fade-right'
                className='transition-transform duration-300 hover:scale-105 rounded border shadow-lg h-48 w-2/3 flex items-center justify-center cursor-pointer mx-auto bg-white'
              >
                <div className='text-center'>
                  <div className='font-bold text-xl md:text-3xl sm:text-2xl text-[#34d399]'>
                    I want to report a scam!
                  </div>
                </div>
              </div>
            </a>

            <a
              href='https://www.cyber.gov.au/report-and-recover/report'
              target='_blank'
              rel='noopener noreferrer'
            >
              <div
                data-aos='fade-left'
                className='transition-transform duration-300 hover:scale-105 rounded border shadow-lg h-48 w-2/3 flex items-center justify-center cursor-pointer mx-auto bg-white'
              >
                <div className='text-center '>
                  <div className='font-bold text-xl md:text-3xl sm:text-2xl text-[#34D399]'>
                    I have been scammed, where do I report?
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReportSection;
