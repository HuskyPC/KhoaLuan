using BLL.User;
using BO.User;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackendWebsiteLaptop.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LoginClientController : ControllerBase
    {
        
        private UserBLL userBLL;
        public LoginClientController()
        {
            userBLL = new UserBLL();
        }
        [HttpPost]
        [Route("postLoginUser")]
        public IEnumerable<UserBO> postLoginUser(UserBO objUser)
        {
            List<UserBO> listUser = userBLL.postLoginUser(objUser);
            return listUser.ToArray();
        }
    }
}
