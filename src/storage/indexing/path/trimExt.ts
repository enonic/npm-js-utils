export function trimExt(s: string) :string {
	return s.replace(/\.[^/.]+$/, "");
}
