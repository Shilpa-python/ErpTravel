using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace ErpTravel.Pages
{
    public class LogoutModel : PageModel
    {
        public void OnGet()
        {
            // Clear the session and log the user out
            HttpContext.Session.Clear();
        }
    }

}
