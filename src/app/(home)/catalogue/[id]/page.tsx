import Container from "@/components/container";
import Footer from "@/components/footer";
import Header from "@/components/header";
import React from "react";

const perfumeData = [
  {
    label: "antheia",
    img: "/images/catalog/Frame 1 (1).webp",
    id: "1",
    type: "artisan series",
    price: "2650",
  },
  {
    label: "freya pathouli",
    img: "/images/catalog/Frame 1 (2).webp",
    id: "2",
    type: "artisan series",
    price: "3650",
  },
  {
    label: "harra vertiver",
    img: "/images/catalog/Frame 1 (3).webp",
    id: "3",
    type: "artisan series",
    price: "3250",
  },
  {
    label: "hybris",
    img: "/images/catalog/Frame 1 (4).webp",

    id: "4",
    type: "artisan series",
    price: "5350",
  },
  {
    label: "misool",
    img: "/images/catalog/Frame 1 (5).webp",
    id: "5",
    type: "essential series",
    price: "750",
  },
  {
    label: "papillon",
    img: "/images/catalog/Frame 1 (6).webp",
    id: "6",
    type: "artisan series",
    price: "1850",
  },
  {
    label: "rose de mai",
    img: "/images/catalog/Frame 1 (12).webp",
    id: "7",
    type: "essential series",
    price: "1450",
  },
  {
    label: "rose kannauj",
    img: "/images/catalog/Frame 1 (8).webp",
    id: "8",
    type: "artisan series",
    price: "2250",
  },
  {
    label: "reverie",
    img: "/images/catalog/Frame 1 (7).webp",
    id: "9",
    type: "special series",
    price: "9450",
  },
  {
    label: "siren 1987",
    img: "/images/catalog/Frame 1 (10).webp",
    id: "10",
    type: "artisan series",
    price: "8335",
  },
  {
    label: "the children of medusa",
    img: "/images/catalog/Frame 1 (9).webp",
    id: "11",
    type: "collaborator series",
    price: "5650",
  },
  {
    label: "vanilla gold",
    img: "/images/catalog/Frame 1 (11).webp",
    id: "12",
    type: "artisan series",
    price: "2350",
  },
];

