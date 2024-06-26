export default function handler(req, res){

    let trashs =  [{
        title:'노량진로 24길2번지(ID:20-157)',
        latlng:{ lat:37.5122215, lng:126.9530679},},
      {
        title:'노량진로 248번지(노들지구대 앞)',
        latlng:{ lat:37.5123465, lng:126.9536123},},
      {
        title:'노량진로 노들역(ID:20-014)',
        latlng:{ lat:37.513416, lng:126.952213},},
      {
        title:'노량진로 224번지(노량진우체국)',
        latlng:{ lat:37.5124576, lng:126.9506404},},
      {
        title:'노량진로 노들역(ID:20-013)',
        latlng:{ lat:37.513416, lng:126.952213},},
      {
        title:'매봉로 165번지(수학원)',
        latlng:{ lat:37.5118497, lng:126.9516205},},
      {
        title:'매봉로 극동아파트 정류장(ID:20-745)',
        latlng:{ lat:37.2701889999999, lng:127.052367},},
      {
        title:'노량진로 노량진역(ID:20-011)',
        latlng:{ lat:37.5140819999999, lng:126.941687},},
      {
        title:'장승배기로 동작구청앞 버스정류장(ID:20-944)',
        latlng:{ lat:37.5124298, lng:126.9397997},},
      {
        title:'노량진로 172번지(GS 주유소 앞)',
        latlng:{ lat:37.38891, lng:126.747676},},
      {
        title:'매봉로 노량진역(ID:20-012)',
        latlng:{ lat:37.5140819999999, lng:126.941687},},
      {
        title:'노량진로 191(사육신묘앞)',
        latlng:{ lat:37.5136948, lng:126.9488514},},
      {
        title:'노량진로 157-1 노량진역(ID:20-115)',
        latlng:{ lat:37.5140819999999, lng:126.941687},},
      {
        title:'노량진로 16길 33번지',
        latlng:{ lat:37.5120899, lng:126.9441442},},
      {
        title:'노량진로 223번지',
        latlng:{ lat:37.513049, lng:126.9421696},},
      {
        title:'만양로 112번지(다이소 앞)',
        latlng:{ lat:37.513299, lng:126.9444611},},
      {
        title:'만양로 노량진동 116-2(한성주창장앞)',
        latlng:{ lat:37.5086413999999, lng:126.9464949},},
      {
        title:'장승배기로 143-1번지',
        latlng:{ lat:37.5104559, lng:126.9399487},},
      {
        title:'장승배기로 102(나이스가이 헤어숍)',
        latlng:{ lat:37.5067291, lng:126.9399811},},
      {
        title:'노량진로 노량진수산시장(ID:20-009)',
        latlng:{ lat:37.5149238, lng:126.9389205},},
      {
        title:'장승배기로 11가길11(장승배기역5번출구 옆)',
        latlng:{ lat:37.504905, lng:126.939191},},
      {
        title:'노량진로 124번지',
        latlng:{ lat:37.5132966, lng:126.9397393},},
      {
        title:'노량진로 96번지(세븐일레븐 앞)',
        latlng:{ lat:37.5130814, lng:126.9362776},},
      {
        title:'장승배기로 160(노량진초등학교 앞)',
        latlng:{ lat:37.511263, lng:126.940669},},
      {
        title:'노량진로 노량진수산시장(ID:20-010)',
        latlng:{ lat:37.5149238, lng:126.9389205},},
      {
        title:'장승배기로 128번지(기업은행 앞)',
        latlng:{ lat:37.5089187, lng:126.9405506},},
      {
        title:'노량진로 노량진로 152-1(해박난치과)',
        latlng:{ lat:37.5134514, lng:126.9428577},},
      {
        title:'상도로 53길39번지(ID:20-244)',
        latlng:{ lat:37.5005999, lng:126.9535582},},
      {
        title:'양녕로 268번지',
        latlng:{ lat:37.5034901, lng:126.9488454},},
      {
        title:'서달로 1길17 동양아파트(ID:20-917)',
        latlng:{ lat:37.5003953, lng:126.9586955},},
      {
        title:'상도로 357번지(ID:20-166)',
        latlng:{ lat:37.4969421, lng:126.9535391},},
      {
        title:'상도로 봉현초등학교(ID:20-167)',
        latlng:{ lat:37.4910197, lng:126.9556171},},
      {
        title:'상도로 383-1 번지',
        latlng:{ lat:37.4949327, lng:126.9551895},},
      {
        title:'신대방1가길 357번지(ID:20-165)',
        latlng:{ lat:37.4869126, lng:126.9077814},},
      {
        title:'상도로 364-1(ID:20-165)',
        latlng:{ lat:37.4960861, lng:126.9534233},},
      {
        title:'사당로 22번지(ID:20-169)',
        latlng:{ lat:37.4951134, lng:126.956902},},
      {
        title:'상도로 352번지',
        latlng:{ lat:37.4970048, lng:126.9526186},},
      {
        title:'상도로 267(상도역3번출구 옆)',
        latlng:{ lat:37.5035795999999, lng:126.9476698},},
      {
        title:'만양로 6번지(백두공인중개사)',
        latlng:{ lat:37.5052781, lng:126.9481146},},
      {
        title:'사당로 숭실대별관앞(ID:20-172)',
        latlng:{ lat:37.4946829999999, lng:126.960317},},
      {
        title:'상도로 134번지',
        latlng:{ lat:37.5020394, lng:126.9347756},},
      {
        title:'양녕로 269-1번지',
        latlng:{ lat:37.5040469, lng:126.9487813},},
      {
        title:'상도로 156번지',
        latlng:{ lat:37.503217, lng:126.9366062},},
      {
        title:'장승배기로 73번지(상도치안센타 옆)',
        latlng:{ lat:37.5041213, lng:126.9390719},},
      {
        title:'장승배기로 78번지',
        latlng:{ lat:37.504628, lng:126.9395195},},
      {
        title:'상도로 147번지',
        latlng:{ lat:37.503203, lng:126.9357679},},
      {
        title:'상도로 181번지',
        latlng:{ lat:37.5049644, lng:126.9388269},},
      {
        title:'상도로 동작보건소(ID:20-153)',
        latlng:{ lat:37.504569, lng:126.940919},},
      {
        title:'양녕로 경향렉스빌(ID:20-222)',
        latlng:{ lat:37.4953206, lng:126.941864},},
      {
        title:'상도로 83번지(신한은행 앞)',
        latlng:{ lat:37.4999081, lng:126.9299802},},
      {
        title:'상도로 94번지(주작나무 한의원 앞)',
        latlng:{ lat:37.4998302, lng:126.9311235},},
      {
        title:'보라매로 104번지(왕세숫대야냉면)',
        latlng:{ lat:37.4984227, lng:126.9283288},},
      {
        title:'보라매로 93번지(통삼겹구이 앞)',
        latlng:{ lat:37.4977033, lng:126.9276955},},
      {
        title:'보라매로 101번지(삼거리 왕만두)',
        latlng:{ lat:37.4982958, lng:126.9278707},},
      {
        title:'상도로 서울공업고등학교(ID:20-144)',
        latlng:{ lat:37.4990513, lng:126.9422048},},
      {
        title:'상도로 16번지',
        latlng:{ lat:37.4997155, lng:126.9222525},},
      {
        title:'여의대방로 강남중학교(ID: 20-006)',
        latlng:{ lat:37.5022844, lng:126.9223505},},
      {
        title:'여의대방로 교수아파트(ID:20-928)',
        latlng:{ lat:37.496332, lng:126.913255},},
      {
        title:'신대방2길 2-5(ID:20-207)',
        latlng:{ lat:37.4877768, lng:126.9128525},},
      {
        title:'알마타길 6번지(ID:20-107)',
        latlng:{ lat:37.5102339, lng:126.9251477},},
      {
        title:'여의대방로 동작상떼빌아파트(ID:20-001)',
        latlng:{ lat:37.5069799, lng:126.9226145},},
      {
        title:'등용로 123번지(대방할인마트 앞)',
        latlng:{ lat:37.5122033, lng:126.9317414},},
      {
        title:'노량진로 현대아파트(ID:20-007)',
        latlng:{ lat:37.512314, lng:126.931823},},
      {
        title:'노량진로 현대아파트유한양행(ID:20-008)',
        latlng:{ lat:37.513195, lng:126.932591},},
      {
        title:'등용로 40번지(ID:20-593)',
        latlng:{ lat:37.505699, lng:126.9341681},},
      {
        title:'서달로 15길 8-12(흑석역4번출구)',
        latlng:{ lat:37.5089688, lng:126.9628751},},
      {
        title:'현충로 124번지(조선일보뉴지엄)',
        latlng:{ lat:37.506384, lng:126.9671558},},
      {
        title:'현충로2길 흑석동 효사정 앞(ID:20-123)',
        latlng:{ lat:37.511554, lng:126.960711},},
      {
        title:'현충로 108번지',
        latlng:{ lat:35.840899, lng:128.581375},},
      {
        title:'현충로2길 동작실버센터입구(ID:20-251)',
        latlng:{ lat:37.513051, lng:126.956732},},
      {
        title:'현충로2길 4번지 효사정 앞(ID:20-124)',
        latlng:{ lat:37.511568, lng:126.961316},},
      {
        title:'서달로 158번지',
        latlng:{ lat:37.5073375, lng:126.9623126},},
      {
        title:'동작대로 경문고등학교(ID:22-031)',
        latlng:{ lat:37.4925398, lng:126.9815837},},
      {
        title:'동작대로 경문고교 배나무골앞(ID:20-017)',
        latlng:{ lat:37.491372, lng:126.982646},},
      {
        title:'동작대로 171번지(경문고앞)',
        latlng:{ lat:37.4925398, lng:126.9815837},},
      {
        title:'동작대로 정금마을(ID:22-033)',
        latlng:{ lat:37.4946144, lng:126.9822506},},
      {
        title:'동작대로 정금마을 방배경찰서(ID:20-016)',
        latlng:{ lat:37.4940623, lng:126.9826748},},
      {
        title:'동작대로 235번지 깨마을(ID:20-015)',
        latlng:{ lat:37.301688, lng:126.9697869},},
      {
        title:'동작대로 239번지',
        latlng:{ lat:37.4937637, lng:126.9812791},},
      {
        title:'동작동 국립현충원((ID:20-133)',
        latlng:{ lat:37.4985151, lng:126.9721124},},
      {
        title:'동작대로 남성시장(ID:20-018)',
        latlng:{ lat:37.4880894, lng:126.9805176},},
      {
        title:'동작대로 121번지(미샤 앞)',
        latlng:{ lat:37.5933684, lng:127.0188076},},
      {
        title:'사당로 23길2(세븐일레븐 앞)',
        latlng:{ lat:37.4841916, lng:126.977415},},
      {
        title:'사당로 사당시장(ID:20-180)',
        latlng:{ lat:37.48313, lng:126.974628},},
      {
        title:'사당로 219번지(남성역 4번출구)',
        latlng:{ lat:37.4841663, lng:126.9726777},},
      {
        title:'사당로 9가길 55(ID:20-177)',
        latlng:{ lat:37.4869184, lng:126.9683705},},
      {
        title:'사당로 남성역(ID:20-178)',
        latlng:{ lat:37.484876, lng:126.970673},},
      {
        title:'사당로 300번지(ID: 20-184)',
        latlng:{ lat:37.4844319, lng:126.9804651},},
      {
        title:'사당로 254번지(ID:20-252)',
        latlng:{ lat:37.4831728, lng:126.9759868},},
      {
        title:'사당로 138(사당지구대 앞)',
        latlng:{ lat:37.4889096, lng:126.9657342},},
      {
        title:'동작대로 19(한국전력 앞)',
        latlng:{ lat:35.05564, lng:126.978838},},
      {
        title:'동작대로 27번지(IBK기업은행 앞)',
        latlng:{ lat:37.4886727, lng:126.9826958},},
      {
        title:'동작대로 67번지(더본병원 앞)',
        latlng:{ lat:37.4825174, lng:126.9814716},},
      {
        title:'동작대로 방배노인복지관 (ID: 20-020)',
        latlng:{ lat:37.4807676, lng:126.9827215},},
      {
        title:'동작대로 이수역(ID:20-027)',
        latlng:{ lat:37.486491, lng:126.981876},},
      {
        title:'동작대로 사당동우체국앞(ID:20-019)',
        latlng:{ lat:37.483148, lng:126.981899},},
      {
        title:'남부순환로 천수공원앞(사당역7번출구)',
        latlng:{ lat:37.476559, lng:126.981633},},
      {
        title:'흑석로 106-5 번지',
        latlng:{ lat:37.5078884, lng:126.9614617},},
      {
        title:'흑석로 108(신한은행)',
        latlng:{ lat:37.5080446, lng:126.961344},},
      {
        title:'노량진로 114-5(올리브 영)',
        latlng:{ lat:37.5129817, lng:126.9386255},},
      {
        title:'만양로 만양로3길20 신동아리버파크',
        latlng:{ lat:37.50669, lng:126.947647},},
      {
        title:'노량진로 노들역앞 정류장(ID:20-247)',
        latlng:{ lat:37.513416, lng:126.952213},},
      {
        title:'만양로 강남교회 앞 정류장(ID:20-819)',
        latlng:{ lat:37.510402, lng:126.94503},},
      {
        title:'노량진로 노량진역앞 7번출구',
        latlng:{ lat:37.5140819999999, lng:126.941687},},
      {
        title:'노량진로 노량진로 223(ID:20-121)',
        latlng:{ lat:37.5129679, lng:126.9507863},},
      {
        title:'사당로 사당로 285(이디야 커피숍 앞)',
        latlng:{ lat:37.4846685, lng:126.9791775},},
      {
        title:'동작대로 태평백화점 앞',
        latlng:{ lat:37.4868502, lng:126.9816659},},
      {
        title:'사당로 총신대(ID:20-174)',
        latlng:{ lat:37.4886232, lng:126.9668169},},
      {
        title:'사당로 172번지(새마을금고 앞)',
        latlng:{ lat:37.4865012, lng:126.9678872},},
      {
        title:'사당로 남성초등학교(ID:20-496)',
        latlng:{ lat:37.4842393, lng:126.9758609},},
      {
        title:'사당로 194(ID:20-600)',
        latlng:{ lat:37.485095, lng:126.9696156},},
      {
        title:'등용로 등용로 96(ID:20-106)',
        latlng:{ lat:37.5097641, lng:126.932322},},
      {
        title:'시흥대로 658(올리브 영 앞)',
        latlng:{ lat:37.4570011, lng:126.900481},},
      {
        title:'여의대방로 126',
        latlng:{ lat:37.5006729, lng:126.9187206},},
      {
        title:'양녕로 177번지(ID:20-892)',
        latlng:{ lat:37.497315, lng:126.9429239},},
      {
        title:'상도로 53길 70번지(세븐일레븐 옆)',
        latlng:{ lat:37.5021285, lng:126.9543668},},
      {
        title:'상도로 상도시장(ID:20-161)',
        latlng:{ lat:37.5017644, lng:126.9484187},},
      {
        title:'상도로 321번지(동진빌딩 앞)',
        latlng:{ lat:37.4994748, lng:126.9512254},},
      {
        title:'상도로 상도로 357(ID:20-166)',
        latlng:{ lat:37.4990513, lng:126.9422048},},
      {
        title:'사당로 숭실대정문앞(ID:20-170)',
        latlng:{ lat:37.495177, lng:126.957042},},
      {
        title:'상도로 숭실대입구역(ID:20-166)',
        latlng:{ lat:37.496374, lng:126.953504},},
      {
        title:'상도로 중앙하이츠빌 아파트(ID:20-162)',
        latlng:{ lat:37.4991652, lng:126.9498321},},
      {
        title:'장승배기로 16-1번지',
        latlng:{ lat:37.5000317, lng:126.9428907},},
      {
        title:'노량진로 147(노량진역 8번출구 앞)',
        latlng:{ lat:37.5138768, lng:126.9422137},}
    ];

    if (req.method == 'GET'){
        res.status(200).json(trashs);
    }
}
