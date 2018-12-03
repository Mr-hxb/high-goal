import Vue from 'vue';
import Vuex from 'vuex';

import { getState } from './state';
import { getAction } from './action';
import { getMutations } from './mutations';

Vue.use(Vuex);

/*
    判断是否需要开启vuex的严格模式
    在严格模式下，无论何时发生了状态变更且不是由 mutation 函数引起的，
    将会抛出错误。这能保证所有的状态变更都能被调试工具跟踪到。
    但是不能在发布模式开启，会影响性能
**/
const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    state: getState(),
    actions: getAction(),
    mutations: getMutations(),
    strict: debug
});
