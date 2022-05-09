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
        [Route("postCreateProductAdmin")]
        public async Task<IActionResult> postCreateProductAdmin(ProductBO  objProduct)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    var product = await productBLL.postCreateProductAdmin(objProduct);
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
