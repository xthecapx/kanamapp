import { Vocabulary } from './Vocabulary'
import { Countries } from './Countries'
import { Kanjis } from './Kanjis'
import { Writing } from './Writing'

export const unitOne = [Vocabulary, Countries, Kanjis, Writing]
export const unitOneDictionary = Vocabulary.questions.concat(Countries.questions, Kanjis.questions)