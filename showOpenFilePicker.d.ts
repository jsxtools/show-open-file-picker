/** Displays a file picker that allows a user to select one or more files. */
export declare function showOpenFilePicker(/** An object containing options that control the file picker's behavior. */ options?: ShowOpenFilePickerOptions): Promise<FileSystemFileHandle[]>

interface ShowOpenFilePickerOptions {
	/** A boolean that indicates whether the picker should let the user apply file type filters. By default, this is `false`. */
	excludeAcceptAllOption?: boolean

	/** An ID to be associated with the directory. If the same ID is used for another picker, it will open the same directory. */
	id?: boolean

	/** A boolean that indicates whether the user can select multiple files. By default, this is `false`. */
	multiple?: boolean

	/** A well known directory ("desktop", "downloads") or `FileSystemHandle` to open the dialog in. */
	startIn?: string | FileSystemDirectoryHandle

	/** An array of file types that can be selected. */
	types?: FilePickerAcceptType[]
}

interface FilePickerAcceptType {
	/** A string that describes the file type. */
	description?: string

	/**
	 * An array of content types or file extensions that can be selected.
	 * @example
	 * ```js
	 * [
	 *   {
	 *     description: "Images",
	 *     accept: {
	 *       "image/*": [".png", ".gif", ".jpeg", ".jpg"]
	 *     }
	 *   }
	 * ]
	 * ```
	*/
	accept: Record<string, string[]>
}

interface FileSystemFileHandle {
	/** A method that returns a File object representing the file's contents. */
	getFile(): Promise<File>

	/** A method that creates a writable stream for the file. */
	createWritable(): Promise<FileSystemWritableFileStream>

	/** A boolean that indicates whether the handle is for a directory. */
	isDirectory: boolean

	/** A property that indicates whether the handle is for a file. */
	isFile: boolean

	/** A method that returns the name of the file. */
	name: string
}

interface FileSystemWritableFileStream {
	/** Writes data to the stream. */
	write(data: BufferSource | Blob | string | WriteParams): Promise<void>

	/** Seeks to a position in the stream. */
	seek(position: number): Promise<void>

	/** Truncates the file to the specified size. */
	truncate(size: number): Promise<void>

	/** Closes the stream. */
	close(): Promise<void>
}

interface WriteParams {
	type: "write"
	position?: number
	data: BufferSource | Blob | string
}
