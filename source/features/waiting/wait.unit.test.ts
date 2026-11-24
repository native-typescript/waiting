import {testing_} from "../../../testing/module.ts";
import {wait} from "./wait.ts";
import {expect} from "expect";
import {describe, it} from "node:test";
await describe(`wait`, async function executeTests(): Promise<void> {
	await it(`waits for 1 second`, async function waitsFor1Second(): Promise<void> {
		const timestampOfStart: Date = new Date();
		await wait(1);
		const timestampOfEnd: Date = new Date();
		const elapsedTimeInSeconds: number =
			(timestampOfEnd.getTime() - timestampOfStart.getTime())
			/ testing_.core_.utilities_.milisecondsInSecond_.milisecondsInSecond;
		expect(elapsedTimeInSeconds).toBeCloseTo(1, 2);
		return;
	});
	return;
});
