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

function calculatesFarePrice(start, end) {
  let fareDistance = Math.abs(start - end) * 264;

  if (fareDistance <= 400) {
    return 
  }
}
