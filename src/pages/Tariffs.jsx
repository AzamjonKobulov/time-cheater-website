import Button from '../components/common/Button';

const data = [
  {
    id: 1,
    tariffTitle: 'Light',
    duration: '1 month',
    cost: '480 $',
    features: [
      {
        id: 1,
        label:
          'Record your interactions, change them and run a combination of them ',
      },
      {
        id: 2,
        label: 'Settings /configuration',
      },
      { id: 3, label: 'Personal startup' },
    ],
  },
  {
    id: 2,
    tariffTitle: 'Business',
    duration: '3 months',
    cost: '990 $',
    features: [
      {
        id: 1,
        label:
          'Record your interactions, change them and run a combination of them ',
      },
      {
        id: 2,
        label: 'Settings /configuration',
      },
      { id: 3, label: 'Personal startup' },
      { id: 4, label: 'Support 24/7' },
      { id: 5, label: '15 modules' },
    ],
  },
  {
    id: 2,
    tariffTitle: 'Pro',
    duration: '1 year',
    cost: '12 480 $',
    features: [
      {
        id: 1,
        label:
          'Record your interactions, change them and run a combination of them ',
      },
      {
        id: 2,
        label: 'Settings /configuration',
      },
      { id: 3, label: 'Personal startup' },
      { id: 4, label: 'Support 24/7' },
      { id: 5, label: '27 modules' },
      { id: 6, label: 'Personal assistant' },
    ],
  },
];

const Tariffs = () => {
  return (
    <div className="relative min-h-screen pt-24 pb-28 md:pt-32 xl:pt-48 overflow-hidden">
      <img
        src="/assets/images/common/bg-right.png"
        alt="Bg pic"
        className="absolute right-0 top-1/3"
      />
      <div className="relative max-w-base mx-auto space-y-10 md:space-y-16 xl:space-y-20">
        <h1 className="text-center">Available rates</h1>
        <img
          src="/assets/images/common/img-clock.png"
          alt="Img Clock"
          className="absolute w-40 h-40 md:w-64 md:h-64 lg:w-auto lg:h-auto -bottom-[5%] -left-[20%] md:-bottom-[10%] md:-left-[10%] xl:-left-[18%] xl:-bottom-[15%] xl:z-10"
        />

        <img
          src="/assets/images/img-settings-rates.png"
          alt="Settings icon"
          className="absolute right-0 top-1 xl:-right-[13%] xl:-top-[13%] -z-10"
        />
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 px-5 sm:px-20 md:px-10 lg:px-5">
          {data.map((item, index) => (
            <div
              key={index}
              className={`relative flex flex-col justify-between items-center space-y-5 xl:space-y-0 text-white overflow-hidden rounded-[1.5rem] sm:rounded-35 pb-6 sm:pb-8 xl:pb-11 ${
                index === 0
                  ? 'bg-brand-purple-100'
                  : index === 1
                  ? 'bg-brand-card-100'
                  : 'bg-brand-card-200 md:col-span-2 xl:col-span-1'
              }`}
            >
              <img
                src={
                  index === 0
                    ? '/assets/images/bg-radial-price-1.png'
                    : index === 1
                    ? '/assets/images/bg-radial-price-2.png'
                    : '/assets/images/bg-radial-price-3.png'
                }
                alt="Radial"
                className="absolute bottom-0 left-0"
              />
              <div>
                <div className="space-y-3 xl:space-y-5">
                  <div className="text-center px-5 py-4 md:px-7 md:py-6 xl:px-11 xl:pt-9">
                    <h3 className="text-3xl md:text-4xl xl:text-42 font-bold">
                      {item.tariffTitle}
                    </h3>
                    <p className="text-xl md:text-2xl xl:text-3xl mt-2">
                      {item.duration}
                    </p>
                  </div>
                  <div className="border-y border-dashed text-center text-5xl py-3.5 xl:py-5">
                    <p>{item.cost}</p>
                  </div>
                </div>
                <ul className="relative z-10 space-y-3.5 xl:space-y-5 md:text-lg p-6 md:px-7 md:py-6 xl:px-11 xl:pt-9">
                  {item.features.map((feature, index) => (
                    <li key={index} className="flex gap-6">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="shrink-0 mt-1.5"
                      >
                        <g clip-path="url(#clip0_1_211)">
                          <path
                            d="M8 0C3.58897 0 0 3.58897 0 8C0 12.411 3.58897 16 8 16C12.411 16 16 12.411 16 8C16 3.58897 12.411 0 8 0ZM12.4712 5.89474L7.3584 10.9674C7.05764 11.2682 6.57644 11.2882 6.25564 10.9875L3.54887 8.5213C3.22807 8.22055 3.20802 7.7193 3.48872 7.3985C3.78947 7.07769 4.29073 7.05764 4.61153 7.3584L6.75689 9.32331L11.3283 4.75188C11.6491 4.43108 12.1504 4.43108 12.4712 4.75188C12.792 5.07268 12.792 5.57393 12.4712 5.89474Z"
                            fill="#4BC2C2"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1_211">
                            <rect width="16" height="16" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <span>{feature.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Button className="relative z-10 w-4/5 text-lg font-medium bg-brand-wind lg:hover:bg-white lg:hover:text-brand-dark-blue transition-all duration-300 py-3.5 md:py-5">
                {index === 0 ? 'Trial free' : 'Start'}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tariffs;
