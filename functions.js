const changeEmailFromGmailToHicoders = (pStringArray) => {
  let HiCoders = "hicoders.ch";
  const orderOfEmails = pStringArray.map((abbas) =>
    abbas
      .toLowerCase()
      .split("")
      .reverse()
      .join("")
      .slice(9)
      .split("")
      .reverse()
      .join("")
      .concat(HiCoders)
  );
  const result = orderOfEmails.reverse();
  return result;
};

const findSuperNumbers = (pNumberArray) => {
  const result1 = pNumberArray
    .map((element) => element.toString().split(""))
    .map(
      (element) =>
        element[0] * element[0] * element[0] +
        element[1] * element[1] * element[1] +
        element[2] * element[2] * element[2]
    );

  const result2 = result1.concat(pNumberArray);
  const result = result2.filter(
    (element, index) => result2.indexOf(element) !== index
  );

  return result;
};

export { changeEmailFromGmailToHicoders, findSuperNumbers };
