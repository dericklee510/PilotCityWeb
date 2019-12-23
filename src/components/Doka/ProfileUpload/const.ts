// export const ACTION_HTML = `Drag & Drop your picture or <span class="filepond--label-action">Browse</span>`
export const ACTION_HTML = `<i class="fas fa-plus" />
<i class="fas fa-user fa-4x" />
Drag & Drop your picture or <span class="filepond--label-action">Browse</span>
`
export const MASK_HTML = `
<mask id="my-mask">
    <rect x="0" y="0" width="100%" height="100%" fill="white"/>
    <circle cx="50%" cy="50%" r="50%" fill="black"/>
</mask>
<rect fill="rgba(255,255,255,.3125)" x="0" y="0" width="100%" height="100%" mask="url(#my-mask)"/>
<circle cx="50%" cy="50%" r="50%" fill="transparent" stroke-width="1" stroke="#fff"/>
`
