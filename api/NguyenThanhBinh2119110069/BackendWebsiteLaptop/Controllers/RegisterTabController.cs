using BLL.User;
using BO.User;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace BackendWebsiteLaptop.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class RegisterTabController : ControllerBase
    {
        private UserBLL userBLL;
        public RegisterTabController()
        {
            userBLL = new UserBLL();
        }
        [HttpPost]
        [Route("postCreateUsser")]
        public async Task<IActionResult> postCreateUser(UserBO objUser)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    var user = await userBLL.postCreateUser(objUser);
                    switch (user)
                    {
                        case "fail":
                            return BadRequest();
                        case "pass":
                            return Content("pass");
                        case "exists":
                            return Content("exists");
                        case "done":
                            return StatusCode(StatusCodes.Status201Created);
                        default:
                            return BadRequest();
                    }
                }
                catch
                {
                    return BadRequest();
                }
            }
            else
            {
                return BadRequest();
            }
        }
    }
}
