import Button from "../../common/Button";

const Advantages = () => {
  return (
    <section id="advantages" className="pt-12 lg:pt-24">
      <div className="relative max-w-base mx-auto grid sm:grid-cols-2 xl:grid-cols-6 gap-5 px-5">
        <img
          src="/assets/images/bg-radial-blocks.png"
          alt="Bg pic"
          className="absolute -left-1/3 -top-1/3"
        />
        <img
          src="/assets/images/bg-radial-blocks-2.png"
          alt="Bg pic"
          className="absolute -right-56 bottom-0"
        />
        <img
          src="/assets/images/common/img-clock.png"
          alt="Img Clock"
          className="absolute w-40 h-40 md:w-64 md:h-64 lg:w-auto lg:h-auto bottom-[15%] -right-10 md:right-14 md:-bottom-32 lg:-right-56 lg:-bottom-1/4"
        />
        <div className="xl:col-span-2 space-y-3 md:space-y-5 rounded-35 box-shadow py-8 px-5 md:pl-11">
          <div className="flex flex-col-reverse md:flex-row md:items-end  justify-between">
            <h4 className="text-xl md:text-2xl lg:text-3xl font-bold">
              Untraceable/ <br className="hidden lg:block" /> Undetectable
            </h4>
            <img
              src="/assets/images/icon-blocks-1.svg"
              alt="Icon"
              className="w-[6.875rem] lg:w-36"
            />
          </div>
          <p className="text-lg lg:text-22 pr-10">
            Timecheater can not be detected by time trackers, its completely
            safe
          </p>
        </div>
        <div className="xl:col-span-2 space-y-3 md:space-y-5 bg-brand-purple-100 text-white rounded-35 box-shadow py-8 px-5 md:px-11">
          <div className="xl:h-52 flex flex-col-reverse md:flex-row gap-5 items-center md:items-end justify-between">
            <h4 className="text-xl md:text-2xl lg:text-3xl font-bold">
              Simulate ANY interaction by configuring it in our app.
            </h4>
            <div className="self-start w-20 h-20  lg:w-100 lg:h-100 shrink-0 bg-brand-purple-200 grid place-content-center icon-shadow rounded-[1.75rem] border border-white/10">
              <img
                src="/assets/images/icon-blocks-2.svg"
                alt="Icon"
                className="w-11 lg:w-auto"
              />
            </div>
          </div>
          <p className="text-lg lg:text-22">
            You can record your interactions, change them and run a combination
            of them
          </p>
        </div>
        <div className="xl:col-span-2 space-y-3 md:space-y-5 rounded-35 box-shadow py-8 px-5 pb-20 md:pb-0 md:px-11">
          <div className="w-20 h-20 lg:w-100 lg:h-100 shrink-0 md:ml-auto bg-brand-purple-200 grid place-content-center icon-shadow rounded-[1.75rem] border border-white/10">
            <img
              src="/assets/images/icon-blocks-3.svg"
              alt="Icon"
              className="w-11 lg:w-auto ml-auto"
            />
          </div>
          <h4 className="text-xl md:text-2xl lg:text-3xl font-bold">
            Easy and unique configuration for your needs
          </h4>
          {/* <p className="text-lg lg:text-22">
            You can record your interactions, change them and run a combination
            of them
          </p> */}
        </div>
        <div className="xl:col-span-3 space-y-3 md:space-y-5 rounded-35 box-shadow py-8 px-5 md:pl-11">
          <div className="flex flex-col-reverse md:flex-row md:items-end  justify-between">
            <h4 className="text-xl md:text-2xl lg:text-3xl font-bold">
              Support
            </h4>
            <img
              src="/assets/images/icon-blocks-4.svg"
              alt="Icon"
              className="w-24 md:w-auto"
            />
          </div>
          <p className="text-lg lg:text-22 pr-10">
            You can ask us any questions and we will help you within 24 hours
          </p>
        </div>
        <div className="sm:col-span-2 xl:col-span-3 space-y-3 md:space-y-5 bg-brand-dark-blue text-white rounded-35 box-shadow py-8 px-5 md:pl-11">
          <div className="flex flex-col-reverse md:flex-row md:items-end  justify-between">
            <h4 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-5">
              Trial
            </h4>
            <img
              src="/assets/images/icon-blocks-5.svg"
              alt="Icon"
              className="w-24 md:w-auto"
            />
          </div>
          <p className="text-lg lg:text-22 pr-10">
            If you dont believe us, use 7 days trial and try it for free
          </p>
          <Button className="w-full text-lg md:w-72 bg-brand-wind py-4 !mt-5 md:!mt-11">
            Trial free
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
