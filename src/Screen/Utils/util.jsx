export const splitSentence = (str) => {
  const [strBeforeComma, strAfterComma] = str.split(", ");
  return { strBeforeComma, strAfterComma };
};

export const splitJobStats = (str) => {
  const [timeAgo, applicantsInfo] = str.split("|");
  return { timeAgo, applicantsInfo };
};
