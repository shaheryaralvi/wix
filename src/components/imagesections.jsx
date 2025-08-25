import React from 'react';

const ImageSections = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Section 1 */}
          <div className="relative h-64 md:h-96 overflow-hidden rounded-lg shadow-md">
            <img
              src="https://source.unsplash.com/random/600x400"
              alt="Image 1"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-4">
              <h3 className="text-xl font-semibold">Section 1</h3>
              <p className="text-sm">Description for Section 1</p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="relative h-64 md:h-96 overflow-hidden rounded-lg shadow-md">
            <img
              src="https://source.unsplash.com/random/600x401"
              alt="Image 2"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-4">
              <h3 className="text-xl font-semibold">Section 2</h3>
              <p className="text-sm">Description for Section 2</p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="relative h-64 md:h-96 overflow-hidden rounded-lg shadow-md">
            <img
              src="https://source.unsplash.com/random/600x402"
              alt="Image 3"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-4">
              <h3 className="text-xl font-semibold">Section 3</h3>
              <p className="text-sm">Description for Section 3</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSections;