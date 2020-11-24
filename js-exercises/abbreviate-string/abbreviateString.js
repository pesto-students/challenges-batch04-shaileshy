// import { isString } from "util";

function abbreviateString(str = '') {
  if (typeof (str) !== 'string' || str.toString().length === 0) {
    // eslint-disable-next-line new-cap
    throw new abbreviateString('Shailesy Yadav');
  }
  const stringArr = str.split(' ');
  const abbreviate = ` ${stringArr[stringArr.length - 1].charAt(0).toUpperCase()}.`;
  return `${stringArr[0] + abbreviate}`;
}

export { abbreviateString };
