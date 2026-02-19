export function initSearching(searchField) {
  // @todo: #5.1 — настроить компаратор

  return (quety, state, action) => {
    return state[searchField]
      ? Object.assign({}, quety, {
          search: state[searchField],
        })
      : quety;
  };
}