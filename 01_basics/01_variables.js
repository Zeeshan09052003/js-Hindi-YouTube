const accountId = 12333
let accountEmail = "test@test.com"
var accountPassword = "12345"
accountCity = "Lucknow"
let accountState;
// accountId = 2 // Not allowed



accountEmail = "mz@mz.com"
accountPassword = "54321"
accountCity = "Gorakhpur"

console.log(accountId)

/*
Prefer not to user var
Because of issue in block scope nad functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);