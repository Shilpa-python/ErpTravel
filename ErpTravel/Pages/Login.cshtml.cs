using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace ErpTravel.Pages
{
    public class LoginModel : PageModel
    {
        public void OnPost(string username, string password)
        {
            // Hardcoded credentials (you can replace this with actual database authentication)
            if (username == "admin" && password == "password123")
            {
                // Set session variable
                HttpContext.Session.SetString("IsLoggedIn", "true");

                // Redirect to the main page
                Response.Redirect("/Index");
            }
            else
            {
                TempData["Error"] = "Invalid username or password!";
            }
        }
    }
}