import {
  Box,
  Heading,
  Text,
  Image,
  Button,
  Grid,
  GridItem,
  Input,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { KorzinaContext } from "../context/KorzinaContext";
import { Link } from "react-router-dom";
import { ModalCotext } from "../context/ModalContext";
// import { DynamicContext } from "../context/DynamicContext"

export const Korzina = () => {
  const { data, setData } = useContext(KorzinaContext);
  const { byProduct } = useContext(ModalCotext);

  const onDelete = (id) => {
    const state = data.filter((items) => items.id !== id);

    setData(state);
  };
  let arr = data.map((elem) => {
    return {
      ...elem,
      count: 1,
      price: elem.price,
    };
  });

  let [count, setCount] = useState(arr);


  const decRease = (id) => {
    let newCount = count.map((elem) => {
      if (elem.id === id) {
        return {
          ...elem,
          count: elem.count + 1,
        };
      }
      return elem;
    });
    setCount(newCount);
  };
  const inCrease = (id) => {
    let newCount = count.map((elem) => {
      if (elem.id === id && elem.count > 1) {
        return {
          ...elem,
          count: elem.count - 1,
        };
      }
      return elem;
    });
    setCount(newCount);
  };
  return (
    <Box className="first-korzina" mt={"20px"} p={"20px"} pt={"50px"}>
      <Heading color={"red"} mb={"30px"} textAlign={"center"}>
        В корзине {data.length} товара
      </Heading>
      <Box className="Korzina__border1" ml={'60px'} w={'1200px'} rounded={"md"} p={"40px"} border={"1px solid gray"} display={"flex"}>
        <Grid>
          {
          count?.map((item) => (
            <GridItem className="Korzina__border2"
              
              w={"1100px"}
              pt={"25px"}
              borderBottom={"1px solid gray"}
              display={{base:'grid',md:'grid',lg:'flex',xl:'flex'}}
              key={item.id}
            >
              <Image
                alt="ax"
                p={"20px"}
                w={"200px"}
                h={"150px"}
                src={item.images[0]}
              />
                {/* <Box display={{base:'grid',md:'none',lg:'none',xl:"none"}}
                      w={"570px"}
                      color={"black"}
                      fontSize={"30px"}
                      mb={"20px"}
                    >
                      {item.title}
                    </Box> */}
              <Box>
                <Box  gap={'260px'} justifyContent={"space-between"} display={"flex"}>
                  <Box className="titl1"
                    
                    color={"black"}
                    fontSize={"30px"}
                    mb={"20px"}
                  >
                    {item.title}
                  </Box>
                  <Box className="miqdor" display={{base:'none',md:'none',lg:'none',xl:'flex'}}>
                    <Box pt={"2px"} border={"1px solid grey"} mb={"20px"}>
                      <Button
                        onClick={() => inCrease(item.id)}
                        color={"grey"}
                        backgroundColor={"white"}
                        colorScheme="gray"
                      >
                        -
                      </Button>
                      <span>{item.count}</span>
                      <Button
                        onClick={() => decRease(item.id)}
                        backgroundColor={"white"}
                      >
                        +
                      </Button>
                    </Box>
                    <Box
                      fontSize={"20px"}
                      color={"red"}
                      mr={"30px"}
                      ml={"50px"}
                    >
                      {item.price * item.count}
                    </Box>
                    <Button
                      onClick={() => onDelete(item.id)}
                      colorScheme="facebook"
                    >
                      {" "}
                      Удалить
                    </Button>
                  </Box>
                </Box>
                

                <Text className="card-item_title" mb={"20px"} as={"p"}>
                  {item.description}
                </Text>




                
                








                <Box className="miqdor1"  display={{base:'flex',md:'flex',lg:'none'}}>
                    <Box pt={"2px"} border={"1px solid grey"} mb={"20px"}>
                      <Button
                        onClick={() => inCrease(item.id)}
                        color={"grey"}
                        backgroundColor={"white"}
                        colorScheme="gray"
                      >
                        -
                      </Button>
                      <span>{item.count}</span>
                      <Button
                        onClick={() => decRease(item.id)}
                        backgroundColor={"white"}
                      >
                        +
                      </Button>
                    </Box>
                    <Box
                      fontSize={"20px"}
                      color={"red"}
                      mr={"30px"}
                      ml={"50px"}
                    >
                      {item.price * item.count}
                    </Box>
                    <Button
                      onClick={() => onDelete(item.id)}
                      colorScheme="facebook"
                    >
                      {" "}
                      Удалить
                    </Button>
                  </Box>
                  





                  
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Box>

      <Box className="bor"
        flexDirection={"column"}
        mt={"20px"}
        rounded={"md"}
        p={"40px"}
        border={"1px solid gray"}
        display={"flex"}
        w={'1200px'}
        ml={'57px'}
      >
        <Heading mb={"30px"}>Ваши данные</Heading>
        <Box gap={"30px"} display={"flex"}>
          <Box>
            <Box>Имя и фамилия</Box>
            <Input border={"1px solid black"} w={"300px"} />
          </Box>
          
          <Box className="tel1">
            <Box>Телефон</Box>
            <Input outline={"none"} border={"1px solid black"} w={"300px"} />
          </Box>
          <Link className="zakaz2" to="/Zakaz">
            <Button
              onClick={byProduct}
              mt={"25px"}
              colorScheme="red"
              w={"350px"}
            >
              buy
            </Button>
          </Link>
        </Box>
        


        <Box flexDirection={'column'} display={{xl:'none',lg:'none',md:'none',base:'flex'}}>
            <Box>Телефон</Box>  
            <Input outline={"none"} border={"1px solid black"} w={"300px"} />
          </Box>





        <Link   to="/Zakaz">  
            <Button display={{xl:'none',lg:'none',md:'flex',base:'flex'}} className="zakaz1"
              onClick={byProduct}
              mt={"25px"}
              colorScheme="red"
              w={"350px"}
            >
              buy
            </Button>
          </Link>
      </Box>
    </Box>
  );
};
