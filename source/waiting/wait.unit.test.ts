import {milisecondsInSecond} from "../../testing/index.ts";
import {wait} from "./wait.ts";
import {expect} from "expect";
import {describe, test} from "node:test";
await describe(`wait`, async function executeTests(): Promise<void> {
	await test(`waits for 1 second`, async function executeTest(): Promise<void> {
		const timestampOfStart: Date = new Date();
		await wait(1);
		const timestampOfEnd: Date = new Date();
		const elapsedTimeInSeconds: number =
			(timestampOfEnd.getTime() - timestampOfStart.getTime())
			/ milisecondsInSecond;
		expect(elapsedTimeInSeconds).toBeCloseTo(1, 2);
		return;
	});
	return;
});