function page({ params }: { params: { id: string } }) {
  const perfume = perfumeData.find((item) => item.id === params.id);

  if (!perfume) {
    return (
      <div>
        <Header />
        <Container>
          <div className="flex gap-16 py-16">
            <h1 className="text-3xl font-bold">Perfume not found</h1>
          </div>
        </Container>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Header />
      <Container>
        <div className="flex flex-col md:flex-row gap-4 md:gap-12 md:py-16">
          <img src={perfume.img} className="w-auto h-[400px] md:h-[600px]" />
          <div className="flex flex-col gap-4 justify-center p-6">
            <h1 className="text-xl uppercase">{perfume.type}</h1>

            <h1 className="text-3xl font-bold uppercase">{perfume.label}</h1>
            <div className="mt-6 flex flex-col gap-4">
              <div>
                <h1 className="text font-bold">NOTES</h1>
                <p>Vanilla, Jasmine, ylang-ylang, amber</p>
              </div>
              <div>
                <h1 className="text font-bold">IMPRESSION</h1>
                <p>Vanilla, Jasmine, ylang-ylang, amber</p>
              </div>
            </div>
            <h1 className="text-3xl font-bold">ID {perfume.price}K</h1>

            <div className="flex flex-col gap-1 mt-6">
              <h1 className="text font-bold">GET YOURS</h1>

              <div className="flex flex-col md:flex-row gap-2 ">
                <div className="bg-black text-white px-6 py-2 flex justify-center items-center gap-2 cursor-pointer">
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 30 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.7943 0.0287729C13.1911 0.0785639 12.1948 0.256322 11.3779 0.459921C8.69451 1.12885 6.30377 2.51708 4.33277 4.55089C1.67923 7.28892 0.239255 10.6967 0.122406 14.5145C0.0746253 16.0747 0.237304 17.4233 0.665613 19.0178C0.859751 19.7406 1.40124 21.0995 1.78562 21.8284L2.09317 22.4117L1.87396 23.2196C1.27014 25.4446 0.371184 28.7218 0.186744 29.3705C0.0724965 29.7723 -0.0110011 30.1111 0.00118052 30.1233C0.0134213 30.1355 0.460772 30.0295 0.995405 29.8878C1.52998 29.7461 3.0052 29.3587 4.27363 29.0268C5.54206 28.6949 6.8756 28.3458 7.23703 28.2509L7.89419 28.0783L8.68582 28.4554C12.2316 30.1446 16.4416 30.3433 20.1512 28.9965C24.0594 27.5777 27.2008 24.5976 28.8367 20.7572C29.3308 19.5974 29.6787 18.3626 29.8897 17.0201C30.0374 16.0797 30.0367 13.8567 29.8882 12.8583C29.7565 11.9717 29.3978 10.545 29.1135 9.77611C28.5864 8.35121 27.6715 6.74625 26.6927 5.52921C26.1267 4.82557 24.8374 3.5773 24.1073 3.02617C21.8669 1.33487 19.2601 0.315397 16.4934 0.0484646C15.9296 -0.00593897 14.3541 -0.017411 13.7943 0.0287729ZM16.5144 2.59792C19.2175 2.87502 21.8445 4.15173 23.8507 6.16336C25.7154 8.03295 26.8476 10.2265 27.3485 12.9398C27.5065 13.7957 27.49 16.1472 27.3194 17.0792C26.867 19.5502 25.7132 21.7878 23.9697 23.5752C22.016 25.578 19.7322 26.7631 16.9284 27.2294C16.4415 27.3103 15.9655 27.3373 15.0361 27.3367C13.6998 27.3359 12.9444 27.2405 11.7549 26.9222C10.7804 26.6614 9.37976 26.0508 8.50126 25.5038L8.29382 25.3746L7.20031 25.6564C6.59891 25.8114 5.54135 26.0849 4.85019 26.264C4.15909 26.4432 3.59371 26.5721 3.59382 26.5505C3.59394 26.5289 3.71469 26.072 3.86218 25.5354C4.00966 24.9988 4.27771 24.0149 4.45795 23.349C4.63814 22.6832 4.79786 22.1186 4.81282 22.0943C4.82784 22.0701 4.68296 21.79 4.49095 21.4718C3.63132 20.0474 3.19171 18.9164 2.84548 17.2387C2.64129 16.249 2.58765 14.3741 2.73366 13.3271C3.20401 9.95411 4.92387 7.03134 7.64429 4.98186C8.86925 4.05901 10.1381 3.43319 11.695 2.98401C13.2985 2.52134 14.6843 2.41029 16.5144 2.59792ZM9.32961 8.10551C9.04175 8.19829 8.33758 8.91825 8.04273 9.42131C7.64553 10.099 7.54228 10.485 7.51289 11.4023C7.49006 12.1168 7.50331 12.2627 7.6392 12.792C8.01689 14.2629 9.38331 16.3045 11.2216 18.1447C12.3867 19.3109 13.3663 20.0655 14.5585 20.7152C15.1886 21.0586 16.6967 21.6639 17.5197 21.9037C18.0564 22.0601 18.193 22.076 18.9981 22.076C19.7099 22.076 19.9493 22.0542 20.2103 21.9653C21.0154 21.6911 21.8439 21.1271 22.196 20.6135C22.5566 20.0877 22.7779 18.6434 22.5313 18.4252C22.3005 18.221 19.3777 16.8263 19.0537 16.7657C18.9541 16.7471 18.8169 16.7634 18.7486 16.802C18.6803 16.8406 18.3588 17.2049 18.0341 17.6114C17.2705 18.5674 17.1417 18.6876 16.881 18.6876C16.623 18.6876 15.3755 18.0986 14.6979 17.6568C13.442 16.8379 12.2626 15.5983 11.4991 14.2947C11.2436 13.8586 11.2741 13.7405 11.8006 13.1247C12.2683 12.5777 12.582 12.0558 12.582 11.8246C12.582 11.7543 12.4782 11.451 12.3513 11.1505C11.8975 10.0754 11.5246 9.17844 11.3715 8.79377C11.2859 8.57876 11.1358 8.32596 11.0378 8.232C10.8649 8.06625 10.8401 8.06086 10.1981 8.05004C9.83426 8.04383 9.44345 8.06885 9.32961 8.10551Z"
                      fill="white"
                    />
                  </svg>
                  <p>WHATSAPP</p>
                </div>

                <div className="bg-black text-white px-6 py-2 flex justify-center items-center gap-2 cursor-pointer">
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 30 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.9085 0.0934643C12.5508 0.360277 11.4089 0.940866 10.414 1.87005C8.85281 3.32797 7.89143 5.29834 7.67328 7.48734L7.60288 8.193L3.91352 8.24006C1.05133 8.27658 0.196773 8.31469 0.101906 8.41012C0.0145684 8.49802 -0.013007 8.79383 0.0054393 9.44538C0.061343 11.4211 0.965213 31.0854 1.01613 31.4352C1.15466 32.3854 1.75426 33.2295 2.58623 33.6452L3.16249 33.9332L14.9353 33.9322L26.708 33.9313L27.194 33.705C28.1619 33.2544 28.7725 32.3823 28.93 31.226C28.9776 30.8774 29.2549 25.6472 29.5465 19.6034C30.0575 9.0068 30.0704 8.60786 29.907 8.42735C29.7434 8.24646 29.6117 8.24006 26.0817 8.24006H22.4258V8.0171C22.4258 7.60423 22.1402 6.12748 21.941 5.51076C21.2947 3.50895 19.8023 1.66084 18.1171 0.77532C16.8511 0.110028 15.1918 -0.158855 13.9085 0.0934643ZM16.1491 2.07484C18.2439 2.62042 19.8507 4.55437 20.3142 7.08782C20.4011 7.56263 20.4472 8.01607 20.4167 8.09559C20.3677 8.22312 19.7316 8.24006 14.98 8.24006H9.59875L9.65673 7.55322C9.78933 5.98547 10.4339 4.6035 11.5533 3.48702C12.6422 2.40114 13.6121 1.95984 14.9475 1.9428C15.3119 1.93819 15.8526 1.99758 16.1491 2.07484ZM17.0143 12.6561C17.8914 12.8878 19.6493 13.7169 19.7796 13.9604C19.8478 14.0876 19.7902 14.2573 19.54 14.6663C19.3589 14.9622 19.1621 15.2045 19.1027 15.2045C19.0432 15.2045 18.6124 15.0132 18.1455 14.7792C16.1337 13.7714 14.0165 13.6833 12.7039 14.5528C11.9235 15.0696 11.4498 15.9726 11.5289 16.7919C11.6446 17.9894 12.5354 18.8179 14.4836 19.5399C16.664 20.348 17.3082 20.6244 18.0722 21.0799C19.9008 22.17 20.7641 23.5955 20.5839 25.2276C20.2839 27.9448 18.2754 29.5482 15.179 29.5423C13.658 29.5394 12.4468 29.2632 11.114 28.6154C10.3057 28.2225 9.24987 27.4481 9.24987 27.2482C9.24987 27.09 9.96542 26.0276 10.0721 26.0276C10.1044 26.0276 10.4764 26.2598 10.8985 26.5436C11.3206 26.8274 11.9164 27.1705 12.2226 27.306C14.83 28.4608 17.7315 27.9168 18.6785 26.0956C19.0005 25.4764 18.9732 24.5338 18.6141 23.8773C18.0894 22.9176 17.1766 22.2917 15.3673 21.6513C13.6399 21.0398 12.3598 20.4847 11.799 20.1039C11.093 19.6245 10.413 18.8662 10.106 18.2161C9.8891 17.7567 9.86161 17.5823 9.86161 16.6633C9.86161 15.6759 9.8763 15.5988 10.178 14.9975C10.555 14.2465 11.422 13.3705 12.1572 12.998C13.0847 12.528 13.871 12.3748 15.132 12.4182C15.8682 12.4437 16.5235 12.5265 17.0143 12.6561Z"
                      fill="white"
                    />
                  </svg>

                  <p>SHOPEE</p>
                </div>
                <div className="bg-black text-white px-6 py-2 flex justify-center items-center gap-2 cursor-pointer">
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 30 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.5107 0.212929C12.1628 0.322384 11.6846 0.549612 11.4483 0.718028C11.2118 0.886295 10.9586 1.02397 10.8854 1.02397C10.6494 1.02397 9.05941 2.5256 9.05941 2.74837C9.05941 2.86704 8.95916 3.00248 8.83663 3.04941C8.71411 3.09649 8.61386 3.196 8.61386 3.27055C8.61386 3.34511 8.45272 3.66144 8.25579 3.97347C8.05871 4.2855 7.80965 4.91907 7.70213 5.38139L7.50668 6.22199H3.75342H0V19.9596V33.6972H10.76C21.4668 33.6972 22.4638 33.6568 23.5396 33.1803C24.7289 32.6535 25.0632 32.4923 25.5371 32.2176C25.8189 32.0542 26.1062 31.8191 26.1757 31.6951C26.2451 31.5709 26.3853 31.4695 26.4872 31.4695C26.7183 31.4695 27.7723 30.4047 27.7723 30.1712C27.7723 30.0766 27.8774 29.9403 28.0059 29.8684C28.501 29.5912 29.6234 27.1921 29.8332 25.9623C29.9445 25.31 30 21.863 30 15.6034V6.22199H26.2365H22.473L22.2833 5.37441C22.1791 4.90823 21.9345 4.27466 21.7399 3.96649C21.5453 3.65832 21.3861 3.34511 21.3861 3.27055C21.3861 3.196 21.2859 3.09649 21.1634 3.04941C21.0408 3.00248 20.9406 2.86704 20.9406 2.74837C20.9406 2.5256 19.3506 1.02397 19.1146 1.02397C19.0414 1.02397 18.7907 0.888077 18.5575 0.722038C17.7958 0.179662 16.8244 -0.0132592 14.9257 0.000701156C13.887 0.00827541 12.8797 0.0967903 12.5107 0.212929ZM17.3762 2.59585C18.1335 2.99476 19.604 4.30436 19.604 4.58016C19.604 4.64639 19.7152 4.95931 19.8511 5.27565C20.2629 6.23372 20.2286 6.3705 19.5771 6.3705C19.263 6.3705 18.8898 6.43021 18.7479 6.50313C18.6061 6.5762 18.1225 6.71387 17.6733 6.80936C17.224 6.90471 16.4388 7.15333 15.9282 7.36169L15 7.74055L14.0718 7.36169C13.5613 7.15333 12.776 6.90471 12.3267 6.80936C11.8775 6.71387 11.3939 6.5762 11.2521 6.50313C11.1102 6.43021 10.7404 6.3705 10.4303 6.3705C9.93758 6.3705 9.8694 6.32833 9.8899 6.03635C9.97069 4.88491 11.2439 3.29803 12.6238 2.62912C13.8021 2.05793 13.7626 2.06565 15.2228 2.11793C16.3552 2.15847 16.6842 2.23139 17.3762 2.59585ZM10.5653 7.8509C12.3055 8.21684 13.0398 8.42639 13.4309 8.66907C13.5997 8.77377 14.0577 8.97783 14.4489 9.12248L15.1602 9.38565L16.0846 8.9211C17.2929 8.31397 18.2603 8.02689 19.4973 7.90852C20.0511 7.8555 20.5396 7.75511 20.5828 7.6853C20.6259 7.61565 22.4615 7.55862 24.6622 7.55862H28.6634L28.6384 12.4967C28.6246 15.2126 28.5906 17.1675 28.5627 16.8408C28.473 15.7921 28.1808 14.9302 27.6358 14.1062C27.3432 13.6641 27.0187 13.1501 26.9145 12.9641C26.6734 12.5337 24.9483 11.3821 23.9822 11.0065C22.9966 10.6235 21.5107 10.4912 20.2308 10.6728C19.2839 10.8071 18.7482 11.0239 17.1135 11.9351C16.7256 12.1511 15.7445 13.1296 15.7386 13.3061C15.7363 13.3715 15.5442 13.6547 15.3113 13.9356L14.8879 14.446L14.6461 13.9785C14.2666 13.2445 12.9061 11.9383 12.0907 11.5252C9.40233 10.1628 6.51074 10.373 4.16807 12.1009C3.56852 12.5432 3.12208 12.9052 3.17614 12.9052C3.23005 12.9052 3.00505 13.2457 2.67594 13.662C2.34698 14.0783 2.0354 14.5963 1.98371 14.813C1.93203 15.0298 1.81545 15.3008 1.72455 15.4154C1.6301 15.5346 1.53743 16.4267 1.50817 17.5001C1.46064 19.2389 1.485 19.4455 1.8401 20.3195C2.05099 20.8381 2.39139 21.4828 2.59678 21.7522C2.80218 22.0214 2.9703 22.3005 2.9703 22.3724C2.9703 22.5297 3.75624 23.3012 3.91649 23.3012C3.97886 23.3012 4.25005 23.4693 4.51931 23.6747C4.78871 23.8801 5.43579 24.2256 5.95752 24.4424C6.78267 24.7853 7.10851 24.8359 8.46535 24.8318C9.49767 24.8287 10.231 24.7497 10.635 24.5979L11.2454 24.3687L13.009 26.1369C13.979 27.1094 14.8395 27.9052 14.9213 27.9052C15.0031 27.9052 15.8854 27.0916 16.8823 26.0971C18.346 24.6369 18.7346 24.3224 18.9025 24.4618C19.3298 24.8165 21.3205 25.0039 22.6375 24.8134C25.7222 24.3674 28.1497 21.9696 28.5168 19.0061C28.5971 18.3585 28.6274 19.3061 28.6069 21.816L28.5757 25.6032L28.0883 26.7913C27.8202 27.4448 27.3777 28.2672 27.1049 28.6191C26.4891 29.4132 25.2671 30.7269 25.1442 30.7269C25.094 30.7269 24.839 30.89 24.5776 31.0893C24.0717 31.4753 22.7369 32.0106 21.7574 32.2204C21.4307 32.2904 16.7023 32.3505 11.25 32.3541L1.33663 32.3606V19.9596V7.55862H5.25594C8.58416 7.55862 9.38495 7.60273 10.5653 7.8509ZM10.7537 12.3288C11.9731 12.7993 13.2279 13.9889 13.846 15.2603C14.2876 16.1686 14.3257 16.3642 14.3286 17.7319C14.3314 19.0956 14.2931 19.2984 13.8603 20.2122C13.2604 21.4783 12.286 22.4527 11.02 23.0526C10.1084 23.4843 9.89985 23.524 8.5396 23.524C7.18767 23.524 6.96787 23.4828 6.08911 23.0655C4.81485 22.4605 3.81208 21.4642 3.22069 20.2158C2.78673 19.2998 2.74752 19.0936 2.74752 17.7288C2.74752 16.3476 2.78257 16.1694 3.23376 15.2527C4.01406 13.6678 5.52134 12.4583 7.27455 12.0101C8.09733 11.7998 9.78238 11.9541 10.7537 12.3288ZM23.6807 12.3343C24.3141 12.5838 24.8425 12.9557 25.5472 13.6477C26.8441 14.9214 27.2534 15.9384 27.2505 17.8804C27.2489 19.0707 27.1972 19.3263 26.7775 20.2158C24.6823 24.6559 18.3936 24.7465 16.2294 20.3677C15.6916 19.2794 15.6685 19.1706 15.6719 17.7396C15.675 16.438 15.7262 16.1373 16.0723 15.3923C16.8229 13.7766 18.4212 12.4555 20.1532 12.0188C21.0374 11.7959 22.6895 11.9437 23.6807 12.3343ZM8.97208 13.966C8.92901 14.0357 8.99777 14.2413 9.12505 14.4231C10.0141 15.6923 8.37653 17.5629 6.99965 16.8509C6.7454 16.7195 6.42891 16.4462 6.29614 16.2436C5.955 15.7229 5.71738 15.7858 5.51852 16.4496C5.06881 17.9507 5.40059 19.3535 6.45668 20.4161C8.0051 21.9742 10.2358 22.0678 11.7821 20.6395C12.7133 19.7795 12.9896 19.1129 12.9925 17.719C12.9949 16.5791 12.967 16.4757 12.4424 15.6857C12.1019 15.1728 11.6363 14.7049 11.2292 14.4663C10.5417 14.0634 9.10827 13.7456 8.97208 13.966ZM20.3791 14.0561C20.8889 15.0464 20.9552 15.3338 20.7777 15.7834C20.5169 16.4437 20.2341 16.7316 19.6602 16.921C18.9854 17.1438 18.2369 16.8898 17.7555 16.2748C17.3015 15.6947 17.1373 15.8204 16.906 16.9246C16.4586 19.0605 17.734 21.0637 19.8419 21.5354C21.378 21.8792 23.0752 21.1755 23.9396 19.8363C24.558 18.8783 24.6955 17.3128 24.2494 16.3087C23.8286 15.3616 23.2684 14.7638 22.3931 14.3276C21.6786 13.9715 20.2354 13.7771 20.3791 14.0561ZM15.297 21.5371C15.297 21.6089 15.1294 21.6675 14.9246 21.6675C14.5923 21.6675 14.5715 21.6362 14.7327 21.3781C14.8669 21.163 14.9629 21.1296 15.1053 21.2477C15.2107 21.3353 15.297 21.4655 15.297 21.5371ZM16.5801 23.1254C17.7353 23.7147 17.7285 23.7589 16.2536 25.2407L14.9318 26.5687L13.6292 25.2721C12.9129 24.5591 12.3267 23.9287 12.3267 23.8713C12.3267 23.7044 13.2098 23.1219 13.7948 22.903C14.5044 22.6375 15.8314 22.7434 16.5801 23.1254Z"
                      fill="white"
                    />
                  </svg>

                  <p>TOKOPEDIA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default page;
