import { CthuluInvestigator, InvestigatorSex } from '../character';

export const MockCharacter: CthuluInvestigator = {
  player: 'Connor',
  name: 'Test Character',
  occupation: 'Police Officer',
  age: 23,
  sex: InvestigatorSex.Male,
  archetype: 'Shooter man',
  birthplace: 'Tejas',
  residence: 'Test Res',
  characteristics: {
    strength: 75,
    dexterity: 94,
    intelligence: 70,
    constitution: 65,
    appearance: 65,
    power: 70,
    size: 65,
    education: 55,
  },
};
