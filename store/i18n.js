export const state = () => ({
  locales: ["en", "vi"],
  locale: "vi",
});

export const mutations = {
  SET_LANG(state, locale) {
    state.locale = locale;
  },
};

export const actions = {
  changLanguages(context) {
    context.commit("SET_LANG");
  },
};
