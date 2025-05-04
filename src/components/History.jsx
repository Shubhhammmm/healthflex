import { useReducer } from 'react';
import { Link } from 'react-router-dom';

const initialState = {
  timers: JSON.parse(localStorage.getItem('timers')) || [],
  history: JSON.parse(localStorage.getItem('history')) || [],
};

const reducer = (state) => {
  return state; 
};

const History = () => {
  const [state] = useReducer(reducer, initialState);

  const handleExport = () => {
    const dataStr = JSON.stringify(state.history, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'timer_history.json';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Timer History</h1>
      <button
        onClick={handleExport}
        className="mb-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Export History
      </button>
      <div className="space-y-2">
        {state.history.map((entry) => (
          <div
            key={entry.id}
            className="p-4 bg-white dark:bg-gray-800 rounded shadow"
          >
            <p><strong>Name:</strong> {entry.name}</p>
            <p><strong>Completed:</strong> {entry.completionTime}</p>
          </div>
        ))}
      </div>
      <Link
        to="/"
        className="inline-block mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default History;