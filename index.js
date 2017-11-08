// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
  return blocks =  Math.abs(blocks - 42);
}

function distanceFromHqInFeet(blocks) {
  return feet = distanceFromHqInBlocks(blocks) * 264;
}

function distanceTravelledInFeet(start, end) {
  return distance = Math.abs(start - end) * 264;
}
