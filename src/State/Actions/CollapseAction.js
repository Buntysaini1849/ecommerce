// Action Types
export const SET_COLLAPSE_OPEN = 'SET_COLLAPSE_OPEN';

// Action Creators
export const setCollapseOpen = (isOpen) => {
  return {
    type: SET_COLLAPSE_OPEN,
    payload: isOpen,
  };
};
