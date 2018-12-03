// 这个里面存着对state状态的修改
const mutations = {
    changeLoginState(state, payload) {
        state.isLogin = payload;
    }
};

export function getMutations() {
    return mutations;
}
