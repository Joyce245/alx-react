import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

test('returns the current year', () => {
    expect(getFullYear()).toBe(2023);
});

test('returns the footer correct string', () => {
    expect(getFooterCopy(true)).toBe('Holberton School');
    expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
});

test('returns the latest notification', () => {
    expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD')
});