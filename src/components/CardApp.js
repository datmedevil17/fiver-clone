"use client"
import { useState, useEffect } from 'react';

const CardApp = () => {
  const [cards, setCards] = useState([]);
  const [formData, setFormData] = useState({
    text: '',
    imageUrl: ''
  });
  const [showForm, setShowForm] = useState(true);

  useEffect(() => {
    // Load existing cards on component mount
    const savedCards = JSON.parse(localStorage.getItem('cards') || '[]');
    setCards(savedCards);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.text.trim() || !formData.imageUrl.trim()) {
      alert('Both text and image URL are required!');
      return;
    }

    const newCards = [...cards, formData];
    setCards(newCards);
    localStorage.setItem('cards', JSON.stringify(newCards));
    
    // Reset form
    setFormData({ text: '', imageUrl: '' });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      {/* Navigation */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex justify-center space-x-4">
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
        </div>
      </div>

      {/* Form Section */}
      {showForm ? (
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Create New Card</h2>
          
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
        /* Gallery Section */
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
            {cards.map((card, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
              >
                <div className="relative h-48">
                  <img
                    src={card.imageUrl}
                    alt="Card image"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 flex-grow">
                  <p className="text-gray-700 break-words">{card.text}</p>
                </div>
              </div>
            ))}
          </div>

          {cards.length === 0 && (
            <div className="text-center text-gray-500 mt-12">
              No cards yet. Create your first card!
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CardApp;