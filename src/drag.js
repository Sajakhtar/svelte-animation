export function drag(node, params) {
  // console.log("node, params", node, params);

  // node.style.background = "orange";

  node.addEventListener('mousedown', () => console.log('clicks'));

  return {
    destroy() {
      node.removeEventListener('mousedown', () => console.log('clicks'));
    }
  }
}
