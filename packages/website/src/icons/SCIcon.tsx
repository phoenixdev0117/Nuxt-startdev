export interface Props {
  className?: string;
  size?: string | number;
}

export function SCIcon({ size = 48, className }) {
  return (
    <svg
      viewBox="0 0 318 318"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      className={className}
    >
      <defs>
        <path id="a" d="M0 0h318v318H0z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <use mask="url(#b)" stroke="#4a4a4a" strokeWidth="8" />
        <path
          d="M44.284 229.416c-4.428 0-7.344 2.376-7.344 5.544 0 2.808 1.728 4.68 5.652 5.76 3.564 1.008 4.32 1.512 4.32 3.096 0 1.44-1.332 2.304-3.384 2.304-1.944 0-3.708-.756-5.184-1.872l-2.304 2.592c1.764 1.584 4.32 2.7 7.596 2.7 4.356 0 8.028-2.088 8.028-6.048 0-3.384-2.196-4.968-6.084-6.012-3.24-.9-3.996-1.476-3.996-2.736 0-1.152 1.044-1.908 2.88-1.908 1.692 0 3.204.54 4.788 1.548l1.8-2.7c-1.8-1.404-4.032-2.268-6.768-2.268zm20.412 15.732l1.62 2.952c-1.368.972-3.096 1.44-4.788 1.44-3.744-.036-5.724-2.16-5.724-6.228v-10.044h-2.988v-3.312h2.988v-4.212l4.608-.54v4.752h4.428l-.468 3.312h-3.96v9.936c0 1.872.612 2.628 2.016 2.628.72 0 1.44-.216 2.268-.684zm19.62-15.192l-6.192 19.116c-1.44 4.464-4.248 7.344-9.9 7.776l-.468-3.348c3.78-.576 5.004-1.8 6.084-4.5h-1.584l-6.048-19.044h4.896l4.14 15.984 4.32-15.984zm7.308 19.584a7.55 7.55 0 0 0 3.06-.648l-.972-3.24c-.324.108-.648.18-1.08.18-.756 0-1.08-.432-1.08-1.332v-22.68l-4.608.504v22.32c0 3.132 1.764 4.896 4.68 4.896zm21.744-10.512c0 .612-.072 1.368-.108 1.872h-11.952c.324 3.888 2.16 5.148 4.68 5.148 1.692 0 3.096-.54 4.752-1.692l1.908 2.628c-1.872 1.512-4.176 2.556-7.056 2.556-5.904 0-9.072-3.924-9.072-9.936 0-5.796 3.06-10.188 8.46-10.188 5.328 0 8.388 3.6 8.388 9.612zm-4.572-1.116v-.216c0-3.132-1.116-5.004-3.708-5.004-2.16 0-3.528 1.44-3.78 5.22zm20.124-16.092l4.608.504V249h-4.068l-.324-2.412c-1.152 1.728-2.988 2.952-5.436 2.952-4.752 0-7.236-3.996-7.236-10.044 0-5.868 2.952-10.08 7.668-10.08 2.016 0 3.6.864 4.788 2.052zm-3.924 24.228c1.692 0 2.844-.828 3.924-2.448v-8.712c-1.008-1.224-2.088-2.016-3.636-2.016-2.376 0-3.96 2.016-3.96 6.588 0 4.896 1.404 6.588 3.672 6.588zM44.44 265.416c-5.472 0-8.892 4.14-8.892 10.224s3.42 9.9 8.928 9.9c2.448 0 4.428-.792 6.156-2.196l-2.052-2.916c-1.404.9-2.412 1.368-3.852 1.368-2.592 0-4.284-1.62-4.284-6.228 0-4.572 1.62-6.516 4.284-6.516 1.44 0 2.592.432 3.852 1.368l2.052-2.772c-1.8-1.548-3.708-2.232-6.192-2.232zm17.316 0c5.616 0 8.928 3.816 8.928 10.044 0 6.012-3.348 10.08-8.964 10.08s-8.964-3.816-8.964-10.08c0-5.976 3.348-10.044 9-10.044zm0 3.492c-2.7 0-4.14 2.052-4.14 6.552 0 4.572 1.404 6.588 4.104 6.588s4.104-2.052 4.104-6.588-1.404-6.552-4.068-6.552zm33.444-3.492c-2.52 0-4.284 1.224-5.724 3.204-.72-2.016-2.376-3.204-4.608-3.204-2.412 0-4.14 1.116-5.508 3.024l-.36-2.484h-3.996V285h4.608v-13.248c1.044-1.764 2.016-2.88 3.636-2.88 1.116 0 2.088.684 2.088 3.06V285h4.608v-13.248c1.044-1.764 2.016-2.88 3.6-2.88 1.152 0 2.088.684 2.088 3.06V285h4.608v-13.788c0-3.6-2.016-5.796-5.04-5.796zm20.268 0c4.968 0 7.056 3.924 7.056 10.008 0 5.832-2.7 10.116-7.524 10.116-1.944 0-3.6-.684-4.788-2.088v8.892l-4.608.504v-26.892h4.032l.252 2.34c1.512-1.98 3.528-2.88 5.58-2.88zm-1.764 16.596c2.52 0 3.996-1.944 3.996-6.552 0-4.824-1.296-6.588-3.6-6.588-1.62 0-2.988 1.116-3.888 2.592v8.568c.9 1.332 2.052 1.98 3.492 1.98zm21.132-16.596c5.616 0 8.928 3.816 8.928 10.044 0 6.012-3.348 10.08-8.964 10.08s-8.964-3.816-8.964-10.08c0-5.976 3.348-10.044 9-10.044zm0 3.492c-2.7 0-4.14 2.052-4.14 6.552 0 4.572 1.404 6.588 4.104 6.588s4.104-2.052 4.104-6.588-1.404-6.552-4.068-6.552zm23.4-3.492c-2.412 0-4.32 1.116-5.796 3.024l-.36-2.484h-3.996V285h4.608v-13.248c1.116-1.764 2.34-2.88 3.996-2.88 1.44 0 2.34.684 2.34 3.06V285h4.608v-13.788c0-3.636-1.98-5.796-5.4-5.796zm26.388 9.612c0 .612-.072 1.368-.108 1.872h-11.952c.324 3.888 2.16 5.148 4.68 5.148 1.692 0 3.096-.54 4.752-1.692l1.908 2.628c-1.872 1.512-4.176 2.556-7.056 2.556-5.904 0-9.072-3.924-9.072-9.936 0-5.796 3.06-10.188 8.46-10.188 5.328 0 8.388 3.6 8.388 9.612zm-4.572-1.116v-.216c0-3.132-1.116-5.004-3.708-5.004-2.16 0-3.528 1.44-3.78 5.22zm18.864-8.496c-2.412 0-4.32 1.116-5.796 3.024l-.36-2.484h-3.996V285h4.608v-13.248c1.116-1.764 2.34-2.88 3.996-2.88 1.44 0 2.34.684 2.34 3.06V285h4.608v-13.788c0-3.636-1.98-5.796-5.4-5.796zm20.052 15.732c-.828.468-1.548.684-2.268.684-1.404 0-2.016-.756-2.016-2.628v-9.936h3.96l.468-3.312h-4.428v-4.752l-4.608.54v4.212h-2.988v3.312h2.988v10.044c0 4.068 1.98 6.192 5.724 6.228 1.692 0 3.42-.468 4.788-1.44zm10.224-15.732c-4.428 0-7.344 2.376-7.344 5.544 0 2.808 1.728 4.68 5.652 5.76 3.564 1.008 4.32 1.512 4.32 3.096 0 1.44-1.332 2.304-3.384 2.304-1.944 0-3.708-.756-5.184-1.872l-2.304 2.592c1.764 1.584 4.32 2.7 7.596 2.7 4.356 0 8.028-2.088 8.028-6.048 0-3.384-2.196-4.968-6.084-6.012-3.24-.9-3.996-1.476-3.996-2.736 0-1.152 1.044-1.908 2.88-1.908 1.692 0 3.204.54 4.788 1.548l1.8-2.7c-1.8-1.404-4.032-2.268-6.768-2.268zM79.8 87.2l-36.2 22.5 36.2 22.9-3.7 4.6-37.7-23.6v-7.9l38.1-23.6m189.3 22.7v7.8l-37.7 23.6-3.7-4.9 36.1-22.6L224.4 86l3.2-4.9"
          fill="#4a4a4a"
        />
        <text
          fill="#000"
          fontFamily="AppleColorEmoji, Apple Color Emoji"
          fontSize="100"
          letterSpacing=".5"
          transform="translate(38 44)"
        >
          <tspan x="70" y="100">
            💅
          </tspan>
        </text>
      </g>
    </svg>
  );
}
