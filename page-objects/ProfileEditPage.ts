import { Locator, Page } from "@playwright/test"


export class ProfileEditPage {
    readonly page: Page
    readonly firstNameInput: Locator
    readonly lastNameInput: Locator
    readonly photoUrl: Locator
    readonly saveButton: Locator
    readonly deleteProfileButton: Locator
    readonly confirmDeleteButton: Locator

    constructor(page: Page) {
        this.firstNameInput = page.locator('#id_first_name')
        this.lastNameInput = page.locator('#id_last_name')
        this.photoUrl = page.locator('#id_photo')
        this.saveButton = page.locator('text=SAVE PROFILE')
        this.deleteProfileButton = page.locator('text=DELETE PROFILE')
        this.confirmDeleteButton = page.locator('text=YES')
    }

    async editProfile(firstname: string, lastname: string, photourl: string) {
        await this.firstNameInput.fill(firstname)
        await this.lastNameInput.fill(lastname)
        await this.photoUrl.fill(photourl)
        await this.saveButton.click()
    }

    async deleteProfile() {
        await this.deleteProfileButton.click()
        await this.confirmDeleteButton.click()
    }
}