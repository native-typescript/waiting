export async function wait(seconds: number): Promise<void> {
	await new Promise<void>(function executePromise(resolve): void {
		setTimeout(resolve, seconds * 1000);
		return;
	});
	return;
}
