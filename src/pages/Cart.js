import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import {
    Box,
    Button,
    Flex,
    Heading,
    Image,
    Text,
    useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import Empty from "../components/EmptyComponent";

const Cart = () => {
    const [isLargerThan] = useMediaQuery("(min-width: 768px)");

    const cart = useSelector((store) => store.cart.cart);

    return (
        <>
            {cart?.items?.length === 0 ? (
                <Empty />
            ) : (
                <div>
                    <Box
                        align="left"
                        width={["95%", "90%", "80%", "85%"]}
                        m="auto"
                    >
                        <Heading my={"2"}>Your Cart</Heading>
                        <Text my={"2"}>
                            TOTAL [{cart?.items?.length} items]
                        </Text>
                    </Box>

                    <Flex
                        width={["100%", "100%", "90%", "90%"]}
                        m="auto"
                        justifyContent={"space-between"}
                        flexDirection={isLargerThan ? "row" : "column"}
                    >
                        <Box width={["95%", "90%", "50%", "60%"]} m="auto">
                            {cart?.items?.length > 0 &&
                                cart?.items?.map((item) => (
                                    <Flex
                                        border="3px solid beige"
                                        m="auto"
                                        my={"4"}
                                        flexDirection={
                                            isLargerThan ? "row" : "column"
                                        }
                                    >
                                        <Box
                                            height={"50%"}
                                            width={[
                                                "100%",
                                                "100%",
                                                "40%",
                                                "30%",
                                            ]}
                                        >
                                            <Image
                                                w="100%"
                                                src={item.image}
                                                alt="try"
                                            />
                                        </Box>
                                        <Box
                                            width={["95%", "90%", "60%", "60%"]}
                                            align={"left"}
                                            mx={"4"}
                                            my={"6"}
                                        >
                                            <Flex
                                                justifyContent={"space-between"}
                                            >
                                                <Text>{item.name} </Text>
                                                <Box>
                                                    <Text>${item.price}</Text>
                                                </Box>
                                            </Flex>

                                            <Text> Color : {item.color} </Text>
                                            <Flex
                                                my={"4"}
                                                alignItems={"center"}
                                                gap="1rem"
                                            >
                                                <Button
                                                    bg="black"
                                                    colorScheme={"teal"}
                                                    p="0"
                                                    borderRadius={"50%"}
                                                    border={"1px solid black"}
                                                    disabled={item.qty === 0}
                                                >
                                                    <MinusIcon
                                                        fontSize={"10"}
                                                    />
                                                </Button>
                                                <Text>{item.qty}</Text>
                                                <Button
                                                    colorScheme={"teal"}
                                                    p="0"
                                                    bg="black"
                                                    borderRadius={"50%"}
                                                    border={"1px solid black"}
                                                >
                                                    <AddIcon fontSize={"10"} />
                                                </Button>
                                            </Flex>
                                        </Box>
                                    </Flex>
                                ))}
                        </Box>
                    </Flex>
                </div>
            )}
        </>
    );
};

export default Cart;
