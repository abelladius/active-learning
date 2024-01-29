import React, { useState } from 'react';
import defaultLogo from '../assets/Active-learning-logo-small.webp'


const CompanyList = ({ companies }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {companies.map((company, index) => (
        <div key={index} className="bg-white p-4 rounded-md shadow-md">
          {/* <img
            src={defaultLogo}
            alt={`${company} Logo`}
            className="w-20 h-20 object-contain mb-4"
          /> @TODO*/}
          <h3 className="text-lg font-medium text-gray-900">{company}</h3>
        </div>
      ))}
    </div>
  );
};

export default CompanyList