import Button from "../../common/Button";

const HowToUse = () => {
  return (
    <section id="how-to-use" className="relative py-12 lg:pt-32 pb-28">
      <img
        src="/assets/images/common/bg-right.png"
        alt="Bg pic"
        className="absolute top-0 lg:top-1/3 right-0"
      />
      <h1 className="text-center">How to use product</h1>
      <div className="relative max-w-base mx-auto mt-8 space-y-5 lg:space-y-11 md:mt-14 px-5">
        <img
          src="/assets/images/img-computer.png"
          alt="Comp img"
          className="absolute w-1/2 md:w-auto -top-1/4 sm:-top-1/3 -left-24 2xl:-left-[20%] -z-10"
        />
        <img
          src="/assets/images/img-clock-how.png"
          alt="Clock img"
          className="absolute w-1/4 md:w-auto -bottom-14 sm:-bottom-[20%] lg:-bottom-[8%] -left-[8%] -z-10"
        />

        <div className="flex flex-col md:flex-row items-center justify-between gap-5 md:gap-10 bg-brand-wind text-white rounded-35 lg:rounded-75 pt-8 lg:pt-[5.6875rem] pb-28 lg:pb-40 px-8 md:px-20 lg:px-28">
          <div className="max-w-md lg:pr-10 space-y-2 md:space-y-5">
            <h3 className="text-xl md:text-3xl font-bold">Title text</h3>
            <p className="lg:text-22">
              Under a rough tracker 8-hour workday transform into 12, becouse
              you cannot write code, make calls, sales for 8 hours straight.
            </p>
          </div>
          <div className="max-w-md lg:pr-10 space-y-5">
            <p className="lg:text-22">
              It becomes very stressfull and unhealthy. You deserve a break and
              we can give one to you.
            </p>
          </div>
        </div>
        <div className="relative h-32 sm:h-56 md:h-72 xl:h-[28rem] w-full flex flex-col md:flex-row items-center justify-between gap-10 bg-brand-purple-100 text-white rounded-35 lg:rounded-75">
          <div className="w-5/6 xl:max-w-6xl absolute left-1/2 -translate-x-1/2 -top-1/2 xl:-top-1/3 bg-white rounded-35 lg:rounded-75 p-4 md:px-6 xl:px-9 md:py-7 xl:py-10">
            <button className="w-28 h-28 s:mw-36 sm:h-36 md:w-48 md:h-48 xl:w-auto xl:h-auto absolute -top-[44%] sm:-top-[31%] md:-top-1/3 xl:-top-[27%] left-1/2 -translate-x-1/2">
              <svg
                viewBox="0 0 254 170"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <path
                  d="M254 125.5C215.6 125.5 212 108.5 212 84L198.5 127L254 125.5Z"
                  fill="white"
                />
                <path
                  d="M0.5 125.5C38.9 125.5 42.5001 108.5 42.5 84L56 127L0.5 125.5Z"
                  fill="white"
                />
                <path
                  d="M212 85C212 131.944 173.944 170 127 170C80.0558 170 42 131.944 42 85C42 38.0558 80.0558 0 127 0C173.944 0 212 38.0558 212 85Z"
                  fill="white"
                />
                <path
                  d="M187.5 90.1349C187.5 123.272 160.637 150.135 127.5 150.135C94.3629 150.135 67.5 123.272 67.5 90.1349C67.5 56.9978 94.3629 30.1349 127.5 30.1349C160.637 30.1349 187.5 56.9978 187.5 90.1349Z"
                  fill="#767BFF"
                />
                <g clip-path="url(#clip0_255_93)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M120.016 79.007L130.053 84.7069L139.998 90.4985L130.053 96.1984L120.016 101.99V79.007Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_255_93">
                    <rect
                      width="20"
                      height="23"
                      fill="white"
                      transform="translate(120 79)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </button>
            <div className="absolute h-1/2 w-1/2 flex flex-col justify-end space-y-1 sm:space-y-5 top-0 sm:top-5">
              <div>
                <img
                  src="/assets/images/logo-how.png"
                  alt="Logo"
                  className="w-full h-full"
                />
              </div>
              <Button className="ml-auto bottom-16 sm:bottom-28 md:bottom-36 lg:bottom-52 w-20 sm:w-44 lg:w-72 bg-brand-purple-200 py-1 sm:py-3 mr-1 sm:mr-0 md:py-4">
                Start
              </Button>
            </div>
            <img
              src="/assets/images/img-wave-how.png"
              alt="Pic"
              className="w-full h-32 sm:h-64 md:h-80 xl:h-[450px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToUse;
