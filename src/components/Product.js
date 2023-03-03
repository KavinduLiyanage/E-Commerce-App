import { Box, Flex, HStack, Icon, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { StarIcon } from "@chakra-ui/icons";

const Product = ({ item }) => {
    const navigate = useNavigate();
    const { id, name, image, price, ratedBy, rating } = item;

    const goToDetailsView = () => {
        navigate(`/details/${id}`);
    };

    return (
        <div>
            <Box
                key={id}
                width={"95%"}
                m="auto"
                onClick={goToDetailsView}
                my={"3"}
            >
                <Box overflow={"hidden"} position={"relative"}>
                    <Image className="imageAnimation" src={image} alt={name} />
                </Box>
                <Box
                    textAlign={"left"}
                    color={"darkgrey"}
                    fontSize={["xs", "sm", "md", "md"]}
                >
                    <Text>{name}</Text>
                </Box>
                <Flex
                    justify={"left"}
                    gap={"2rem"}
                    fontWeight={"medium"}
                    align={"center"}
                >
                    <Text
                        as={Flex}
                        alignItems={"center"}
                        fontSize={["xs", "sm", "md", "md"]}
                    >
                        <Icon as={StarIcon} color="yellow.500" /> : {rating}
                    </Text>
                    <Text fontSize={["xs", "sm", "md", "md"]}>
                        Review : ({ratedBy}){" "}
                    </Text>
                </Flex>
                <HStack justify={"left"}>
                    <Text
                        fontWeight={"semibold"}
                        fontSize={["sm", "md", "lg", "xl"]}
                    >
                        ${price}.00
                    </Text>
                </HStack>
            </Box>
        </div>
    );
};

export default Product;
