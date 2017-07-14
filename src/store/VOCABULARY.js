import { unitOne, unitOneDictionary } from './bookOne/unitOne'
import { unitTwo, unitTwoDictionary } from './bookOne/unitTwo'
import { unitThree, unitThreeDictionary } from './bookOne/unitThree'
import { unitFour, unitFourDictionary } from './bookOne/unitFour'
import { unitFive, unitFiveDictionary } from './bookOne/unitFive'
import { unitSix, unitSixDictionary } from './bookOne/unitSix'
import { unitSeven, unitSevenDictionary } from './bookOne/unitSeven'

export const VOCABULARY = {
  unitOne,
  unitTwo,
  unitThree,
  unitFour,
  unitFive,
  unitSix,
  unitSeven
}

export const DICTIONARY = unitOneDictionary.concat(unitTwoDictionary, unitThreeDictionary, unitFourDictionary, unitFiveDictionary, unitSixDictionary, unitSevenDictionary);
