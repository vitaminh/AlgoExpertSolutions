function waterArea(heights) {
  // start by getting height of tallest pillar to the left of current index
  const leftMaxHeights = new Array(heights.length).fill(0);
  let leftMaxHeight = 0;
  for (let i = 0; i < heights.length; i++) {
    leftMaxHeights[i] = leftMaxHeight;
    // compare old left max height to current height for use in next iteration
    leftMaxHeight = Math.max(leftMaxHeight, heights[i]);
  }
  // continue by getting height of tallest pillar to right of current index
  const rightMaxHeights = new Array(heights.length).fill(0);
  let rightMaxHeight = 0;
  for (let i = heights.length - 1; i >= 0; i--) {
    rightMaxHeights[i] = rightMaxHeight;
    // compare old right max height to current height for use in next iteration
    rightMaxHeight = Math.max(rightMaxHeight, heights[i]);
  }
  const totalWaterArea = [];
  // use newly created arrays to calculate min height
  for (let i = 0; i < heights.length; i++) {
    const minHeight = Math.min(leftMaxHeights[i], rightMaxHeights[i]);
    const sliceWaterArea = heights[i] > minHeight ? 0 : minHeight - heights[i];
    totalWaterArea.push(sliceWaterArea);
  }
  // return total area of water
  return totalWaterArea.reduce((totalArea, slice) => totalArea + slice, 0);
}

// Do not edit the line below.
exports.waterArea = waterArea;
