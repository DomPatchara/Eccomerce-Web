import { createContext, useEffect, useState } from "react";
import { products } from "../assets/frontend_assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = '$';
    const delivery_fee = 10;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const navigate = useNavigate();

    const addToCart = (itemId, size) => {

        if (!size) {
            toast.error('Select Product Size');
            return;
        }

        let cartData = structuredClone(cartItems);  // "Deep copy" structure more than slice(); 

        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            }
            else {
                cartData[itemId][size] = 1;
            }
        }
        else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1
        }
        setCartItems(cartData)
    }

    useEffect(()=>{
        console.log("Cart Items:", cartItems);
    },[cartItems])

    const getCartCount = () => {
        let totalCount = 0;

        for(const itemId in cartItems){
            for(const size in cartItems[itemId]){
                let quantity = cartItems[itemId][size]
                if (quantity > 0) {
                    totalCount += quantity;
                }
            }
        }
        return totalCount;
    }

    const updateQuantity = (itemId, size, quantity) => {

        let cartData = structuredClone(cartItems);

        cartData[itemId][size] = quantity;

        setCartItems(cartData);
    }


    const getCartAmount = () => {
        let totalAmount = 0;
        for(const itemId in cartItems) {
           let itemInfo = products.find((product)=> product._id === itemId);
           for(const size in cartItems[itemId]){
                let quantity = cartItems[itemId][size];
                try {
                    if(quantity > 0) {
                        totalAmount += itemInfo.price * quantity
                    }
                } catch (err) {
                    console.error("getCartAmount:", err)
                }
           }
        }
        return totalAmount;
    }

    const value = {
        products, currency, delivery_fee, 
        search,setSearch,showSearch,setShowSearch,
        cartItems,addToCart,
        getCartCount,updateQuantity,
        getCartAmount, navigate
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;