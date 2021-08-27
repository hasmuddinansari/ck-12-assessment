const compare = (a, b) => {
  if (a.sequenceNO < b.sequenceNO) {
    return -1;
  }
  if (a.sequenceNO > b.sequenceNO) {
    return 1;
  }
  return 0;
};

export const factorySection = ({ sectionData, sectionId }) => {
  try {
    const section = sectionData[sectionId];
    return section.sort(compare);
  } catch {
    return [];
  }
};
