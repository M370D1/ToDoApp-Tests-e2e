import { ElementHandle, expect, Locator, Page } from "@playwright/test"


export class RegisterPage {
    readonly page: Page
    readonly usernameInput: Locator
    readonly emailInput: Locator
    readonly passwordInput: Locator
    readonly confirmPasswordInput: Locator
    readonly registerButton: Locator
    readonly errorPasswordList: Locator
    readonly instructions: Locator

    constructor(page: Page) {
        this.page = page
        this.usernameInput = page.locator('#id_username')
        this.emailInput = page.locator('#id_email')
        this.passwordInput = page.locator('#id_password1')
        this.confirmPasswordInput = page.locator('#id_password2')
        this.registerButton = page.getByRole('button', { name: 'REGISTER' })
        this.errorPasswordList = page.locator('.errorlist')
        this.instructions = page.locator('ul li')
    }

    async register(username: string, email: string, password: string, confirmPassword: string) {
        await this.usernameInput.fill(username)
        await this.emailInput.fill(email)
        await this.passwordInput.fill(password)
        await this.confirmPasswordInput.fill(confirmPassword)
        await this.registerButton.click()
    }

    async assertErrorPasswordMessage() {
        await expect(this.errorPasswordList).toBeVisible()
    }
}