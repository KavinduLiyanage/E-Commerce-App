import { Api } from "../service/Api";
import { productsActions } from "./products.slice";

export function fetchProductsList() {
    return async (dispatch) => {
        dispatch(productsActions.productsFetchStart());
        try {
            const res = await Api.get();
            console.log(res?.data?.ecommerce?.products);
            dispatch(productsActions.productsFetchSuccess(res?.data?.ecommerce?.products));
        } catch (error) {
            dispatch(
                productsActions.productsFetchError(
                    error.message ?? "Failed to fetch user roles"
                )
            );
        }
    };
}
