// Formula
function calculateLeft(idx) {
  idx = Math.floor(idx / 2);
  if (idx % 2 === 0) return true;
  return false;
}

export default calculateLeft;
