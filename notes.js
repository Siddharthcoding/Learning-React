// virtual DOM , Fibre & reconcilliation

/* 
1. The createRoot create's its own DOM and then compare it with the web browser's DOM and only update those components which are actually updated.
2. But the browser removes the whole DOM and then recrates the whole DOM with the updated values this is called reload.
3. However virtual DOM tracks whole DOM like a tree like structure and updates only those values which were only changed.
4. But some values depends on network call so if we update a value it might get update immediately via a network call.
5. So we will have to update it again. To avoid this overhead we can drop the updation calls for the immediate value update.
6. The current algo used by the React is called the React Fibre algo.
7. The algo react uses to differentiate the web browser's tree and React's tree formed through create root is called reconciliation.
8. Reconciliation is the algo behind what popularly known as the Virtual-DOM.
9. In UI it is not necessary for every update to be applied immediately. */

/* 
Some hooks:- 

1. use Callback: used for optimization it calls the function inside it when the dependencies are changed and returns a memorized function 
2. useeffect: runs the function inside it whenever the page renders first-time or dependencies are changed
3. use ref : used to give reference of selected components in our page so that functions can be performed on referenced values
*/