// une action est un objet qui peut avoir u

export const minimalActions = {
  AUTHENTIFICATED: 'AUTHENTIFICATED',
};

export const actions = {
  setAuthentificated: (bool) => ({
    type: minimalActions.AUTHENTIFICATED,
    bool,
  }),
};
