class Block {
  public index: number;
  public hash: string;
  public privateHash: string;
  public data: string;
  public timestamp: number;

  constructor(
    index: number,
    hash: string,
    privateHash: string,
    data: string,
    timestamp: number) {
      this.index = index;
      this.hash = hash;
      this.privateHash = privateHash;
      this.data = data;
      this.timestamp = timestamp;
  }
}

const genesisBlock: Block = new Block(0, "21041297040127", "", "Hello", 123456);

let blockchain: [Block] = [genesisBlock];

console.log(blockchain);

export {};
