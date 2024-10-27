import { useState } from 'react';
import mine from './components/Hey';
import './App.css';
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const amount = parseInt(count);

    if (amount < 1 || amount > 14) {
      setErrorMessage("Please enter a number between 1 and 14.");
      setText([]);
      return;
    }

    setErrorMessage('');
    setText(mine.slice(0, amount));
  };

  const handleClear = () => {
    setCount('');
    setText([]);
    setErrorMessage('');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-200 to-blue-500">
      <section className="bg-white p-8 shadow-lg rounded-lg w-full max-w-md transform transition duration-500 hover:shadow-2xl">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Generate Paragraph</h2>
        
        <form className="flex flex-col items-center" onSubmit={handleSubmit}>
          <input
            type="number"
            name="amount"
            id="amount"
            value={count}
            onChange={(e) => setCount(e.target.value)}
            className="border border-gray-300 p-3 w-full rounded-lg mb-4 text-center focus:outline-none focus:ring-4 focus:ring-blue-400 transition duration-300 ease-in-out placeholder-gray-500"
            placeholder="Enter a number (1-14)"
          />
          <button type="submit" className="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold py-3 px-6 rounded-full shadow-md hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 mb-4">
            Generate
          </button>
        </form>

        {errorMessage && (
          <p className="text-red-500 mt-4 text-center">{errorMessage}</p>
        )}

        <article className="mt-6 space-y-4">
          {text.map((item, index) => (
            <p className="text-gray-700 text-base" key={index}>{item}</p>
          ))}
        </article>

        {text.length > 0 && (
          <button
            type="button"
            onClick={handleClear}
            className="bg-red-500 text-white font-semibold py-3 px-6 mt-4 rounded-full shadow-md hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
          >
            Clear
          </button>
        )}
      </section>
    </div>
  );
}

export default App;