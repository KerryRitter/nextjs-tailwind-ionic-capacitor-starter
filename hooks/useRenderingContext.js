import { useState, useEffect } from 'react'

export function useRenderingContext() {
  const [isServer, setIsServer] = useState(true)

  useEffect(() => {
    setIsServer(false);
  }, []);

  return { isServer }
}