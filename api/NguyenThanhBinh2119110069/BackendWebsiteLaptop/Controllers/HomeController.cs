using BLL.Brand;
using BLL.Product;
using BO.Brand;
using BO.Product;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackendWebsiteLaptop.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class HomeController : ControllerBase
    {
        [HttpGet]
        [Route("/Home/getProduct")]
        public IEnumerable<ProductBO> getProduct(int SL)
        {
            ProductBLL objproduct = new ProductBLL();
            List<ProductBO> listPro = objproduct.loadXProduct(SL);
            return  listPro.ToArray();
            
           
        }
        [HttpGet]
        [Route("/Home/getProductbyCategory")]
        public IEnumerable<ProductBO> getProductByCategory()
        {
            ProductBLL objproduct = new ProductBLL();
            List<ProductBO> listPro = objproduct.loadXProduct(4);
            return listPro.ToArray();


        }
        [HttpGet]
        [Route("/Home/getLoadBrandTopX")]
        public IEnumerable<BrandBO> loadBrandTopX(int sl)
        {
            BrandBLL objBrand = new BrandBLL();
            List<BrandBO> listPro = objBrand.loadBrandTopX(sl);
            return listPro.ToArray();


        }
    }
}
