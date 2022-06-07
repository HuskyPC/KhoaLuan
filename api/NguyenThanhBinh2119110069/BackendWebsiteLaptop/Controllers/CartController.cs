using BLL.Cart;
using BLL.Product;
using BO.cart;
using BO.Product;
using Microsoft.AspNetCore.Http;
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
        private ProductBLL productBLL;
        public CartController()
        {
            cartBLL = new CartBLL();
            productBLL = new ProductBLL();
        }
        [HttpGet]
        [Route("getCountCart")]
        public int getCountCart(int userID)
        {
            int sl = cartBLL.getCountCart(userID);
            return sl;
            //if (userID )
            //{
            //    int sl = cartBLL.getCountCart(userID);
            //    return sl;
            //}
            //return -1;
        }
        [HttpPost]
        [Route("postInsertCart")]
        public async Task<IActionResult> postCreateUser(CartBO objCart )
        {
            if (ModelState.IsValid)
            {
                try
                {
                    var user = await cartBLL.postInsertCart(objCart);
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
        [HttpGet]
        [Route("getCartByProductID")]
        public IEnumerable<ProductBO> getCartByProductID(List<string> productID)
        {
            List<ProductBO> objproduct = new List<ProductBO>();
            //for (int i=0; i < productID.Count; i++)
            //{
            //    objproduct[i] = productBLL.getProductByID(productID[i]);
            //}
           
            return objproduct.ToArray();
        }

    }
}
