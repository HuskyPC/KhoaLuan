using BLL.Product;
using BO.Product;
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
    public class ProductAdminController : ControllerBase
    {
        private ProductBLL productBLL;
        public ProductAdminController()
        {
            productBLL = new ProductBLL();
        }
        [HttpPost]
        [Route("postInsertCart")]
        public async Task<IActionResult> postCreateUser(ProductBO  objCart)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    var user = await productBLL.postCreateProductAdmin(objCart);
                    
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
