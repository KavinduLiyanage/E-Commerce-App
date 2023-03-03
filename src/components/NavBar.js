import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Flex, HStack, Icon, Image, Spacer, Text } from "@chakra-ui/react";
import logo from "../assets/images/logo.png";
import { BsBag } from "react-icons/bs";
import { useSelector } from "react-redux";

const Navbar = () => {
    const navigate = useNavigate();

    const cart = useSelector((store) => store.cart.cart);

    const handleHome = () => {
        navigate("/");
    };
    const handleCart = () => {
        navigate("/cart");
    };
    return (
        <div className="Navbar">
            <Flex fontWeight="bold">
                <HStack onClick={handleHome} cursor={"pointer"}>
                    <Image width={["100px"]} m={5} src={logo} alt="logo" />
                </HStack>
                <Spacer />

                <Spacer />

                <HStack>
                    <Box>
                        <Flex
                            onClick={handleCart}
                            alignItems={"center"}
                            alignContent={"center"}
                            justifyContent={"center"}
                        >
                            <Icon
                                w={6}
                                h={6}
                                my="4"
                                mx="3"
                                as={BsBag}
                                cursor={"pointer"}
                            />
                            <Text
                                position="relative"
                                top="-15px"
                                left="-25px"
                                borderRadius="50%"
                                p="0rem 0.3rem"
                                bg="blue.500"
                                color="white"
                            >
                                {cart ? cart?.items?.length : 0}
                            </Text>
                        </Flex>
                    </Box>
                </HStack>
            </Flex>
        </div>
    );
};

export default Navbar;
