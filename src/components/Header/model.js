import file from '../../pages/All/all.json';

const stringified = JSON.stringify(file);
const parsedObj = JSON.parse(stringified);

export const Data = parsedObj;
