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
        [Route("postCreateProduct")]
        public async Task<IActionResult> postCreateProduct([FromForm]ProductBO objProduct)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    var product = await productBLL.postCreateProduct(objProduct);
                    return Ok(product);
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
