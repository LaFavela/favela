import React, { useState } from 'react';

interface StarRatingProps {
   rating: number;
   onChange: (rating: number) => void;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, onChange }) => {
   const [hoverRating, setHoverRating] = useState(0);

   const handleRatingHover = (index: number) => {
      setHoverRating(index);
   };

   const handleRatingClick = (index: number) => {
      onChange(index);
   };
   return (
      <div className="flex">
         {[...Array(5)].map((_, index) => (
            <svg
               key={index}
               className={`cursor-pointer ${(hoverRating || rating) > index ? 'text-black' : 'text-gray-400'
                  }`}
               width="18" height="17" viewBox="0 0 23 22" fill="currentcolor" xmlns="http://www.w3.org/2000/svg"
               onMouseEnter={() => handleRatingHover(index + 1)}
               onMouseLeave={() => setHoverRating(0)}
               onClick={() => handleRatingClick(index + 1)}
            >
               <path
                  fillRule="evenodd"
                  d="M11.5337 19.4482C10.3108 19.4482 9.1616 19.216 8.08606 18.7516C7.01051 18.2872 6.07494 17.6575 5.27933 16.8625C4.48372 16.0669 3.85401 15.1313 3.3902 14.0558C2.92639 12.9802 2.69419 11.831 2.6936 10.6082C2.6936 9.38528 2.9258 8.23606 3.3902 7.16052C3.8546 6.08498 4.48431 5.1494 5.27933 4.35379C6.07494 3.55818 7.01051 2.92848 8.08606 2.46467C9.1616 2.00086 10.3108 1.76866 11.5337 1.76807C12.7566 1.76807 13.9058 2.00027 14.9813 2.46467C16.0569 2.92906 16.9924 3.55877 17.7881 4.35379C18.5837 5.1494 19.2137 6.08498 19.6781 7.16052C20.1425 8.23606 20.3744 9.38528 20.3738 10.6082C20.3738 11.831 20.1416 12.9802 19.6772 14.0558C19.2128 15.1313 18.5831 16.0669 17.7881 16.8625C16.9924 17.6581 16.0569 18.2881 14.9813 18.7525C13.9058 19.2169 12.7566 19.4488 11.5337 19.4482Z"
                  clipRule="evenodd"
               />
            </svg>
         ))}
      </div>
   );
};

export default StarRating;
