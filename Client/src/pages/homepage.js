import React from "react";

// export const Homepage = () => {
//   return (
//     <div>
//       <h1>my home page</h1>
//     </div>
//   );
// };

const Homepage = () => {
  const store = createStore(rootReducer);

  return (
    <Provider store={store}>
      {" "}
      // Set context
      <h1>my home page</h1>
    </Provider>
  );
};

const App = () => {
  const dispatch = useDispatch();
};

export default Homepage;
