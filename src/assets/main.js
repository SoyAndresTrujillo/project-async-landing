const content = null || document.getElementById('content');
const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCC4U-hrelojmZYNZQbYLMNA&part=snippet%2Cid&order=date&maxResults=10';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '3258df1dbamsh4ac1634675c2435p1ae7e5jsnc356c258330b',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

async function fetchData(urlApi) {
    const response = await fetch(urlApi, options);
    const data = response.json();

    return data;
}

(async () => {
    try {
        const data = await fetchData(API);
        let view = `
        ${data.items.map(video => `
            <div class="group relative">
                <div
                    class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
                </div>
                <div class="mt-4 flex justify-between">
                    <h3 class="text-sm text-gray-700">
                        <span aria-hidden="true" class="absolute inset-0"></span>
                        ${video.snippet.title}
                    </h3>
                </div>
            </div>
        `).slice(0, 4).join('')}
        `;

        content.innerHTML = view;
    } catch (error) {
        // throw new Error('No existen videos disponibles');
        console.log(error);
    }
})();