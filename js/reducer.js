// let state = {count: 0};
// let action = {type: 'INCREASE_COUNT'}

// function changeState(state, action){
//   switch (action.type) {
//     case 'INCREASE_COUNT':
//       return {count: state.count + 1}
//     default:
//       return state;
//   }
// }

// function dispatch(action){
//   state = changeState(state, action)
//   // return state
//   render()
// }

// function render() {
//   document.body.textContent = state.count
// }


//dispatch({type: 'INCREASE_COUNT'})

//we call the disptach function and pass through our action. When we call dispatch, this calls our changeState reducer and passes the action object to the reducer

let state = {count: 0};
 
function changeState(state, action){
    switch (action.type) {
      case 'INCREASE_COUNT':
        return {count: state.count + 1}
      default:
        return state;
    }
  }
 
function render(){
    document.body.textContent = state.count
}
 
function dispatch(action){
  state = changeState(state, action)
  render()
}
 
render()