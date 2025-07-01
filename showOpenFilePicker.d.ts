import type { ShowOpenFilePickerOptions, ShowSaveFilePickerOptions } from "./types.d.ts"

/** Displays a file picker that allows a user to select one or more files. */
export declare function showOpenFilePicker(/** An object containing options that control the file picker's behavior. */ options?: ShowOpenFilePickerOptions): Promise<FileSystemFileHandle[]>

/** Displays a file picker that allows a user to save a file. */
export declare function showSaveFilePicker(/** An object containing options that control the file picker's behavior. */ options?: ShowSaveFilePickerOptions): Promise<FileSystemFileHandle>

export type Ponyfills = {
	showOpenFilePicker: typeof showOpenFilePicker,
	showSaveFilePicker: typeof showSaveFilePicker,
}
