import { test } from "@playwright/test"
import { HomePage } from "../../page-objects/HomePage"

test.describe("Login / logout flow", () => {
    let homePage: HomePage

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page)
        await homePage.visit()
    })

    test("Negative scenario for login", async ({ page }) => {
        await homePage.login('invalid username', 'invalid_password')
        await homePage.assertErrorMessage()
    })

    test("Positive scenario for login", async ({ page }) => {
        await homePage.login('Metodi@123', 'slojnaParola123')
        await homePage.assertWellcomeMessage('Welcome, Metodi@123')
    })

    test("Logout", async ({ page }) => {
        await homePage.login('Metodi@123', 'slojnaParola123')
        await homePage.assertWellcomeMessage('Welcome, Metodi@123')
        await homePage.logout()
        await homePage.assertUsernameInput()
    })
})