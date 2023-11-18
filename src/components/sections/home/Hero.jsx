import Button from '../../common/Button';

const Hero = () => {
  return (
    <section className="relative bg-brand-dark-blue 3xl:bg-white pb-10 lg:pb-32">
      <img
        src="/assets/images/img-hero.png"
        alt="Hero Img"
        className="absolute inset-0 xl:w-full xl:h-full"
      />
      <img
        src="/assets/images/img-hero-settings.png"
        alt="Hero Img"
        className="w-1/2 md:w-1/2 lg:w-auto absolute mx-auto top-1/4 -right-1/4 sm:top-2/3 lg:-right-[10%] xl:top-[60%] xl:right-[10%]"
      />
      <img
        src="/assets/images/bg-radial-blocks.png"
        alt="bg pic"
        className="absolute top-0 right-0"
      />
      <img
        src="/assets/images/common/bg-radial.png"
        alt="bg pic"
        className="absolute hidden lg:block -right-32 -bottom-8"
      />
      <img
        src="/assets/images/common/bg-radial-2.png"
        alt="bg pic"
        className="absolute hidden lg:block -right-0 -bottom-32"
      />
      <div className="max-w-base w-full mx-auto flex items-center pt-28 md:pt-48 lg:pt-60 px-5">
        <div className="max-w-3xl mx-auto lg:mx-0 relative w-full text-white space-y-7 lg:space-y-10">
          <div>
            <h1>Take control of your time</h1>
            <p className="md:text-xl lg:text-2xl mt-2">
              Honest work doesnt need total control
            </p>
          </div>
          <div className="font-medium md:text-xl lg:text-2xl space-y-3 lg:space-y-2">
            <div className="relative max-w-2xl lg:pr-8 mr-auto text-center bg-white/10 rounded-full py-3 px-7 md:py-5 md:px-10">
              Under a rough tracker 8-hour workday transform into 12, becouse
              you cannot write code/ make calls/ sales for 8 hours straight
              <img
                src="/assets/images/icon-arrow.svg"
                alt="Arrow icon"
                className="absolute w-12 h-40 md:h-auto md:w-auto top-[30%] right-5 sm:top-1 sm:right-10 md:top-2/3 md:-right-10 lg:top-24 lg:-right-16"
              />
            </div>
            <div className="max-w-[37.1875rem] ml-auto text-brand-wind border border-brand-wind rounded-full text-center p-2 lg:p-5">
              It becomes very stressfull and unhealthy
            </div>
          </div>
          <div className="space-y-6 md:space-y-10 lg:space-y-[3.5rem]">
            <p className="text-lg md:text-2xl lg:text-32 font-bold">
              Honest work doesnt need total control
            </p>
            <Button className="w-full sm:w-auto bg-brand-wind border-brand-wind hover:bg-white hover:text-brand-dark-blue transition-all duration-200 text-lg py-3.5 lg:py-5 px-15">
              Demo version
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
