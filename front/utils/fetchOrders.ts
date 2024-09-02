
export async function fetchUserOrders(token: string) {
    try {
        const response = await fetch("http://localhost:3000/users/orders", {
            method: "GET",
            headers: {
                Authorization:  `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });
        const orders = await response.json();
        return orders;
    }catch(error) {
        console.error("Error in fetchUserOrders:", error);
    }

}
