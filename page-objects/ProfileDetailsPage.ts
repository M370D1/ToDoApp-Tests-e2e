import { expect, Locator, Page } from "@playwright/test"

export class ProfileDetailsPage {
    readonly page: Page
    readonly user: Locator
    readonly email: Locator
    readonly name: Locator
    readonly photo: Locator
    readonly editProfileButton: Locator

    constructor(page:Page) {
        this.page = page
        this.user = page.locator('.todo-item').filter({hasText:'User: Metodi@123'})
        this.email = page.locator('.todo-item').filter({hasText:'Email: meto@abv.bg'})
        this.name = page.locator('.todo-item').filter({hasText:'Name: Metodi Ivanov'})
        this.photo = page.locator('img[alt="Profile Photo"]')
        this.editProfileButton = page.locator('text=EDIT PROFILE')
    }

    async assertProfileDetails() {
        await expect(this.user).toBeVisible()
        await expect(this.email).toBeVisible()
        await expect(this.name).toBeVisible()
        await expect(this.photo).toBeVisible()
    }

    async clickOnEditProfileButton() {
        await this.editProfileButton.click()
    }
}