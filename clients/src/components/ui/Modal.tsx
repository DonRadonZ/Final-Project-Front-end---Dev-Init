import { createContext, ReactNode, useState } from 'react'


type ModalCtxProps = {
    openName: string;
    close: () => void;
    open: (value: string) => void;
  }

const ModalContext = createContext<ModalCtxProps>(
    {
    openName: "",
    close: () => {
        return;
    },
    open: (a: string) => {
        a
        return;
    }
  })

export default function Modal({children}:{ children: ReactNode }) {
    const [openName, setOpenName] = useState('');

    const close = () => setOpenName("");
    const open = setOpenName;

  return (
    <ModalContext.Provider value={{openName, close, open}}>
      {children}
    </ModalContext.Provider>
  )
}
