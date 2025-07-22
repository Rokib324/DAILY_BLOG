import React from 'react'

const Footer = () => {
  return (
    <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">
                Subscribe to our newsletter
            </h2>
        </div>
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-md shadow-md">
                    <h3 className="text-lg font-bold mb-4">Subscribe to our newsletter</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer