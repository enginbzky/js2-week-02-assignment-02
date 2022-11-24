// const list = [
//   "Switzerland55@gmail.com",
//   "Zurich4155@gmail.com",
//   "HiCoders41@gmail.com",
// ];

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

const findSuperNumbers = () => {};

// let numberss = [455, 789, 153];

// const findSuperNumbers = (pNumberArray) => {
//   const result = pNumberArray.map((element) => element.toString()).find(());
//   console.log(result);
// };

// findSuperNumbers(numberss);

export { changeEmailFromGmailToHicoders, findSuperNumbers };

// element[0] ** (1 / 3) + element[1] ** (1 / 3) + element[2] ** (1 / 3);
