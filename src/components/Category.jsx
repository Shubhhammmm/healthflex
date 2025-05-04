import { useState } from 'react';
import Timer from './Timer';

const Category = ({ timers, dispatch }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleBulkAction = (action) => {
    timers.forEach((timer) => {
      if (timer.status !== 'Completed') {
        dispatch({
          type: 'UPDATE_TIMER',
          payload: {
            ...timer,
            status: action === 'start'  ? 'Running' : action === 'pause' || action === 'reset' ? 'Paused' : timer.status,
            remaining: action === 'reset' ? timer.duration : timer.remaining,
            halfwayTriggered: action === 'reset' ? false : timer.halfwayTriggered,
          },
        });
      }
    });
  };

  return (
    <div className="mb-6 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm">
      <div className="flex justify-between items-center bg-gray-300 dark:bg-gray-700 p-3 rounded-t-lg">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{timers.category}</h2>
        <div className="flex space-x-3">
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
          >
            {isCollapsed ? 'Expand' : 'Collapse'}
          </button>
          <button
            onClick={() => handleBulkAction('start')}
            className="px-3 py-1 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
          >
            Start All
          </button>
          <button
            onClick={() => handleBulkAction('pause')}
            className="px-3 py-1 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors text-sm font-medium"
          >
            Pause All
          </button>
          <button
            onClick={() => handleBulkAction('reset')}
            className="px-3 py-1 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-medium"
          >
            Reset All
          </button>
        </div>
      </div>
      {!isCollapsed && (
        <div className="p-4 bg-white dark:bg-gray-800 rounded-b-lg">
          {timers
            .map((timer) => (
              <Timer key={timer.id} timer={timer} dispatch={dispatch} />
            ))}
        </div>
      )}
    </div>
  );
};

export default Category;