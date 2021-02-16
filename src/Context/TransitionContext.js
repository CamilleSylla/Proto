  
import React, { useState, createContext } from "react";

export const TransitionContext = createContext();

export function TransitionProvider(props) {
    const [transition, setTransition] = useState(false)
  return (
    <TransitionContext.Provider value={[transition, setTransition]}>
      {props.children}
    </TransitionContext.Provider>
  );
}