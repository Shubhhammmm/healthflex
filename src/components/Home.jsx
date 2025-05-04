import { useReducer } from 'react';
import { Link } from 'react-router-dom';
import AddTimer from './Addtimer';
import Category from './Category';

const initialState = {
  timers: JSON.parse(localStorage.getItem('timers')) || [],
  history: JSON.parse(localStorage.getItem('history')) || [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TIMER': {
      const newTimersAdd = [...state.timers, action.payload];
      localStorage.setItem('timers', JSON.stringify(newTimersAdd));
      return { ...state, timers: newTimersAdd };
    }
    case 'UPDATE_TIMER': {
      const updatedTimers = state.timers.map(timer =>
        timer.id === action.payload.id ? { ...timer, ...action.payload } : timer
      );
      localStorage.setItem('timers', JSON.stringify(updatedTimers));
      return { ...state, timers: updatedTimers };
    }
    case 'ADD_TO_HISTORY': {
      const newHistory = [...state.history, action.payload];
      localStorage.setItem('history', JSON.stringify(newHistory));
      return { ...state, history: newHistory };
    }
    case 'DELETE_TIMER': {
      const filteredTimers = state.timers.filter(timer => timer.id !== action.payload);
      localStorage.setItem('timers', JSON.stringify(filteredTimers));
      return { ...state, timers: filteredTimers };
    }
    default:
      return state;
  }
};

const Home = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Timer App</h1>
      <AddTimer dispatch={dispatch} />
       <Category
          timers={state.timers}
          dispatch={dispatch}
        />
      
      <Link
        to="/history"
        className="inline-block mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        View History
      </Link>
    </div>
  );
};

export default Home;