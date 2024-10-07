using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc;

public class IndexModel : PageModel
{
    public void OnGet()
    {
        // If user is not logged in, redirect to the login page
        if (HttpContext.Session.GetString("IsLoggedIn") != "true")
        {
            Response.Redirect("/Login");
        }
    }

    public IActionResult OnPost(int days, int adults, int childrenWithBed, int childrenWithoutBed, int rooms, string vehicle)
    {
        TempData["Message"] = $"Booking for {days} Days to Singapore has been created!";
        TempData["Details"] = $"Adults: {adults}, Children with Bed: {childrenWithBed}, Children without Bed: {childrenWithoutBed}, Rooms: {rooms}, Vehicle: {vehicle}";

        return Page();
    }
}
