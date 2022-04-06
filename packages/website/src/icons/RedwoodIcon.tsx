import { Props } from './types';

export function RedwoodIcon({ size = 48, className }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 112 112"
      fill="none"
      width={size}
      height={size}
      className={className}
    >
      <rect width="112" height="112" />
      <g filter="url(#filter0_d)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48.0242 2.50355C44.0404 4.50827 35.6424 8.41127 31.0929 11.5248C26.5433 14.6384 27.109 17.539 25.1171 19.5437C23.1252 21.5485 17.1494 26.5603 13.1655 29.5674C9.18168 32.5745 10.1776 40.5934 9.18168 43.6005C8.18572 46.6076 6.19379 53.6241 5.19783 56.6312C4.20187 59.6383 7.18975 63.6478 9.18168 67.6572C11.1736 71.6667 16.1534 82.6927 18.1453 86.7021C20.1373 90.7116 26.113 88.7069 31.0929 92.7163C36.0727 96.7258 43.0444 101.738 48.0242 104.745C53.004 107.752 54.996 107.752 59.9758 104.745C64.9556 101.738 71.9273 96.7258 76.9071 92.7163C81.887 88.7069 87.8627 90.7116 89.8547 86.7021C91.8466 82.6927 96.8264 71.6667 98.8183 67.6572C100.81 63.6478 103.798 59.6383 102.802 56.6312C101.806 53.6241 99.8143 46.6076 98.8183 43.6005C97.8224 40.5934 98.8183 32.5745 94.8345 29.5674C90.8506 26.5603 86.2262 22.7315 82.8829 19.5437C79.5396 16.356 80.891 14.5319 76.9071 11.5248C72.9233 8.51773 63.9596 4.50827 59.9758 2.50355C55.9919 0.498818 52.0081 0.498818 48.0242 2.50355Z"
          fill="white"
        />
      </g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M33.9574 19.8798L52.5979 32.6037C53.0186 32.8839 53.5101 33.0373 54.0144 33.0459C54.5195 33.0422 55.0122 32.8884 55.4308 32.6037L74.0855 19.837C74.8103 19.3181 75.21 18.4529 75.1374 17.5603C75.0647 16.6676 74.5304 15.8796 73.7314 15.4864L55.0909 6.25732C54.3838 5.91423 53.56 5.91423 52.8529 6.25732L34.2691 15.4864C33.4556 15.8817 32.9143 16.685 32.8499 17.5922C32.7856 18.4995 33.208 19.3721 33.9574 19.8798ZM60.3459 36.5977C60.3474 37.4415 60.7604 38.2307 61.4507 38.7088L76.3943 48.9222C77.3509 49.5817 78.6309 49.4993 79.4963 48.7225L92.0319 37.5106C92.5906 37.0115 92.9008 36.2887 92.8789 35.5369C92.8571 34.7851 92.5053 34.0818 91.9186 33.6165L79.9496 24.045C79.0796 23.3539 77.8659 23.3078 76.9467 23.9309L61.4507 34.5294C60.7726 34.9989 60.3611 35.7691 60.3459 36.5977ZM23.1783 50.4912C23.7822 51.0337 24.0927 51.834 24.014 52.6452C23.9355 53.461 23.4643 54.1861 22.7533 54.5851L13.8297 59.9343C12.9251 60.475 11.783 60.397 10.9591 59.7383C10.1353 59.0797 9.80082 57.9771 10.1186 56.9673L13.4189 46.5828C13.6778 45.76 14.3341 45.126 15.1611 44.8996C15.9876 44.6591 16.8788 44.8699 17.5125 45.4559L23.1783 50.4912ZM71.5784 51.5753L55.445 40.5347C54.5876 39.9578 53.4695 39.9578 52.6121 40.5347L36.4787 51.5753C35.837 52.0195 35.4305 52.7332 35.3739 53.5153C35.3321 54.3028 35.6442 55.0675 36.2238 55.5979L52.343 70.0192C52.8078 70.4338 53.4076 70.6622 54.0285 70.6611C54.6493 70.6609 55.2486 70.4327 55.7141 70.0192L71.8333 55.5979C72.4146 55.0697 72.7228 54.3019 72.669 53.5153C72.624 52.7333 72.2211 52.0166 71.5784 51.5753ZM28.5466 48.7225L16.0252 37.5106C15.4618 36.9988 15.1509 36.2631 15.1753 35.4994C15.1889 34.7466 15.5373 34.0398 16.1243 33.5737L28.0933 23.9452C28.9694 23.256 30.1855 23.21 31.1104 23.8311L46.5922 34.4295C47.3107 34.9007 47.7441 35.7057 47.7441 36.5692C47.7441 37.4327 47.3107 38.2376 46.5922 38.7088L31.6628 48.9222C30.7003 49.5788 29.4186 49.4967 28.5466 48.7225ZM92.8393 64.827L80.0912 57.1955C79.1445 56.625 77.9394 56.7405 77.1167 57.4808L61.5357 71.3886C60.8785 71.9756 60.5698 72.8633 60.7199 73.7349C60.8699 74.6066 61.4572 75.3379 62.2723 75.6679L83.8873 84.4263C84.1838 84.5494 84.5015 84.6124 84.8222 84.6117C85.8254 84.6149 86.736 84.0221 87.1452 83.0997L93.845 68.0935C94.3903 66.906 93.956 65.4955 92.8393 64.827ZM94.6099 46.5828L97.9102 56.9673H97.8819C98.1259 57.744 97.9872 58.5915 97.5086 59.2483C97.0299 59.9051 96.2687 60.2924 95.4597 60.2909C95.0058 60.2924 94.5602 60.1691 94.1708 59.9343L85.2329 54.5851C84.5366 54.1777 84.0817 53.4534 84.0148 52.6452C83.9313 51.8334 84.2426 51.031 84.8505 50.4912L90.5163 45.4416C91.1564 44.868 92.0409 44.6587 92.8676 44.8853C93.6941 45.1215 94.3482 45.7587 94.6099 46.5828ZM47.3287 73.728C47.4811 72.8599 47.1755 71.9744 46.5214 71.3886L30.9404 57.4808C30.1177 56.7405 28.9126 56.625 27.9659 57.1955L15.2178 64.827C14.114 65.4985 13.6773 66.8911 14.198 68.0793L20.9119 83.0854C21.4682 84.3366 22.9063 84.9222 24.1698 84.412L45.7706 75.6536C46.5859 75.3266 47.1753 74.5982 47.3287 73.728ZM54.9776 78.0073L72.3149 85.0254C73.1626 85.3882 73.7483 86.1855 73.8447 87.108C73.9544 88.042 73.5396 88.96 72.7682 89.4901L55.4167 101.544C55.0008 101.836 54.5072 101.995 54.0002 102C53.4937 101.992 53.0008 101.833 52.5838 101.544L35.2464 89.4901C34.4722 88.9613 34.0523 88.0443 34.1557 87.108C34.2715 86.1758 34.8782 85.3794 35.7422 85.0254L53.0795 78.0073C53.6892 77.7642 54.3679 77.7642 54.9776 78.0073Z"
        fill="#BF4722"
      />
      <defs>
        <filter
          id="filter0_d"
          x="3"
          y="1"
          width="102"
          height="110"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.202934 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
