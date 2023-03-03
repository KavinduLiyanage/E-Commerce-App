import React, { useEffect } from "react";
import { Flex, Box, Grid } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
import Product from "../components/Product";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsList } from "../redux/products.actions";

const AllProducts = () => {
    const dispatch = useDispatch();
    
    const [isLargerThan] = useMediaQuery("(min-width: 768px)");

    const { data: productList } = useSelector(
        (state) => state.products.productsList
    );

    useEffect(() => {
        dispatch(fetchProductsList());
    }, []);

    return (
        <div className="AllProducts">
            <Flex flexDirection={isLargerThan ? "row" : "column"}>
                <Box>
                    <Grid
                        templateColumns={
                            isLargerThan ? "repeat(4, 1fr)" : "repeat(3, 1fr)"
                        }
                        gap={"15px"}
                    >
                        {productList?.length > 0 &&
                            productList?.map((item) => {
                                return <Product key={item.key} item={item} />;
                            })}
                    </Grid>
                </Box>
            </Flex>
        </div>
    );
};

export default AllProducts;
