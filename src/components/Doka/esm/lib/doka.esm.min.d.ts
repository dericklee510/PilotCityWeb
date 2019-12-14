/* eslint-disable */

type ResizeMode = { 'force':String, 'cover':String, 'contain':String }

type Position = {
    x: number,
    y: number
}

type Flip = {
    horizontal: boolean,
    vertical: boolean
}

type Crop = {
    center?: Position,
    zoom?: number,
    rotation?: number,
    aspectRatio?: number,
    flip?: Flip
}

type DokaData = {
    crop: Crop,
    image: {
        orientation: number
    },
    size: {
        mode: ResizeMode,
        upscale: boolean,
        width: number,
        height: number
    },
    output: {
        type: string,
        quality: number
    }
}

type DokaImageOptions = {
    crop: Crop
}

type AspectRatioOption = {
    label: string,
    value: number|string|null
}

type Rect = {
    x: number,
    y: number,
    width: number,
    height: number
}

type Size = {
    width: number,
    height: number
}

type SetInnerHTML = (element: SVGElement, html: string) => string

type CropMaskUpdate = (insetRect: Rect, maskSize: Size) => void

type UtilNames = 'crop' | 'filter' | 'resize';

type StyleLayoutModes = 'preview' | 'modal';

type FullscreenSafeAreaOptions = 'bottom' | 'none';

type StyleCornerOptions = 'circle' | 'line';

type ColorMatrix = [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number];

type Range = [number, number];

type Filter = {
    label: string,
    matrix: () => ColorMatrix
};

type Filters = {
    [name: string]: Filter
}

type DokaOptions = {
    
    id?: string,
    className?: string,

    src?: string,
    utils?: Array<UtilNames>,

    maxImagePreviewWidth?: number,
    maxImagePreviewHeight?: number,

    allowPreviewFitToView?: boolean,
    allowButtonCancel?: boolean,
    allowButtonConfirm?: boolean,
    allowDropFiles?: boolean,
    allowAutoClose?: boolean,
    allowAutoDestroy?: boolean,

    size?: Size,
    sizeMin?: Size,
    sizeMax?: Size,

    outputData?: boolean,
    outputFile?: boolean,
    outputWidth?: number,
    outputHeight?: number,
    outputFit?: ResizeMode,
    outputUpscale?: boolean,
    outputStripImageHead?: boolean,
    outputType?: string,
    outputQuality?: number,
    outputCanvasMemoryLimit?: number,

    crop?: Crop,
    cropShowSize?: boolean,
    cropZoomTimeout?: number,
    cropAllowModifyOutputSize?: boolean,
    cropAllowImageTurnRight?: boolean,
    cropResizeKeyCodes?: number[],
    cropAspectRatio?: number|string,
    cropAspectRatioOptions?: AspectRatioOption[],
    cropMinImageWidth?: number,
    cropMinImageHeight?: number,
    cropMaskInset?: number,
    cropMask?: (element: SVGElement, setInnerHTML?: SetInnerHTML) => CropMaskUpdate | void,

    filter?: string|ColorMatrix|null,
    filters?: Filters,

    colorBrightness?: number,
    colorBrightnessRange?: Range,
    colorContrast?: number,
    colorContrastRange?: Range,
    colorExposure?: number,
    colorExposureRange?: Range,
    colorSaturation?: number,
    colorSaturationRange?: Range,

    labelStatusAwaitingImage?: string,
    labelStatusLoadImageError?: string,
    labelStatusLoadingImage?: string,
    labelStatusProcessingImage?: string,

    labelColorBrightness?: string,
    labelColorContrast?: string,
    labelColorExposure?: string,
    labelColorSaturation?: string,

    labelButtonReset?: string,
    labelButtonCancel?: string,
    labelButtonConfirm?: string,
    
    labelButtonUtilCrop?: string,
    labelButtonUtilFilter?: string,
    labelButtonUtilColor?: string,
    labelButtonUtilResize?: string,
    
    labelButtonCropZoom?: string,
    labelButtonCropRotateLeft?: string,
    labelButtonCropRotateRight?: string,
    labelButtonCropRotateCenter?: string,
    labelButtonCropFlipHorizontal?: string,
    labelButtonCropFlipVertical?: string,
    labelButtonCropAspectRatio?: string,

    styleFullscreenSafeArea?: FullscreenSafeAreaOptions,
    styleLayoutMode?: StyleLayoutModes,
    styleCropCorner?: StyleCornerOptions,

    beforeCreateBlob?: (canvas: HTMLCanvasElement) => Promise<HTMLCanvasElement>,
    afterCreateBlob?: (bolb: Blob) => Promise<Blob>,

    oninit?: () => {},
    onconfirm?: (output: DokaData) => {},
    oncancel?: () => {},
    onclose?: () => {},
    onload?: (image: Object) => {},
    onloaderror?: () => {},
    ondestroy?: () => {},
    onupdate?: (state: Object) => {}
}

type DokaOutputRequest = {
    file?: boolean,
    data?: boolean
}

type DokaOutput = {
    data: DokaData
    file: File
}

type DokaInstance = {
    setOptions(options: DokaOptions): void
    setData(data: DokaData): void
    getData(outputRequest: DokaOutputRequest): Promise<DokaOutput>
    save(outputRequest: DokaOutputRequest): Promise<DokaOutput>
    open(imageSource:string, imageOptions?: DokaImageOptions): Promise<DokaData>
    edit(imageSource:string, imageOptions?: DokaImageOptions): Promise<DokaOutput>
    clear(): void
    close(): void
    destroy(): void
    insertBefore(element: Element): void
    insertAfter(element: Element): void
    appendTo(element: Element): void
    replaceElement(element: Element): void
    restoreElement(element: Element): void
    isAttachedTo(element: Element): boolean
    element(): Element|null
}

export const OptionTypes: object
export const supported: () => boolean
export const create: (elementOrOptions?: Element|DokaOptions, options?: DokaOptions) => DokaInstance
export const destroy: (element: Element) => boolean
export const parse: (context: Element) => DokaInstance[]
export const find: (context: Element) => DokaInstance|null
export const getOptions: () => DokaOptions
export const setOptions: (options: DokaOptions) => DokaOptions