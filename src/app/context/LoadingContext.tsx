'use client'
import { createContext, useState, useContext } from 'react'

const LoadingContext = createContext({
  loading: false,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setLoading: (_loading: boolean) => {},
})

export const useLoading = () => useContext(LoadingContext)

export const LoadingProvider = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(false)

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  )
}
