import Vue from "vue";
import { RootState } from "./types"
import Vuex, { StoreOptions } from "vuex";

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    test: false
  },
  modules: {}
}
export default new Vuex.Store<RootState>(store);
