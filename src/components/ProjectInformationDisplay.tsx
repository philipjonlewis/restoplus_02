import React from 'react';
import {
  GitHubIcon,
  LinkedInIcon,
  TwitterIcon,
  WebsiteIcon,
} from './branding/SvgIcons';

const ProjectInformationDisplay = () => {
  return (
    <div className="absolute w-fit left-4 top-4  flex-col text-gray-700">
      <div className="mb-4">
        <p className="text-2xl font-bold font-serif mb-2">
          Restoplus Challenge - 02
        </p>
        <p className="text-xs mb-4 pb-2  border-b-[1px] border-white w-fit">
          Philip Jon E. Lewis
        </p>

        <div className="flex gap-4  w-fit pb-4">
          <a target="_blank" href="https://philipjonlewis.com">
            <WebsiteIcon />
          </a>
          <a target="_blank" href="https://github.com/philipjonlewis">
            <GitHubIcon />
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/philipjonlewis/">
            <LinkedInIcon />
          </a>
          <a target="_blank" href="https://twitter.com/__jonlewis">
            <TwitterIcon />
          </a>
        </div>
      </div>

      <div className="hidden lg:block">
        <p className="text-lg font-bold pb-2">Challenge 02 Criteria</p>
        <p className="text-xs pb-4">
          This challenge is a serverless programming challenge where you will be{' '}
          <br />
          using Google firebase to achieve the following.
        </p>
        <ul className="text-sm flex flex-col gap-4 border-b-[1px] w-fit mb-4 pb-4">
          <li>
            - Create a counter with Increment/Decrement button and store the{' '}
            <br />
            current count in the Cloud Firestore
          </li>
          <li>
            - Data should be written to firestore <br /> directly from the
            client-side using firebase JS SDK.
          </li>
          <li>
            - Retrieve the current value upon refresh, <br /> such that the
            counter would start from the previous value.
          </li>
          <li>
            - Create a reset button, which will <br /> reset the counter in the
            database to zero.
          </li>
          <li>
            - The database communication should <br /> only happen from the
            client side.
          </li>
        </ul>
      </div>
      <div className="hidden lg:flex gap-4 my-4 justify-start items-center  w-fit  ">
        <div className="hover:bg-blue-700 bg-blue-500 flex items-center p-2 rounded-lg text-white">
          <GitHubIcon />{' '}
          <a
            className="pl-2 cursor-pointer"
            target="_blank"
            href="https://github.com/philipjonlewis/restoplus_02"
          >
            Project Repo
          </a>
        </div>
      </div>
      <div className="w-fit hidden lg:block">
        <p className="text-xl font-bold">Tech Stack</p>
        <div className="pl-2">
          <p className="text-sm font-bold mb-1">Front End</p>
          <div className="pl-2 text-xs">
            <p>Typescript</p>
            <p>Vite</p>
            <p>React</p>
            <p>Tailwind</p>
          </div>
        </div>
        <div className="pl-2 mt-2">
          <p className="text-sm font-bold mb-1">Back End</p>
          <div className="pl-2 text-xs">
            <p>Google Firebase</p>
            <p>Anonymouse Authentication : Firestore Authentication</p>
            <p>Database : Firestore Database</p>
          </div>
        </div>
        <div className="pl-2 mt-2">
          <p className="text-sm font-bold mb-1">Deployment</p>
          <div className="pl-2 text-xs">
            <p>Front End - Netlify</p>
            <p>Database - Google Firebase</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectInformationDisplay;
