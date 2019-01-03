function diskStacking(disks) {
  disks.sort(sortDiskFunction); // sort disks in ascending order by height
  const heights = disks.map(disk => disk[2]);
  const indexes = new Array(disks.length);
  let indexOfMaxHeight = 0;
  for (let i = 1; i < disks.length; i++) {
    const currentDisk = disks[i];
    for (let j = 0; j < i; j++) {
      const otherDisk = disks[j];
      if (canStack(otherDisk, currentDisk)) {
        if (heights[i] <= heights[j] + currentDisk[2]) {
          heights[i] = heights[j] + currentDisk[2];
          indexes[i] = j;
        }
      }
    }
    if (heights[i] >= heights[indexOfMaxHeight]) {
      indexOfMaxHeight = i;
    }
  }
  return buildSequence(disks, indexes, indexOfMaxHeight);
}

const sortDiskFunction = (diskOne, diskTwo) => {
  return diskOne[2] - diskTwo[2];
};

// can disk one be stacked on top of disk two?
const canStack = (diskOne, diskTwo) => {
  return (
    diskOne[0] < diskTwo[0] &&
    diskOne[1] < diskTwo[1] &&
    diskOne[2] < diskTwo[2]
  );
};

const buildSequence = (disks, indexes, startIndex) => {
  const sequence = [];
  let currentIndex = startIndex;
  while (currentIndex !== undefined) {
    sequence.unshift(disks[currentIndex]);
    currentIndex = indexes[currentIndex];
  }
  return sequence;
};

// Do not edit the line below.
exports.diskStacking = diskStacking;
