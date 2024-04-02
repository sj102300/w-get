
/* 
https://devlifetestcase.tistory.com/75 참고
*/


export async function convertAddressToLatLng(address) {

    let result = await new Promise((resolve, reject) => {
        fetch(`https://dapi.kakao.com/v2/local/search/address.json?query=${address}`, {
            method: "GET",
            headers: {
                Authorization: `KakaoAK ${process.env.NEXT_PUBLIC_KAKAO_API_KEY}`
            }
        }).then((response) => {
            return response.json();
        }).then((result) => {
            resolve({
                lat: result.documents[0].y,
                lng: result.documents[0].x
            })
        });
    })

    return result;
}