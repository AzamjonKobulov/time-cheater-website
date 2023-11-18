import React from 'react';

const Footer = () => {
  return (
    <footer className="relative py-10">
      <p className="text-brand-gray text-center">© 2023 TimeCheater</p>
      <img
        src="/assets/images/common/bg-bottom.png"
        alt="Bg pic"
        className="absolute bottom-0 left-0 -z-10"
      />
    </footer>
  );
};

export default Footer;
