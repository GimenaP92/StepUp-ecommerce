const apiUrl = process.env.NEXT_PUBLIC_API_URL;
export async function fetchUserOrders(token: string) {
    try {
        const response = await fetch(`${apiUrl}/users/orders`, {
            method: "GET",
            headers: {
                Authorization:  `${token}`,
                "Content-Type": "application/json",
            },
        });
        const orders = await response.json();
        return orders;
    }catch(error) {
        console.error("Error in fetchUserOrders:", error);
    }

}

