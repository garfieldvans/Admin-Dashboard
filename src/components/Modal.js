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
      <ModalContent mx={{base:'30px'}}>
        <ModalHeader fontSize={{base:'sm', md:'md'}}>{title}</ModalHeader>
        {withCloseIcon && <ModalCloseButton />}
        <ModalBody fontSize={{base:'sm', md:'md'}}>{children}</ModalBody>
        {!withCloseIcon && (
          <ModalFooter fontSize={{base:'sm', md:'md'}} flexDirection='row' justifyContent='space-evenly'>
            <Button
              onClick={onClose}
              text="Cancel"
              bgColor="white"
              textColor="gray.700"
              variant="outline"
              size={{base:'sm', md:'md'}}
            />
            <Box width="10px" />
            <Button
              onClick={onConfirm}
              text={confirmButtonText}
              isBggradient
              isLoading={isButtonLoading}
              size={{base:'sm', md:'md'}}
            />
          </ModalFooter>
        )}
      </ModalContent>
    </CModal>
  );
};

export default Modal;
