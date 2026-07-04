import axios from "axios";

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY
const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY
const GIPHY_KEY = import.meta.env.VITE_GIPHY_KEY



export async function fetchPhotos(query, page = 1, per_page = 20) {

    const params = new URLSearchParams({
        query,
        page,
        per_page,
    })

    const url = `https://api.unsplash.com/search/photos?${params}`;

    try {
        const request = await fetch(url, {
            headers: {
                Authorization: `Client-ID ${UNSPLASH_KEY}`,
            },
        });
        if (!request.ok) {
            throw new Error(`HTTP Error: ${request.status}`);
        }
        const response = await request.json()
        return response
    } catch (error) {
        console.error(error);
    }
}

export async function fetchVideos(query, page = 1, per_page = 15) {
    const params = new URLSearchParams({
        query,
        page,
        per_page,
    })
    const url = `https://api.pexels.com/videos/search?${params}`;

    try {

        const request = await fetch(url, {
            headers: {
                Authorization: PEXELS_KEY,
            }
        })

        if (!request.ok) {
            console.log(`HTTP Error " ${request.status}`);

        }

        const response = await request.json();
        return response;
    } catch (error) {
        console.error(error)
    }
}

export async function fetchGifs(query, per_page = 15, page = 1) {
    const params = new URLSearchParams({
        api_key: GIPHY_KEY,
        q: query,
        limit: per_page,
        offset: (page - 1) * per_page,
    })

    const url = `https://api.giphy.com/v1/gifs/search?${params}`

    try {

        const request = await fetch(url)

        if (!request.ok) {
            console.log(`HTTPS request Error ${request.status}`);
        }

        const response = await request.json();

        return response;
    } catch (error) {
        console.error(error);

    }
}