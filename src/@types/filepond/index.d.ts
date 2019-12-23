
declare module 'filepond' {
    interface ServerFileReference {
        source: string;
        options: {
            type: 'limbo' | 'local';
            file?: {
                name: string;
                size: number;
                type: string;
            };
        };
    }
    namespace server{
        type process = (fieldName: string, file: File, metadata: object, load: (url: string) => void, error: (error_message: string) => void, progress: (computable: boolean, loadedSize: number, totalSize: number) => void, abort: () => void) => void | { abort: () => void } | Promise<void> | Promise<{ abort: () => void }>
        type load = (source: string, load: (file: File | Blob) => void, error: (error_message: string) => void, progress: (endlessMode: boolean, loadedSize: number, totalSize: number) => void, abort: () => void, headers: (headersString: string) => void) => void | { abort: () => void } | Promise<void> | Promise<{ abort: () => void }>
    }


}
