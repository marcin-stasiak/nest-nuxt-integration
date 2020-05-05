import { GetterTree, ActionTree, MutationTree } from 'vuex';

export type RootState = ReturnType<typeof state>;

export const state = () => ({
  hello: ''
});

export const getters: GetterTree<RootState, RootState> = {
  getHello: state => state.hello
}

export const mutations: MutationTree<RootState> = {
  setHello(state: RootState, hello: string): void {
    state.hello = hello;
  }
}

export const actions: ActionTree<RootState, RootState> = {
  async fetchHello({ commit }) {
    const hello: string = await this.$axios.$get('hello');
    commit('setHello', hello);
  },
  async nuxtServerInit({ dispatch }) {
    await dispatch('fetchHello');
  }
}
