import React, { useEffect, useState } from 'react';

const data = [
  {
    id: 1,
    question:
      'Timecheater can not be detected by time trackers, its completely safe?',
    answer:
      'Simulate ANY interaction by configuring it in our app. You can record your interactions, change them and run a combination of them',
  },
  {
    id: 2,
    question:
      "Trial version - If you don't believe us, use the 7-day trial version and try it for free?",
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id cumque ratione, et ipsa aut neque quasi rem fugiat facere, dicta consequuntur? Facere libero error hic magnam, dolores quae fugit blanditiis sequi suscipit sunt minus tenetur qui architecto aperiam maiores laborum vitae nam nemo aspernatur commodi quasi praesentium laudantium nihil assumenda?',
  },
  {
    id: 3,
    question:
      'Untraceable/Undetectable - Timecheater cannot be detected by time trackers?',
    answer:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque unde tempore velit fuga? Eius quis assumenda eveniet similique eligendi ut, facere iste modi non provident atque exercitationem dolorem et rem.',
  },
  {
    id: 4,
    question:
      "Trial version - If you don't believe us, use the 7-day trial version and try it for free?",
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, quibusdam cupiditate? Iure quod minima unde, illo sunt iusto error voluptatibus, in reprehenderit nulla nemo, praesentium accusantium. Velit voluptatum ex debitis quos blanditiis at alias ducimus error quia, omnis nulla soluta, eaque libero animi similique mollitia modi quisquam voluptatibus aliquid numquam nostrum culpa officia nesciunt? Vero quia beatae ipsa similique perspiciatis debitis quo iste. Sequi, eaque. Pariatur voluptates necessitatibus eius saepe velit, maxime voluptate iure autem recusandae laudantium nobis, porro optio quo odit quisquam nesciunt possimus maiores. Quibusdam suscipit praesentium quos ratione quidem eveniet aspernatur non velit, molestiae quia aliquam ipsa?',
  },
  {
    id: 5,
    question:
      'Untraceable/Undetectable - Timecheater cannot be detected by time trackers?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis quae culpa, voluptatem, officia necessitatibus natus provident magni blanditiis tempora odit laborum temporibus accusamus ratione eius voluptates nostrum maxime labore repellat dolore! Tenetur dignissimos reprehenderit odio minus quam minima nihil! Laborum.  ',
  },
];

const Faq = () => {
  const [active, setIsActive] = useState(null);

  const handleButtonClick = (index) => {
    setIsActive((prevActive) => (prevActive === index ? null : index));
  };

  const handleClickOutside = (e) => {
    if (!e.target.closest('.faq-accordion')) {
      setIsActive(null);
    }
  };

  useEffect(() => {
    document.body.addEventListener('click', handleClickOutside);

    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative min-h-screen pt-24 md:pt-32 xl:pt-48 overflow-hidden">
      <img
        src="/assets/images/common/bg-right.png"
        alt="Bg pic"
        className="absolute right-0 top-1/4"
      />
      <div className="relative max-w-base mx-auto space-y-10 md:space-y-16 xl:space-y-20 px-5">
        <h1 className="text-center">FAQ</h1>
        <img
          src="/assets/images/icon-question-faq.svg"
          alt="Img Questions"
          className="absolute w-28 h-28 md:w-40 md:h-40  xl:w-auto lg:h-auto 2xl:-left-[15%] 3xl:-left-1/4 -top-[17%] md:-top-[10%] xl:-top-1/4 -z-10"
        />
        <div className="faq-accordion">
          {data.map((item, index) => (
            <div key={item.id}>
              
              <button
                onClick={() => handleButtonClick(index)}
                className="w-full flex items-center justify-between gap-3 sm:gap-7 text-sm md:text-base lg:text-22 font-bold text-brand-title rounded-full border border-brand-wind pl-5 lg:pl-11 pr-1 py-1"
              >
                <p className="text-start">{item.question}</p>
                <div className="w-10 h-10 shrink-0 lg:w-[3.75rem] lg:h-[3.75rem] rounded-full grid place-content-center bg-brand-wind">
                  <span className="h-0.5 w-5 lg:w-[1.875rem] rounded-full bg-white"></span>
                  {index !== active && (
                    <span className="h-0.5 w-5  lg:w-[1.875rem] rounded-full rotate-90 -mt-0.5 bg-white"></span>
                  )}
                </div>
              </button>
              <p
                className={`max-w-6xl ml-3 sm:ml-5 md:ml-7 xl:ml-10 lg:ml-14 text-sm md:text-base lg:text-22 my-2 md:my-4 transition-all duration-500 ${
                  index === active
                    ? 'max-h-[31.25rem]'
                    : 'max-h-0 overflow-hidden'
                }`}
              >
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
