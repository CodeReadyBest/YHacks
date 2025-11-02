import React, { useState } from 'react';
import UserDetailModal from './UserDetailModal';

// Define the type for a user
export interface User {
  id: number;
  name: string;
  email: string;
  imageUrls: string[]; // Changed from imageUrl to handle multiple images
  interests: string[];
}

// Mock data for the user directory, now with multiple imageUrls
const mockUsers: User[] = [
  {
    id: 1,
    name: 'Alice Johnson',
    email: 'alice.j@example.com',
    imageUrls: [
      'https://i.pravatar.cc/150?u=1',
      'https://picsum.photos/seed/picsum1/400/300',
      'https://picsum.photos/seed/picsum2/300/400',
    ],
    interests: ['Photography', 'Hiking', 'Cooking'],
  },
  {
    id: 2,
    name: 'Bob Williams',
    email: 'bob.w@example.com',
    imageUrls: [
      'https://i.pravatar.cc/150?u=2',
      'https://picsum.photos/seed/picsum3/400/300',
    ],
    interests: ['Gaming', 'Sci-Fi Movies', 'Coding'],
  },
  {
    id: 3,
    name: 'Charlie Brown',
    email: 'charlie.b@example.com',
    imageUrls: [
      'https://i.pravatar.cc/150?u=3',
      'https://picsum.photos/seed/picsum4/400/300',
      'https://picsum.photos/seed/picsum5/300/400',
      'https://picsum.photos/seed/picsum6/400/400',
    ],
    interests: ['Jazz Music', 'Reading', 'Gardening'],
  },
  {
    id: 4,
    name: 'Diana Miller',
    email: 'diana.m@example.com',
    imageUrls: [
      'https://i.pravatar.cc/150?u=4',
      'https://picsum.photos/seed/picsum7/300/400',
    ],
    interests: ['Yoga', 'Traveling', 'Blogging'],
  },
  {
    id: 5,
    name: 'Ethan Davis',
    email: 'ethan.d@example.com',
    imageUrls: [
      'https://i.pravatar.cc/150?u=5',
      'https://picsum.photos/seed/picsum8/400/300',
      'https://picsum.photos/seed/picsum9/300/400',
    ],
    interests: ['Running', 'Podcasts', 'History'],
  },
  {
    id: 6,
    name: 'Fiona Garcia',
    email: 'fiona.g@example.com',
    imageUrls: [
      'https://i.pravatar.cc/150?u=6',
      'https://picsum.photos/seed/picsum10/400/300',
    ],
    interests: ['Painting', 'Pottery', 'Art History'],
  },
   {
    id: 7,
    name: 'George Rodriguez',
    email: 'george.r@example.com',
    imageUrls: [
      'https://i.pravatar.cc/150?u=7',
      'https://picsum.photos/seed/picsum11/400/300',
      'https://picsum.photos/seed/picsum12/300/400',
    ],
    interests: ['Guitar', 'Songwriting', 'Concerts'],
  },
  {
    id: 8,
    name: 'Hannah Smith',
    email: 'hannah.s@example.com',
    imageUrls: [
      'https://i.pravatar.cc/150?u=8',
      'https://picsum.photos/seed/picsum13/400/400',
    ],
    interests: ['Baking', 'Knitting', 'Documentaries'],
  },
];


const App: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const openModal = (user: User) => {
    setSelectedUser(user);
  };

  const closeModal = () => {
    setSelectedUser(null);
  };

  return (
    <main className="bg-gray-900 text-white min-h-screen font-sans p-4 sm:p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-8 md:mb-12">
           <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
             <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                User Directory
             </span>
           </h1>
           <p className="text-lg md:text-xl text-gray-400 mt-2">
            A list of awesome people in our community.
           </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {mockUsers.map((user) => (
            <button
              key={user.id}
              onClick={() => openModal(user)}
              className="bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300 ease-in-out border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-75"
              role="listitem"
              aria-label={`View details for ${user.name}`}
            >
              <img
                src={user.imageUrls[0]}
                alt={`Profile of ${user.name}`}
                className="w-24 h-24 rounded-full mb-4 border-4 border-gray-600 object-cover"
              />
              <h2 className="text-xl font-bold text-white mb-1" id={`user-name-${user.id}`}>
                {user.name}
              </h2>
              <p 
                className="text-sm text-purple-400"
                aria-describedby={`user-name-${user.id}`}
              >
                {user.email}
              </p>
            </button>
          ))}
        </div>
      </div>
      {selectedUser && <UserDetailModal user={selectedUser} onClose={closeModal} />}
    </main>
  );
};

export default App;