import FooterForm from "./FooterForm";

export default function Footer() {
  return (
    <footer className="bg-gray-300 p-[5%]">
      <FooterForm />
      <section className="flex md:row flex-col-reverse md:flex-row gap-4 content-center justify-between mt-10">
        <div>
          <a href="https://codewithstephen.com">
            <span>Adewale Stephen</span> - codewithstephen.com © 2024
          </a>
        </div>
        <div className="flex gap-2 justify-center">
          <a href="https://www.facebook.com/profile.php?id=100086429091244">
            <span className="flex items-center justify-center rounded-full">
              <svg
                width="40px"
                height="40px"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="16"
                  cy="16"
                  r="14"
                  fill="url(#paint0_linear_87_7208)"
                />
                <path
                  d="M21.2137 20.2816L21.8356 16.3301H17.9452V13.767C17.9452 12.6857 18.4877 11.6311 20.2302 11.6311H22V8.26699C22 8.26699 20.3945 8 18.8603 8C15.6548 8 13.5617 9.89294 13.5617 13.3184V16.3301H10V20.2816H13.5617V29.8345C14.2767 29.944 15.0082 30 15.7534 30C16.4986 30 17.2302 29.944 17.9452 29.8345V20.2816H21.2137Z"
                  fill="white"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_87_7208"
                    x1="16"
                    y1="2"
                    x2="16"
                    y2="29.917"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#18ACFE" />
                    <stop offset="1" stopColor="#0163E0" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </a>
          <a href="https://x.com/codewithstephen">
            <span className="flex items-center justify-centerrounded-full">
              <svg
                width="40px"
                height="40px"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="24" cy="24" r="20" fill="#1DA1F2" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M36 16.3086C35.1177 16.7006 34.1681 16.9646 33.1722 17.0838C34.1889 16.4742 34.9697 15.5095 35.3368 14.36C34.3865 14.9247 33.3314 15.3335 32.2107 15.5551C31.3123 14.5984 30.0316 14 28.6165 14C25.8975 14 23.6928 16.2047 23.6928 18.9237C23.6928 19.3092 23.7368 19.6852 23.8208 20.046C19.7283 19.8412 16.1005 17.8805 13.6719 14.9015C13.2479 15.6287 13.0055 16.4742 13.0055 17.3766C13.0055 19.0845 13.8735 20.5916 15.1958 21.4747C14.3878 21.4491 13.6295 21.2275 12.9647 20.8587V20.9203C12.9647 23.3066 14.663 25.296 16.9141 25.7496C16.5013 25.8616 16.0661 25.9224 15.6174 25.9224C15.2998 25.9224 14.991 25.8912 14.6902 25.8336C15.3166 27.7895 17.1357 29.2134 19.2899 29.2534C17.6052 30.5733 15.4822 31.3612 13.1751 31.3612C12.7767 31.3612 12.3848 31.338 12 31.2916C14.1791 32.6884 16.7669 33.5043 19.5475 33.5043C28.6037 33.5043 33.5562 26.0016 33.5562 19.4956C33.5562 19.282 33.5522 19.0693 33.5418 18.8589C34.5049 18.1629 35.34 17.2958 36 16.3086Z"
                  fill="white"
                />
              </svg>
            </span>
          </a>
          <a href="https://www.linkedin.com/in/stephen-adewale-96bb54229/">
            <span className="flex items-center justify-center rounded-full">
              <svg
                width="40px"
                height="40px"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="24" cy="24" r="20" fill="#0077B5" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.7747 14.2839C18.7747 15.529 17.8267 16.5366 16.3442 16.5366C14.9194 16.5366 13.9713 15.529 14.0007 14.2839C13.9713 12.9783 14.9193 12 16.3726 12C17.8267 12 18.7463 12.9783 18.7747 14.2839ZM14.1199 32.8191V18.3162H18.6271V32.8181H14.1199V32.8191Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M22.2393 22.9446C22.2393 21.1357 22.1797 19.5935 22.1201 18.3182H26.0351L26.2432 20.305H26.3322C26.9254 19.3854 28.4079 17.9927 30.8101 17.9927C33.7752 17.9927 35.9995 19.9502 35.9995 24.219V32.821H31.4922V24.7838C31.4922 22.9144 30.8404 21.6399 29.2093 21.6399C27.9633 21.6399 27.2224 22.4999 26.9263 23.3297C26.8071 23.6268 26.7484 24.0412 26.7484 24.4574V32.821H22.2411V22.9446H22.2393Z"
                  fill="white"
                />
              </svg>
            </span>
          </a>
        </div>
      </section>
    </footer>
  );
}
