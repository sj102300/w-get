'use client';

import axios from 'axios';
import Script from 'next/script';
import { useEffect, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

const KAKAO_SDK_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_KEY}&autoload=false`;

const KakaoMap = ({ nephron, trash }) => {

  let [trashs, setTrashs] = useState([]);
  let [nephrons, setNephrons] = useState([]);

  const [status, setStatus] = useState({
    center: { lat: 37.504, lng: 126.9207 },
    errMsg: null,
    isLoading: true,
  })

  useEffect(() => {
    if (navigator.geolocation) {
      // GeoLocation을 이용해서 접속 위치를 얻어옵니다
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setStatus((prev) => ({
            ...prev,
            center: {
              lat: position.coords.latitude, // 위도
              lng: position.coords.longitude, // 경도
            },
            isLoading: false,
          }))
        },
        (err) => {
          setStatus((prev) => ({
            ...prev,
            errMsg: err.message,
            isLoading: false,
          }))
        }
      )
    } else {
      // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
      setStatus((prev) => ({
        ...prev,
        errMsg: "geolocation을 사용할수 없어요..",
        isLoading: false,
      }))
    }
  }, [])

  useEffect(()=>{
    axios.get('/api/trashdata')
    .then((result)=>{
      setTrashs(result.data);
    })
    .catch((result) => {
      alert(result.error);
    })
  },[trash]);

  useEffect(()=>{
    axios.get('/api/nephrondata')
    .then((result)=>{
      setNephrons(result.data);
    })
    .catch((result)=>{
      alert(result.error);
    })
  }, [nephron]);

  return (
    <>
      <Script src={KAKAO_SDK_URL} strategy="beforeInteractive" />
      <Map center={status.center} style={{ width: '100%', height: '100%' }}>
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
        }{
          trash ? (trashs.map((position, index) => (
            <MapMarker
              key={`${position.title}-${position.latlng}`}
              position={position.latlng} // 마커를 표시할 위치
              image={{
                src: "/images/green-trash.png", // 마커이미지의 주소입니다
                size: {
                  width: 24,
                  height: 24
                }, // 마커이미지의 크기입니다
              }}
              title={position.title} // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
            />
          ))) : null
        }
        {!status.isLoading && (
          <MapMarker position={status.center}
            image={{
              src: "/images/current-location.png",
              size: {
                width: 24,
                height: 24
              },
            }}>
          </MapMarker>
        )}

      </Map>
    </>
  );
};

export default KakaoMap;

//framer motion