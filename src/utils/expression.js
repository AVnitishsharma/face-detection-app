export function detectExpression(blendShapes) {
  const getScore = (name) => {
    return blendShapes.find((item) => item.categoryName === name)?.score || 0;
    console.log(blendShapes);
  };

  const smile = (getScore("mouthSmileLeft") + getScore("mouthSmileRight")) / 2;

  const frown = (getScore("mouthFrownLeft") + getScore("mouthFrownRight")) / 2;

  const jawOpen = getScore("jawOpen");

  const blink = (getScore("eyeBlinkLeft") + getScore("eyeBlinkRight")) / 2;

  const browUp = getScore("browInnerUp");

  const mouthPucker = getScore("mouthPucker");

  const cheekPuff = getScore("cheekPuff");

  // 😊 Happy
  if (smile > 0.5 && frown < 0.2) {
    return "😊 Happy";
  }

  // 😢 Sad
  if (frown > 0.2 && browDown > 0.3 && smile < 0.1) {
    return "😢 Sad";
  }

  // 😲 Surprise
  if (jawOpen > 0.6 && browUp > 0.3) {
    return "😲 Surprise";
  }

  // 😮 Shock
  if (jawOpen > 0.8) {
    return "😮 Shock";
  }

  // 😉 Blink
  if (blink > 0.8) {
    return "😉 Blink";
  }

  // 😗 Kiss / Pucker
  if (mouthPucker > 0.9) {
    return "😗 Kiss";
  }

  // 😤 Puff
  if (cheekPuff > 0.5) {
    return "😤 Puff";
  }

  // 😠 Angry (Approximation)
  if (frown > 0.6 && browUp < 0.2) {
    return "😠 Angry";
  }

  // 😐 Neutral
  return "😐 Neutral";
}
