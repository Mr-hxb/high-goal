const actions = {
    setLoginInfo({ commit }, payload) {
        commit('changeLoginState', payload);
    }
};

export function getAction() {
    return actions;
}
