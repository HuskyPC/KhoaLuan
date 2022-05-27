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
    public class ProductDetailController : ControllerBase
    {
        private ProductBLL productBLL;
        public ProductDetailController()
        {
            productBLL = new ProductBLL();
        }
       [HttpGet]
       [Route("getProductDetail")]
       public ProductBO getProductDetail(string productID)
        {
            return productBLL.getProductDetail(productID);
        }
    }
}
