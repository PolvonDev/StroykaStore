import { ModalContent,Modal,ModalBody,ModalCloseButton,ModalFooter,Button,ModalOverlay,ModalHeader, Image, Heading, Text, Box, Input,  } from "@chakra-ui/react"
import { useContext } from "react"
import { ModalCotext } from "../../context/ModalContext"
// import { InputContext } from "../../context/InputContext"



const MainModal = () => {
  const {open,closeModal,product,byProduct}=useContext(ModalCotext)


  


  return (
    <>
    <Modal  isOpen={open} onClose={closeModal}>
      <ModalOverlay/>
      <ModalContent>
        <ModalCloseButton/>
    
        <ModalBody gap={'60px'} p={'30px'} display={'flex'}>
          <Image objectFit={'cover'} w={100} h={100} src={product.thumbnail}/>
          <Box>
          <Heading>{product.title}</Heading>
          <Text color={'blue'} as="b">{product.price}$</Text>

          </Box>
           </ModalBody>
        <ModalHeader gap={'10px'}>
          <Input className="first name" type="required" message=""  mb={'10px'} placeholder="email"/>
          <Input type="required" message="" placeholder="phone number"/>

        </ModalHeader>
        <ModalFooter>
          <Button  onClick={byProduct} colorScheme="facebook" mr={'30px'} >buy
          </Button>
          <Button colorScheme="blue" onClick={closeModal}>close</Button>

        </ModalFooter>
      </ModalContent>
    </Modal>
    </>
  )
}

export default MainModal