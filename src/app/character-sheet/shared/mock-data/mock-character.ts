import { CthuluInvestigator, InvestigatorSex } from '../character';
import { getDefaultCoCSkills } from '../defaultSkills';

export const MockCharacter: CthuluInvestigator = {
  player: 'Connor',
  name: 'Test Character',
  occupation: 'Police Officer',
  age: 23,
  sex: InvestigatorSex.Male,
  archetype: 'Shooter man',
  birthplace: 'Tejas',
  residence: 'Test Res',
  stats: {
    strength: 75,
    dexterity: 94,
    intelligence: 70,
    constitution: 65,
    appearance: 65,
    power: 70,
    size: 65,
    education: 55,
  },
  maxHp: 26,
  currentHp: 23,
  majorWound: true,
  maxSanity: 99,
  currentSanity: 70,
  maxMp: 14,
  currentMp: 14,
  luck: 65,
  skills: getDefaultCoCSkills(94, 55),
};
