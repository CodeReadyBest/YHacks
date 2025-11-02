import React, { useEffect, useRef } from 'react';
import type { User } from './App';

interface UserDetailModalProps {
  user: User;
  onClose: () => void;
}

const UserDetailModal: React.FC<UserDetailModalProps> = ({ user, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  // Close modal on backdrop click
  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };
  
  // Focus trapping
  useEffect(() => {
    modalRef.current?.focus();
  }, []);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 p-4 transition-opacity duration-300 animate-fadeIn"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        ref={modalRef}
        tabIndex={-1}
        className="bg-gray-800 rounded-2xl shadow-2xl p-8 max-w-lg w-full mx-auto relative transform transition-transform duration-300 animate-scaleUp text-white border border-gray-700 overflow-y-auto max-h-[90vh]"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-full z-10"
          aria-label="Close user details modal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="flex flex-col items-center text-center">
          <img
            src={user.imageUrls[0].replace('150', '200')} // Use a larger version of the main profile pic
            alt={`Profile of ${user.name}`}
            className="w-32 h-32 rounded-full mb-6 border-4 border-purple-500 object-cover"
          />
          <h2 id="modal-title" className="text-3xl font-bold mb-1">
            {user.name}
          </h2>
          <a
            href={`mailto:${user.email}`}
            className="text-md text-purple-400 hover:text-purple-300 transition-colors"
          >
            {user.email}
          </a>

          <div className="w-full mt-6 pt-6 border-t border-gray-700">
            <h3 className="text-lg font-semibold text-gray-300 mb-4">Interests</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {user.interests.map((interest) => (
                <span
                  key={interest}
                  className="bg-gray-700 text-gray-200 text-sm font-medium px-3 py-1 rounded-full"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
          
          {user.imageUrls.length > 1 && (
            <div className="w-full mt-6 pt-6 border-t border-gray-700">
              <h3 className="text-lg font-semibold text-gray-300 mb-4">More Photos</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {user.imageUrls.slice(1).map((url, index) => (
                  <img
                    key={index}
                    src={url}
                    alt={`${user.name}'s photo ${index + 1}`}
                    className="w-full h-32 object-cover rounded-lg shadow-md hover:opacity-80 transition-opacity"
                  />
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
       <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleUp {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out forwards; }
        .animate-scaleUp { animation: scaleUp 0.3s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default UserDetailModal;