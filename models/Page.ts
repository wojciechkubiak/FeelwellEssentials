export type StackParamList = {
  Menu: {};
  Meditation: undefined;
  Fasting: undefined;
  Exercise: undefined;
  Water: undefined;
  Settings: undefined;
};

export type StackKey = keyof StackParamList;

// ^ eg Feed: { sort: 'latest' | 'top' } | undefined;
