export function detectExpression(blendShapes) {
  const getScore = (name) => {
    return blendShapes.find((item) => item.categoryName === name)?.score || 0;
  };

  const smile = (getScore("mouthSmileLeft") + getScore("mouthSmileRight")) / 2;
  const frown = (getScore("mouthFrownLeft") + getScore("mouthFrownRight")) / 2;
  const jawOpen = getScore("jawOpen");
  const blink = (getScore("eyeBlinkLeft") + getScore("eyeBlinkRight")) / 2;
  const browUp = getScore("browInnerUp");
  const browDown = (getScore("browDownLeft") + getScore("browDownRight")) / 2;
  const mouthPucker = getScore("mouthPucker");
  const cheekPuff = getScore("cheekPuff");

  // 😴 Sleepy (Eyes closed/mostly closed, relaxed face)
  if (blink > 0.4 && smile < 0.2 && jawOpen < 0.2 && cheekPuff < 0.2) {
    return "😴 Sleepy";
  }

  // 😲 Surprise
  if (jawOpen > 0.45 && browUp > 0.25) {
    return "😲 Surprise";
  }

  // 😊 Happy
  if (smile > 0.35 && frown < 0.2) {
    return "😊 Happy";
  }

  // 😠 Angry
  if (frown > 0.35 && browDown > 0.25 && smile < 0.15) {
    return "😠 Angry";
  }

  // 😢 Sad
  if (frown > 0.2 && browDown > 0.2 && smile < 0.1) {
    return "😢 Sad";
  }

  // 😗 Kiss / Pucker
  if (mouthPucker > 0.8) {
    return "😗 Kiss";
  }

  // 😤 Puff
  if (cheekPuff > 0.4) {
    return "😤 Puff";
  }

  // 😐 Neutral
  return "😐 Neutral";
}
