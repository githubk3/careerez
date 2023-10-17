import styles from "./About.module.css";
import {
    IconBrandFacebook,
    IconBrandInstagram,
    IconBrandTwitter,
} from "@tabler/icons-react";

export const About = () => {
    return (
        <div className={styles.container}>
            <div className={styles.avatar}>
                <img
                    src="https://static.wixstatic.com/media/11062b_09c72de857e448d2b339fe555a903549~mv2.jpeg/v1/fill/w_1895,h_738,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_09c72de857e448d2b339fe555a903549~mv2.jpeg"
                    alt="Avatar Home"
                    loading="lazy"
                />
                <div className={styles.title}>
                    <h1>Về CareerEZ</h1>
                </div>
            </div>

            <div className={styles.about}>
                <div className={styles.aboutContent}>
                    <div className={styles.aboutContentText}>
                        <p>
                            CareerEZ là Website định hướng nghề nghiệp thông qua
                            hoạt động trải nghiệm ngành nghề và thực tập trực
                            tuyến cho học sinh Trung học Phổ thông. Website
                            hướng tới việc xây dựng một không gian đảm bảo tính
                            công bằng về cơ hội lựa chọn và trải nghiệm cho các
                            bạn học sinh, giúp các bạn lựa chọn được ngành nghề
                            phù hợp trong tương lai; tạo nên một cộng đồng nơi
                            mà các học sinh thành công sẽ hỗ trợ và chia sẻ với
                            các em lứa sau.
                        </p>
                    </div>

                    <div className={styles.aboutOptions}>
                        <ul className={styles.aboutOptionsList}>
                            <li className={styles.aboutOptionsItem}>
                                <button>Đăng ký thành viên</button>
                            </li>
                            <li className={styles.aboutOptionsItem}>
                                <button>Bài kiểm tra tính cách</button>
                            </li>
                        </ul>
                        <ul className={styles.aboutOptionsList}>
                            <li className={styles.aboutOptionsItem}>
                                <button>Trải nghiệm nghề nghiệp</button>
                            </li>
                            <li className={styles.aboutOptionsItem}>
                                <button>Thực tập trực tuyến</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className={styles.version}>
                <div className={styles.versionAvatar}>
                    <img
                        src="https://static.wixstatic.com/media/c86370_a88fdd3b205f4bcdae6a27fa54280357~mv2.jpg/v1/fill/w_950,h_1071,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c86370_a88fdd3b205f4bcdae6a27fa54280357~mv2.jpg"
                        alt="Tam_nhin"
                    />
                </div>
                <div className={styles.versionAbout}>
                    <div className={styles.versionAboutContent}>
                        <h1>Tầm nhìn</h1>
                        <p>
                            Trở thành Website hướng nghiệp hàng đầu cho học sinh
                            THPT tại Việt Nam và Đông Nam Á. Tạo ra cộng đồng
                            hướng nghiệp với 1.000.000 thành viên hướng đến việc
                            xây dựng lộ trình hướng nghiệp chuyên nghiệp và
                            hướng đến cộng đồng xã hội bền vững
                        </p>
                    </div>
                </div>
            </div>

            <div className={styles.mission}>
                <div className={styles.missionAbout}>
                    <div className={styles.missionAboutContent}>
                        <h1 className={styles.missionAboutContentTitle}>
                            Sứ mệnh
                        </h1>
                        <ul className={styles.missionAboutContentList}>
                            <li>
                                <p>
                                    Định hướng nghề nghiệp, giúp học sinh trung
                                    học phổ thông khám phá đa dạng các lựa chọn
                                    nghề nghiệp, phát triển kỹ năng và tự tin
                                    trong việc lựa chọn nghề một cách phù hợp
                                    nhất.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Chúng tôi cam kết đảm bảo cơ hội công bằng
                                    cho tất cả học sinh, không phân biệt địa vị
                                    xã hội hay khả năng tài chính.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Chúng tôi mong muốn xây dựng một cộng đồng
                                    trực tuyến hỗ trợ, nơi các học sinh thành
                                    công chia sẻ kiến thức và kinh nghiệm để
                                    truyền cảm hứng cho thế hệ sau, góp phần tạo
                                    ra một tương lai tươi sáng.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.missionAvatar}>
                    <img
                        src="https://static.wixstatic.com/media/c86370_a88fdd3b205f4bcdae6a27fa54280357~mv2.jpg/v1/fill/w_950,h_1071,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c86370_a88fdd3b205f4bcdae6a27fa54280357~mv2.jpg"
                        alt="Su_menh"
                    />
                </div>
            </div>

            <div className={styles.adviser}>
                <div className={styles.adviserContent}>
                    <h1>Đội ngũ cố vấn</h1>

                    <p>
                        Đội ngũ cố vấn của chúng tôi là một nhóm các chuyên gia
                        có kinh nghiệm và kiến thức sâu sắc trong nhiều lĩnh vực
                        khác nhau. Chúng tôi tự hào về sự đa dạng và sự chuyên
                        nghiệp của đội ngũ này, với từng thành viên đều có sự
                        tận tâm và cam kết với sứ mệnh của chúng tôi.
                    </p>

                    <div className={styles.adviserList}>
                        <div className={styles.adviserItem}>
                            <div className={styles.adviserItemAvatar}>
                                <img
                                    src="https://static.wixstatic.com/media/c86370_f6762c0eacbd4b13af074b348af1da2e~mv2.jpg/v1/fill/w_605,h_501,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/94371402_2970927109612011_2766736422193856512_n.jpg"
                                    alt=""
                                />
                            </div>
                            <div className={styles.adviserItemContent}>
                                <div>
                                    <p>Cố vấn lĩnh vực Giáo dục Đào tạo</p>
                                    <h3>PGS.TS Vũ Thị Hiền</h3>

                                    <ul>
                                        <li>
                                            <p>
                                                Trưởng phòng Quản lý Đào tạo
                                                Trường Đại học Ngoại thương
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                Chủ tịch Công đoàn Trường Đại
                                                học Ngoại thương
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                Hơn 20 năm kinh nghiệm trong
                                                lĩnh vực đào tạo và phát triển
                                                chương trình giáo dục Đại học{" "}
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                                <div className={styles.socialMedia}>
                                    <ul className={styles.socialMediaList}>
                                        <li>
                                            <a href="#">
                                                <IconBrandFacebook />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <IconBrandInstagram />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <IconBrandTwitter />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className={styles.adviserItem}>
                            <div className={styles.adviserItemAvatar}>
                                <img
                                    src="https://static.wixstatic.com/media/c86370_f6762c0eacbd4b13af074b348af1da2e~mv2.jpg/v1/fill/w_605,h_501,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/94371402_2970927109612011_2766736422193856512_n.jpg"
                                    alt=""
                                />
                            </div>
                            <div className={styles.adviserItemContent}>
                                <div>
                                    <p>Cố vấn lĩnh vực Giáo dục Đào tạo</p>
                                    <h3>PGS.TS Vũ Thị Hiền</h3>

                                    <ul>
                                        <li>
                                            <p>
                                                Trưởng phòng Quản lý Đào tạo
                                                Trường Đại học Ngoại thương
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                Chủ tịch Công đoàn Trường Đại
                                                học Ngoại thương
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                Hơn 20 năm kinh nghiệm trong
                                                lĩnh vực đào tạo và phát triển
                                                chương trình giáo dục Đại học{" "}
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                                <div className={styles.socialMedia}>
                                    <ul className={styles.socialMediaList}>
                                        <li>
                                            <a href="#">
                                                <IconBrandFacebook />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <IconBrandInstagram />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <IconBrandTwitter />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className={styles.adviserItem}>
                            <div className={styles.adviserItemAvatar}>
                                <img
                                    src="https://static.wixstatic.com/media/c86370_f6762c0eacbd4b13af074b348af1da2e~mv2.jpg/v1/fill/w_605,h_501,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/94371402_2970927109612011_2766736422193856512_n.jpg"
                                    alt=""
                                />
                            </div>
                            <div className={styles.adviserItemContent}>
                                <div>
                                    <p>Cố vấn lĩnh vực Giáo dục Đào tạo</p>
                                    <h3>PGS.TS Vũ Thị Hiền</h3>

                                    <ul>
                                        <li>
                                            <p>
                                                Trưởng phòng Quản lý Đào tạo
                                                Trường Đại học Ngoại thương
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                Chủ tịch Công đoàn Trường Đại
                                                học Ngoại thương
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                Hơn 20 năm kinh nghiệm trong
                                                lĩnh vực đào tạo và phát triển
                                                chương trình giáo dục Đại học{" "}
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                                <div className={styles.socialMedia}>
                                    <ul className={styles.socialMediaList}>
                                        <li>
                                            <a href="#">
                                                <IconBrandFacebook />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <IconBrandInstagram />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <IconBrandTwitter />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className={styles.adviserItem}>
                            <div className={styles.adviserItemAvatar}>
                                <img
                                    src="https://static.wixstatic.com/media/c86370_f6762c0eacbd4b13af074b348af1da2e~mv2.jpg/v1/fill/w_605,h_501,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/94371402_2970927109612011_2766736422193856512_n.jpg"
                                    alt=""
                                />
                            </div>
                            <div className={styles.adviserItemContent}>
                                <div>
                                    <p>Cố vấn lĩnh vực Giáo dục Đào tạo</p>
                                    <h3>PGS.TS Vũ Thị Hiền</h3>

                                    <ul>
                                        <li>
                                            <p>
                                                Trưởng phòng Quản lý Đào tạo
                                                Trường Đại học Ngoại thương
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                Chủ tịch Công đoàn Trường Đại
                                                học Ngoại thương
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                Hơn 20 năm kinh nghiệm trong
                                                lĩnh vực đào tạo và phát triển
                                                chương trình giáo dục Đại học{" "}
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                                <div className={styles.socialMedia}>
                                    <ul className={styles.socialMediaList}>
                                        <li>
                                            <a href="#">
                                                <IconBrandFacebook />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <IconBrandInstagram />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <IconBrandTwitter />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.baseValue}>
                <h1>Giá trị cốt lõi</h1>
                <div className={styles.baseValueContent}>
                    <ul className={styles.baseValueContentList}>
                        <li className={styles.baseValueContentItem}>
                            <div>
                                <svg
                                    preserveAspectRatio="xMidYMid meet"
                                    data-bbox="19.999 41.943 160.001 116.114"
                                    viewBox="19.999 41.943 160.001 116.114"
                                    height={200}
                                    width={200}
                                    xmlns="http://www.w3.org/2000/svg"
                                    data-type="color"
                                    role="presentation"
                                    aria-hidden="true"
                                >
                                    <defs>
                                        <style
                                            dangerouslySetInnerHTML={{
                                                __html: '#comp-jpch366g svg [data-color="1"] {fill: #FFDE59;}\n#comp-jpch366g svg [data-color="2"] {fill: #FFFFFF;}\n#comp-jpch366g svg [data-color="3"] {fill: #2859B6;}',
                                            }}
                                        />
                                    </defs>
                                    <g>
                                        <path
                                            fill="yellow"
                                            d="M158.417 100c0 32.064-26.111 58.057-58.321 58.057-32.21 0-58.321-25.993-58.321-58.057 0-32.064 26.111-58.057 58.321-58.057 32.21 0 58.321 25.993 58.321 58.057z"
                                            data-color={1}
                                        />
                                        <path
                                            d="M178.07 82.446l-5.21-22.309c-.366-1.463-1.92-2.286-3.291-1.646l-20.568 9.417c-1.828.823-1.828 3.383-.091 4.297l3.748 1.829c1.371.64 1.737 2.377.823 3.566-2.56 3.291-5.942 6.674-10.33 9.326-.091-6.949-3.108-13.531-11.426-18.834-14.9-7.406-27.058 1.829-30.623 11.52h-3.017c-3.565-9.6-14.9-18.834-29.8-11.337-8.318 5.211-11.427 11.886-11.427 18.834-4.388-2.651-7.77-6.126-10.33-9.417-.914-1.189-.548-2.926.823-3.566l3.748-1.829c1.828-.914 1.737-3.474-.091-4.297L30.44 58.491c-1.371-.64-3.017.183-3.291 1.646l-5.21 22.309a2.354 2.354 0 0 0 3.382 2.651l3.382-1.646c1.097-.549 2.377-.183 3.108.823 5.485 8.229 15.357 18.651 31.446 22.674a148.4 148.4 0 0 0 2.468 3.931c7.77 11.794 30.349 28.251 33.914 30.811l.366.366.366-.366c3.565-2.56 26.144-19.017 33.914-30.811 1.463-2.286 3.199-5.12 2.651-4.023 15.997-4.023 25.778-14.446 31.263-22.674.64-1.006 2.011-1.371 3.108-.823l3.382 1.646c1.736 1.006 3.838-.639 3.381-2.559z"
                                            fill="#FFFFFF"
                                            data-color={2}
                                        />
                                        <path
                                            d="M179.899 81.989l-5.21-22.309c-.274-1.28-1.188-2.377-2.377-2.926-1.188-.549-2.56-.64-3.748 0l-20.568 9.417c-1.554.731-2.56 2.194-2.56 3.931s.914 3.2 2.468 4.023l3.748 1.829c.091.091.183.091.183.274 0 .091 0 .183-.091.366-2.102 2.743-4.388 5.029-6.947 6.949-.091-.366-.091-.823-.183-1.189-1.371-6.309-5.393-11.52-11.884-15.634-.091 0-.091-.091-.183-.091-7.587-3.749-15.449-3.84-22.122-.274-4.845 2.56-8.776 7.04-10.878 11.886-2.011-5.029-5.85-9.417-10.695-12.069-4.479-2.377-11.884-4.297-21.39.457-.091 0-.091.091-.183.091-6.49 4.114-10.512 9.326-11.884 15.634-.091.366-.183.823-.183 1.189-2.468-1.92-4.753-4.206-6.856-6.857-.091-.091-.091-.274-.091-.366 0-.091.091-.183.183-.274l3.748-1.829c1.554-.731 2.468-2.286 2.468-4.023 0-1.737-1.006-3.2-2.56-3.931l-20.659-9.6a4.47 4.47 0 0 0-3.748 0c-1.188.549-2.011 1.646-2.377 2.926l-5.21 22.309c-.366 1.646.183 3.383 1.554 4.48 1.371 1.097 3.199 1.28 4.662.457l3.382-1.646c.183-.091.366 0 .457.091 5.759 8.686 15.723 18.926 31.629 23.223.64 1.097 1.371 2.194 2.102 3.383 7.861 11.977 29.8 28.069 34.371 31.269l.366.274c.366.366.823.457 1.28.457.183 0 .274 0 .457-.091.366-.091.64-.183.914-.457l.366-.274c4.479-3.2 26.509-19.383 34.371-31.269.731-1.097 1.463-2.194 2.102-3.291 15.906-4.297 25.87-14.629 31.629-23.314.091-.183.274-.183.457-.091l3.382 1.646c1.554.731 3.382.549 4.662-.457 1.371-.917 2.011-2.654 1.646-4.299zm-146.26 1.097c-.823-1.28-2.285-1.92-3.656-1.92-.64 0-1.371.183-2.011.457l-3.382 1.646c-.091 0-.183.091-.366 0-.183-.183-.183-.366-.091-.366l5.21-22.309c0-.183.091-.183.183-.274.091 0 .183-.091.366 0l20.568 9.417c.091 0 .183.091.183.366 0 .274-.183.274-.183.366l-3.748 1.829c-1.188.549-2.011 1.646-2.285 2.926-.274 1.28 0 2.651.823 3.657 2.377 3.017 5.576 6.309 9.781 9.143.183 4.754 1.554 9.874 4.205 15.451C46.62 98.994 38.484 90.4 33.639 83.086zm99 26.697c-7.222 10.971-27.972 26.331-32.634 29.806-4.753-3.474-25.504-18.834-32.634-29.806-6.856-10.423-9.598-19.474-8.044-26.697 1.097-5.12 4.479-9.509 10.055-13.074 7.953-3.931 13.986-2.377 17.643-.457 6.125 3.291 9.415 9.6 10.055 14.446.823 6.766-.091 18.377-14.9 21.029-1.828-2.194-4.845-6.4-5.485-9.874 3.291.274 5.942-.914 7.496-3.291.183-.183.274-.457.366-.64.091-.183.183-.274.183-.457.457-.914.64-1.92.64-3.017 0-4.023-3.291-7.314-7.313-7.314-3.199 0-5.942 2.103-6.947 4.937-1.006 2.56-1.188 6.674 1.737 12.983 4.936 10.606 17.003 20.114 26.327 26.149.64.457 1.554.457 2.194 0 8.318-5.303 19.197-13.806 24.224-23.771.183-.274.823-1.646.823-1.737 2.194-5.12 2.651-8.777 2.377-11.429 0-4.023-3.291-7.223-7.313-7.223s-7.313 3.291-7.313 7.314c0 3.657 2.742 6.766 6.307 7.223.914.183 1.92.274 3.017.183a20.328 20.328 0 0 1-.823 2.56c-.091.274-.548 1.097-.64 1.371-1.28 2.56-3.108 4.846-4.022 5.943-11.335-2.103-17.277-9.874-15.906-21.029.64-5.577 4.845-11.337 10.238-14.263 3.931-2.103 10.238-3.749 18.374.274 5.485 3.474 8.867 7.863 10.055 13.074 1.461 7.313-1.19 16.273-8.137 26.787zm43.146-26.514c-.183.183-.366.091-.366 0l-3.382-1.646c-2.011-1.006-4.388-.366-5.668 1.463-4.936 7.314-12.98 15.909-25.595 20.389 2.651-5.577 4.114-10.697 4.205-15.451 4.205-2.743 7.496-6.126 9.781-9.143.823-1.006 1.097-2.377.823-3.657-.274-1.28-1.097-2.377-2.285-2.926l-3.748-1.829c-.091 0-.183-.091-.183-.366 0-.274.183-.274.183-.366l20.568-9.417c.091-.091.274 0 .366 0 .091 0 .183.091.183.274l5.21 22.309c.091 0 .091.183-.092.366z"
                                            fill="#2859B5"
                                            data-color={3}
                                        />
                                    </g>
                                </svg>
                            </div>
                            <div className={styles.baseValueContentItemText}>
                                <p>Kết nối cộng đồng, phát triển bền vững</p>
                            </div>
                        </li>
                        <li className={styles.baseValueContentItem}>
                            <div>
                                <svg
                                    preserveAspectRatio="xMidYMid meet"
                                    data-bbox="35.981 19.006 128.056 162.017"
                                    viewBox="35.981 19.006 128.056 162.017"
                                    height={200}
                                    width={200}
                                    xmlns="http://www.w3.org/2000/svg"
                                    data-type="color"
                                    role="presentation"
                                    aria-hidden="true"
                                >
                                    <defs>
                                        <style
                                            dangerouslySetInnerHTML={{
                                                __html: '#comp-jpch366e svg [data-color="1"] {fill: #FFDE59;}\n#comp-jpch366e svg [data-color="2"] {fill: #FFFFFF;}\n#comp-jpch366e svg [data-color="3"] {fill: #2859B6;}',
                                            }}
                                        />
                                    </defs>
                                    <g>
                                        <path
                                            fill="yellow"
                                            d="M160.703 118.25c5.872 25.68-17.082 52.837-51.27 60.654s-66.662-6.664-72.535-32.345 17.082-52.837 51.27-60.654 66.663 6.663 72.535 32.345z"
                                            data-color={1}
                                        />
                                        <path
                                            fill="#ffffff"
                                            d="M48 143.9l12.1 1.5 10.6-5 15 7.7.5 15.4L94 169l11.8-1.3 5.5-5.6v-12.6l3.6-3.4 23.2-10.1 7.9 1.2 8.8-5.1-.5-5.2 7.6-12.5-.9-11.6-7.1-8.8-2.8-13.3L143 65l3.2-21.2-6.2-5.1-7.8 3.2-7.4 6.6-3.9-.3-16.3-3.9-14-1-11.6 1-19.4 8.4-5.9 6.1-8.9 1-3.4 5.4 3.7 7.9-2.7 16.7 2.2 19.2 5.6 12.8-.7 7.1-3.7 10.8 2.2 4.2z"
                                            data-color={2}
                                        />
                                        <path
                                            d="M106.2 65.2c-3.9-5-11.2-4.8-14.9-3.4-3.8 1.4-12.6 5.9-13 17.2-.3 8.2 3.7 13.3 5.4 15.2.9 1 2.8 2.6 4.5 2.6 1.4 0 2.6-.5 3.4-1.5 1.1-1.2 1.5-2.9 1.2-5.2-.2-2.1 0-4.2.7-6.4.5-1.5 1.3-3 2.1-4.6 2-2.9 5.2-5.3 6.7-6.5.2-.2.4-.3.6-.5.1-.1.3-.2.5-.4 1.3-1 3.1-2.4 3.4-4.2.2-.7-.1-1.6-.6-2.3zm-24.1 14c.3-8.2 6-11.9 9.8-13.5-3.1 2.7-5.2 7.1-5.8 12.4-.5 4.2.7 11.4 2.2 14.9-1.3-.6-6.5-5.5-6.2-13.8z"
                                            fill="#2859b5"
                                            data-color={3}
                                        />
                                        <path
                                            d="M44.9 73.6c-2.2-.5-4.1-2.5-4.8-5-.8-3 0-6.2 2.4-8.6 4.7-4.7 10.6-2.7 10.9-2.6L52.1 61l.6-1.8-.6 1.8c-.2-.1-3.9-1.3-6.9 1.7-1.9 1.9-1.6 4-1.4 4.8.3 1.2 1.1 2.1 2 2.3l-.9 3.8z"
                                            fill="#2859b5"
                                            data-color={3}
                                        />
                                        <path
                                            d="M160.4 121.3c5.3-7.5 4.7-18.8-1.1-25-.1-.2-.3-.4-.5-.5-.1-.1-.2-.1-.2-.2l-.3-.3c-.9-.8-1.7-1.5-2.5-2.1-.3-3.3-2-15.8-11.1-29.2 0 0-.1-.2-.2-.6.8-3.1 4.2-16.3 2.5-21.3-.1-.4-.3-.9-.5-1.2-.9-1.7-2.4-2.8-4.4-3.2-4.5-.9-10 1.9-13.3 4.7-3 2.6-4.1 3.6-4.6 4.1-.2.2-.3.3-.5.4-.2.1-.4.3-.9 0-.2-.1-21.2-10.9-49.3-2.4-13.3 4-23.2 12.4-28.6 24.3-4.8 10.6-5.7 23.6-2.6 36.5 1.7 7 4.6 13.5 7.3 18.3-.8 2.1-3.6 9.3-4.1 10.9l-.2.4c-.8 2.2-3.2 8.7 2.1 10.7 2.5.9 5.9 1.6 9.3 1.6 2.1 0 4.2-.3 6.1-1 3.2-1.2 5.6-3.2 6.7-4.4 3.4 2.1 8.3 4.9 14 6.9.9.4 1.1.8 1.1 1.9 0 .6-.1 2.3-.1 4.1-.1 3.7-.2 6.2-.1 7 .4 4.9 3.7 8.2 9.5 9.1 1.4.2 2.8.3 4.1.3 6.4 0 12.2-2.4 14.2-6.3 1.7-3.3 1.5-6 1.2-9.3-.1-1.2-.2-2.3-.2-3.7-.1-3.2.9-3.5 2.8-4l.9-.3c1.7-.6 11.5-4.4 19.2-9.2.9.1 3.5.4 6.4.4 3 0 6.4-.3 8.9-1.5 4.4-2 6.2-4.4 5.7-7.3-.1-.8-.8-2.2-1.3-3.3 1.5-1.4 3.1-3.2 4.6-5.3zm-44.9 22.6c-.2.1-.5.2-.7.2-2.1.6-5.7 1.6-5.6 7.8 0 1.5.1 2.8.2 3.9.2 3 .4 4.9-.8 7.2-1.4 2.8-7.3 5.1-14.2 4-5.9-.9-6.1-4.4-6.2-5.6 0-.6.1-4.2.2-6.5.1-1.9.1-3.5.1-4.2 0-1.7-.4-4.1-3.4-5.4 0 0-.1 0-.1-.1-9.7-3.4-17.6-9.4-17.6-9.5-.8-.6-2.1-.5-2.7.4-.6.8-.5 2.1.4 2.7.1.1.6.4 1.3 1-1 .9-2.7 2.2-4.8 3-3.7 1.4-9 .7-12.7-.7-1.2-.4-1.1-2.2.2-5.8l.2-.5c.4-1.1 1.9-5.1 3.1-8.1 1.2 1.7 2.2 3.1 3 3.8.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6.8-.8.8-2 0-2.7-2-2-8.8-11.9-11.9-24.4-5.4-22.1 1.4-48.1 28.6-56.2 2.8-.9 5.6-1.5 8.3-2h.1c3 .7 12.8 3.1 20.7 8.4.1.1.3.1.5 0l2.3-1.9c.2-.2.2-.5 0-.6-1.7-1-7.8-4.7-15.8-6.9 18.2-1.3 30.4 5 30.5 5.1 1.8 1 3.6.8 5.2-.4.2-.2.3-.3.7-.6.5-.5 1.6-1.5 4.6-4.1 1.9-1.7 4.3-2.9 6.5-3.5-.3.2-.6.4-.8.6-6.6 4.9-9.8 13.7-10 14.1-.3.8 0 1.6.6 2.1s1.5.6 2.2.1c0 0 1.8-1.1 4.2-.9 3.2.2 5.8 2.6 6.6 6.1 0 .1.1.1.1.2.2 1.1.7 1.9.8 2 6.3 9.3 8.9 18.2 9.9 23.4-1.5-1.2-2.3-1.8-2.4-1.8-.9-.6-2.1-.4-2.7.5-.6.9-.4 2.1.5 2.7 0 0 1.5 1.1 4.1 3.2-3.8.7-12.3 3.9-17.3 19.4-2.4 7.5-2 12.3-.9 15.1-1.9-.4-3.8-.9-5.6-1.4-1-.3-2.1.3-2.4 1.4-.3 1 .3 2.1 1.4 2.4 1.9.5 6.6 1.7 10.5 2.5-8.2 5.2-20.1 10-21.8 10.5zm34-10c-2.2 1-5.7 1.2-8.7 1.1.4-.3.7-.6 1.1-.9h.2c2.1-.2 6.2-1.8 10.4-4.8.3.7.5 1.3.6 1.5 0 .3.2 1.3-3.6 3.1zm-7.9-3.7c-.5.1-1.8-.1-3.5-.4-.7-.5-4.6-3.6-.9-15.1 5.4-16.6 14.7-16.9 15.4-16.9 1.1 0 2.5.3 3.5.8 4.4 4.4 5.9 13.9 1.2 20.6-5.1 7.1-13.2 10.7-15.7 11z"
                                            fill="#2859b5"
                                            data-color={3}
                                        />
                                        <path
                                            fill="#2859b5"
                                            d="M127.389 89.192c.122 1.209-.67 2.279-1.77 2.39s-2.088-.78-2.21-1.988c-.122-1.209.67-2.279 1.769-2.39s2.089.78 2.21 1.988z"
                                            data-color={3}
                                        />
                                        <path
                                            fill="#2859b5"
                                            d="M143.455 78.263c.294 1.178-.076 2.286-.826 2.473-.75.187-1.597-.617-1.891-1.796-.294-1.18.076-2.286.826-2.473.75-.187 1.597.617 1.89 1.796z"
                                            data-color={3}
                                        />
                                        <path
                                            d="M147.2 116.7c0-4.6-.1-9.5-2.6-8.3-1.3.6-2.6 3.7-2.6 8.3 0 4.6.5 9.4 2.6 8.3 1.2-.6 2.6-3.7 2.6-8.3z"
                                            fill="#2859b5"
                                            data-color={3}
                                        />
                                        <path
                                            d="M155.7 109.9c0-4.1-.1-8.5-2.3-7.4-1.1.6-2.3 3.3-2.3 7.4 0 4.1.4 8.4 2.3 7.4 1.2-.6 2.3-3.3 2.3-7.4z"
                                            fill="#2859b5"
                                            data-color={3}
                                        />
                                        <path
                                            d="M110 39.2c.6-9-5.2-17.9-12.8-19.8-2.3-.6-4.5-.5-6.5.2l-3.2 1.1.9-.3c-5.1 1.2-9 6.1-9.4 12.8-.3 4.7 1.1 9.4 3.7 13.1 1.4.3 2.7.6 4.2 1.1 4.3 1.2 9.2 3.1 12.8 5l1.8-.6c4.6-1.6 8.1-6.3 8.5-12.6z"
                                            fill="yellow"
                                            data-color={1}
                                        />
                                    </g>
                                </svg>
                            </div>
                            <div>
                                <p>Định hướng nghề nghiệp</p>
                            </div>
                        </li>
                        <li className={styles.baseValueContentItem}>
                            <div className={styles.baseValueContentItemIcon}>
                                <svg
                                    preserveAspectRatio="xMidYMid meet"
                                    data-bbox="21 37 158 126"
                                    viewBox="21 37 158 126"
                                    height={200}
                                    width={200}
                                    xmlns="http://www.w3.org/2000/svg"
                                    data-type="color"
                                    role="presentation"
                                    aria-hidden="true"
                                >
                                    <defs>
                                        <style
                                            dangerouslySetInnerHTML={{
                                                __html: '#comp-jpch366h svg [data-color="1"] {fill: #FFDE59;}\n#comp-jpch366h svg [data-color="2"] {fill: #FFFFFF;}\n#comp-jpch366h svg [data-color="3"] {fill: #2859B6;}',
                                            }}
                                        />
                                    </defs>
                                    <g>
                                        <path
                                            fill="yellow"
                                            d="M163.3 100c0 34.794-28.161 63-62.9 63s-62.9-28.206-62.9-63 28.161-63 62.9-63 62.9 28.206 62.9 63z"
                                            data-color={1}
                                        />
                                        <path
                                            d="M25.5 68.846l-.1-.046c0 9.7 0 37.2.1 57a33.44 33.44 0 0 0 3.386 1.663c-1.47-.632-2.585-1.236-3.286-1.663-.1-19.77-.2-47.215-.1-56.954z"
                                            fill="#FFFFFF"
                                            data-color={2}
                                        />
                                        <path
                                            d="M60.3 120.8c2-.7 4-1.6 5.9-2.4 5.056-2.185 9.449-4.057 13.545-4.183-4.124.099-8.548 1.981-13.645 4.183-1.9.8-3.9 1.6-5.9 2.4-3.211 1.22-6.186 1.701-8.851 1.733 2.696-.016 5.707-.491 8.951-1.733z"
                                            fill="#FFFFFF"
                                            data-color={2}
                                        />
                                        <path
                                            d="M26.982 69.514c2.192.996 5.066 2.005 8.506 2.676a45.417 45.417 0 0 1-8.506-2.676z"
                                            fill="#FFFFFF"
                                            data-color={2}
                                        />
                                        <path
                                            d="M86.4 54.3c-6.4-1.9-12.1-.3-20.7 2.1l-2.6.7c-8.8 2.4-16.1 1.3-22.6-3.7l.2 15.2.1 4.4.5 42.6c2.3 1.3 8.8 4.5 17.4 1.2 2-.8 3.9-1.6 5.8-2.4 5.4-2.3 10.6-4.5 15.8-4.5 3 0 6 .8 9 2.7 2.9 1.9 5.6 4.4 7.7 6.5l.5-51.6v-3c-.2-.5-.6-1.4-1.2-2.5-1.5-2.5-4.5-6.1-9.9-7.7z"
                                            fill="#FFFFFF"
                                            data-color={2}
                                        />
                                        <path
                                            d="M81.549 120.801c5.677.007 10.26 1.203 13.351 2.499-.05-.055-.107-.114-.158-.169-3.264-1.232-7.694-2.331-13.142-2.331l-.051.001z"
                                            fill="#FFFFFF"
                                            data-color={2}
                                        />
                                        <path
                                            d="M58.588 127.212c-1.339.48-2.683.943-4.026 1.362a90.799 90.799 0 0 0 4.026-1.362z"
                                            fill="#FFFFFF"
                                            data-color={2}
                                        />
                                        <path
                                            d="M35.999 129.685c-.202-.042-.393-.089-.59-.133.196.044.388.091.59.133z"
                                            fill="#FFFFFF"
                                            data-color={2}
                                        />
                                        <path
                                            d="M50.958 129.578c-.109.026-.218.049-.326.074.108-.025.217-.048.326-.074z"
                                            fill="#FFFFFF"
                                            data-color={2}
                                        />
                                        <path
                                            d="M43.9 130.5l.031-.001a39.425 39.425 0 0 1-7.637-.758c2.27.455 4.816.759 7.606.759z"
                                            fill="#FFFFFF"
                                            data-color={2}
                                        />
                                        <path
                                            d="M134.9 114.5c1.9.8 3.8 1.7 5.8 2.4 8.7 3.3 15.2.2 17.4-1.2l.5-42.6.1-4.4.2-15.3c-6.5 4.9-13.8 6.1-22.6 3.7l-2.6-.7c-8.6-2.4-14.3-4-20.7-2.1-5.7 1.6-8.7 5.5-10.1 8.1-.5.9-.8 1.7-1 2.1v1.4l.5 53.2v-.042.042c2.1-2.2 4.9-4.7 7.7-6.4 8.2-5.3 16.2-1.8 24.8 1.8z"
                                            fill="#FFFFFF"
                                            data-color={2}
                                        />
                                        <path
                                            d="M104.162 123.535l-.062.065c3.292-1.396 8.176-2.792 14.453-2.799l-.053-.001c-6.203 0-11.04 1.357-14.338 2.735z"
                                            fill="#FFFFFF"
                                            data-color={2}
                                        />
                                        <path
                                            d="M136.809 119.88c-1.191-.487-2.369-1-3.509-1.48-5.097-2.202-9.52-4.085-13.645-4.183 4.096.127 8.489 1.999 13.545 4.183 1.171.493 2.385.986 3.609 1.48z"
                                            fill="#FFFFFF"
                                            data-color={2}
                                        />
                                        <path
                                            d="M148.03 122.534c-2.665-.03-5.635-.511-8.83-1.734a42.522 42.522 0 0 1-1.365-.508l1.265.508c3.243 1.232 6.245 1.711 8.93 1.734z"
                                            fill="#FFFFFF"
                                            data-color={2}
                                        />
                                        <path
                                            d="M152.813 130.258l-.059-.008.059.008z"
                                            fill="#FFFFFF"
                                            data-color={2}
                                        />
                                        <path
                                            d="M174.5 125.8c-2.296 1.297-8.975 4.686-18.347 4.699l.047.001c9.4 0 16.1-3.3 18.4-4.7 0-19.8.1-47.3 0-57 0 9.7 0 37.2-.1 57z"
                                            fill="#FFFFFF"
                                            data-color={2}
                                        />
                                        <path
                                            d="M86.8 116.2c-2.299-1.483-4.625-2.042-7.055-1.983-4.096.127-8.489 1.999-13.545 4.183-1.9.8-3.9 1.7-5.9 2.4-3.244 1.242-6.255 1.717-8.951 1.733-8.04.096-13.248-3.908-13.549-4.133-.5-.4-.8-1-.8-1.7l-.5-44.3c-.346-.065-.675-.139-1.011-.21-3.44-.671-6.314-1.681-8.506-2.676a43.913 43.913 0 0 1-1.483-.667c-.1 9.738 0 37.183.1 56.953.701.427 1.816 1.03 3.286 1.663a38.14 38.14 0 0 0 6.523 2.089c.197.044.388.091.59.133.096.02.198.037.295.056 2.276.453 4.834.753 7.637.758 2.18-.003 4.427-.326 6.7-.846.109-.025.217-.048.326-.074a61.45 61.45 0 0 0 3.311-.914l.293-.09c1.343-.419 2.687-.882 4.026-1.362 1.345-.49 2.686-.998 4.012-1.512 6.3-2.4 12.7-4.9 18.9-4.9l.049.001.051-.001c5.449 0 9.879 1.098 13.142 2.331-1.997-2.18-4.918-4.982-7.941-6.932z"
                                            fill="#FFFFFF"
                                            data-color={2}
                                        />
                                        <path
                                            d="M174.6 68.8c-2.6 1.3-6.6 2.9-11.7 3.7l-.5 44.2c0 .7-.3 1.3-.8 1.7-.3.225-5.556 4.223-13.57 4.134-2.685-.023-5.687-.502-8.93-1.734l-1.265-.508a56.274 56.274 0 0 1-1.026-.412 241.099 241.099 0 0 1-3.609-1.48c-5.056-2.185-9.449-4.057-13.545-4.183-2.43-.058-4.757.5-7.055 1.983-3.268 2.08-6.434 5.235-8.438 7.335 3.298-1.378 8.135-2.735 14.338-2.735l.053.001.047-.001c6.2 0 12.6 2.5 18.9 4.9 5.03 1.866 10.257 3.863 15.254 4.551l.059.008c.49.066.977.115 1.463.155a24.69 24.69 0 0 0 1.71.081c.056.001.112.004.168.004 9.372-.013 16.051-3.401 18.347-4.699.099-19.8.099-47.3.099-57z"
                                            fill="#FFFFFF"
                                            data-color={2}
                                        />
                                        <path
                                            d="M178.9 74.8v-7c0-3.5 0-4.1-1.4-4.7-.7-.3-1.5-.2-2.1.2-.1 0-4.8 3.3-12.5 4.7l.2-19.7c0-.9-.5-1.7-1.4-2-.8-.3-1.8-.1-2.4.5-6.4 6.7-13 8.5-22.1 6l-2.5-.7c-9-2.5-15.5-4.3-23.1-2.1-6.3 1.9-10 5.9-12 9.1-2-3.2-5.7-7.3-12-9.1-7.6-2.2-14.1-.4-23.1 2.1l-2.5.7c-9.1 2.5-15.7.7-22.1-6-.6-.6-1.6-.8-2.4-.5-.8.3-1.4 1.1-1.4 2l.3 19.7c-7.4-1.4-11.9-4.6-11.9-4.6-.6-.4-1.4-.5-2.1-.2-1.4.6-1.4 1.2-1.4 4.7v28.3c0 15.5.1 30.9.1 30.9 0 .7.3 1.4.9 1.8.116.077 1.454 1.008 3.8 2.119V142c0 1.3.6 2.5 1.5 3.3.8.7 1.8 1.1 2.8 1.1h.6l61.3-9.3c.8 1.7 2.5 3 4.6 3h6.6c2.1 0 3.8-1.2 4.6-3l61.6 9.3h.6c1 0 2-.4 2.8-1.1 1-.8 1.5-2 1.5-3.3v-11.047c2.258-1.082 3.548-1.977 3.7-2.053.6-.4.9-1.1.9-1.8 0 0 .1-15.4.1-30.9-.1-7.8-.1-15.6-.1-21.4zm-77.1-10.3c.2-.4.5-1.2 1-2.1 1.4-2.6 4.4-6.5 10.1-8.1 6.4-1.9 12.1-.3 20.7 2.1l2.6.7c8.8 2.4 16.1 1.2 22.6-3.7l-.2 15.3-.1 4.4-.007.606L158 115.7c-2.2 1.4-8.7 4.5-17.4 1.2-2-.7-3.9-1.6-5.8-2.4-8.6-3.6-16.6-7.1-24.8-1.8-2.8 1.7-5.6 4.2-7.7 6.4l-.5-53.2v-1.4zM63 57.1l2.6-.7c8.6-2.4 14.3-4 20.7-2.1 5.4 1.6 8.4 5.2 9.9 7.7.6 1.1 1 2 1.2 2.5v3l-.5 51.6c-2.1-2.1-4.8-4.6-7.7-6.5-3-1.9-6-2.7-9-2.7-5.2 0-10.4 2.2-15.8 4.5-1.9.8-3.8 1.6-5.8 2.4-8.6 3.3-15.1.1-17.4-1.2l-.491-41.858L40.7 73l-.1-4.4-.2-15.2c6.5 5 13.8 6.1 22.6 3.7zm-37.6 68.7c-.1-19.8-.1-47.3-.1-57l.1.046V68.8c.448.233.952.473 1.482.714a45.392 45.392 0 0 0 8.506 2.676c.368.072.731.146 1.111.21l.022 1.924L37 116.7c0 .7.3 1.3.8 1.7.299.224 5.504 4.181 13.449 4.133 2.665-.032 5.64-.513 8.851-1.733 2-.8 4-1.6 5.9-2.4 5.097-2.202 9.52-4.085 13.645-4.183 2.466-.076 4.825.48 7.155 1.983 3.1 2.1 6.1 5 8.3 7.1-.145-.057-.307-.113-.458-.169l.158.169c-3.091-1.296-7.674-2.492-13.351-2.499-6.184.014-12.566 2.505-18.849 4.899-1.359.504-2.733 1.017-4.112 1.512a87.865 87.865 0 0 1-4.026 1.362l-.293.09a57.98 57.98 0 0 1-1.651.481c-.554.153-1.108.3-1.66.433-.109.026-.218.049-.326.074-2.25.521-4.473.848-6.631.848l-.069-.001-.031.001c-2.79 0-5.336-.304-7.606-.759-.097-.019-.199-.036-.295-.056-.202-.042-.393-.089-.59-.133a37.113 37.113 0 0 1-6.523-2.089 33.353 33.353 0 0 1-2.986-1.443c-.139-.076-.285-.154-.401-.22zm149.1 0l-.2.118c-2.461 1.456-9.044 4.582-18.2 4.582l-.047-.001-.053.001c-.038 0-.077-.005-.114-.005a24.083 24.083 0 0 1-1.71-.081 28.489 28.489 0 0 1-1.463-.155l-.059-.008c-5.029-.652-10.29-2.59-15.354-4.551-6.282-2.393-12.664-4.885-18.847-4.899-6.277.007-11.161 1.402-14.453 2.799l.062-.065c-.052.022-.111.043-.162.065 2-2.1 5.2-5.3 8.5-7.4 2.33-1.503 4.689-2.06 7.155-1.983 4.124.099 8.548 1.981 13.645 4.183 1.14.48 2.318.992 3.509 1.48l1.026.412c.454.177.91.349 1.365.508 3.194 1.223 6.164 1.704 8.83 1.734 7.995.069 13.171-3.909 13.47-4.134.5-.4.8-1 .9-1.7l.48-42.394.02-1.806c5.1-.8 9.1-2.4 11.7-3.7.1 9.7 0 37.2 0 57z"
                                            fill="#2859B5"
                                            data-color={3}
                                        />
                                    </g>
                                </svg>
                            </div>
                            <div>
                                <p>Công bằng cơ hội</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
