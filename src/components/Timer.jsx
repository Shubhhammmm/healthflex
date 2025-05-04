import { useState, useEffect } from 'react';

const Timer = ({ timer, dispatch }) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    let interval;
    if (timer.status === 'Running' && timer.remaining > 0) {
      interval = setInterval(() => {
        dispatch({
          type: 'UPDATE_TIMER',
          payload: {
            ...timer,
            remaining: timer.remaining - 1,
            halfwayTriggered:
              timer.halfwayAlert && timer.remaining <= timer.duration / 2
                ? true
                : timer.halfwayTriggered,
          },
        });
      }, 1000);
    } else if (timer.remaining <= 0 && timer.status === 'Running') {
      dispatch({
        type: 'UPDATE_TIMER',
        payload: { ...timer, status: 'Completed' },
      });
      dispatch({
        type: 'ADD_TO_HISTORY',
        payload: {
          id: timer.id,
          name: timer.name,
          completionTime: new Date().toLocaleString(),
        },
      });
      setShowModal(true);
    }
    return () => clearInterval(interval);
  }, [timer, dispatch]);

  const progress = ((timer.duration - timer.remaining) / timer.duration) * 100;

  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded shadow mb-2">
      <h3 className="font-bold">Timer Name: {timer.name}</h3>
      <p>Category: {timer.category}</p>
      <p>Status: {timer.status}</p>
      <p>Remaining: {timer.remaining}s</p>
      <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700">
        <div
          className="bg-blue-500 h-2.5 rounded"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      {timer.halfwayTriggered && timer.halfwayAlert && (
        <p className="text-yellow-500">Halfway Alert!</p>
      )}
      <div className="flex space-x-2 mt-2">
        <button
          onClick={() =>
            dispatch({
              type: 'UPDATE_TIMER',
              payload: { ...timer, status: 'Running' },
            })
          }
          className="p-2 bg-green-500 text-white rounded hover:bg-green-600"
          disabled={timer.status === 'Running' || timer.status === 'Completed'}
        >
          Start
        </button>
        <button
          onClick={() =>
            dispatch({
              type: 'UPDATE_TIMER',
              payload: { ...timer, status: 'Paused' },
            })
          }
          className="p-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
          disabled={timer.status !== 'Running'}
        >
          Pause
        </button>
        <button
          onClick={() =>
            dispatch({
              type: 'UPDATE_TIMER',
              payload: {
                ...timer,
                remaining: timer.duration,
                status: 'Paused',
                halfwayTriggered: false,
              },
            })
          }
          className="p-2 bg-red-500 text-white rounded hover:bg-red-600"
          disabled={timer.status === 'Completed'}
        >
          Reset
        </button>
        <button
          onClick={() => dispatch({ type: 'DELETE_TIMER', payload: timer.id })}
          className="p-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          Delete
        </button>
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white dark:bg-gray-800 p-6 rounded shadow">
            <h2 className="text-xl font-bold">Timer Completed!</h2>
            <p>Congratulations! "{timer.name}" has finished.</p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Timer;