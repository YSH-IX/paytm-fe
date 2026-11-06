'use client';

import { motion } from 'motion/react';
export const Loader = () => {
  return (
    <div className="mx-auto flex size-100 gap-2 bg-amber-200">
      {/* <LoaderSVG/> */}
      {/* {[...Array(20)].map((_, idx) => (
        <motion.div
          key={idx}
          style={{
            rotate: 1 + (idx * 2),
          }}
          className={`h-10 w-1 origin-bottom bg-neutral-950`}
        ></motion.div>
      ))} */}
    </div>
  );
};

const LoaderSVG = () => {
  return <>loader</>;
};
