import { expect, test } from "vitest"
import { sum } from "./sum"

test('1 + 2 toplamı eşittir 3', () => {
    expect(sum(1, 2)).toBe(3)
})