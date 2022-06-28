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
        public async Task<IActionResult> postCreateUser([FromForm] CartBO objCart)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    var isExitsCart = await cartBLL.isExitsCart(objCart.userID, objCart.productID);
                    var countItem = cartBLL.getCountItemCartByUsertID(objCart.userID);
                    if (isExitsCart == true)
                    {
                        return StatusCode(StatusCodes.Status202Accepted);
                    }
                    else if (countItem >= 10)
                    {
                        return StatusCode(StatusCodes.Status203NonAuthoritative);
                    }
                    else
                    {

                        int id = cartBLL.getCartIDBySTT(cartBLL.getMaxSTT());
                        id++;
                        objCart.cartID = "CA" + id.ToString();
                        var resul = await cartBLL.postInsertCart(objCart);
                        if (resul == true)
                        {


                            return StatusCode(StatusCodes.Status201Created);
                        }
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
        [HttpPost]
        [Route("postCartByProductID")]
        public async Task<IActionResult> postCartByProductID(List<string> listProID)
        {
            var reault = await productBLL.getListProductID(listProID);
            if (reault.Count == 0)
            {
                return BadRequest();
            }
            return Ok(reault);
        }
        [HttpGet]
        [Route("getCartByProductID")]
        public IEnumerable<ProductBO> getCartByProductID(string id)
        {

            return productBLL.getProductByID(id).ToArray();

        }
        [HttpGet]
        [Route("getItemCardByUserID")]
        public IEnumerable<CartBO> getItemCardByUserID(int userid)
        {
            return cartBLL.getItemCardByUserID(userid).ToArray();
        }
        [HttpPatch]
        [Route("updateQuantityCart")]
        public async Task<IActionResult> postCartByProductID([FromForm] CartBO cart)
        {

            if (ModelState.IsValid)
            {
                try
                {

                    var countItem = cartBLL.getCountItemCartByUsertID(cart.userID);
                    if ((countItem + 1) > 10 && cart.status == 1)
                    {
                        return StatusCode(StatusCodes.Status203NonAuthoritative);
                    }

                    else
                    {

                        var resul = await cartBLL.updateQuantityCart(cart.userID, cart.productID, cart.quantity);
                        if (resul == true)
                        {
                            return StatusCode(StatusCodes.Status201Created);
                        }
                        else return BadRequest();
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
        [Route("getQuantityItemCartByUserProduct")]
        public int getQuantityItemCartByUserProduct(int userID, string productId)
        {
            return cartBLL.getQuantityItemCartByUserProduct(userID, productId);
        }
        [HttpPatch]
        [Route("deleteCartItem")]
        public async Task<IActionResult> deleteCartItem([FromForm] CartBO cart)
        {

            if (ModelState.IsValid)
            {
                try
                {

                    var result = await cartBLL.deleteCartItem(cart.cartID);
                    if (result == true)
                    {
                        return StatusCode(StatusCodes.Status201Created);
                    }
                    else return BadRequest();

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
