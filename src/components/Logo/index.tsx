import * as S from './styles'

export type LogoProps = {
  color?: 'white' | 'secondary'
  size?: 'normal' | 'large'
}

const Logo = ({ color = 'secondary', size = 'normal' }: LogoProps) => (
  <S.Wrapper>
    <S.Logo color={color} size={size}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="997"
        height="910"
        viewBox="0 0 997 910"
        fill="none"
        role="img"
        aria-label="segatto.dev"
        name="segatto.dev"
      >
        <path
          d="M525.914 201.349L145.836 210.379L343.696 535.021"
          stroke="currentColor"
          strokeWidth="50"
        />

        <path
          d="M471 708.672L851.078 699.642L653.218 375"
          stroke="currentColor"
          strokeWidth="50"
          strokeMiterlimit="2.67178"
        />

        <path
          d="M498.431 624C475.229 624 452.353 621.549 429.804 616.648C407.582 611.42 389.771 604.231 376.373 595.082C372.124 592.141 370 589.527 370 587.239C370 584.952 370.654 582.991 371.961 581.358L388.137 555.87C390.098 552.93 391.895 551.459 393.529 551.459C395.163 551.459 397.288 552.276 399.902 553.91C411.993 561.099 426.046 566.98 442.059 571.555C458.072 575.803 474.248 577.927 490.588 577.927C512.81 577.927 529.477 574.332 540.588 567.144C552.026 559.628 557.745 547.701 557.745 531.363C557.745 521.561 555.621 513.718 551.373 507.837C547.124 501.955 540.915 496.89 532.745 492.642C524.575 488.394 511.34 482.676 493.039 475.487L481.765 471.076C460.523 462.58 442.876 454.411 428.824 446.569C415.098 438.727 403.66 428.434 394.51 415.69C385.359 402.946 380.784 387.425 380.784 369.127C380.784 339.392 392.059 316.518 414.608 300.507C437.484 284.169 467.386 276 504.314 276C526.863 276 546.307 278.124 562.647 282.372C579.314 286.62 593.693 293.155 605.784 301.977C609.706 304.918 611.667 307.696 611.667 310.31C611.667 312.27 611.013 314.068 609.706 315.701L594.02 341.189C592.059 344.13 590.425 345.6 589.118 345.6C587.81 345.6 585.686 344.62 582.745 342.659C561.83 329.262 535.85 322.563 504.804 322.563C484.216 322.563 468.693 326.321 458.235 333.837C447.778 341.352 442.549 353.279 442.549 369.617C442.549 379.746 444.673 387.915 448.922 394.124C453.497 400.006 460.033 405.07 468.529 409.318C477.026 413.566 490.752 419.284 509.706 426.473L521.961 431.375C545.817 440.851 564.444 449.673 577.843 457.842C591.242 465.684 601.536 475.651 608.725 487.741C616.242 499.504 620 514.699 620 533.324C620 561.425 609.379 583.645 588.137 599.983C567.222 615.994 537.32 624 498.431 624Z"
          fill="currentColor"
        />
        <defs>
          <filter
            id="filter0_i"
            x="449.652"
            y="350.007"
            width="546.794"
            height="563.437"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
          </filter>
        </defs>
      </svg>
    </S.Logo>
    <S.Slogan>One line of code at a time.</S.Slogan>
  </S.Wrapper>
)

export default Logo
