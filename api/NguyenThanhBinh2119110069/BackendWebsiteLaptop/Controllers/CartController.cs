using BLL.Cart;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackendWebsiteLaptop.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CartController : ControllerBase
    {
        private CartBLL cartBLL;
        public CartController()
        {
            cartBLL = new CartBLL();
        }
        [HttpGet]
        [Route("getCountCart")]
        public int getCountCart(int userID)
        {
            if(userID != null)
            {
            int sl = cartBLL.getCountCart(userID);
            return sl;
            }
            return -1;
        }
    }
}
