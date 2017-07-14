import { unitOne, unitOneDictionary } from './books/one/unitOne'
import { unitTwo, unitTwoDictionary } from './books/one/unitTwo'
import { unitThree, unitThreeDictionary } from './books/one/unitThree'
import { unitFour, unitFourDictionary } from './books/one/unitFour'
import { unitFive, unitFiveDictionary } from './books/one/unitFive'
import { unitSix, unitSixDictionary } from './books/one/unitSix'
import { unitSeven, unitSevenDictionary } from './books/one/unitSeven'
import { unitEight, unitEightDictionary } from './books/two/unitEight'

export const VOCABULARY = {
  unitOne,
  unitTwo,
  unitThree,
  unitFour,
  unitFive,
  unitSix,
  unitSeven,
  unitEight
}

export const DICTIONARY = unitOneDictionary.concat(
  unitTwoDictionary,
  unitThreeDictionary,
  unitFourDictionary,
  unitFiveDictionary,
  unitSixDictionary,
  unitSevenDictionary,
  unitEightDictionary
);
