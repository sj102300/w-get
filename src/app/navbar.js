import './stylesheets/navbar.scss'

function Navbar() {

    return (
        <div className="navbar">
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                    <path d="M8.625 19.8333V6.78571M14.8125 17.6429V4.52679M3 18.2143V4.5L8.47826 6.78571L14.7391 4.5L21 6.78571V20.5L14.7391 18.2143L8.47826 20.5L3 18.2143Z" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <p>홈</p>
            </button>

            <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M15.6 8.34202C15.6 10.3302 13.9882 11.942 12 11.942C10.0118 11.942 8.40002 10.3302 8.40002 8.34202M4.7273 20.942H19.2728C20.5581 20.942 21.6 19.9194 21.6 18.658L20.1091 5.34199C20.1091 4.08056 19.0672 3.05798 17.7818 3.05798H5.9273C4.64198 3.05798 3.60002 4.08056 3.60002 5.34199L2.40002 18.658C2.40002 19.9194 3.44198 20.942 4.7273 20.942Z" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <p>스토어</p>
            </button>
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                    <path d="M9.45321 9.62002V9.12002C9.17707 9.12002 8.95321 9.34388 8.95321 9.62002H9.45321ZM9.54884 9.62002H10.0488C10.0488 9.34388 9.82498 9.12002 9.54884 9.12002V9.62002ZM15.2132 9.62002V9.12002C14.9371 9.12002 14.7132 9.34388 14.7132 9.62002H15.2132ZM15.2982 9.62002H15.7982C15.7982 9.34388 15.5744 9.12002 15.2982 9.12002V9.62002ZM9.54884 9.6969V10.1969C9.82498 10.1969 10.0488 9.97304 10.0488 9.6969H9.54884ZM9.45321 9.6969H8.95321C8.95321 9.97304 9.17707 10.1969 9.45321 10.1969V9.6969ZM15.2982 9.6969V10.1969C15.5744 10.1969 15.7982 9.97304 15.7982 9.6969H15.2982ZM15.2132 9.6969H14.7132C14.7132 9.97304 14.9371 10.1969 15.2132 10.1969V9.6969ZM9.43031 15.156C9.28497 14.9212 8.9768 14.8487 8.742 14.994C8.5072 15.1394 8.43468 15.4475 8.58003 15.6823L9.43031 15.156ZM16.0864 15.6823C16.2317 15.4475 16.1592 15.1394 15.9244 14.994C15.6896 14.8487 15.3815 14.9212 15.2361 15.156L16.0864 15.6823ZM21.4332 12.5C21.4332 17.5258 17.359 21.6 12.3332 21.6V22.6C17.9113 22.6 22.4332 18.0781 22.4332 12.5H21.4332ZM12.3332 21.6C7.30742 21.6 3.23322 17.5258 3.23322 12.5H2.23322C2.23322 18.0781 6.75514 22.6 12.3332 22.6V21.6ZM3.23322 12.5C3.23322 7.47423 7.30742 3.40002 12.3332 3.40002V2.40002C6.75514 2.40002 2.23322 6.92195 2.23322 12.5H3.23322ZM12.3332 3.40002C17.359 3.40002 21.4332 7.47423 21.4332 12.5H22.4332C22.4332 6.92195 17.9113 2.40002 12.3332 2.40002V3.40002ZM9.45321 10.12H9.54884V9.12002H9.45321V10.12ZM15.2132 10.12H15.2982V9.12002H15.2132V10.12ZM9.04884 9.62002V9.6969H10.0488V9.62002H9.04884ZM9.54884 9.1969H9.45321V10.1969H9.54884V9.1969ZM9.95321 9.6969V9.62002H8.95321V9.6969H9.95321ZM14.7982 9.62002V9.6969H15.7982V9.62002H14.7982ZM15.2982 9.1969H15.2132V10.1969H15.2982V9.1969ZM15.7132 9.6969V9.62002H14.7132V9.6969H15.7132ZM12.3332 16.8C11.1187 16.8 10.0453 16.1496 9.43031 15.156L8.58003 15.6823C9.36487 16.9503 10.7494 17.8 12.3332 17.8V16.8ZM15.2361 15.156C14.6211 16.1496 13.5477 16.8 12.3332 16.8V17.8C13.9171 17.8 15.3016 16.9503 16.0864 15.6823L15.2361 15.156Z" fill="black" />
                </svg>
                <p>
                    같이하기
                </p>
            </button>
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                    <path d="M5.83344 8.91425H19.8334M7.64296 3V4.54304M17.8334 3V4.54285M17.8334 4.54285H7.83344C6.17658 4.54285 4.83344 5.92436 4.83344 7.62855V17.9143C4.83344 19.6185 6.17658 21 7.83344 21H17.8334C19.4903 21 20.8334 19.6185 20.8334 17.9143L20.8334 7.62855C20.8334 5.92436 19.4903 4.54285 17.8334 4.54285ZM11.8334 13.5428L13.3334 12V17.1428M13.3334 17.1428H11.8334M13.3334 17.1428H14.8334" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <p>플로깅 달력</p>
            </button>
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                    <path d="M5.3999 19.7C5.86107 19.1835 8.02095 16.8067 8.65391 16.8067H15.3463C16.2635 16.8067 18.1359 18.7769 18.5999 19.4714M21.5999 12.5C21.5999 17.802 17.3018 22.1 11.9999 22.1C6.69797 22.1 2.3999 17.802 2.3999 12.5C2.3999 7.19809 6.69797 2.90002 11.9999 2.90002C17.3018 2.90002 21.5999 7.19809 21.5999 12.5ZM15.4387 9.22798C15.4387 7.39647 13.8926 5.90002 12.0002 5.90002C10.1078 5.90002 8.56164 7.39647 8.56164 9.22798C8.56164 11.0595 10.1078 12.5559 12.0002 12.5559C13.8926 12.5559 15.4387 11.0595 15.4387 9.22798Z" stroke="black" />
                </svg>
                <p>내 정보</p>
            </button>
        </div>
    )
}


export default Navbar;