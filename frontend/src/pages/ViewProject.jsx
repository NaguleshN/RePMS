import React from 'react';
import Navbar from '../components/Navbar';

const ViewProject = () => {
  return (
    <>
    <Navbar />
    
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-2xl mt-6">
        <h3 className="text-lg font-semibold text-gray-900 text-center">Applicant Information</h3>
        <p className="mt-1 text-sm text-gray-500 text-center">Personal details and application.</p>
        <div className="mt-6 border-t border-gray-200">
          <dl className="divide-y divide-gray-200">
            <div className="py-4 grid grid-cols-3 gap-4">
              <dt className="text-sm font-medium text-gray-900">Full name</dt>
              <dd className="text-sm text-gray-700 col-span-2">Margot Foster</dd>
            </div>
            <div className="py-4 grid grid-cols-3 gap-4">
              <dt className="text-sm font-medium text-gray-900">Application for</dt>
              <dd className="text-sm text-gray-700 col-span-2">Backend Developer</dd>
            </div>
            <div className="py-4 grid grid-cols-3 gap-4">
              <dt className="text-sm font-medium text-gray-900">Email address</dt>
              <dd className="text-sm text-gray-700 col-span-2">margotfoster@example.com</dd>
            </div>
            <div className="py-4 grid grid-cols-3 gap-4">
              <dt className="text-sm font-medium text-gray-900">Salary expectation</dt>
              <dd className="text-sm text-gray-700 col-span-2">$120,000</dd>
            </div>
            <div className="py-4 grid grid-cols-3 gap-4">
              <dt className="text-sm font-medium text-gray-900">About</dt>
              <dd className="text-sm text-gray-700 col-span-2">Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat...</dd>
            </div>
            <div className="py-4 grid grid-cols-3 gap-4">
              <dt className="text-sm font-medium text-gray-900">Attachments</dt>
              <dd className="text-sm text-gray-700 col-span-2">
                <ul className="divide-y divide-gray-200 rounded-md border border-gray-300">
                  <li className="flex justify-between py-4 px-4">
                    <span className="truncate font-medium">resume_back_end_developer.pdf</span>
                    <a href="#" className="text-indigo-600 hover:text-indigo-500">Download</a>
                  </li>
                  <li className="flex justify-between py-4 px-4">
                    <span className="truncate font-medium">coverletter_back_end_developer.pdf</span>
                    <a href="#" className="text-indigo-600 hover:text-indigo-500">Download</a>
                  </li>
                </ul>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
    </>
  );
};

export default ViewProject;
