import { split, pick } from 'lodash';

export const getValues = (string) => {
   string = string.replace(/\s/g, '');
   string = split(string, ',');
   return string.filter(s => s !== '');
}