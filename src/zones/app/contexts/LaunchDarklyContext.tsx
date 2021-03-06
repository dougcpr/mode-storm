import React, {createContext, ReactNode, useState} from 'react';
import {launchDarklyFetcher} from 'lib/fetchers/launchDarklyFetcher';

interface Props {
  /** Must be a single React node, it cannot contain a React fragment */
  children?: ReactNode;
  /** flags object detailing the users launch darkly features */
  flags?: any;
}

/** Method used to fetch a users feature flags */
export const launchDarklyInit = async (user): Promise<Props> => {
  const initData = {
    flags: {}
  };

  initData.flags = await launchDarklyFetcher(user);
  return initData;
};

export const LaunchDarklyContext = createContext({
  flags: null
});

export const LaunchDarklyContextProvider = (props: Props) => {
  const {children, flags} = props;

  const [state] = useState({
    flags
  });

  return (
    <LaunchDarklyContext.Provider value={state}>
      {children}
    </LaunchDarklyContext.Provider>
  );
};
