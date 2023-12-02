import { expect, Locator, Page } from "@playwright/test"

export class HomePage {
    readonly page: Page
    readonly usernameInput: Locator
    readonly passwordInput: Locator
    readonly submitButton: Locator
    readonly registerButton: Locator
    readonly logoutButton: Locator
    readonly todoButton: Locator
    readonly profileDetailsButton: Locator
    readonly errorMessage: Locator
    readonly wellcomeMessage: Locator

    constructor(page: Page) {
        this.page = page
        this.usernameInput = page.locator('#id_username')
        this.passwordInput = page.locator('#id_password')
        this.submitButton = page.locator('text=LOGIN')
        this.registerButton = page.locator('text=REGISTER')
        this.logoutButton = page.locator('text=LOGOUT')
        this.todoButton = page.locator('text=TO DO')
        this.profileDetailsButton = page.locator('text=PROFILE DETAILS')
        this.errorMessage = page.locator('.nonfield')
        this.wellcomeMessage = page.locator('.todo-item').nth(1)
    }

    async visit() {
        await this.page.goto('http://127.0.0.1:8000')
    }

    async clickOnRegisterButton() {
        await this.registerButton.click()
    }

    async login(username: string, password: string) {
        await this.usernameInput.fill(username)
        await this.passwordInput.fill(password)
        await this.submitButton.click()
    }

    async logout() {
        await this.logoutButton.click()
    }

    async clickOnToDoButton() {
        await this.todoButton.click()
    }

    async clickOnProfileDetailsButton() {
        await this.profileDetailsButton.click()
    }

    async assertErrorMessage() {
        await expect(this.errorMessage).toContainText('Please enter a correct username and password. Note that both fields may be case-sensitive.')
    }

    async assertWellcomeMessage(expectedMessage: string) {
        await expect(this.wellcomeMessage).toContainText(expectedMessage)
    }

    async assertUsernameInput() {
        await expect(this.usernameInput).toBeVisible()
    }
}