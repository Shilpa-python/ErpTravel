using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

public class IndexModel : PageModel
{
    public IActionResult OnGet()
    {
        // Check if the user is logged in
        if (HttpContext.Session.GetString("IsLoggedIn") != "true")
        {
            // If not logged in, redirect to the login page
            return RedirectToPage("/Login");
        }

        return Page();
    }

    public void OnPost(string destination, int adults, int children, string vehicle, string room, int extraBeds)
    {
        TempData["Message"] = $"Booking for {destination} has been created!";
    }
}

