import { PublicKey } from "@solana/web3.js";

const programId = new PublicKey("FkmB24eN6CW8GjEKurC995zubA1z7uqYR5hU3WDtJ2MT");

const [pda, bump] = PublicKey.findProgramAddressSync(
  [Buffer.from("counter")],
  programId
);

console.log("Seeds:        [\"counter\"]");
console.log("Program ID:   ", programId.toBase58());
console.log("PDA:          ", pda.toBase58());
console.log("Canonical bump:", bump);