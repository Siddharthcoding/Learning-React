Redux is a core library and react-redux is an implementation linking between react and redux.

Redux toolkit does many things automatically like
Never mutate a state.

1. First, we make the store, usually there is only 1 store which is called "Single Source of Truth".
- We need a {configureStore} to configure a store which has an object as prop which contains key: value property
- We have to introduce all reducers in it, store not updates it's values in other way , it is not data flow. For data flow it needs awareness of where it's reducers are located.

2. Now, we create reducers which are features,
features are usually called "Slice".
- We need {createSlice} method
- To create a slice we need 3 things majorly : name, initialState, and a list of reducers
- So, first we make an intialState that is it's default state(array or object or variable..).
- we give it a name, initialState value and reducers(which is an object which can have as many key: function pairs )
- these functions give acess to 2 things: (state, action) , state has the updated state value in the store, action has action.payload and more..
- Earlier, we extracted all values from state, spread it and then put value like we do in Contextapi because there state was not preserved not here it is preserved.

3. Now, to export it
- We export all individual functionality(reducer) because it may be used by various components
- And then export the main source of all reducer, as it will be used in store
- Now, we will specify the reducerlist in store in configureStore method

4. Then, there are 2 things that can be done in components either take values or give values.
- To send values  we use "useDispatch" method, and through dispatch we send the required reducer.
- To take values we use "useSelector" method , the select value we have to give access to state through callback and we can pick required values from state in a variable.
- Then, we do javascript work to the values received like loop, map etc.
