import { BASE_URL } from "@/constants/API";


export async function hello() {
    try {
        const response = await fetch(`${BASE_URL}/helloworld`, {
            method: "GET",
        });
        if (!response.ok) {
            throw new Error("Failed to access but server is running..");
        }
        const result = await response.json();
        console.log("Endpoint working fine: ", result);
    } catch (e) {
        console.error("An error occurred while access the server, which might me down:", e);
    }
}
