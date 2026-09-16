import React, { useState } from "react";
import { useNavigate } from "react-router";
import { assets, blog_data } from "../assets/assets";

const BlogCard = ({ blog }) => {
  const { title, description, category, image, _id } = blog;
  const navigate = useNavigate();
  const [imageLoaded, setImageLoaded] = useState(false);

  const imageSrc = assets[image] || image;
  const fullDesc =
    blog_data.find((b) => b.title === title)?.description || description;
  const text = fullDesc.replace(/<[^>]+>/g, "").trim();
  return (
    <div
      onClick={() => navigate(`/blog/${_id}`)}
      className="w-full rounded-lg overflow-hidden shadow hover:scale-102 hover:shadow-primary/25 duration-300 cursor-pointer"
    >
      <div className="relative aspect-video bg-gray-200">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-300 animate-pulse"></div>
        )}
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full aspect-video object-cover"
          onLoad={() => setImageLoaded(true)}
          onError={(e) => {
            console.error("Image load error:", imageSrc);
            setImageLoaded(true);
          }}
        />
      </div>
      <span className="ml-5 mt-4 px-3 py-1 inline-block bg-primary/20 rounded-full text-primary text-xs">
        {category}
      </span>
      <div className="p-5">
        <h5 className="mb-2 font-medium text-gray-900">{title}</h5>
        <p
          className="mb-3 text-xs text-gray-600"
          style={{ whiteSpace: "pre-wrap" }}
        >
          {text.length > 200 ? text.slice(0, 200) + "..." : text}
        </p>
      </div>
    </div>
  );
};

export default BlogCard;


