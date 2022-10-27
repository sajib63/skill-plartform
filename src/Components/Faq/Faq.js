import React from 'react';

const Faq = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-10 row-gap-8 lg:grid-cols-3">
        <div>
          <div className="flex">
            <h6 className="mr-2 text-4xl font-bold md:text-5xl text-lime-600">
              86K
            </h6>
            <div className="flex items-center justify-center rounded-full bg-teal-accent-400 w-7 h-7">
              <svg
                className="text-teal-900 w-7 h-7"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
          </div>
          <p className="mb-2 font-bold md:text-lg">Downloads</p>
          <p className="text-gray-700">
            Our Course Downloads by 60K+ User's
            You can also download a set of documents as a single .zip archive. Just select some documents, right-click on them and choose Download.
          </p>
        </div>
        <div>
          <div className="flex">
            <h6 className="mr-2 text-4xl font-bold md:text-5xl  text-lime-600">
              1.3K
            </h6>
            <div className="flex items-center justify-center rounded-full bg-teal-accent-400 w-7 h-7">
              <svg
                className="text-teal-900 w-7 h-7"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
          </div>
          <p className="mb-2 font-bold md:text-lg">Subscribers</p>
          <p className="text-gray-700">
            One day, after filming a scene deep in the rainforest, the three
            actors and their agents decide to head back to home base by foot.
          </p>
        </div>
        <div>
          <div className="flex">
            <h6 className="mr-2 text-4xl font-bold md:text-5xl  text-lime-600">
              52M
            </h6>
            <div className="flex items-center justify-center rounded-full bg-teal-accent-400 w-7 h-7">
              <svg
                className="text-teal-900 w-7 h-7"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
          </div>
          <p className="mb-2 font-bold md:text-lg">User's</p>
          <p className="text-gray-700">
            Suddenly, they come to a large river. On the riverbank, they find a
            small rowboat, but it’s only big enough to hold two of them at one
            time.
          </p>
        </div>
      </div>
    </div>
    );
};

export default Faq;