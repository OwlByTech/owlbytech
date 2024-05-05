export type ContactStep6To9SVGProps = {
  step6: string;
  step7: string;
  step8: string;
  step9: string;
  congratulation: string;
  phrase: string;
  mobile?: boolean;
};
export default function ContactStep6To9SVG(props: ContactStep6To9SVGProps) {
  return (
    <>
      {props.mobile ? (
        <svg
          className="w-full mt-4"
          viewBox="0 0 313 429"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <text
            fill="#4B4B4B"
            fontFamily="Archivo"
            fontSize="36"
            fontWeight="bold"
            letterSpacing="0em"
          >
            <tspan x="15" y="396.524">
              {props.congratulation}
            </tspan>
          </text>
          <text
            fill="#4B4B4B"
            fontFamily="Archivo"
            fontSize="13.5"
            fontWeight="300"
            letterSpacing="0em"
          >
            <tspan x="15" y="416.009">
              {props.phrase}
            </tspan>
          </text>
          <text
            fill="#4B4B4B"
            fontFamily="Archivo"
            fontSize="16"
            fontWeight="100"
            letterSpacing="0em"
          >
            <tspan x="190" y="119.844">
              8. {props.step8}
            </tspan>
          </text>
          <text
            fill="#4B4B4B"
            fontFamily="Archivo"
            fontSize="16"
            fontWeight="100"
            letterSpacing="0em"
          >
            <tspan x="24" y="13.844">
              6. {props.step6}
            </tspan>
          </text>
          <text
            fill="#4B4B4B"
            fontFamily="Archivo"
            fontSize="16"
            fontWeight="100"
            letterSpacing="0em"
          >
            <tspan x="170" y="46.844">
              7. {props.step7}
            </tspan>
          </text>
          <path
            d="M138.262 45.3622C138.462 44.9413 138.283 44.438 137.862 44.2379L131.004 40.9784C130.583 40.7784 130.079 40.9574 129.879 41.3783C129.679 41.7992 129.858 42.3025 130.279 42.5025L136.376 45.3999L133.478 51.4964C133.278 51.9173 133.457 52.4207 133.878 52.6207C134.299 52.8207 134.803 52.6417 135.003 52.2208L138.262 45.3622ZM55.1699 33.1509C55.2751 33.7296 55.3952 34.2947 55.53 34.8465L57.1693 34.4462C57.0427 33.9278 56.9295 33.3955 56.8301 32.8491L55.1699 33.1509ZM56.5452 38.0897C56.9681 39.1795 57.4566 40.2065 58.0063 41.1733L59.4733 40.3393C58.9652 39.4456 58.512 38.4934 58.1184 37.4792L56.5452 38.0897ZM59.9219 44.0063C60.6389 44.9061 61.4185 45.7384 62.2543 46.5071L63.3966 45.2649C62.6229 44.5535 61.9029 43.7846 61.2417 42.9547L59.9219 44.0063ZM64.928 48.6282C65.8574 49.2644 66.8346 49.8417 67.8533 50.3641L68.6234 48.8626C67.6639 48.3705 66.7483 47.8292 65.8811 47.2356L64.928 48.6282ZM70.9488 51.7411C71.9859 52.1387 73.0553 52.4908 74.1519 52.8007L74.6109 51.1768C73.5597 50.8797 72.5389 50.5435 71.5529 50.1654L70.9488 51.7411ZM77.4196 53.5877C78.5018 53.8064 79.6046 53.9905 80.724 54.1428L80.9515 52.4707C79.8653 52.3229 78.7982 52.1447 77.7539 51.9337L77.4196 53.5877ZM84.0474 54.5006C85.1471 54.5895 86.2588 54.6517 87.3789 54.6896L87.4359 53.003C86.3404 52.966 85.2551 52.9053 84.1834 52.8186L84.0474 54.5006ZM90.7113 54.7327C91.8168 54.725 92.9273 54.6964 94.0397 54.6488L93.9676 52.9629C92.8742 53.0096 91.7838 53.0377 90.6995 53.0453L90.7113 54.7327ZM97.3605 54.4531C98.4663 54.3707 99.5708 54.2717 100.671 54.1582L100.498 52.4796C99.4127 52.5915 98.324 52.6891 97.235 52.7703L97.3605 54.4531ZM103.969 53.7745C105.073 53.6321 106.169 53.4768 107.254 53.3109L106.999 51.6428C105.926 51.8068 104.843 51.9602 103.753 52.1009L103.969 53.7745ZM110.524 52.7744C111.626 52.5816 112.713 52.3796 113.781 52.1708L113.457 50.5147C112.399 50.7214 111.324 50.9214 110.233 51.1121L110.524 52.7744ZM117.025 51.5046C118.131 51.2669 119.21 51.0241 120.258 50.7792L119.874 49.136C118.835 49.3787 117.766 49.6193 116.67 49.8548L117.025 51.5046ZM123.484 49.9964C124.606 49.7139 125.681 49.4329 126.702 49.1579L126.263 47.5285C125.251 47.8012 124.185 48.0799 123.072 48.3599L123.484 49.9964ZM129.9 48.2672C131.065 47.9321 132.124 47.6159 133.061 47.3288L132.566 45.7154C131.638 45.9999 130.589 46.3133 129.434 46.6454L129.9 48.2672ZM136.241 46.3182C136.737 46.1541 137.122 46.0238 137.382 45.9342C137.513 45.8895 137.612 45.8549 137.679 45.8314C137.713 45.8196 137.738 45.8106 137.756 45.8045C137.764 45.8015 137.771 45.7992 137.775 45.7975C137.778 45.7967 137.779 45.7961 137.781 45.7957C137.781 45.7955 137.782 45.7953 137.782 45.7952C137.782 45.7951 137.782 45.7951 137.783 45.795C137.783 45.795 137.783 45.795 137.783 45.795C137.783 45.795 137.783 45.795 137.783 45.795C137.783 45.795 137.783 45.795 137.5 45C137.217 44.205 137.217 44.205 137.217 44.205C137.217 44.205 137.217 44.205 137.217 44.205C137.217 44.205 137.217 44.205 137.217 44.205C137.217 44.205 137.217 44.2051 137.217 44.2051C137.217 44.2052 137.217 44.2053 137.216 44.2054C137.215 44.2057 137.214 44.2062 137.212 44.2069C137.208 44.2083 137.202 44.2103 137.194 44.2131C137.178 44.2188 137.154 44.2272 137.122 44.2385C137.058 44.261 136.961 44.2945 136.834 44.3383C136.579 44.4257 136.202 44.5539 135.711 44.7158L136.241 46.3182Z"
            fill="#4B4B4B"
          />
          <path
            d="M291.092 103.339C290.629 103.39 290.212 103.055 290.162 102.592L289.333 95.0436C289.282 94.5804 289.616 94.1637 290.08 94.1129C290.543 94.062 290.96 94.3963 291.01 94.8595L291.747 101.569L298.457 100.833C298.92 100.782 299.337 101.116 299.387 101.579C299.438 102.043 299.104 102.459 298.641 102.51L291.092 103.339ZM291 102.5C290.342 101.972 290.342 101.972 290.342 101.972C290.342 101.972 290.342 101.972 290.342 101.972C290.342 101.972 290.342 101.972 290.342 101.972C290.342 101.972 290.342 101.972 290.342 101.972C290.342 101.972 290.342 101.972 290.342 101.972C290.343 101.971 290.344 101.97 290.345 101.969C290.347 101.966 290.351 101.961 290.356 101.955C290.366 101.942 290.382 101.922 290.403 101.895C290.444 101.842 290.506 101.762 290.588 101.656C290.75 101.444 290.987 101.128 291.282 100.719L292.65 101.708C292.345 102.13 292.099 102.458 291.928 102.681C291.843 102.792 291.776 102.878 291.731 102.936C291.708 102.965 291.69 102.988 291.678 103.003C291.672 103.011 291.667 103.017 291.664 103.021C291.662 103.023 291.661 103.025 291.66 103.026C291.66 103.026 291.659 103.027 291.659 103.027C291.659 103.027 291.659 103.028 291.659 103.028C291.659 103.028 291.659 103.028 291.659 103.028C291.658 103.028 291.658 103.028 291.658 103.028C291.658 103.028 291.658 103.028 291 102.5ZM293.096 98.0617C293.621 97.2504 294.191 96.3304 294.781 95.3181L296.239 96.1671C295.635 97.2042 295.051 98.1467 294.513 98.9781L293.096 98.0617ZM296.335 92.4952C296.812 91.5761 297.286 90.6084 297.744 89.6004L299.281 90.2985C298.809 91.3355 298.322 92.3297 297.832 93.2728L296.335 92.4952ZM298.989 86.6406C299.368 85.6571 299.724 84.647 300.045 83.6165L301.656 84.1188C301.323 85.1875 300.955 86.2328 300.563 87.2482L298.989 86.6406ZM300.883 80.5304C301.12 79.4979 301.316 78.4527 301.462 77.4004L303.133 77.6317C302.98 78.7371 302.775 79.8314 302.527 80.9085L300.883 80.5304ZM301.738 74.2412C301.774 73.1881 301.753 72.134 301.664 71.0842L303.346 70.9423C303.44 72.0632 303.463 73.1842 303.425 74.2995L301.738 74.2412ZM301.195 67.9775C300.972 66.967 300.677 65.9648 300.303 64.9757L301.881 64.3784C302.285 65.4463 302.603 66.5265 302.843 67.6132L301.195 67.9775ZM298.98 62.1352C298.483 61.2451 297.909 60.3686 297.253 59.5097L298.594 58.4852C299.299 59.4077 299.916 60.3514 300.453 61.3119L298.98 62.1352ZM295.188 57.1479C294.474 56.4301 293.692 55.7277 292.836 55.0436L293.89 53.7254C294.794 54.4482 295.624 55.1934 296.385 55.9585L295.188 57.1479ZM290.259 53.1886C289.4 52.6306 288.482 52.0881 287.503 51.563L288.301 50.076C289.32 50.6223 290.278 51.1886 291.178 51.7735L290.259 53.1886ZM284.64 50.158C283.707 49.7391 282.727 49.3342 281.698 48.9446L282.296 47.3665C283.355 47.7676 284.366 48.1852 285.331 48.6184L284.64 50.158ZM278.668 47.8869C277.666 47.5654 276.625 47.2569 275.542 46.9624L275.985 45.3341C277.091 45.635 278.157 45.9506 279.183 46.2801L278.668 47.8869ZM272.451 46.1859C271.918 46.0626 271.376 45.9424 270.825 45.8253L271.175 44.1747C271.736 44.2938 272.288 44.4162 272.831 44.5418L272.451 46.1859Z"
            fill="#4B4B4B"
          />
          <path
            d="M167.5 266L168.173 266.509L167.5 266ZM131 266L130.373 266.565L131 266ZM138 240.5L138.499 241.18L138 240.5ZM185.5 283L184.671 282.842L185.5 283ZM164.125 327.834C163.664 327.904 163.235 327.586 163.165 327.125L162.038 319.616C161.969 319.155 162.287 318.725 162.748 318.656C163.208 318.587 163.638 318.904 163.707 319.365L164.709 326.04L171.384 325.039C171.845 324.969 172.275 325.287 172.344 325.748C172.413 326.209 172.096 326.638 171.635 326.707L164.125 327.834ZM190.788 207.2C190.986 207.718 191.145 208.271 191.269 208.855L189.618 209.205C189.51 208.697 189.374 208.228 189.211 207.8L190.788 207.2ZM191.613 212.214C191.627 213.251 191.571 214.353 191.453 215.509L189.774 215.336C189.887 214.234 189.939 213.198 189.926 212.237L191.613 212.214ZM190.984 218.749C190.796 219.779 190.569 220.842 190.304 221.934L188.664 221.536C188.922 220.472 189.143 219.441 189.324 218.446L190.984 218.749ZM189.467 225.064C189.173 226.078 188.851 227.111 188.503 228.16L186.901 227.629C187.243 226.598 187.558 225.585 187.847 224.593L189.467 225.064ZM187.436 231.211C187.07 232.207 186.684 233.215 186.278 234.23L184.711 233.604C185.111 232.603 185.492 231.61 185.852 230.63L187.436 231.211ZM185.043 237.212C184.622 238.192 184.185 239.177 183.733 240.166L182.198 239.464C182.645 238.487 183.077 237.514 183.492 236.546L185.043 237.212ZM182.359 243.082C181.892 244.045 181.412 245.008 180.92 245.97L179.418 245.201C179.905 244.25 180.379 243.298 180.84 242.346L182.359 243.082ZM179.42 248.826C178.911 249.772 178.391 250.714 177.861 251.65L176.393 250.818C176.917 249.893 177.431 248.961 177.935 248.026L179.42 248.826ZM176.242 254.439C175.691 255.366 175.13 256.285 174.562 257.194L173.131 256.299C173.693 255.401 174.246 254.493 174.792 253.577L176.242 254.439ZM172.82 259.912C172.224 260.817 171.622 261.709 171.013 262.586L169.627 261.624C170.227 260.759 170.822 259.878 171.41 258.984L172.82 259.912ZM169.136 265.217C168.816 265.652 168.495 266.083 168.173 266.509L166.827 265.491C167.144 265.071 167.461 264.647 167.776 264.218L169.136 265.217ZM168.173 266.509C167.797 267.006 167.415 267.485 167.028 267.946L165.736 266.86C166.104 266.422 166.468 265.966 166.827 265.491L168.173 266.509ZM164.502 270.625C163.572 271.498 162.619 272.277 161.643 272.965L160.671 271.585C161.579 270.946 162.472 270.216 163.346 269.395L164.502 270.625ZM158.441 274.854C157.294 275.406 156.125 275.84 154.941 276.157L154.505 274.527C155.584 274.238 156.654 273.841 157.709 273.333L158.441 274.854ZM151.249 276.766C150.008 276.846 148.76 276.804 147.513 276.643L147.729 274.969C148.871 275.117 150.01 275.155 151.141 275.082L151.249 276.766ZM143.876 275.836C142.722 275.473 141.574 275.01 140.438 274.449L141.184 272.936C142.247 273.46 143.315 273.89 144.382 274.226L143.876 275.836ZM137.243 272.598C136.252 271.936 135.274 271.199 134.312 270.389L135.398 269.098C136.316 269.87 137.244 270.569 138.18 271.195L137.243 272.598ZM131.627 267.897C131.205 267.468 130.787 267.024 130.373 266.565L131.626 265.435C132.024 265.876 132.426 266.303 132.831 266.715L131.627 267.897ZM130.373 266.565C130.003 266.154 129.656 265.745 129.332 265.336L130.655 264.289C130.955 264.667 131.279 265.049 131.626 265.435L130.373 266.565ZM127.529 262.649C126.969 261.633 126.55 260.621 126.266 259.614L127.891 259.157C128.136 260.029 128.504 260.922 129.007 261.835L127.529 262.649ZM125.816 256.319C125.824 255.202 125.995 254.106 126.31 253.031L127.93 253.505C127.656 254.44 127.511 255.381 127.503 256.331L125.816 256.319ZM127.589 250.011C128.094 249.098 128.697 248.202 129.385 247.323L130.714 248.362C130.074 249.181 129.522 250.003 129.065 250.828L127.589 250.011ZM131.495 244.927C132.211 244.194 132.984 243.471 133.805 242.757L134.913 244.03C134.121 244.719 133.382 245.411 132.701 246.107L131.495 244.927ZM136.243 240.765C136.654 240.448 137.073 240.133 137.501 239.82L138.499 241.18C138.081 241.486 137.673 241.793 137.273 242.101L136.243 240.765ZM137.501 239.82C137.996 239.457 138.513 239.131 139.051 238.842L139.85 240.329C139.38 240.581 138.929 240.865 138.499 241.18L137.501 239.82ZM142.447 237.551C143.584 237.27 144.775 237.11 146.003 237.059L146.072 238.745C144.946 238.791 143.868 238.938 142.85 239.189L142.447 237.551ZM149.555 237.2C150.696 237.331 151.86 237.542 153.035 237.827L152.638 239.467C151.524 239.197 150.429 238.999 149.362 238.877L149.555 237.2ZM156.401 238.831C157.482 239.213 158.567 239.651 159.651 240.143L158.953 241.68C157.912 241.207 156.872 240.787 155.839 240.423L156.401 238.831ZM162.772 241.711C163.78 242.266 164.782 242.865 165.771 243.506L164.853 244.922C163.897 244.303 162.93 243.724 161.958 243.189L162.772 241.711ZM168.628 245.499C169.552 246.191 170.46 246.919 171.348 247.68L170.249 248.961C169.39 248.224 168.511 247.519 167.616 246.85L168.628 245.499ZM173.918 250.037C174.746 250.848 175.55 251.69 176.324 252.56L175.063 253.682C174.315 252.841 173.538 252.027 172.737 251.242L173.918 250.037ZM178.551 255.247C179.262 256.17 179.939 257.119 180.578 258.091L179.167 259.017C178.553 258.081 177.9 257.167 177.214 256.276L178.551 255.247ZM182.38 261.089C182.942 262.116 183.459 263.164 183.927 264.231L182.382 264.909C181.934 263.888 181.439 262.884 180.9 261.899L182.38 261.089ZM185.184 267.506C185.551 268.62 185.863 269.751 186.114 270.896L184.465 271.258C184.227 270.171 183.931 269.096 183.581 268.035L185.184 267.506ZM186.679 274.371C186.803 275.535 186.862 276.71 186.85 277.894L185.163 277.877C185.174 276.76 185.118 275.65 185.001 274.549L186.679 274.371ZM186.608 281.408C186.532 281.99 186.44 282.573 186.329 283.158L184.671 282.842C184.776 282.291 184.863 281.741 184.934 281.193L186.608 281.408ZM186.329 283.158C186.218 283.739 186.096 284.322 185.964 284.908L184.318 284.536C184.446 283.969 184.564 283.404 184.671 282.842L186.329 283.158ZM185.072 288.364C184.746 289.495 184.386 290.629 183.998 291.762L182.402 291.215C182.781 290.106 183.133 288.998 183.451 287.896L185.072 288.364ZM182.776 295.103C182.347 296.204 181.897 297.301 181.43 298.389L179.879 297.723C180.339 296.652 180.782 295.573 181.203 294.491L182.776 295.103ZM179.977 301.627C179.474 302.706 178.958 303.771 178.434 304.819L176.925 304.064C177.442 303.029 177.952 301.978 178.448 300.914L179.977 301.627ZM176.811 307.965C176.247 309.028 175.679 310.066 175.115 311.075L173.642 310.251C174.201 309.252 174.763 308.225 175.321 307.174L176.811 307.965ZM173.352 314.147C172.731 315.204 172.121 316.217 171.53 317.18L170.092 316.297C170.677 315.343 171.282 314.339 171.897 313.292L173.352 314.147ZM169.651 320.174C168.95 321.268 168.296 322.262 167.709 323.141L166.306 322.203C166.888 321.333 167.536 320.347 168.23 319.263L169.651 320.174ZM165.705 326.066C165.381 326.528 165.125 326.886 164.95 327.129C164.862 327.25 164.795 327.343 164.749 327.405C164.726 327.436 164.709 327.46 164.697 327.476C164.691 327.484 164.686 327.491 164.683 327.495C164.682 327.497 164.681 327.498 164.68 327.5C164.679 327.5 164.679 327.501 164.679 327.501C164.679 327.501 164.679 327.501 164.679 327.501C164.678 327.501 164.678 327.501 164.678 327.501C164.678 327.501 164.678 327.501 164.678 327.501C164.678 327.501 164.678 327.501 164 327C163.321 326.499 163.321 326.499 163.321 326.499C163.321 326.499 163.321 326.499 163.321 326.499C163.321 326.499 163.321 326.499 163.321 326.499C163.321 326.499 163.321 326.498 163.321 326.498C163.321 326.498 163.322 326.498 163.322 326.498C163.323 326.497 163.324 326.495 163.325 326.494C163.328 326.49 163.332 326.484 163.337 326.477C163.348 326.462 163.364 326.44 163.386 326.41C163.43 326.35 163.496 326.26 163.581 326.141C163.752 325.904 164.004 325.552 164.324 325.096L165.705 326.066Z"
            fill="#4B4B4B"
          />
          <path
            d="M56.9034 163.597C57.2329 163.926 57.7671 163.926 58.0966 163.597L63.4662 158.227C63.7957 157.898 63.7957 157.364 63.4662 157.034C63.1367 156.705 62.6025 156.705 62.273 157.034L57.5 161.807L52.727 157.034C52.3975 156.705 51.8633 156.705 51.5338 157.034C51.2043 157.364 51.2043 157.898 51.5338 158.227L56.9034 163.597ZM57.5 163C58.3438 163 58.3438 163 58.3438 163C58.3438 163.001 58.3438 163.001 58.3438 163.001C58.3438 163.001 58.3438 163.001 58.3438 163.001C58.3438 163.001 58.3438 163.001 58.3437 163.002C58.3437 163.002 58.3437 163.002 58.3437 163.002C58.3437 163.002 58.3438 163.001 58.3438 163C58.3438 162.998 58.3438 162.993 58.3439 162.986C58.3442 162.972 58.3447 162.948 58.3458 162.916C58.3479 162.851 58.3524 162.751 58.3616 162.617C58.3799 162.349 58.4173 161.947 58.4932 161.427L56.8234 161.183C56.741 161.748 56.6992 162.193 56.678 162.502C56.6674 162.656 56.662 162.776 56.6592 162.86C56.6578 162.902 56.6571 162.935 56.6567 162.958C56.6565 162.97 56.6564 162.979 56.6563 162.986C56.6563 162.99 56.6563 162.993 56.6563 162.995C56.6563 162.996 56.6563 162.997 56.6563 162.998C56.6563 162.999 56.6562 162.999 56.6562 162.999C56.6562 162.999 56.6562 163 56.6562 163C56.6562 163 56.6562 163 56.6562 163C56.6562 163 56.6562 163 57.5 163ZM59.216 158.158C59.4922 157.205 59.856 156.138 60.335 154.98L58.7756 154.335C58.272 155.553 57.888 156.679 57.5952 157.688L59.216 158.158ZM61.7866 151.914C62.2847 150.981 62.855 150.012 63.5081 149.014L62.0961 148.09C61.4152 149.13 60.8193 150.143 60.298 151.119L61.7866 151.914ZM65.4911 146.244C66.1569 145.389 66.8851 144.521 67.6814 143.644L66.4321 142.509C65.6073 143.418 64.8518 144.318 64.1599 145.206L65.4911 146.244ZM70.0505 141.212C70.84 140.454 71.6831 139.694 72.5833 138.934L71.4946 137.645C70.5674 138.428 69.6978 139.212 68.8824 139.994L70.0505 141.212ZM75.2574 136.808C76.1427 136.144 77.0747 135.483 78.0557 134.826L77.1167 133.424C76.1112 134.097 75.1548 134.776 74.2452 135.457L75.2574 136.808ZM80.9367 132.997C81.8819 132.428 82.8668 131.864 83.8931 131.306L83.0875 129.824C82.0397 130.393 81.0333 130.969 80.0665 131.551L80.9367 132.997ZM86.9336 129.735C87.9399 129.24 88.9817 128.751 90.0603 128.27L89.3731 126.729C88.2754 127.219 87.2145 127.716 86.1889 128.221L86.9336 129.735ZM93.2108 126.931C94.2424 126.512 95.3045 126.101 96.3982 125.697L95.8139 124.114C94.7038 124.524 93.625 124.942 92.5768 125.367L93.2108 126.931ZM99.6755 124.543C100.729 124.19 101.808 123.843 102.916 123.504L102.422 121.89C101.3 122.234 100.206 122.585 99.1382 122.944L99.6755 124.543ZM106.23 122.535C107.313 122.234 108.42 121.939 109.553 121.652L109.138 120.016C107.993 120.306 106.873 120.605 105.777 120.91L106.23 122.535ZM112.895 120.844C113.997 120.59 115.121 120.343 116.267 120.104L115.922 118.452C114.765 118.694 113.629 118.943 112.516 119.2L112.895 120.844ZM119.639 119.434C120.75 119.225 121.881 119.021 123.034 118.825L122.75 117.162C121.589 117.36 120.447 117.564 119.325 117.776L119.639 119.434ZM126.443 118.275C127.556 118.105 128.688 117.942 129.839 117.785L129.611 116.113C128.452 116.271 127.311 116.436 126.188 116.607L126.443 118.275ZM133.3 117.34C134.41 117.206 135.537 117.078 136.68 116.956L136.501 115.278C135.35 115.401 134.216 115.53 133.097 115.665L133.3 117.34ZM140.16 116.61C141.279 116.506 142.412 116.409 143.561 116.317L143.427 114.635C142.271 114.727 141.13 114.825 140.005 114.93L140.16 116.61ZM147.003 116.064C148.151 115.987 149.314 115.915 150.492 115.85L150.398 114.165C149.214 114.231 148.044 114.303 146.889 114.38L147.003 116.064ZM153.886 115.68C155.031 115.629 156.189 115.584 157.362 115.544L157.305 113.857C156.126 113.897 154.962 113.943 153.81 113.994L153.886 115.68ZM160.824 115.445C161.949 115.418 163.088 115.396 164.238 115.38L164.214 113.693C163.058 113.709 161.915 113.731 160.784 113.757L160.824 115.445ZM167.727 115.348C168.315 115.345 168.906 115.344 169.5 115.344L169.5 113.656C168.903 113.656 168.31 113.658 167.719 113.66L167.727 115.348Z"
            fill="#4B4B4B"
          />
          <text
            fill="#4B4B4B"
            fontFamily="Archivo"
            fontSize="16"
            fontWeight="100"
            letterSpacing="0em"
          >
            <tspan x="59" y="192">
              9. {props.step9}
            </tspan>
          </text>
        </svg>
      ) : (
        <svg
          className="w-full"
          viewBox="0 0 1087 639"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <text
            fill="#2E2C2F"
            fontFamily="Archivo"
            fontSize="32"
            fontWeight="100"
            letterSpacing="0em"
          >
            <tspan x="800" y="101.188">
              6. {props.step6}
            </tspan>
          </text>
          <text
            fill="#2E2C2F"
            fontFamily="Archivo"
            fontSize="32"
            fontWeight="100"
            letterSpacing="0em"
          >
            <tspan x="410" y="166.188">
              7. {props.step7}
            </tspan>
          </text>
          <text
            fill="#2E2C2F"
            fontFamily="Archivo"
            fontSize="32"
            fontWeight="100"
            letterSpacing="0em"
          >
            <tspan x="10" y="127.188">
              8. {props.step8}
            </tspan>
          </text>
          <text
            fill="#2E2C2F"
            fontFamily="Archivo"
            fontSize="32"
            fontWeight="100"
            letterSpacing="0em"
          >
            <tspan x="180" y="384.188">
              9. {props.step9}
            </tspan>
          </text>
          <text
            fill="#2E2C2F"
            fontFamily="Archivo"
            fontSize="48"
            fontWeight="bold"
            letterSpacing="0em"
          >
            <tspan x="697" y="590.032">
              {props.congratulation}
            </tspan>
          </text>
          <text
            fill="#2E2C2F"
            fontFamily="Archivo"
            fontSize="24"
            fontWeight="300"
            letterSpacing="0em"
          >
            <tspan x="560" y="629.016">
              {props.phrase}
            </tspan>
          </text>
          <path
            d="M914.506 502.04C913.892 502.596 912.943 502.548 912.388 501.934L903.332 491.922C902.776 491.307 902.824 490.359 903.438 489.803C904.053 489.247 905.001 489.295 905.557 489.909L913.606 498.809L922.506 490.76C923.121 490.204 924.069 490.251 924.625 490.866C925.181 491.48 925.133 492.429 924.519 492.985L914.506 502.04ZM913.5 500.928C912.002 500.853 912.002 500.853 912.002 500.853C912.002 500.853 912.002 500.853 912.002 500.853C912.002 500.853 912.002 500.853 912.002 500.853C912.002 500.853 912.002 500.853 912.002 500.853C912.002 500.853 912.002 500.853 912.002 500.852C912.002 500.851 912.002 500.849 912.002 500.846C912.003 500.839 912.003 500.829 912.004 500.815C912.005 500.786 912.007 500.742 912.009 500.682C912.013 500.563 912.019 500.381 912.024 500.141C912.034 499.661 912.042 498.946 912.032 498.019L915.032 497.987C915.042 498.947 915.034 499.694 915.023 500.205C915.018 500.46 915.012 500.656 915.007 500.79C915.005 500.857 915.002 500.909 915.001 500.944C915 500.962 915 500.976 914.999 500.986C914.999 500.99 914.999 500.994 914.999 500.997C914.998 500.999 914.998 501 914.998 501.001C914.998 501.001 914.998 501.002 914.998 501.002C914.998 501.002 914.998 501.002 914.998 501.003C914.998 501.003 914.998 501.003 914.998 501.003C914.998 501.003 914.998 501.003 913.5 500.928ZM911.787 492.069C911.666 490.313 911.491 488.332 911.238 486.159L914.217 485.812C914.476 488.034 914.656 490.063 914.78 491.864L911.787 492.069ZM910.417 480.272C910.115 478.405 909.757 476.446 909.334 474.41L912.271 473.8C912.704 475.882 913.069 477.884 913.379 479.792L910.417 480.272ZM907.995 468.608C907.521 466.742 906.991 464.829 906.401 462.879L909.272 462.01C909.876 464.005 910.418 465.961 910.902 467.868L907.995 468.608ZM904.55 457.234C903.904 455.405 903.202 453.552 902.44 451.683L905.218 450.55C905.998 452.465 906.717 454.362 907.379 456.234L904.55 457.234ZM900.065 446.239C899.242 444.471 898.363 442.694 897.424 440.915L900.077 439.515C901.04 441.339 901.941 443.161 902.785 444.973L900.065 446.239ZM894.514 435.727C893.514 434.048 892.459 432.373 891.343 430.705L893.837 429.037C894.982 430.75 896.066 432.47 897.091 434.192L894.514 435.727ZM887.928 425.878C886.76 424.317 885.535 422.766 884.251 421.231L886.553 419.307C887.872 420.884 889.13 422.477 890.33 424.08L887.928 425.878ZM880.316 416.775C878.984 415.347 877.597 413.936 876.151 412.546L878.231 410.383C879.716 411.812 881.142 413.262 882.51 414.729L880.316 416.775ZM871.787 408.567C870.309 407.291 868.777 406.036 867.189 404.805L869.027 402.434C870.657 403.697 872.23 404.986 873.748 406.297L871.787 408.567ZM862.391 401.283C860.8 400.178 859.158 399.096 857.464 398.04L859.05 395.494C860.787 396.576 862.471 397.685 864.103 398.819L862.391 401.283ZM852.324 395.012C850.626 394.066 848.879 393.146 847.083 392.254L848.418 389.567C850.256 390.48 852.044 391.422 853.783 392.391L852.324 395.012ZM841.711 389.734C839.918 388.942 838.078 388.175 836.191 387.437L837.285 384.643C839.211 385.397 841.091 386.18 842.924 386.991L841.711 389.734ZM830.651 385.399C828.786 384.755 826.877 384.137 824.925 383.548L825.792 380.676C827.782 381.276 829.727 381.906 831.63 382.563L830.651 385.399ZM819.263 381.95C817.349 381.448 815.396 380.971 813.401 380.521L814.061 377.594C816.089 378.052 818.077 378.537 820.026 379.049L819.263 381.95ZM807.643 379.32C805.702 378.948 803.724 378.601 801.71 378.28L802.183 375.317C804.228 375.643 806.236 375.996 808.208 376.374L807.643 379.32ZM795.858 377.433C793.909 377.18 791.927 376.95 789.911 376.744L790.215 373.76C792.258 373.968 794.268 374.201 796.245 374.458L795.858 377.433ZM783.951 376.216C782.008 376.069 780.037 375.944 778.035 375.841L778.188 372.845C780.214 372.949 782.21 373.075 784.177 373.224L783.951 376.216ZM771.938 375.602C770.015 375.549 768.065 375.517 766.089 375.505L766.107 372.505C768.104 372.517 770.076 372.55 772.02 372.603L771.938 375.602ZM760.08 375.533C758.1 375.562 756.094 375.612 754.062 375.683L753.958 372.684C756.01 372.613 758.035 372.563 760.035 372.533L760.08 375.533ZM748.167 375.943C746.178 376.048 744.164 376.174 742.126 376.319L741.913 373.327C743.969 373.18 746 373.054 748.008 372.947L748.167 375.943ZM736.168 376.794C734.225 376.966 732.26 377.155 730.274 377.361L729.964 374.378C731.965 374.169 733.945 373.979 735.904 373.806L736.168 376.794ZM724.251 378.036C723.236 378.158 722.216 378.284 721.19 378.415L720.81 375.439C721.844 375.307 722.872 375.18 723.894 375.058L724.251 378.036Z"
            fill="#2E2C2F"
          />
          <path
            d="M992.914 90.4648C992.342 91.0648 992.366 92.0143 992.966 92.5855L1002.74 101.894C1003.34 102.465 1004.29 102.441 1004.86 101.841C1005.44 101.241 1005.41 100.292 1004.81 99.7206L996.121 91.4468L1004.39 82.7552C1004.97 82.1552 1004.94 81.2057 1004.34 80.6345C1003.74 80.0634 1002.79 80.0867 1002.22 80.6868L992.914 90.4648ZM1083.01 1.18582C1083.14 2.21719 1083.25 3.23629 1083.35 4.24326L1086.34 3.95298C1086.24 2.91831 1086.12 1.87193 1085.99 0.813721L1083.01 1.18582ZM1083.76 10.2135C1083.84 12.2621 1083.85 14.2567 1083.8 16.1988L1086.8 16.2753C1086.86 14.2672 1086.84 12.2081 1086.76 10.0966L1083.76 10.2135ZM1083.44 22.2059C1083.24 24.247 1082.97 26.2251 1082.63 28.1421L1085.58 28.6674C1085.93 26.6715 1086.22 24.6155 1086.42 22.4975L1083.44 22.2059ZM1081.33 33.9747C1080.81 35.9392 1080.21 37.8334 1079.54 39.6601L1082.35 40.694C1083.06 38.7816 1083.68 36.8008 1084.23 34.7492L1081.33 33.9747ZM1077.22 45.1478C1076.35 46.9672 1075.41 48.7123 1074.4 50.3862L1076.97 51.9365C1078.03 50.1809 1079.02 48.3508 1079.93 46.4433L1077.22 45.1478ZM1071.08 55.3288C1069.88 56.9389 1068.62 58.4745 1067.31 59.9392L1069.54 61.9446C1070.91 60.4128 1072.23 58.8052 1073.49 57.1181L1071.08 55.3288ZM1063.12 64.1991C1061.65 65.5666 1060.13 66.8624 1058.58 68.0902L1060.43 70.4464C1062.05 69.1698 1063.63 67.8204 1065.16 66.394L1063.12 64.1991ZM1053.73 71.6135C1052.06 72.7349 1050.36 73.7887 1048.63 74.7788L1050.13 77.3801C1051.91 76.3571 1053.67 75.2667 1055.4 74.1043L1053.73 71.6135ZM1043.33 77.601C1041.51 78.4968 1039.69 79.3285 1037.86 80.1006L1039.03 82.864C1040.9 82.0706 1042.79 81.2149 1044.66 80.2919L1043.33 77.601ZM1032.24 82.2989C1030.31 82.9956 1028.4 83.6297 1026.52 84.2068L1027.4 87.0749C1029.32 86.4843 1031.28 85.8348 1033.26 85.1205L1032.24 82.2989ZM1020.72 85.8395C1018.68 86.3635 1016.71 86.822 1014.81 87.2231L1015.43 90.158C1017.37 89.7485 1019.39 89.2802 1021.47 88.7448L1020.72 85.8395ZM1008.89 88.3479C1006.71 88.7143 1004.71 89.0003 1002.92 89.2233L1003.29 92.2002C1005.12 91.9723 1007.16 91.6803 1009.39 91.3063L1008.89 88.3479ZM996.887 89.8328C995.94 89.9037 995.204 89.9455 994.707 89.9695C994.458 89.9815 994.269 89.9891 994.144 89.9936C994.082 89.9959 994.035 89.9974 994.005 89.9983C993.989 89.9988 993.978 89.9991 993.971 89.9993C993.968 89.9994 993.966 89.9994 993.964 89.9995C993.963 89.9995 993.963 89.9995 993.963 89.9995C993.963 89.9995 993.963 89.9995 993.963 89.9995C993.963 89.9995 993.963 89.9995 993.963 89.9995C993.963 89.9995 993.963 89.9995 993.963 89.9995C993.963 89.9995 993.963 89.9995 994 91.499C994.037 92.9986 994.037 92.9986 994.037 92.9986C994.037 92.9986 994.037 92.9986 994.037 92.9986C994.037 92.9986 994.037 92.9986 994.038 92.9986C994.038 92.9985 994.038 92.9985 994.039 92.9985C994.04 92.9985 994.041 92.9985 994.042 92.9984C994.045 92.9984 994.049 92.9983 994.054 92.9981C994.063 92.9979 994.077 92.9975 994.095 92.9969C994.132 92.9958 994.184 92.9941 994.253 92.9917C994.389 92.9867 994.59 92.9786 994.851 92.966C995.373 92.9408 996.136 92.8974 997.111 92.8244L996.887 89.8328Z"
            fill="#2E2C2F"
          />
          <path
            d="M618.799 145.399C618.303 144.735 618.438 143.795 619.101 143.299L629.91 135.211C630.574 134.715 631.514 134.85 632.01 135.513C632.506 136.177 632.371 137.117 631.708 137.613L622.1 144.802L629.289 154.41C629.785 155.074 629.65 156.014 628.987 156.51C628.323 157.006 627.383 156.871 626.887 156.208L618.799 145.399ZM750.453 102.579C749.447 102.547 748.455 102.527 747.479 102.519L747.506 99.5187C748.505 99.5278 749.518 99.5482 750.547 99.5803L750.453 102.579ZM741.649 102.601C739.645 102.677 737.71 102.803 735.837 102.975L735.563 99.9873C737.49 99.8108 739.479 99.6815 741.534 99.6029L741.649 102.601ZM730.062 103.673C728.086 103.973 726.185 104.326 724.353 104.727L723.711 101.796C725.608 101.381 727.573 101.016 729.612 100.707L730.062 103.673ZM718.742 106.16C716.839 106.718 715.014 107.33 713.256 107.988L712.204 105.178C714.029 104.495 715.924 103.86 717.897 103.281L718.742 106.16ZM707.892 110.224C706.101 111.05 704.379 111.923 702.715 112.834L701.274 110.203C702.995 109.26 704.779 108.356 706.637 107.5L707.892 110.224ZM697.706 115.785C696.041 116.835 694.427 117.918 692.851 119.022L691.13 116.565C692.739 115.437 694.394 114.327 696.107 113.247L697.706 115.785ZM688.114 122.467C686.534 123.653 684.981 124.847 683.435 126.04L681.602 123.665C683.15 122.471 684.716 121.266 686.314 120.068L688.114 122.467ZM678.739 129.647C677.157 130.847 675.565 132.03 673.948 133.18L672.21 130.735C673.793 129.609 675.358 128.446 676.926 127.257L678.739 129.647ZM668.983 136.526C667.299 137.591 665.572 138.607 663.784 139.559L662.375 136.911C664.088 135.999 665.75 135.021 667.379 133.991L668.983 136.526ZM658.332 142.157C656.509 142.923 654.618 143.617 652.643 144.224L651.761 141.357C653.636 140.78 655.434 140.121 657.169 139.391L658.332 142.157ZM646.78 145.709C644.858 146.095 642.861 146.402 640.778 146.619L640.467 143.635C642.457 143.427 644.361 143.135 646.189 142.768L646.78 145.709ZM634.785 146.986C632.856 147.025 630.857 146.993 628.783 146.884L628.94 143.888C630.945 143.993 632.87 144.024 634.724 143.987L634.785 146.986ZM622.809 146.377C621.818 146.263 620.811 146.132 619.786 145.985L620.214 143.015C621.211 143.159 622.191 143.286 623.153 143.397L622.809 146.377Z"
            fill="#2E2C2F"
          />
          <path
            d="M185.907 118.061C185.34 118.665 185.369 119.614 185.973 120.182L195.812 129.425C196.416 129.993 197.365 129.963 197.932 129.359C198.499 128.755 198.47 127.806 197.866 127.239L189.12 119.022L197.337 110.277C197.904 109.673 197.875 108.724 197.271 108.156C196.667 107.589 195.718 107.619 195.151 108.222L185.907 118.061ZM187.047 120.588C188.045 120.557 189.037 120.534 190.024 120.519L189.98 117.52C188.977 117.534 187.968 117.557 186.953 117.589L187.047 120.588ZM195.934 120.531C197.925 120.567 199.893 120.637 201.84 120.738L201.995 117.742C200.016 117.639 198.014 117.568 195.989 117.531L195.934 120.531ZM207.737 121.141C209.719 121.31 211.679 121.509 213.619 121.738L213.971 118.759C211.999 118.526 210.006 118.323 207.991 118.152L207.737 121.141ZM219.481 122.525C221.446 122.82 223.391 123.145 225.317 123.495L225.854 120.543C223.899 120.188 221.923 119.858 219.927 119.558L219.481 122.525ZM231.124 124.639C233.068 125.052 234.992 125.489 236.9 125.948L237.602 123.032C235.669 122.566 233.718 122.123 231.747 121.705L231.124 124.639ZM242.643 127.409C244.562 127.922 246.464 128.456 248.352 129.007L249.193 126.127C247.284 125.57 245.36 125.03 243.418 124.511L242.643 127.409ZM254.031 130.727C255.927 131.321 257.81 131.93 259.681 132.552L260.626 129.705C258.741 129.079 256.842 128.464 254.928 127.864L254.031 130.727ZM265.307 134.464C267.186 135.116 269.055 135.777 270.915 136.444L271.927 133.62C270.059 132.95 268.181 132.286 266.291 131.63L265.307 134.464ZM276.512 138.472C278.382 139.156 280.245 139.842 282.104 140.527L283.142 137.712C281.283 137.027 279.416 136.339 277.542 135.654L276.512 138.472ZM287.701 142.588C289.573 143.275 291.443 143.958 293.312 144.632L294.33 141.811C292.468 141.139 290.604 140.458 288.734 139.771L287.701 142.588ZM298.944 146.637C300.829 147.297 302.715 147.945 304.605 148.577L305.557 145.732C303.682 145.105 301.809 144.461 299.935 143.805L298.944 146.637ZM310.302 150.427C312.209 151.027 314.122 151.607 316.041 152.163L316.876 149.282C314.98 148.732 313.089 148.159 311.202 147.566L310.302 150.427ZM321.828 153.759C323.764 154.264 325.709 154.741 327.665 155.188L328.332 152.263C326.408 151.824 324.493 151.354 322.586 150.856L321.828 153.759ZM333.551 156.427C335.514 156.804 337.49 157.147 339.481 157.451L339.935 154.486C337.983 154.187 336.044 153.851 334.117 153.481L333.551 156.427ZM345.451 158.241C347.434 158.462 349.434 158.643 351.451 158.78L351.654 155.786C349.681 155.653 347.724 155.476 345.783 155.26L345.451 158.241ZM357.473 159.053C358.477 159.076 359.486 159.088 360.5 159.088L360.5 156.088C359.509 156.088 358.523 156.077 357.542 156.054L357.473 159.053Z"
            fill="#2E2C2F"
          />
          <path
            d="M104.941 372.939C105.526 373.525 105.526 374.475 104.941 375.061L95.3946 384.607C94.8088 385.192 93.8591 385.192 93.2733 384.607C92.6875 384.021 92.6875 383.071 93.2733 382.485L101.759 374L93.2733 365.515C92.6875 364.929 92.6875 363.979 93.2733 363.393C93.8591 362.808 94.8088 362.808 95.3946 363.393L104.941 372.939ZM103.88 375.5C102.815 375.5 101.762 375.486 100.719 375.457L100.8 372.459C101.816 372.486 102.842 372.5 103.88 372.5V375.5ZM94.5921 375.121C92.4847 374.945 90.4248 374.709 88.4112 374.415L88.8444 371.447C90.7958 371.732 92.7945 371.961 94.8416 372.132L94.5921 375.121ZM82.3641 373.332C80.3058 372.893 78.3001 372.389 76.3454 371.825L77.1772 368.943C79.0632 369.487 81.0005 369.973 82.9906 370.398L82.3641 373.332ZM70.4456 369.884C68.4869 369.157 66.5846 368.366 64.7371 367.514L65.9939 364.79C67.7713 365.61 69.6026 366.372 71.4893 367.072L70.4456 369.884ZM59.2165 364.698C57.3915 363.674 55.6258 362.588 53.9178 361.442L55.5888 358.951C57.2314 360.052 58.9292 361.097 60.6841 362.082L59.2165 364.698ZM48.9078 357.789C47.2804 356.502 45.7116 355.158 44.1993 353.763L46.2337 351.558C47.6914 352.903 49.2024 354.197 50.7687 355.436L48.9078 357.789ZM39.8021 349.396C38.3896 347.888 37.0327 346.332 35.7292 344.733L38.0546 342.837C39.316 344.385 40.6277 345.889 41.9916 347.345L39.8021 349.396ZM31.9805 339.815C30.7853 338.14 29.6411 336.426 28.5457 334.679L31.0875 333.085C32.1524 334.784 33.2636 336.448 34.4228 338.073L31.9805 339.815ZM25.4134 329.357C24.4211 327.562 23.4747 325.738 22.5722 323.889L25.268 322.573C26.1492 324.378 27.0723 326.157 28.0391 327.906L25.4134 329.357ZM20.0009 318.292C19.1878 316.409 18.4159 314.506 17.6834 312.588L20.486 311.518C21.2038 313.398 21.9596 315.26 22.7551 317.102L20.0009 318.292ZM15.6045 306.802C14.9487 304.858 14.3301 302.904 13.7468 300.943L16.6223 300.087C17.1957 302.015 17.8033 303.935 18.447 305.842L15.6045 306.802ZM12.0954 295.025C11.5766 293.039 11.0914 291.05 10.638 289.063L13.5628 288.396C14.0096 290.353 14.4873 292.312 14.998 294.266L12.0954 295.025ZM9.36271 283.073C8.96246 281.051 8.59316 279.035 8.25266 277.031L11.2103 276.529C11.5464 278.507 11.9108 280.496 12.3056 282.49L9.36271 283.073ZM7.30259 270.968C7.00867 268.924 6.74322 266.897 6.50388 264.892L9.48273 264.536C9.71934 266.518 9.98168 268.521 10.272 270.541L7.30259 270.968ZM5.84853 258.811C5.65002 256.752 5.47782 254.723 5.32919 252.731L8.32088 252.508C8.46796 254.479 8.63833 256.487 8.83469 258.523L5.84853 258.811ZM4.93695 246.605C4.82458 244.508 4.73715 242.463 4.67106 240.478L7.6694 240.378C7.73485 242.344 7.8214 244.369 7.93265 246.445L4.93695 246.605ZM4.52817 234.354C4.49955 232.222 4.49416 230.18 4.50644 228.242L7.50638 228.261C7.49421 230.181 7.49955 232.202 7.5279 234.314L4.52817 234.354ZM4.60624 222.141C4.66688 219.855 4.74847 217.781 4.83735 215.951L7.83382 216.096C7.74594 217.906 7.66521 219.957 7.60519 222.221L4.60624 222.141ZM5.21312 209.817C5.2855 208.86 5.34903 208.12 5.39463 207.617C5.41744 207.366 5.43576 207.174 5.44847 207.045C5.45482 206.98 5.45977 206.93 5.46318 206.897C5.46488 206.88 5.4662 206.867 5.46711 206.858C5.46757 206.854 5.46792 206.85 5.46817 206.848C5.4683 206.847 5.4684 206.846 5.46847 206.845C5.46851 206.845 5.46854 206.844 5.46857 206.844C5.46858 206.844 5.46859 206.844 5.4686 206.844C5.4686 206.844 5.46861 206.844 5.46861 206.844C5.46861 206.844 5.46862 206.844 6.96045 207C8.45228 207.156 8.45228 207.156 8.45229 207.156C8.45229 207.156 8.45229 207.156 8.45229 207.156C8.45229 207.156 8.45229 207.156 8.45229 207.156C8.45229 207.156 8.45228 207.156 8.45227 207.156C8.45224 207.157 8.45218 207.157 8.4521 207.158C8.45193 207.16 8.45166 207.162 8.45129 207.166C8.45055 207.173 8.44941 207.184 8.44788 207.199C8.44481 207.23 8.4402 207.276 8.43419 207.337C8.42215 207.46 8.4045 207.645 8.38235 207.888C8.33805 208.376 8.27578 209.102 8.20458 210.044L5.21312 209.817Z"
            fill="#2E2C2F"
          />
        </svg>
      )}
    </>
  );
}
