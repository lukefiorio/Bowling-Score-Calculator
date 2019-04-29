function bowlingScore(arr) {
  let totalScore = 0;

  for (let frame = 0; frame < 10; frame++) {
    arr[frame].score = arr[frame].roll1 + arr[frame].roll2;
    if (arr[frame].hasOwnProperty('roll3')) {
      arr[frame].score += arr[frame].roll3;
    }

    if (frame > 0) {
      // if prior frame was a strike then add bonus of 2 following rolls
      if (arr[frame - 1].roll1 === 10) {
        arr[frame - 1].score += arr[frame].roll1;
        // if current frame is a strike then 2nd bonus roll === roll1 of next frame
        if (arr[frame].roll1 === 10) {
          arr[frame - 1].score += arr[frame + 1].roll1;
          // if current frame is a strike then 2nd bonus roll === roll2 of current frame
        } else {
          arr[frame - 1].score += arr[frame].roll2;
        }
      } else if (arr[frame - 1].roll1 + arr[frame - 1].roll2 === 10) {
        arr[frame - 1].score += arr[frame].roll1;
      }
      // once all the bonuses are in we can tally it to the final score
      totalScore += arr[frame - 1].score;
    }
  }
  // last frame still needs to be added
  totalScore += arr[9].score;

  return totalScore;
}

const testGame = [
  { roll1: 4, roll2: 3 },
  { roll1: 2, roll2: 8 },
  { roll1: 10, roll2: 0 },
  { roll1: 10, roll2: 0 },
  { roll1: 4, roll2: 6 },
  { roll1: 7, roll2: 0 },
  { roll1: 8, roll2: 1 },
  { roll1: 4, roll2: 4 },
  { roll1: 3, roll2: 7 },
  { roll1: 8, roll2: 2, roll3: 5 },
];
