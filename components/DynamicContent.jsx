import { useEffect } from 'react';
import { useRenderingContext } from '../hooks/useRenderingContext';

const DynamicContent = ({ children }) => {
  const { isServer } = useRenderingContext();

  return (
    <>
      {
        isServer ? <></> : children
      }
    </>
  );
};

export default DynamicContent;
