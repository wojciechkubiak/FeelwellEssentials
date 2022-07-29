export type StackParamList = {
  Menu: {};
  Meditation: {};
  Fasting: {};
  Exercise: {};
  Water: {};
  Settings: {};
};

export type StackKey = keyof StackParamList;

export const ScreenNames: { [k in StackKey]: string } = {
  Menu: "Menu",
  Meditation: "Meditation",
  Fasting: "Fasting",
  Exercise: "Exercise",
  Water: "Water",
  Settings: "Settings",
};

// ^ eg Feed: { sort: 'latest' | 'top' } | undefined;
