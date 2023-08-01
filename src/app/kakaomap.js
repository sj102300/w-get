import Script from 'next/script';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

const KAKAO_SDK_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_KEY}&autoload=false`;

const KakaoMap = ({nephron, setNephron, trash, setTrash}) => {
  let nephrons = [
    {
      title: '신길 4동 주민센터',
      latlng: { lat: 37.5084, lng: 126.9112 },
    },
    {
      title: '영등포다목적배드민턴체육관',
      latlng: { lat: 37.5059, lng: 126.8981 }
    },
    {
      title: '대방동 주민센터',
      latlng: { lat: 37.5081, lng: 126.9263 }
    },
    {
      title: '노량진2동주민센터',
      latlng: { lat: 37.5085, lng: 126.9373 }
    },
    {
      title: '컵밥거리',
      latlng: { lat: 37.5135, lng: 126.9457 }
    },
    {
      title: '동작청소년문화의집',
      latlng: { lat: 37.504, lng: 126.9331 }
    },
    {
      title: '세븐일레븐 신길 한성점',
      latlng: { lat: 37.504, lng: 126.9207 }
    },
    {
      title: '신대방2동 행정복지센터',
      latlng: { lat: 37.4984, lng: 126.9245 }
    },
    {
      title: '상도3동주민센터',
      latlng: { lat: 37.4991, lng: 126.9313 }
    },
    {
      title: '상도 어울마당',
      latlng: { lat: 37.4992, lng: 126.9403 }
    },
    {
      title: '상도4동주민센터',
      latlng: { lat: 37.4994, lng: 126.9415 }
    },
    {
      title: '국사봉중학교(포인트적립불가)',
      latlng: { lat: 37.4936, lng: 126.9441 }
    },
    {
      title: '상도1동 행정복지센터',
      latlng: { lat: 37.4981, lng: 126.9531 }
    },
    {
      title: '흑석동 행정복지센터',
      latlng: { lat: 37.5058, lng: 126.9667 }
    },
    {
      title: '사당2동 행정복지센터',
      latlng: { lat: 37.4887, lng: 126.9795 }
    }
  ];

  return (
    <>
      <Script src={KAKAO_SDK_URL} strategy="beforeInteractive" />
      <Map center={{ lat: 37.504, lng: 126.9207 }} style={{ width: '100%', height: '100%' }}>
        {
          nephron ? (nephrons.map((position, index) => (
            <MapMarker
              key={`${position.title}-${position.latlng}`}
              position={position.latlng} // 마커를 표시할 위치
              image={{
                src: "/images/orange-nephron.png", // 마커이미지의 주소입니다
                size: {
                  width: 24,
                  height: 24
                }, // 마커이미지의 크기입니다
              }}
              title={position.title} // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
            />
            ))) : null
        }
        
      </Map>
    </>
  );
};

export default KakaoMap;