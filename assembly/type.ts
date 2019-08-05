/**
 * class that represents data in rlp format. Due to the lack of support for recursive
 * data types, we have to use a class instead.
 */
export class RLPData {
    buffer: Uint8Array;
    children: RLPData[];

    constructor(input: Uint8Array | null, children: RLPData[] | null) {
        if (input) {
            this.buffer = input;
        } else {
            this.buffer = new Uint8Array(0);
        }

        if (children) {
            this.children = children;
        } else {
            this.children = new Array<RLPData>();
        }
    }
}
