import { Modal } from 'components/common/modal'
import { ReactNode, createContext, useContext, useState } from 'react'

type Children = {
  children: ReactNode
}

type AlertModalContextProps = {
  setErrorModal: (onCancel?: () => void) => void
  setSuccessModal: (text: string) => void
}

const initialValues: AlertModalContextProps = {
  setErrorModal: () => {
    return
  },
  setSuccessModal: () => {
    return
  },
}

type ModalControlProps = {
  isOpen: boolean
  text: string
  onCancel?: () => void
}

export const AlertModalContext = createContext<AlertModalContextProps>(initialValues)

export const AlertModalContextProvider = ({ children }: Children) => {
  const resetModal = {
    isOpen: false,
    text: '',
    onCancel: () => {
      return
    },
  }

  const [modalControl, setModalControl] = useState<ModalControlProps>(resetModal)

  function closeAlertModal() {
    setModalControl(resetModal)
  }

  function setErrorModal(onCancel?: () => void) {
    const errorModal = {
      isOpen: true,
      text: 'Ops! Algo deu errado, tente novamente.',
      onCancel,
    }

    setModalControl(errorModal)
  }

  function setSuccessModal(text: string) {
    const successModal = {
      isOpen: true,
      text,
    }

    setModalControl(successModal)
  }

  return (
    <AlertModalContext.Provider
      value={{
        setErrorModal,
        setSuccessModal,
      }}
    >
      <Modal.Container isOpen={modalControl.isOpen} closeModal={closeAlertModal} zIndex>
        <p>{modalControl.text}</p>

        <Modal.Buttons
          confirmText="Fechar"
          onConfirm={closeAlertModal}
          onCancel={modalControl.onCancel}
          cancelText={modalControl.onCancel && 'Tente novamente'}
        />
      </Modal.Container>

      {children}
    </AlertModalContext.Provider>
  )
}

export const useAlertModalContext = () => useContext(AlertModalContext)
