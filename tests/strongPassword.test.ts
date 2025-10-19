import {calculatePasswordStrength} from "../src/strongPassword";

test('check the most weak short password for only lowercase letters', () => {
    expect(calculatePasswordStrength('qwerty')).toBe("Very Weak");
});

test('check the most weak short password for only digits', () => {
    expect(calculatePasswordStrength('12345')).toBe("Very Weak");
});

test('check very weak password with two conditions for lowercase letters and digits, 7 signs', () => {
    expect(calculatePasswordStrength('qwer123')).toBe("Very Weak");
});

test('check very weak password with two conditions for uppercase letters and special characteristics', () => {
    expect(calculatePasswordStrength('QWERT!')).toBe("Very Weak");
});

test('check weak password with three conditions: length (8), lowercase letters, spec characters', () => {
    expect(calculatePasswordStrength('qwerty!!')).toBe("Weak");
});

test('check weak password with three conditions: uppercase and lowercase letters, digits', () => {
    expect(calculatePasswordStrength('Qwerty1')).toBe("Weak");
});

test('check medium password with four conditions: length (>8 ->9), lowercase and uppercase letters, digits', () => {
    expect(calculatePasswordStrength('Qwerty123')).toBe("Moderate");
});

test('check medium password with four conditions: very length (12), lowercase letters, special characters', () => {
    expect(calculatePasswordStrength('qwertqwert!!')).toBe("Moderate");
});

test('check strong password with five conditions: length (11), all characteristics', () => {
    expect(calculatePasswordStrength('Qwerty1234!')).toBe("Strong");
});

test('check strong password with all six conditions: length (13), all characteristics', () => {
    expect(calculatePasswordStrength('Qwerty12345!?')).toBe("Strong");
});