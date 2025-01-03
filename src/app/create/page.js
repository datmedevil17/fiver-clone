"use client"
import React from "react";
import { useState , useEffect } from 'react';

// const CreateCard = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [loginData, setLoginData] = useState({
//     username: '',
//     password: ''
//   });
//   const [formData, setFormData] = useState({
//     text: '',
//     imageUrl: ''
//   });

//   const handleLogin = (e) => {
//     e.preventDefault();
//     if (loginData.username === 'elixir' && loginData.password === '12345elixir') {
//       setIsAuthenticated(true);
//     } else {
//       alert('Invalid credentials!');
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     if (!formData.text.trim() || !formData.imageUrl.trim()) {
//       alert('Both text and image URL are required!');
//       return;
//     }

//     const existingCards = JSON.parse(localStorage.getItem('cards') || '[]');
//     const updatedCards = [...existingCards, formData];
//     localStorage.setItem('cards', JSON.stringify(updatedCards));
//     setFormData({ text: '', imageUrl: '' });
//     alert('Card created successfully!');
//   };

//   if (!isAuthenticated) {
//     return (
//       <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
//           <h2 className="text-2xl font-bold text-gray-900 mb-6">Login to Create Cards</h2>
          
//           <form onSubmit={handleLogin} className="space-y-6">
//             <div>
//               <label htmlFor="username" className="block text-sm font-medium text-gray-700">
//                 Username
//               </label>
//               <input
//                 type="text"
//                 id="username"
//                 required
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//                 value={loginData.username}
//                 onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
//               />
//             </div>

//             <div>
//               <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 id="password"
//                 required
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//                 value={loginData.password}
//                 onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//             >
//               Login
//             </button>
//           </form>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
//         <div className="flex justify-between items-center mb-6">
//           <h2 className="text-2xl font-bold text-gray-900">Create New Card</h2>
//           <button
//             onClick={() => setIsAuthenticated(false)}
//             className="text-sm text-red-600 hover:text-red-800"
//           >
//             Logout
//           </button>
//         </div>
        
//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div>
//             <label htmlFor="text" className="block text-sm font-medium text-gray-700">
//               Text Content
//             </label>
//             <textarea
//               id="text"
//               required
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//               value={formData.text}
//               onChange={(e) => setFormData({ ...formData, text: e.target.value })}
//             />
//           </div>

//           <div>
//             <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">
//               Image URL
//             </label>
//             <input
//               type="url"
//               id="imageUrl"
//               required
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//               value={formData.imageUrl}
//               onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//           >
//             Create Card
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CreateCard;



const CreateCard = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loginData, setLoginData] = useState({
      username: '',
      password: ''
    });
    const [formData, setFormData] = useState({
      text: '',
      imageUrl: ''
    });
    const [cards, setCards] = useState([]);
    const [showForm, setShowForm] = useState(true);
  
    useEffect(() => {
      const savedCards = JSON.parse(localStorage.getItem('cards') || '[]');
      setCards(savedCards);
    }, []);
  
    const handleLogin = (e) => {
      e.preventDefault();
      if (loginData.username === 'elixir' && loginData.password === '12345elixir') {
        setIsAuthenticated(true);
      } else {
        alert('Invalid credentials!');
      }
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      
      if (!formData.text.trim() || !formData.imageUrl.trim()) {
        alert('Both text and image URL are required!');
        return;
      }
  
      const newCard = {
        ...formData,
        id: Date.now() // Add unique ID for each card
      };
  
      const updatedCards = [...cards, newCard];
      setCards(updatedCards);
      localStorage.setItem('cards', JSON.stringify(updatedCards));
      setFormData({ text: '', imageUrl: '' });
      alert('Card created successfully!');
    };
  
    const handleDeleteCard = (cardId) => {
      if (window.confirm('Are you sure you want to delete this card?')) {
        const updatedCards = cards.filter(card => card.id !== cardId);
        setCards(updatedCards);
        localStorage.setItem('cards', JSON.stringify(updatedCards));
      }
    };
  
    if (!isAuthenticated) {
      return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Login to Create Cards</h2>
            
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  value={loginData.username}
                  onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
                />
              </div>
  
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  value={loginData.password}
                  onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                />
              </div>
  
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      );
    }
  
    return (
      <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Admin Dashboard</h2>
            <div className="space-x-4">
              <button
                onClick={() => setShowForm(true)}
                className={`px-4 py-2 rounded-md ${
                  showForm ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700'
                }`}
              >
                Create Card
              </button>
              <button
                onClick={() => setShowForm(false)}
                className={`px-4 py-2 rounded-md ${
                  !showForm ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700'
                }`}
              >
                View Gallery
              </button>
              <button
                onClick={() => setIsAuthenticated(false)}
                className="px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700"
              >
                Logout
              </button>
            </div>
          </div>
  
          {showForm ? (
            <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Create New Card</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="text" className="block text-sm font-medium text-gray-700">
                    Text Content
                  </label>
                  <textarea
                    id="text"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    value={formData.text}
                    onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                  />
                </div>
  
                <div>
                  <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">
                    Image URL
                  </label>
                  <input
                    type="url"
                    id="imageUrl"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    value={formData.imageUrl}
                    onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                  />
                </div>
  
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Create Card
                </button>
              </form>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
              {cards.map((card) => (
                <div 
                  key={card.id} 
                  className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col relative group"
                >
                  <div className="relative h-48">
                    <img
                      src={card.imageUrl}
                      alt="Card image"
                      className="w-full h-full object-cover"
                    />
                    <button
                      onClick={() => handleDeleteCard(card.id)}
                      className="absolute top-2 right-2 bg-red-600 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                  <div className="p-4 flex-grow">
                    <p className="text-gray-700 break-words">{card.text}</p>
                  </div>
                </div>
              ))}
  
              {cards.length === 0 && (
                <div className="col-span-full text-center text-gray-500 mt-12">
                  No cards yet. Create your first card!
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    );
  };
  
  export default CreateCard;