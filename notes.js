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

/* 
In React applications, including those using React Router for navigation, the `<Link>` tag provided by React Router is preferred over the traditional `<a>` tag for several reasons related to how React manages rendering and state.

	1. Preventing Full Page Reloads : When you use an `<a>` tag with an `href` attribute, clicking on it typically triggers a full page reload, 
    especially if the `href` points to a different route or location. This behavior is contrary to React's single-page application (SPA) model, 
    where the page should not reload entirely during navigation but rather update dynamically.

	2. Client-Side Routing : React Router provides client-side routing, which means it intercepts link clicks and handles navigation 
    without requesting new pages from the server. This results in a smoother user experience as only the necessary components are re-rendered based on the URL change.

	3. Maintaining State : When you navigate using `<Link>` from React Router, React maintains the current state of components 
    unless explicitly instructed otherwise. This is crucial for preserving application state and context across different views or pages.

	4. Performance : Since React Router manages routing on the client side, it typically results in faster navigation between pages 
    compared to traditional server-side navigation where a full page reload is required.

	5. Integration with React's Virtual DOM : React's virtual DOM allows it to efficiently update only the parts of the page that have changed. React Router's `<Link>` component integrates seamlessly with this paradigm, ensuring that only the necessary components are re-rendered when navigating between routes.

In summary, using `<Link>` from React Router instead of `<a>` tags helps adhere to React's principles of efficient rendering and state management in SPAs. 
It ensures that navigation is fast, smooth, and maintains the integrity of React's virtual DOM for optimal performance.
*/