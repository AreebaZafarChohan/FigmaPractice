import React from 'react'

const Heading = ({text}: {text: string}) => {
  return (
    <h6 className='text-text font-poppins font-[500] leading-7 text-lg'>
        {text}
    </h6>
  );
};

export default Heading;