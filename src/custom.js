export function custom(node, { delay, duration }) {
  return {
    delay,
    css: (t) => {
      // console.log("t", t)
      return `
        opacity: ${t};
        transform: scale(${t});
      `
    }
  }
}
