import {
    Badge,
    Box,
    Button,
    Flex,
    Heading,
    Image,
    Text,
    useMediaQuery,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ListItem, UnorderedList } from "@chakra-ui/react";
import { fetchProductsList } from "../redux/products.actions";
import { cartActions } from "../redux/cart.slice";

const DetailsPage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const [isLargerThan] = useMediaQuery("(min-width: 768px)");

    const [currentProducts, setCurrentProducts] = useState({});
    const colors = ["Red", "Blue", "Green"];
    const [color, setColor] = useState(null);

    const { data: productList } = useSelector(
        (state) => state.products.productsList
    );

    useEffect(() => {
        if (productList.length === 0) dispatch(fetchProductsList());
    }, []);

    useEffect(() => {
        if (id) {
            const cur = productList.find(
                (item) => Number(item.id) === Number(id)
            );
            cur && setCurrentProducts(cur);
        }
    }, [id, productList]);

    const handleCart = () => {
        let payload = {
            ...currentProducts,
            color,
        };
        dispatch(cartActions.addToCart(payload));
    };

    return (
        <div key={currentProducts.id}>
            <Flex
                justify={"space-between"}
                flexDirection={isLargerThan ? "row" : "column"}
            >
                <Box
                    width={["100%", "100%", "60%", "60%"]}
                    min-height={"100vh"}
                >
                    <Box>
                        <Image w={"100%"} src={currentProducts.image} />
                    </Box>
                </Box>

                <Box
                    width={["100%", "100%", "35%", "35%"]}
                    min-height={"100vh"}
                    textAlign={"left"}
                    my={"6"}
                >
                    <Box>
                        <Heading>{currentProducts.name}</Heading>
                        <Box
                            mx={"4"}
                            my={"6"}
                            fontSize={["sm", "md", "lg", "xl"]}
                        >
                            <Text fontSize={"lg"}>
                                MRP :
                                <span
                                    style={{ textDecoration: "line-through" }}
                                >
                                    ${currentProducts.price}.00
                                </span>
                                <span
                                    style={{
                                        color: "red",
                                        fontWeight: "bold",
                                        marginLeft: "5px",
                                    }}
                                >
                                    ${currentProducts.price}.50
                                </span>
                            </Text>
                            <Badge color={"grey"} fontWeight={"bold"}>
                                incl. of taxes and duties
                            </Badge>
                        </Box>
                        <Box>
                            <Text
                                fontSize={["sm", "md", "lg", "xl"]}
                                textAlign="left"
                                mx={"4"}
                                fontWeight={"bold"}
                            >
                                Choose a Color
                            </Text>
                            <Flex gap={"2rem"} my={"5"} mx={"4"}>
                                {colors?.map((color) => (
                                    <Button
                                        key={color}
                                        _hover={{
                                            border: "1px solid black",
                                            bg: "none",
                                            color: "blue",
                                        }}
                                        onClick={() => setColor(color)}
                                    >
                                        {color}
                                    </Button>
                                ))}
                            </Flex>
                        </Box>
                        <Box mt="3rem" align={"left"}>
                            <Button
                                width={["100%", "100%", "70%", "70%"]}
                                bg="green"
                                color={"white"}
                                colorScheme={"blackAlpha"}
                                disabled={!color}
                            >
                                {!color ? "Please Select a Color" : "Buy Now"}
                            </Button>
                        </Box>
                        <Box mt="1rem" align={"left"}>
                            <Button
                                width={["100%", "100%", "70%", "70%"]}
                                bg="white"
                                border={"1px solid black"}
                                color="black"
                                onClick={handleCart}
                            >
                                Add to Cart
                            </Button>
                        </Box>
                    </Box>
                    <hr />

                    <Box mt={"5rem"} align={"left"} mx={"4"}>
                        <Badge ml="1" fontSize="1rem" colorScheme="blackAlpha">
                            Description :
                        </Badge>

                        <UnorderedList spacing={"3"} my={"4"}>
                            <ListItem fontSize={"md"} fontWeight={"semibold"}>
                                Rating : {currentProducts.rating}{" "}
                            </ListItem>
                        </UnorderedList>
                    </Box>
                </Box>
            </Flex>
        </div>
    );
};

export default DetailsPage;
