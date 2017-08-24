// Returns true if path matches current browser path
export const isNewPath = (path) => {
  return path !== window.location.pathname;
};
