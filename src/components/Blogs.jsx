import React from 'react';
import { blogs } from '../constant';
import { FaArrowRightLong } from 'react-icons/fa6';

const Blogs = () => {
  return (
    <section className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-12">
      <div className="text-center md:w-1/2 mx-auto">
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-4">
          Caring is the new marketing
        </h2>
        <p className="md:w-3/4 text-sm text-neutralGrey mb-8 mx-auto">
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. See who&apos;s joining the community, read
          about how our community are increasing their membership income and
          lot&apos;s more.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center justify-between gap-8">
        {blogs.map((blog) => {
          return (
            <div
              key={blog.id}
              className="mx-auto relative mb-12 hover:scale-95 transition-all duration-300 cursor-pointer"
            >
              <img src={blog.img} alt={blog.title} />
              <div className="text-center px-4 py-8 bg-white shadow-lg rounded-md md:w-3/4 mx-auto absolute left-0 right-0 -bottom-14">
                <h3 className="text-neutralDGrey font-semibold mb-4">
                  {blog.title}
                </h3>
                <div className="flex justify-center items-center font-bold gap-2 text-brandPrimary hover:underline">
                  <a href="/">Read More</a>
                  <FaArrowRightLong size={20} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Blogs;
