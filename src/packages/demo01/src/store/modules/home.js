const state = {
  index: 1
};
const getters={
  word(state){
    return `home index is ${state.index}`
  }
};

const mutations = {

};
const actions={
  editName(){
    console.log()
  }
};

export default  {
  namespaced:true,
  state,
  getters,
  mutations,
  actions,
}