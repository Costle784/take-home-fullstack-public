import axios from "axios";
import qs from "querystring";
import config from "../../../config";

const { api } = config;

export default async function makeRequest(path) {
    const {
        data: { access_token },
    } = await axios.post(
        api.authUrl,
        qs.stringify({
            grant_type: "client_credentials",
            client_secret: api.clientSecret,
            client_id: api.clientId,
        }),
        {
            headers: {
                "content-type": "application/x-www-form-urlencoded",
            },
        }
    );

    return await axios.get(`${api.baseUrl}/${path}`, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    });
}
