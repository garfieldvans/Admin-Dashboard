import {
  Box,
  Modal as CModal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import Button from './Button';

const Modal = ({
  children,
  isOpen,
  onClose,
  onConfirm,
  title,
  confirmButtonText,
  withCloseIcon = false,
  isButtonLoading,
}) => {
  return (
    <CModal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        {withCloseIcon && <ModalCloseButton />}
        <ModalBody>{children}</ModalBody>
        {!withCloseIcon && (
          <ModalFooter>
            <Button
              onClick={onClose}
              text="Cancel"
              bgColor="white"
              textColor="gray.700"
              variant="outline"
            />
            <Box widht="8px" />
            <Button
              onClick={onConfirm}
              text={confirmButtonText}
              isBggradient
              isLoading={isButtonLoading}
            />
          </ModalFooter>
        )}
      </ModalContent>
    </CModal>
  );
};

export default Modal;
