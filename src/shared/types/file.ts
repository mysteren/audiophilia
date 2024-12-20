export type CommonFileItem = {
    hash: string;
    ext: string;
}

export type ImageFileItem = CommonFileItem

export type FileItem = CommonFileItem & {
    name: string;
}