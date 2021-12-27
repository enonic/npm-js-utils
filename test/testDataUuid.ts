export const UUID_NIL = '00000000-0000-0000-0000-000000000000';

export const UUID_V4 = [
	'c51c80c2-66a1-442a-91e2-4f55b4256a72',
	'00000000-0000-4000-8000-000000000000', // min
	'ffffffff-ffff-4fff-bfff-ffffffffffff' // max
];

//──────────────────────────────────────────────────────────────────────────────
// Invalid
//──────────────────────────────────────────────────────────────────────────────
export const UUID_V4_INVALID = [
	UUID_NIL,
//   123456789012345678901234567890123456
	'00000000-0000-3000-8000-000000000000', // bit 15 must be a 4, 3 is too low
	'00000000-0000-4000-7000-000000000000', // bit 20 must be [89ab], 7 is too low
	'ffffffff-ffff-5fff-8fff-ffffffffffff', // bit 15 must be a 4, 5 is too high
	'ffffffff-ffff-4fff-cfff-ffffffffffff', // bit 20 must be [89ab], c is too high
	'ffffffff-ffff-4fff-8fff-fffffffffffg' // no bit can be beyond f
];
