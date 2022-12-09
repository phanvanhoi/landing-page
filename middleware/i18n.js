export default function ({
  isHMR,
  app,
  store,
  route,
  params,
  error,
  redirect,
}) {
  const defaultLocale = app.i18n.fallbackLocale;
  if (isHMR) return;
  const currentLangState = store?.state.locale;
  const locale = currentLangState || defaultLocale;
  store.commit("SET_LANG", locale);
  app.i18n.locale = locale;
}
