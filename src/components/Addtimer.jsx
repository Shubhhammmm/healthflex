import { useState } from 'react';

const AddTimer = ({ dispatch }) => {
  const [name, setName] = useState('');
  const [duration, setDuration] = useState('');
  const [category, setCategory] = useState('');
  const [halfwayAlert, setHalfwayAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !duration || !category) return;
    dispatch({
      type: 'ADD_TIMER',
      payload: {
        id: Date.now(),
        name,
        duration: parseInt(duration),
        category,
        remaining: parseInt(duration),
        status: 'Paused',
        halfwayAlert,
        halfwayTriggered: false,
      },
    });
    setName('');
    setDuration('');
    setCategory('');
    setHalfwayAlert(false);
  };

  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded shadow mb-4">
      <h2 className="text-xl font-bold mb-2">Add Timer</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Timer Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
          required
        />
        <input
          type="number"
          placeholder="Duration (seconds)"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
          required
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
          required
        />
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={halfwayAlert}
            onChange={(e) => setHalfwayAlert(e.target.checked)}
            className="mr-2"
          />
          Halfway Alert
        </label>
        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add Timer
        </button>
      </form>
    </div>
  );
};

export default AddTimer;