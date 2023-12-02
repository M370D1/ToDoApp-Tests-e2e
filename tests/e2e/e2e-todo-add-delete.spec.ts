import { test } from "@playwright/test"
import { HomePage } from "../../page-objects/HomePage"
import { ToDoPage } from "../../page-objects/ToDoPage"

test.describe("ToDo add / delete", () => {
    let homePage: HomePage
    let toDoPage: ToDoPage

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page)
        toDoPage = new ToDoPage(page)

        await homePage.visit()
        await homePage.login('Metodi@123', 'slojnaParola123')
        await homePage.clickOnToDoButton()
    })

    test("Add and Delte ToDo Item", async ({page}) =>{
        await toDoPage.addToDo('Go to the gym')
        await toDoPage.addToDo('Meeting at 11:00')
        await toDoPage.assertToDoCount(2)
        await toDoPage.deleteToDo(1)
        await toDoPage.deleteToDo(0)
        await toDoPage.assertToDoCount(0)
    })
})