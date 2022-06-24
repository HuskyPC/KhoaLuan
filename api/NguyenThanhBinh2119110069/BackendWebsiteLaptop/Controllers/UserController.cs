using BLL.User;
using BO.User;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackendWebsiteLaptop.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {

        private UserBLL userBLL;
        public UserController()
        {
            userBLL = new UserBLL();
        }

        [HttpGet]
        [Route("getInformationInCart")]
        public UserBO getInformationInCart(int userid)
        {
            return userBLL.getInformationInCart(userid);
        }
    }
}
