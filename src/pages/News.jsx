import React from 'react';
import Button from '../components/common/Button';

const data = [
  {
    id: 1,
    image: '/assets/images/img-news-1.png',
    title: 'Timecheater can not be detected by time trackers',
    text: 'Simulate ANY interaction by configuring it in our app. You can record your interactions, change them and run a combination of them',
  },
  {
    id: 2,
    image: '/assets/images/img-news-2.png',
    title: 'Timecheater can not be detected by time trackers',
    text: 'Simulate ANY interaction by configuring it in our app. You can record your interactions, change them and run a combination of them Simulate ANY interaction by configuring it in our app. You can record your interactions, change them and run a combination of them',
  },
  {
    id: 3,
    image: '/assets/images/img-news-3.png',
    title: 'Timecheater can not be detected by time trackers',
    text: 'Simulate ANY interaction by configuring it in our app',
  },
  {
    id: 4,
    image: '/assets/images/img-news-4.png',
    title: 'Timecheater can not be detected by time trackers',
    text: 'Simulate ANY interaction by configuring it in our app. You can record your interactions, change them and run a combination of them Simulate ANY interaction by configuring it in our app. You can record your interactions, change them and run a combination of them',
  },
  {
    id: 5,
    image: '/assets/images/img-news-5.png',
    title: 'Timecheater can not be detected by time trackers',
    text: 'Simulate ANY interaction by configuring it in our app',
  },
  {
    id: 6,
    image: '/assets/images/img-news-6.png',
    title: 'Timecheater can not be detected by time trackers',
    text: 'Simulate ANY interaction by configuring it in our app. You can record your interactions, change them and run a combination of them',
  },
];

const News = () => {
  return (
    <div className="relative min-h-screen pt-24 md:pt-32 xl:pt-48 overflow-hidden">
      <img
        src="/assets/images/common/bg-right.png"
        alt="Bg pic"
        className="absolute right-0 top-1/4"
      />
      <img
        src="/assets/images/icon-settings.png"
        alt="Img Questions"
        className="absolute w-56 h-56 xl:w-auto lg:h-auto left-0 top-10 lg:top-auto -z-10"
      />
      <div className="relative max-w-base mx-auto space-y-10 md:space-y-16 xl:space-y-20 px-5">
        <h1 className="text-center">News</h1>
        <div className="sm:columns-2 lg:columns-3 gap-5 mt-5 md:mt-9">
          {data.map((item) => (
            <div
              key={data.id}
              className="h-fit w-full pb-5 md:pb-14 space-y-4 md:space-y-8"
            >
              <div className="max-h-[28.3125rem] rounded-[1.5rem] lg:rounded-35 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-4 md:space-y-6 px-3 sm:px-5 md:px-12">
                <h4 className="text-lg md:text-22 font-bold text-brand-title">
                  {item.title}
                </h4>
                <p className="text-sm text-brand-gray-100">{item.text}</p>
                <Button className="w-full md:w-auto bg-brand-wind lg:hover:bg-brand-dark-blue lg:hover:text-white transition-all duration-300 sm:text-lg font-medium rounded-full py-3 md:py-5 px-8">
                  Read more
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
