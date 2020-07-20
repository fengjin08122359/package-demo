const state = {
  index: 2
};
const getters={
  word(state){
    return `about index is ${state.index}`
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