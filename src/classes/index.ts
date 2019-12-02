/* eslint-disable max-classes-per-file */

/* see https://github.com/facebook/jest/issues/8279 for setting prototype */

export class FileNotFoundError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ERROR__FILE_NOT_FOUND';
    Object.setPrototypeOf(this, FileNotFoundError.prototype);
  }
}

export class MalformedFileError extends Error {
  constructor(message: string = 'There was an error in parsing the file.') {
    super(message);
    this.name = 'ERROR__MALFORMED_FILE';
    Object.setPrototypeOf(this, MalformedFileError.prototype);
  }
}
