import { spring } from 'svelte/motion';

export function drag(node, params) {

  let x;

  const coordinates = spring(
    { x: 0 },
    {
      stiffness: 0.2,
      damping: 0.4,
    }
  );

  coordinates.subscribe(($coords) => {
    node.style.transform = `translate3d(${$coords.x}px, 0, 0)`;
  });

  node.addEventListener('mousedown', handleMouseDown);

  function handleMouseDown(event) {
    x = event.clientX;
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  }

  function handleMouseMove(event) {

    // delta x = click position to current mouse position
    const dx = event.clientX - x;
    x = event.clientX;
    coordinates.update(($coords) => {
      return {
        x: $coords.x + dx,
      }
    });
  }

  function handleMouseUp(event) {
    // Reset values
    x = 0;
    coordinates.update(() => {
      return {
        x: 0,
      }
    });

    // Remove event listeners
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('mouseup', handleMouseUp);
  }

  return {
    destroy() {
      node.removeEventListener('mousedown', () => handleMouseDown);
    }
  }
}
