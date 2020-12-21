import { CthuluInvestigator, InvestigatorSkill } from './character';
import { ArgumentNullError, NotSupportedError } from './errors';

export function getDefaultCocSkills(
  char: CthuluInvestigator,
  version: number = 8
): Array<InvestigatorSkill> {
  if (!char.stats) {
    throw new ArgumentNullError('Character characteristics is null.');
  }

  return getDefaultCoCSkills(
    char.stats.dexterity as number,
    char.stats.education as number,
    version
  );
}

// Gets the default skills outlined in the Call of Cthulu
export function getDefaultCoCSkills(
  dex: number,
  edu: number,
  version: number = 8
): Array<InvestigatorSkill> {
  if (version !== 8) {
    throw new NotSupportedError(
      'Call of Cthulu editions other than 8th are not supported'
    );
  }

  return [
    {
      name: 'Accounting',
      value: 5,
      defaultValue: 5,
    },
    {
      name: 'Anthropology',
      value: 1,
      defaultValue: 1,
    },
    {
      name: 'Appraise',
      value: 5,
      defaultValue: 5,
    },
    {
      name: 'Archaeology',
      value: 1,
      defaultValue: 1,
    },
    {
      name: 'Art/Craft',
      value: 5,
      defaultValue: 5,
    },
    {
      name: 'Charm',
      value: 15,
      defaultValue: 15,
    },
    {
      name: 'Climb',
      value: 20,
      defaultValue: 20,
    },
    {
      name: 'Credit Rating',
      value: 0,
      defaultValue: 0,
    },
    {
      name: 'Cthulu Mythos',
      value: 0,
      defaultValue: 0,
    },
    {
      name: 'Disguise',
      value: 5,
      defaultValue: 5,
    },
    {
      name: 'Dodge',
      value: dex / 2,
      defaultValue: dex / 2,
    },
    {
      name: 'Drive Auto',
      value: 20,
      defaultValue: 20,
    },
    {
      name: 'Elec Repair',
      value: 10,
      defaultValue: 10,
    },
    {
      name: 'Fast Talk',
      value: 5,
      defaultValue: 5,
    },
    {
      name: 'Fighting (Brawl)',
      value: 25,
      defaultValue: 25,
    },
    {
      name: 'Firearms (Handgun)',
      value: 20,
      defaultValue: 20,
    },
    {
      name: 'Firearms (Rifle / Shotgun)',
      value: 25,
      defaultValue: 25,
    },
    {
      name: 'First Aid',
      value: 30,
      defaultValue: 30,
    },
    {
      name: 'History',
      value: 5,
      defaultValue: 5,
    },
    {
      name: 'Intimidate',
      value: 15,
      defaultValue: 15,
    },
    {
      name: 'Jump',
      value: 20,
      defaultValue: 20,
    },
    {
      name: 'Language (Other)',
      value: 1,
      defaultValue: 1,
    },
    {
      name: 'Language (Own)',
      value: edu,
      defaultValue: edu,
    },
    {
      name: 'Law',
      value: 5,
      defaultValue: 5,
    },
    {
      name: 'Library Use',
      value: 20,
      defaultValue: 20,
    },
    {
      name: 'Listen',
      value: 20,
      defaultValue: 20,
    },
    {
      name: 'Locksmith',
      value: 1,
      defaultValue: 1,
    },
    {
      name: 'Mech. Repair',
      value: 10,
      defaultValue: 10,
    },
    {
      name: 'Medicine',
      value: 1,
      defaultValue: 1,
    },
    {
      name: 'Natural World',
      value: 10,
      defaultValue: 10,
    },
    {
      name: 'Navigate',
      value: 10,
      defaultValue: 10,
    },
    {
      name: 'Occult',
      value: 5,
      defaultValue: 5,
    },
    {
      name: 'Op. Hv. Machine',
      value: 1,
      defaultValue: 1,
    },
    {
      name: 'Persuade',
      value: 10,
      defaultValue: 10,
    },
    {
      name: 'Pilot',
      value: 1,
      defaultValue: 1,
    },
    {
      name: 'Psychology',
      value: 10,
      defaultValue: 10,
    },
    {
      name: 'Psychoanalysis',
      value: 1,
      defaultValue: 1,
    },
    {
      name: 'Ride',
      value: 5,
      defaultValue: 5,
    },
    {
      name: 'Science',
      value: 1,
      defaultValue: 1,
    },
    {
      name: 'Sleight of Hand',
      value: 10,
      defaultValue: 10,
    },
    {
      name: 'Spot Hidden',
      value: 25,
      defaultValue: 25,
    },
    {
      name: 'Stealth',
      value: 20,
      defaultValue: 20,
    },
    {
      name: 'Survival',
      value: 10,
      defaultValue: 10,
    },
    {
      name: 'Swim',
      value: 20,
      defaultValue: 20,
    },
    {
      name: 'Throw',
      value: 20,
      defaultValue: 20,
    },
    {
      name: 'Track',
      value: 10,
      defaultValue: 10,
    },
  ];
}
