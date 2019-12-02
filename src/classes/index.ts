/* eslint-disable max-classes-per-file */
export class FileNotFoundError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ERROR__FILE_NOT_FOUND';
  }
}

export class MalformedFileError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ERROR__MALFORMED_FILE';
  }
}
