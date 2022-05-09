//===================================================================================================================================================================//
//                                                                         About Component                                                                           //
//===================================================================================================================================================================//

import React from 'react';

//===================================================================================================================================================================//

const About = () => {
    return (
        <div>
            <h1 className="text-6xl mb4">GitHub Finder</h1>
            <p className='mb-4 text-2xl font-light'>
                A React app to search GitHub profiles and see profile details. This
                project is part of the React Front To Back Udemy course.
            </p>
            <p className='text-lg text-gray-400'>
                Version <span className='text-white'>1.0.1</span>
            </p>
            <p className='text-lg text-gray-400'>
                Layout By: Hassib Moddasser
            </p>
        </div>
    )
};

//===================================================================================================================================================================//

export default About;