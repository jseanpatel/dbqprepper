import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import prompts from "../data/prompts.json";
import InputArea from "../components/inputarea";

function IndexPage() {
  const [course, setCourse] = useState();
  const [link, setLink] = useState();
  const [generate, setGenerate] = useState();

  useEffect(() => {
    console.log(course, link);
  });

  return (
    <div className="flex flex-col w-screen h-auto min-h-screen pb-10 font-sans bg-gray-400">
      <Navbar/>
      <div className="self-center w-3/4 px-8 mt-10 text-center bg-gray-200 rounded-lg shadow-lg md:px-24">
        <div className="pt-8 ">
          <p className="mb-3 text-xl font-extrabold md:text-2xl">
            2020 PRACTICE DBQ FREE-RESPONSE QUESTIONS{" "}
          </p>

          <p className="mb-3 text-lg "> Total Time—50 minutes</p>

          <p className="text-base text-gray-700">
            <span className="font-bold"> Directions:</span> First select your
            subject, then select the year of the prompt you want, then click the
            generate button. Your prompt will be generated, and a clock will
            start automatically.
          </p>
        </div>

        <div className="flex flex-col items-center justify-between px-16 py-4">
          {!generate && (
            <div>
              <div className="flex-row ">
                <div className="relative inline-block w-48 mb-4 md:mr-4">
                  <select
                    className="w-full px-4 py-2 pr-8 text-sm leading-tight text-center bg-white border border-0 border-gray-400 rounded-full shadow appearance-none hover:border-gray-500 focus:outline-none focus:shadow-outline"
                    value={course}
                    onChange={(e) => setCourse(e.currentTarget.value)}
                  >
                    <option> Select Subject...</option>
                    {prompts.map(({ name }) => (
                      <option key={name} value={name}>
                        {" "}
                        {name}{" "}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
                    <svg
                      className="w-4 h-4 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
                {course && (
                  <div className="relative inline-block w-48 mb-4 md:ml-4">
                    <select
                      className="w-full px-4 py-2 pr-8 text-sm leading-tight text-center bg-white border border-gray-400 rounded-full shadow appearance-none hover:border-gray-500 focus:outline-none focus:shadow-outline"
                      value={link}
                      onChange={(e) => setLink(e.currentTarget.value)}
                    >
                      <option> Select Year...</option>
                      {prompts
                        .filter((obj) => obj.name === course)
                        .map(({ pdfs }) =>
                          pdfs.map(({ year, link }) => (
                            <option key={year} value={link}>
                              {" "}
                              {year}{" "}
                            </option>
                          ))
                        )}
                    </select>

                    <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
                      <svg
                        className="w-4 h-4 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
              {link && (
                <button
                  className="self-center w-48 px-4 py-2 mb-4 text-sm font-bold leading-tight text-white bg-black border border-gray-400 rounded-full shadow appearance-none md:w-full md:block hover:border-gray-500 focus:outline-none focus:shadow-outline"
                  onClick={() => setGenerate(true)}
                >
                  Generate Prompt
                </button>
              )}
            </div>
          )}

          <div className="flex flex-col justify-center w-full">
            <div className="">
              {generate && <div className="mb-4 font-bold"></div>}
              {generate && <InputArea link={link} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndexPage;
