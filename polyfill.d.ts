import type { ShowOpenFilePickerOptions, ShowSaveFilePickerOptions } from "./types.d.ts"

declare global {
	function showOpenFilePicker(
		/** An object containing options that control the file picker's behavior. */
		options?: ShowOpenFilePickerOptions,
	): Promise<FileSystemFileHandle[]>

	function showSaveFilePicker(
		/** An object containing options that control the file picker's behavior. */
		options?: ShowSaveFilePickerOptions
	): Promise<FileSystemFileHandle>
}
