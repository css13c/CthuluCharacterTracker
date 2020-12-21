export interface CthuluInvestigator {
  player: string;
  name: string;
  occupation: string;
  age: number;
  sex: InvestigatorSex;
  stats: InvestigatorStatBlock | undefined;
  archetype: string;
  birthplace: string;
  residence: string;
  maxHp: number;
  currentHp: number;
  majorWound: boolean;
  maxSanity: number;
  currentSanity: number;
  luck: number;
  maxMp: number;
  currentMp: number;
  skills: Array<InvestigatorSkill>;
}

export interface InvestigatorStatBlock {
  strength: number | undefined;
  dexterity: number | undefined;
  intelligence: number | undefined;
  constitution: number | undefined;
  appearance: number | undefined;
  power: number | undefined;
  size: number | undefined;
  education: number | undefined;
}

export interface InvestigatorStat {
  name: string;
  value: number;
}

export interface InvestigatorSkill {
  name: string;
  value: number;
  defaultValue: number;
}

export enum InvestigatorSex {
  Male = 'Male',
  Female = 'Female',
}
