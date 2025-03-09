    import React from "react";

    export default function CategoryCard({ title, description, imageUrl }) {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
        <div className="h-56 relative">
            <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
            />
        </div>
        <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-[#454545]">{description}</p>
        </div>
        </div>
    );
    }
