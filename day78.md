| Instruction      | Account        | Type               | Owner Question                                    | Signer Question                    | Result |
| ---------------- | -------------- | ------------------ | ------------------------------------------------- | ---------------------------------- | ------ |
| **InitConfig**   | config         | `Account<Config>`  | ✅ Yes – Anchor verifies ownership by this program | N/A                                | Safe   |
|                  | admin          | `Signer`           | N/A                                               | ✅ Yes – Transaction must be signed | Safe   |
|                  | system_program | `Program<System>`  | ✅ Yes – Anchor verifies the System Program        | N/A                                | Safe   |
| **SetPaused**    | config         | `Account<Config>`  | ✅ Yes – Program-owned account                     | N/A                                | Safe   |
|                  | admin          | `Signer`           | N/A                                               | ✅ Yes – Admin must sign            |        |
| **InitCounter**  | config         | `Account<Config>`  | ✅ Yes                                             | N/A                                | Safe   |
|                  | counter        | `Account<Counter>` | ✅ Yes                                             | N/A                                | Safe   |
|                  | user           | `Signer`           | N/A                                               | ✅ Yes                              | Safe   |
|                  | system_program | `Program<System>`  | ✅ Yes                                             | N/A                                | Safe   |
| **Increment**    | config         | `Account<Config>`  | ✅ Yes                                             | N/A                                | Safe   |
|                  | counter        | `Account<Counter>` | ✅ Yes                                             | N/A                                | Safe   |
|                  | user           | `Signer`           | N/A                                               | ✅ Yes                              | Safe   |
| **CloseCounter** | counter        | `Account<Counter>` | ✅ Yes                                             | N/A                                | Safe   |
|                  | user           | `Signer`           | N/A                                               | ✅ Yes                              | Safe   |
