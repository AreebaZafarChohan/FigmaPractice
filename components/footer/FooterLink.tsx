import React from 'react'

const FooterLink = ({text}: {text: string}) => {
  return (
    <p className='font-poppins font-normal leading-6 text-text hover:underline text-sm'>
        {text}
    </p>
  );
};

export default FooterLink;