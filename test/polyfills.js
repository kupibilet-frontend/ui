// RAF polyfill for react
global.requestAnimationFrame = (callback) => {
  setTimeout(callback, 0);
}
// matchMedia polyfill
window.matchMedia = window.matchMedia || (() => { return { matches: false, addListener: () => {}, removeListener: () => {}, }; });
